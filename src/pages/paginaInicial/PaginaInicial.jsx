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

// import s from "./paginaInicial.module.scss"
// import ImgHome from "../../assets/imagens/imgHome.png"

// const PaginaInicial = () => {
//   return (
//     <main className={s.main}>

//       {/* SECTION PRINCIPAL DE INFORMAÇÕES */}
//       <section className={s.Info}>

//         <h1>
//           Projetos Sociais que transformam
//         </h1>

//         <p>
//           Conectamos sua empresa com projetos sociais impactantes.
//           Juntos, criamos mudanças reais na comunidade.
//         </p>

//         <button className={s.btn}>
//           Cadastrar Empresa ➜
//         </button>

//         {/* 
//           🔽 ALTERAÇÃO AQUI
//           Antes: <section className={s.infoDados}>
//           Agora: <div className={s.infoDados}>
//           Motivo: este bloco é apenas um agrupamento visual,
//           não um novo contexto semântico.
//         */}
//         <div className={s.infoDados}>

//           <article className={s.Dados}>
//             <h2>500+</h2>
//             <h3>Empresas Voluntárias</h3>
//           </article>

//           <article className={s.Dados}>
//             <h2>1.2K+</h2>
//             <h3>Projetos Realizados</h3>
//           </article>

//           <article className={s.Dados}>
//             <h2>50K+</h2>
//             <h3>Vidas Impactadas</h3>
//           </article>

//         </div>
//         {/* 🔼 FIM DA ALTERAÇÃO */}

//       </section>

//       {/* IMAGEM DO HERO */}
//       <img
//         src={ImgHome}
//         alt="Imagem de duas mãos segurando o globo terrestre representando impacto social"
//       />

//     </main>
//   )
// }

// export default PaginaInicial


// ---------------------------------
// import s from './paginaInicial.module.scss'
// import banner from '../../assets/imagens/banner.png'

// const PaginaInicial = () => {
// return (
// <main className={s.main}>
// <section className={s.info}>
// <h1>Projetos Sociais que transformam</h1>
// <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
// <button>Cadastrar Empresa ➔</button>
// <section className={s.infoDados}>
// <article>
// <h2>500+</h2>
// <h3>Empresas Voluntárias</h3>
// </article>
// <article>
// <h2>1.2K+</h2>
// <h3>Projetos Realizados</h3>
// </article>
// <article>
// <h2>50K+</h2>
// <h3>Vidas Impactadas</h3>
// </article>
// </section>
// </section>
// <img src={banner} alt="Imagem de mãos segurando o globo terrestre representando a responsibilidade social e ambiental" />
// </main>
// )
// }

// export default PaginaInicial