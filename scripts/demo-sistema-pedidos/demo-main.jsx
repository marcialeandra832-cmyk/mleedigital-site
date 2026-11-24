// Entrada da demonstração: banco em memória com dados inventados, entra direto no painel,
// e nada sai daqui (os links de WhatsApp só mostram a mensagem na tela).
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../src/firebase.js'
import { semear } from './semente.js'
import './demo.css'

function barra() {
  const b = document.createElement('div')
  b.className = 'demo-barra'
  b.innerHTML = `<span><b>Demonstração</b> · dados fictícios, nada é enviado</span>
    <nav><a href="#/" data-v="cardapio">Cardápio do cliente</a><a href="#/painel" data-v="painel">Painel da equipe</a></nav>`
  document.body.prepend(b)
  const marca = () => b.querySelectorAll('a').forEach((a) => a.classList.toggle('sel', (location.hash.startsWith('#/painel')) === (a.dataset.v === 'painel')))
  addEventListener('hashchange', marca); marca()
}

function mostrarZap(url) {
  let texto = ''
  try { texto = new URL(url).searchParams.get('text') || '' } catch { /* nada */ }
  const f = document.createElement('div')
  f.className = 'demo-zap'
  f.innerHTML = `<div class="demo-zap-caixa" role="dialog" aria-modal="true"><p class="demo-zap-tit">No sistema de verdade, aqui abre o WhatsApp${texto ? ' com esta mensagem pronta' : ''}.</p>${texto ? '<pre></pre>' : ''}<button type="button">Fechar</button></div>`
  if (texto) f.querySelector('pre').textContent = texto
  const fechar = () => f.remove()
  f.addEventListener('click', (e) => { if (e.target === f || e.target.tagName === 'BUTTON') fechar() })
  document.body.append(f)
  f.querySelector('button').focus()
}
const abrir = window.open
window.open = (url, ...r) => (String(url).includes('wa.me') ? (mostrarZap(url), null) : abrir(url, ...r))
document.addEventListener('click', (e) => {
  const a = e.target.closest?.('a[href*="wa.me"]')
  if (a) { e.preventDefault(); mostrarZap(a.href) }
}, true)
// "Trocar senha" e "Sair" não fazem sentido aqui
window.prompt = () => null

await signInWithEmailAndPassword(auth, 'marcia@demonstracao', '123456')
await semear()
// se alguém tocar em "Sair", entra de novo
onAuthStateChanged(auth, (u) => { if (!u) signInWithEmailAndPassword(auth, 'marcia@demonstracao', '123456') })
barra()
await import('../src/main.jsx')
