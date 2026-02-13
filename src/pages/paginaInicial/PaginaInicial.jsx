import s from "./paginaInicial.module.scss"
import ImgHome from"../../assets/imagens/imgHome.png"

const PaginaInicial = () => {
  return (
    <main className={s.main}>

      <section className={s.Info}>

      <h1>Projetos Sociais 
      que transformam</h1>
      <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>

      <button className={s.btn}>Cadastrar Empresa ➜</button>        


      <section className={s.infoDados}>
          <article className={s.Dados}>
            <h2>500+</h2>
            <h3>Empresas Voluntárias</h3>
          </article>
          <article className={s.Dados}>
            <h2>1.2K+</h2>
            <h3>Projetos Realizados</h3>
          </article>
          <article className={s.Dados}>
            <h2>50K+</h2>
            <h3>Vidas Impactadas</h3>
          </article>
        </section>  

      </section>

        <img src={ImgHome} alt="Imagem de duas maos o globo terrestre representando impacto social" />
      
    </main>
  )
}

export default PaginaInicial

