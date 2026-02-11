import s from '../Style.module.scss'
import InfoCard from '../../components/infoCard/InfoCard'
import imgFamilia from '../../assets/imagens/igFamilia.png'
import imgFutEscola from '../../assets/imagens/projeto-futuro-escola..png'
import imgConectJovem from '../../assets/imagens/instituto-conecta-jovem..png'

const Doacao = () => {
return (
<main className={s.main}>
<h1>Doação</h1>
<section className={s.container}>
<article>
<InfoCard 
img = {imgFamilia}
alt = "Imagem de uma pessoa carregando caixa com alimentos"
subtitulo = "Instituto grande familia"
paragrafo = "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade." 
textoBotao = "Quero Doar"
/>
</article>
<article>
<InfoCard
img = {imgFutEscola}
alt = "Imagem de livros na escola"
subtitulo = "Projeto Futuro na Escola"
paragrafo = "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura." 
textoBotao = "Quero Doar"
/>
</article>
<article>
<InfoCard
img = {imgConectJovem}
alt = "Imagem de duas pessoas mexendo em computadores"
subtitulo = "Instituto Conecta Jovem"
paragrafo = "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades." 
textoBotao = "Quero Doar"
/>
</article>
</section>
</main>
)
}

export default Doacao