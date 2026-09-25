// Modelos de demonstração (não são clientes). Aparecem na seção "Modelos por área".
// Para adicionar: coloque o print em src/assets/modelos/ e acrescente um item aqui.
import helenaMartins from '../assets/modelos/helena-martins.webp';
import figueiredoAdvocacia from '../assets/modelos/figueiredo-advocacia.webp';
import lumeStudio from '../assets/modelos/lume-studio.webp';
import cleanArquitetura from '../assets/modelos/clean-arquitetura.webp';

export type Modelo = { nome: string; area: string; img?: string; link?: string };

export const modelos: Modelo[] = [
  { nome: 'Dra. Helena Martins', area: 'Ginecologia e menopausa', img: helenaMartins, link: 'https://site-ginecologia-menopausa.vercel.app/' },
  { nome: 'Figueiredo Advocacia', area: 'Advocacia', img: figueiredoAdvocacia, link: 'https://figueiredoadvocacia.vercel.app/' },
  { nome: 'Lume Studio', area: 'Arquitetura e interiores', img: lumeStudio, link: 'https://v0-lumestudio.vercel.app/' },
  { nome: 'Clean Arquitetura', area: 'Arquitetura', img: cleanArquitetura, link: 'https://clean-arquitetura.vercel.app/' },
];
