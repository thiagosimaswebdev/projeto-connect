import s from '../Style.module.scss'
import InfoCard from '../../components/infoCard/InfoCard'
import imgMentoria from '../../assets/imagens/imgMentoria.png'
import imgExperiencia from '../../assets/imagens/imgExperiencia.png'
import imgAcomp from '../../assets/imagens/imgAcomp.png'

const Voluntariado = () => {
return (
<main className={s.main}>
<h1>Mentoria</h1>
<section className={s.container}>
<article>
<InfoCard 
img = {imgMentoria}
alt = "Imagem de pessoas numa mesa em reunião"
subtitulo = "Mentoria de Carreira e Emprego"
paragrafo = "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."  
textoBotao = "Quero participar"
/>
</article>
<article>
<InfoCard
img = {imgExperiencia}
alt = "Pessoas compartilhando conhecimento utilizando notebook"
subtitulo = "Compartilhe Experiência"
paragrafo = "Oriente jovens e profissionais iniciantes em sua área."  
textoBotao = "Quero participar"
/>
</article>
<article>
<InfoCard
img = {imgAcomp}
alt = "Imagem de duas mulheres conversando sobre trabalho"
subtitulo = "Acompanhamento"
paragrafo = "Participe como guia em jornadas de aprendizado e desenvolvimento."  
textoBotao = "Quero participar"
/>
</article>
</section>
</main>
)
}

export default Voluntariado