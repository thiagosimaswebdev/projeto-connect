import s from '../Style.module.scss'
import InfoCard from '../../components/infoCard/InfoCard'
import imgJovensFut from '../../assets/imagens/imgJovensFut.png'
import imgTecTransf from '../../assets/imagens/imgTecTransf.png'
import imgEmprego from '../../assets/imagens/imgEmprego.png'

const Voluntariado = () => {
return (
<main className={s.main}>
<h1>Eventos & Palestras</h1>
<section className={s.container}>
<article>
<InfoCard 
img = {imgJovensFut}
alt = "Imagem de jovens sentados em circulo assistindo aula"
subtitulo = "Empoderando Jovens para o Futuro"
paragrafo = "Atividade: Palestra motivacional sobre liderança jovem e transformação social." 
paragrafo2 = "Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades." 
textoBotao = "Quero participar"
/>
</article>
<article>
<InfoCard
img = {imgTecTransf}
alt = "Imagem de uma pessoas olhando dados em monitores"
subtitulo = "Tecnologia que Transforma"
paragrafo = "Atividade: Workshop de introdução à programação e inovação digital." 
paragrafo2 = "Impacto: Preparar jovens para o mercado de trabalho através da tecnologia." 
textoBotao = "Quero participar"
/>
</article>
<article>
<InfoCard
img = {imgEmprego}
alt = "Imagem de uma pessoas dançando num salao com o professor"
subtitulo = "Carreira e Primeiro Emprego"
paragrafo = "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado." 
paragrafo2 = "Impacto: Ajudar jovens a conquistar oportunidades de trabalho." 
textoBotao = "Quero participar"
/>
</article>
</section>
</main>
)
}

export default Voluntariado