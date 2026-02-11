import s from '../Style.module.scss'
import InfoCard from '../../components/infoCard/InfoCard'
import imgReciclagem from '../../assets/imagens/mutirao-reciclagem.png'
import imgTecnologia from '../../assets/imagens/aulas-tecnologia.png'
import imgEsporte from '../../assets/imagens/esporte-inclusao.png'

const Voluntariado = () => {
return (
<main className={s.main}>
<h1>Voluntariado</h1>
<section className={s.container}>
<article>
<InfoCard 
img = {imgReciclagem}
alt = "Imagem de umas pessoas com caixas na mao com reciclaveis"
subtitulo = "Mutirão de reciclagem"
paragrafo = "Coletar materiais recicláveis e orientar sobre descarte consciente." 
textoBotao = "Quero participar"
/>
</article>
<article>
<InfoCard
img = {imgTecnologia}
alt = "Imagem de uma pessoas ensinando outras pessoas a mexer no computador"
subtitulo = "Aulas de Tecnologia"
paragrafo = "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital." 
textoBotao = "Quero participar"
/>
</article>
<article>
<InfoCard
img = {imgEsporte}
alt = "Imagem de uma pessoas dançando num salao com o professor"
subtitulo = "Esporte e Inclusão"
paragrafo = "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens." 
textoBotao = "Quero participar"
/>
</article>
</section>
</main>
)
}

export default Voluntariado