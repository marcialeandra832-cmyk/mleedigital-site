// Cena 3D do topo: portal em camadas (grafite + rosé) com líquido animado dentro,
// sobre um céu e mar gerados por código (sem imagem pesada).
// Todo o movimento é cíclico: o mesmo código gera o vídeo do celular em loop perfeito.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export type OpcoesCena = {
  canvas: HTMLCanvasElement;
  monogramaUrl?: string;
  periodo?: number; // segundos para o ciclo completo
  retrato?: boolean; // força enquadramento de celular
  pixelRatio?: number;
  variante?: 'topo' | 'final';
  semPortal?: boolean;
};

const ruido = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
float fbm(vec3 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*snoise(p);p*=2.03;a*=.5;}return s;}
float fbm3(vec3 p){float s=0.,a=.5;for(int i=0;i<3;i++){s+=a*snoise(p);p*=2.0;a*=.5;}return s;}
`;

// ---------- Céu e mar ----------
const fundoFrag = /* glsl */ `
precision highp float;
uniform float uFase; uniform vec2 uRes; uniform vec2 uObj; uniform float uScroll;
varying vec2 vUv;
${ruido}
void main(){
  vec2 uv=vUv; float asp=uRes.x/uRes.y;
  vec3 voltaT=vec3(cos(uFase),0.,sin(uFase));
  float hz=.43;
  vec3 col;
  // céu
  vec3 cTopo=vec3(.16,.18,.185), cMeio=vec3(.42,.42,.42), cHoriz=vec3(.74,.70,.68);
  if(uv.y>hz){
    float h=(uv.y-hz)/(1.-hz);
    col=mix(cHoriz,cMeio,smoothstep(0.,.35,h)); col=mix(col,cTopo,smoothstep(.3,1.,h));
    vec2 q=vec2(uv.x*asp*1.4,h*3.2);
    float nuv=fbm(vec3(q*.9,0.)+voltaT*.55+vec3(0.,0.,1.7));
    float nuv2=fbm(vec3(q*2.1+3.,1.)+voltaT*.35);
    col=mix(col,col*.68,smoothstep(-.1,.55,nuv)*.8);
    col+=vec3(.16,.14,.135)*smoothstep(.15,.7,nuv2)*(1.-h)*.7;
    // feixes de luz vindos do alto
    vec2 o=vec2(.30*asp,1.25); vec2 d=vec2(uv.x*asp,uv.y)-o;
    float ang=atan(d.x,-d.y);
    float raio=pow(max(0.,snoise(vec3(ang*7.,.5,0.)+voltaT*.25)*.5+.5),3.);
    col+=vec3(.62,.58,.55)*raio*.10*smoothstep(1.15,.25,length(d))*smoothstep(-.2,.2,-d.y);
  } else {
    // mar em perspectiva
    float dy=hz-uv.y; float prof=.06/(dy+.012);
    vec2 q=vec2((uv.x-.5)*asp*prof*2.2,prof*1.6);
    float o1=fbm(vec3(q*vec2(1.,3.2),0.)+voltaT*.5);
    float o2=snoise(vec3(q*vec2(2.4,7.),2.)+voltaT*.8)*.6+snoise(vec3(q*vec2(6.,18.),4.)+voltaT*1.2)*.4;
    vec3 cPerto=vec3(.10,.115,.12), cLonge=vec3(.55,.53,.53);
    col=mix(cPerto,cLonge,pow(smoothstep(.43,0.,dy),1.6));
    col=mix(cHoriz*.85,col,smoothstep(0.,.035,dy));
    col*=.8+.35*o1; col+=vec3(.08)*o2*smoothstep(.3,0.,dy);
    // brilho do céu refletido (faixa de luz)
    float faixa=exp(-pow((uv.x-.33)*asp*1.8,2.)*3.)*smoothstep(.0,.18,dy)*smoothstep(.45,.05,dy);
    float glint=smoothstep(.55,.95,o2*.5+.5+o1*.3);
    col+=vec3(.85,.80,.76)*faixa*glint*.7;
    // poça de luz sob o portal
    float poca=exp(-pow((uv.x-uObj.x)*asp*2.6,2.))*smoothstep(.0,.06,dy)*smoothstep(.36,.04,dy);
    col+=vec3(.80,.60,.55)*poca*(.10+.38*glint);
  }
  // névoa no horizonte e vinheta
  col=mix(col,cHoriz*.95,exp(-abs(uv.y-hz)*16.)*.7);
  vec2 v=uv-.5; col*=1.-dot(v*vec2(.9,1.15),v*vec2(.9,1.15))*.75;
  col*=1.-uScroll*.35;
  col+=(fract(sin(dot(uv*uRes,vec2(12.9898,78.233)))*43758.5453)-.5)*.018;
  gl_FragColor=vec4(col,1.);
}`;

// ---------- Líquido dentro do portal ----------
const liquidoFrag = /* glsl */ `
precision highp float;
uniform float uFase; uniform vec2 uTam; uniform float uRaio; uniform sampler2D uMono; uniform float uTemMono;
varying vec2 vUv;
${ruido}
float sdCaixa(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
void main(){
  vec2 p=(vUv-.5)*uTam;
  float borda=sdCaixa(p,uTam*.5,uRaio);
  if(borda>0.) discard;
  vec3 voltaT=vec3(cos(uFase),sin(uFase),0.);
  vec2 q=p*.95;
  vec2 w=vec2(fbm3(vec3(q,0.)+voltaT*.45),fbm3(vec3(q+5.2,1.)+voltaT*.45));
  vec2 r=q+w*1.1;
  float n=fbm3(vec3(r,2.)+voltaT*.3);
  float veio=pow(1.-smoothstep(0.,.16,abs(n)),2.6);
  float veioFino=pow(1.-smoothstep(0.,.035,abs(n)),2.);
  vec3 base=mix(vec3(.025,.045,.048),vec3(.07,.12,.12),smoothstep(-.6,.6,w.x));
  vec3 rose=vec3(.86,.56,.50), rosaClaro=vec3(1.,.86,.80);
  vec3 col=base+rose*veio*.55+rosaClaro*veioFino*.95;
  // monograma surgindo no líquido
  if(uTemMono>.5){
    vec2 mu=vUv+w*.01;
    vec2 mc=(mu-.5)*vec2(1.,uTam.y/uTam.x)*1.25+.5;
    float m=0., e=0.;
    if(mc.x>0.&&mc.x<1.&&mc.y>0.&&mc.y<1.){
      m=texture2D(uMono,mc).a;
      float o=.004; float viz=texture2D(uMono,mc+vec2(o,0)).a+texture2D(uMono,mc-vec2(o,0)).a+texture2D(uMono,mc+vec2(0,o)).a+texture2D(uMono,mc-vec2(0,o)).a;
      e=clamp(abs(m*4.-viz),0.,1.);
    }
    float pulso=.5+.5*sin(uFase);
    col=mix(col,base*.6+rose*(.16+.10*pulso),m*.9);
    col+=rosaClaro*e*(.55+.3*pulso);
  }
  // brilho e sombra internos junto à moldura
  col*=smoothstep(-.32,-.02,borda)*.55+.45;
  col+=rose*.22*exp(borda*28.);
  gl_FragColor=vec4(col,1.);
}`;

const vertSimples = /* glsl */ `varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const vertTela = /* glsl */ `varying vec2 vUv; void main(){vUv=uv; gl_Position=vec4(position.xy,.9999,1.);}`;

function retanguloArredondado(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function moldura(w: number, h: number, r: number, aro: number, prof: number, bisel: number) {
  const fora = retanguloArredondado(w, h, r);
  const furo = retanguloArredondado(w - aro * 2, h - aro * 2, Math.max(0.02, r - aro * 0.8));
  fora.holes.push(new THREE.Path(furo.getPoints(48).reverse()));
  const g = new THREE.ExtrudeGeometry(fora, {
    depth: prof, bevelEnabled: true, bevelThickness: bisel, bevelSize: bisel, bevelSegments: 3, curveSegments: 40,
  });
  g.translate(0, 0, -prof / 2);
  return g;
}

export function criarCena(op: OpcoesCena) {
  const periodo = op.periodo ?? 24;
  const renderer = new THREE.WebGLRenderer({ canvas: op.canvas, antialias: true, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: !!op.retrato });
  renderer.setPixelRatio(op.pixelRatio ?? Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const cena = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  cena.environment = env;

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  // Fundo
  const uFundo = { uFase: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) }, uObj: { value: new THREE.Vector2(0.7, 0.5) }, uScroll: { value: 0 } };
  const fundo = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms: uFundo, vertexShader: vertTela, fragmentShader: fundoFrag, depthWrite: false, depthTest: false }));
  fundo.frustumCulled = false; fundo.renderOrder = -1;
  cena.add(fundo);

  // Luzes
  const chave = new THREE.DirectionalLight(0xfff1ea, 2.4); chave.position.set(-4, 6, 5); cena.add(chave);
  const contorno = new THREE.DirectionalLight(0xe7a89b, 3.2); contorno.position.set(5, 1, -4); cena.add(contorno);
  const baixo = new THREE.PointLight(0xd99b8f, 2.5, 6, 1.6); baixo.position.set(0.5, -2.6, 0.5); cena.add(baixo);
  cena.add(new THREE.AmbientLight(0x404648, 0.6));

  // Portal
  const portal = new THREE.Group();
  const corpo = new THREE.Group();
  portal.add(corpo);
  const W = 1.75, H = 2.1, R = 0.5, ARO = 0.25;
  const grafite = new THREE.MeshPhysicalMaterial({ color: 0x232b2c, metalness: 0.8, roughness: 0.24, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 1.5 });
  const grafiteFosco = new THREE.MeshPhysicalMaterial({ color: 0x141a1b, metalness: 0.6, roughness: 0.45, clearcoat: 0.5, envMapIntensity: 0.9 });
  const roseMetal = new THREE.MeshPhysicalMaterial({ color: 0xd49d90, metalness: 1, roughness: 0.22, envMapIntensity: 1.5 });

  // Camadas de trás (efeito laminado que se abre para trás)
  const nCamadas = 22;
  for (let i = 0; i < nCamadas; i++) {
    const t = i / (nCamadas - 1);
    const geo = moldura(W * (1 + t * 0.07), H * (1 + t * 0.1), R + t * 0.08, ARO + t * 0.06, 0.03, 0.007);
    const m = new THREE.Mesh(geo, i % 3 === 1 ? roseMetal : grafiteFosco);
    m.position.set(t * 0.06, -t * 0.14, -0.1 - i * 0.06);
    if (i % 3 === 1) m.scale.setScalar(0.995);
    corpo.add(m);
  }
  // Moldura da frente
  corpo.add(new THREE.Mesh(moldura(W, H, R, ARO, 0.16, 0.035), grafite));
  // Túnel interno em degraus
  const nAneis = 4;
  for (let i = 0; i < nAneis; i++) {
    const iw = W - ARO * 2 + 0.03 - i * 0.04, ih = H - ARO * 2 + 0.03 - i * 0.04;
    const m = new THREE.Mesh(moldura(iw, ih, Math.max(0.08, R - ARO * 0.8 - i * 0.02), 0.028, 0.03, 0.004), i % 2 ? grafite : roseMetal);
    m.position.z = -0.05 - i * 0.04;
    corpo.add(m);
  }
  // Líquido
  const lw = W - ARO * 2 - nAneis * 0.04 + 0.05, lh = H - ARO * 2 - nAneis * 0.04 + 0.05;
  const texMono = new THREE.Texture();
  const uLiq = { uFase: { value: 0 }, uTam: { value: new THREE.Vector2(lw, lh) }, uRaio: { value: Math.max(0.08, R - ARO * 0.8 - nAneis * 0.02) }, uMono: { value: texMono }, uTemMono: { value: 0 } };
  const liquido = new THREE.Mesh(new THREE.PlaneGeometry(lw, lh), new THREE.ShaderMaterial({ uniforms: uLiq, vertexShader: vertSimples, fragmentShader: liquidoFrag }));
  liquido.position.z = -0.05 - nAneis * 0.04 - 0.01;
  corpo.add(liquido);
  portal.visible = !op.semPortal;
  cena.add(portal);

  let monoPronto: Promise<void> = Promise.resolve();
  if (op.monogramaUrl) {
    monoPronto = new Promise((ok) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const c = document.createElement('canvas');
        c.width = 1024; c.height = 1024;
        const ctx = c.getContext('2d')!;
        const esc = Math.min(1024 / img.width, 1024 / img.height) * 0.92;
        ctx.drawImage(img, (1024 - img.width * esc) / 2, (1024 - img.height * esc) / 2, img.width * esc, img.height * esc);
        texMono.image = c; texMono.needsUpdate = true; uLiq.uTemMono.value = 1; ok();
      };
      img.onerror = () => ok();
      img.src = op.monogramaUrl!;
    });
  }

  // Estado
  let largura = 1, altura = 1, retrato = !!op.retrato;
  const mouse = new THREE.Vector2(), mouseSuave = new THREE.Vector2();
  let rolagem = 0, rolagemSuave = 0;
  const base = { x: 0, y: 0, esc: 1 };

  function redimensionar(w: number, h: number) {
    largura = w; altura = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    uFundo.uRes.value.set(w, h);
    retrato = op.retrato || w / h < 0.9;
    const meiaAlt = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    const meiaLarg = meiaAlt * camera.aspect;
    if (retrato) {
      base.esc = Math.min(1.0, (meiaLarg * 1.05) / W);
      base.x = -meiaLarg * 0.12; base.y = meiaAlt * 0.24;
    } else {
      base.esc = Math.min(1.25, (meiaAlt * (op.variante === 'final' ? 0.95 : 1.1)) / H);
      base.x = meiaLarg * 0.42; base.y = -meiaAlt * 0.02;
    }
    // posição do portal na tela (para a poça de luz no mar)
    uFundo.uObj.value.set(0.5 + (base.x / meiaLarg) * 0.5, 0.5);
  }

  function desenhar(seg: number) {
    const fase = (seg / periodo) * Math.PI * 2;
    uFundo.uFase.value = fase; uLiq.uFase.value = fase * 2; // líquido gira 2x por ciclo
    mouseSuave.lerp(mouse, 0.05);
    rolagemSuave += (rolagem - rolagemSuave) * 0.08;
    uFundo.uScroll.value = rolagemSuave;
    const p = rolagemSuave;
    portal.position.set(base.x - p * (retrato ? 0 : base.x * 0.55), base.y + Math.sin(fase) * 0.06 + p * 0.5, p * 2.2);
    portal.scale.setScalar(base.esc);
    portal.rotation.set(
      0.1 + Math.sin(fase + 1) * 0.04 - mouseSuave.y * 0.12 + p * 0.15,
      (retrato ? -0.55 : op.variante === 'final' ? 0.42 : -0.72) + Math.sin(fase) * 0.14 + mouseSuave.x * 0.22 + p * 0.55,
      0.04 + Math.sin(fase * 2) * 0.012,
    );
    renderer.render(cena, camera);
  }

  let rodando = false, raf = 0, inicio = performance.now(), pausadoEm = 0;
  function laco() {
    raf = requestAnimationFrame(laco);
    desenhar((performance.now() - inicio) / 1000);
  }
  return {
    pronto: monoPronto,
    redimensionar,
    desenhar,
    definirMouse(x: number, y: number) { mouse.set(x, y); },
    definirRolagem(v: number) { rolagem = Math.max(0, Math.min(1, v)); },
    iniciar() { if (rodando) return; rodando = true; if (pausadoEm) { inicio += performance.now() - pausadoEm; pausadoEm = 0; } laco(); },
    parar() { if (!rodando) return; rodando = false; cancelAnimationFrame(raf); pausadoEm = performance.now(); },
    get rodando() { return rodando; },
    descartar() {
      cancelAnimationFrame(raf);
      cena.traverse((o) => { const m = o as THREE.Mesh; if (m.geometry) m.geometry.dispose(); });
      [grafite, grafiteFosco, roseMetal].forEach((m) => m.dispose());
      env.dispose(); pmrem.dispose(); texMono.dispose(); renderer.dispose();
    },
  };
}
