// Dados inventados da demonstração. Nada aqui é de cliente real.
import { carregarDadosIniciais, abrirDia, criarPedido, mudarPedido } from '../src/acoes.js'
import { PRODUTOS_INICIAIS, QTD_EXEMPLO, CONFIG_INICIAL } from '../src/dados.js'
import { proximosDias, novoId } from '../src/util.js'

const BASE = import.meta.env.BASE_URL

export async function semear() {
  const produtos = PRODUTOS_INICIAIS.map((p) => ({ ...p, foto: p.foto ? BASE + p.foto.replace(/^\//, '') : '' }))
  const porId = Object.fromEntries(produtos.map((p) => [p.id, p]))
  await carregarDadosIniciais(produtos, {
    ...CONFIG_INICIAL,
    whatsapp: '5500000000000',
    pixTipo: 'aleatoria',
    pixChave: '00000000-0000-4000-8000-000000000000',
    pixNome: 'DEMONSTRACAO',
    pixCidade: 'Videira',
  })

  const dias = proximosDias(CONFIG_INICIAL.diasSemana)
  let minuto = 0
  const item = (id, qtd, escolha) => {
    const p = porId[id]
    return { id, nome: p.nome, qtd, preco: p.preco, unidade: 'un', ...(escolha ? { escolha, escolhaNome: porId[escolha].nome } : {}) }
  }
  async function pedido(dia, dados, itens, depois = {}) {
    const id = novoId()
    await criarPedido(id, { status: 'aguardando', pago: false, telefone: '', tipo: 'retirada', endereco: '', bairro: '', frete: 0, freteACombinar: false, obs: '', ...dados, dia }, itens, porId)
    const [a, m, d] = dia.split('-').map(Number)
    await mudarPedido(id, { criadoMs: new Date(a, m - 1, d, 8, 10 + minuto++ * 6).getTime(), ...depois })
  }
  const entrega = (bairro, valor, endereco) => ({ tipo: 'entrega', bairro, frete: valor, endereco })

  for (const d of dias) {
    await abrirDia(d.data, QTD_EXEMPLO[d.wd] || {}, 'Márcia')
    const D = d.data
    if (d.wd === 6) {
      await pedido(D, { canal: 'online', nome: 'Juliana Prado', horario: '11:00', pagamento: 'Pix', por: 'Cliente' }, [item('sb', 1, 'to'), item('li', 2)], { status: 'entregue', pago: true })
      await pedido(D, { canal: 'whatsapp', nome: 'Carlos Menezes', horario: '11:30', pagamento: 'Dinheiro', por: 'Eliane' }, [item('es', 1), item('cu', 1)], { status: 'entregue', pago: true })
      await pedido(D, { canal: 'online', nome: 'Fernanda Lopes', horario: '12:00', pagamento: 'Pix', por: 'Cliente', ...entrega('Centro', 12, 'Rua das Flores, 120') }, [item('sb', 2, 'es')], { status: 'confirmado', pago: true })
      await pedido(D, { canal: 'whatsapp', nome: 'Roberto Silva', horario: '12:00', pagamento: 'Cartão', por: 'Eliane' }, [item('pa', 1), item('co', 4), item('vi', 1)], { status: 'confirmado' })
      await pedido(D, { canal: 'online', nome: 'Ana Paula Reis', horario: '12:30', pagamento: 'Pix', por: 'Cliente' }, [item('to', 1), item('sf', 1)])
      await pedido(D, { canal: 'online', nome: 'Marcos Teixeira', horario: '13:00', pagamento: 'Dinheiro', por: 'Cliente', ...entrega('Floresta', 10, 'Av. Brasil, 455') }, [item('sb', 1, 'pa'), item('li', 2)])
      await pedido(D, { canal: 'balcao', nome: 'Balcão', horario: '11:40', pagamento: 'Pix', por: 'Sofia', status: 'entregue', pago: true }, [item('co', 2), item('vi', 1)])
      await pedido(D, { canal: 'balcao', nome: 'Balcão', horario: '12:15', pagamento: 'Dinheiro', por: 'Sofia', status: 'entregue', pago: true }, [item('cu', 2)])
    } else {
      await pedido(D, { canal: 'online', nome: 'Patrícia Gomes', horario: '11:00', pagamento: 'Pix', por: 'Cliente' }, [item('cf', 1), item('cc', 1)], { status: 'entregue', pago: true })
      await pedido(D, { canal: 'whatsapp', nome: 'João Batista', horario: '11:00', pagamento: 'Dinheiro', por: 'Eliane' }, [item('al', 1), item('ma', 1), item('ar', 1)], { status: 'entregue', pago: true })
      await pedido(D, { canal: 'online', nome: 'Luciana Moraes', horario: '11:30', pagamento: 'Pix', por: 'Cliente', ...entrega('Santos Dumont', 12, 'Rua Itália, 78') }, [item('cf', 1), item('pu', 1)], { status: 'confirmado', pago: true })
      await pedido(D, { canal: 'online', nome: 'Diego Ramos', horario: '11:30', pagamento: 'Cartão', por: 'Cliente' }, [item('cm', 1)], { status: 'confirmado' })
      await pedido(D, { canal: 'whatsapp', nome: 'Sandra Vieira', horario: '12:00', pagamento: 'Pix', por: 'Eliane' }, [item('fi', 1), item('cs', 1), item('fa', 1), item('ma', 1)], { status: 'confirmado', pago: true })
      await pedido(D, { canal: 'online', nome: 'Rafael Costa', horario: '12:00', pagamento: 'Pix', por: 'Cliente', ...entrega('Universitário', 15, 'Rua Chile, 300') }, [item('cb', 1), item('ar', 2), item('cc', 1)])
      await pedido(D, { canal: 'online', nome: 'Camila Souza', horario: '12:30', pagamento: 'Dinheiro', por: 'Cliente' }, [item('cm', 2), item('pu', 1)])
      await pedido(D, { canal: 'online', nome: 'Eduardo Lima', horario: '13:00', pagamento: 'Pix', por: 'Cliente' }, [item('co', 3), item('li', 4), item('vi', 1)])
      await pedido(D, { canal: 'balcao', nome: 'Balcão', horario: '11:20', pagamento: 'Cartão', por: 'Sofia', status: 'entregue', pago: true }, [item('co', 2), item('ma', 1)])
      await pedido(D, { canal: 'balcao', nome: 'Balcão', horario: '12:05', pagamento: 'Pix', por: 'Sofia', status: 'entregue', pago: true }, [item('cs', 1), item('cc', 1)])
      await pedido(D, { canal: 'balcao', nome: 'Balcão', horario: '12:40', pagamento: 'Dinheiro', por: 'Sofia', status: 'entregue', pago: true }, [item('pu', 2)])
    }
  }
}
