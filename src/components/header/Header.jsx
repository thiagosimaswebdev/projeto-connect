import s from "./header.module.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/icones/logo.png"
import { useEffect, useState } from "react"

const Header = () => {
    const [menuAberto, setMenuAberto] = useState (false)

    const [isMobile, setIsMobile] = useState (window.innerWidth <= 768)

    useEffect(()=> {
      function menuMobile() {
        setIsMobile(window.innerWidth <= 768)
        if (window.innerWidth > 768) {
                  setMenuAberto(false)  
        }
  }
  window.addEventListener('resize', menuMobile)
  return () => window.removeEventListener('resize', menuMobile)
    }, [])

  return (
    <>
      <header className={s.header}>
        <Link to={"/"}>
          <img className={s.imgLogo} src={logo} alt="Imagem de logo do projeto connect sendo representada por uma mão segurando um coração, simbolizando apoio" />
        </Link>

        {!isMobile &&

         (<nav className={s.nav}>
          <Link className={s.Link} to={"/doacao"}>Doação</Link>
          <Link className={s.Link} to={"/voluntariado"}>Voluntariado</Link>
          <Link className={s.Link} to={"/mentoria"}>Mentoria</Link>
          <Link className={s.Link} to={"/eventosEP"}>Eventos</Link>
        </nav>)         
        }


        <img className={s.imgUser } src="https://avatars.githubusercontent.com/u/181795838?v=4" alt="Imagem do usuário" onClick={()=> setMenuAberto(!menuAberto)} />
      </header>
      <nav className={menuAberto ? s.navUser : s.closedNavUser}>
        <Link to={"/usuario"} onClick={() => setMenuAberto(false)}>Thiago Simas</Link>
        <Link onClick={() => setMenuAberto(false)}>Meu voluntariado</Link>
        <Link onClick={() => setMenuAberto(false)}>Configurações da conta</Link>
        {isMobile &&
          (<div>
          <Link to={'/doacao'} onClick={() => setMenuAberto(false)}>Doação</Link>
          <Link to={'/voluntariado'} onClick={() => setMenuAberto(false)}>Voluntariado</Link>
          <Link to={'/mentoria'} onClick={() => setMenuAberto(false)}>Mentoria</Link>
          <Link to={'/eventosEP'} onClick={() => setMenuAberto(false)}>Eventos</Link>
        </div> )         
        }
        <Link>Sair</Link>
      </nav>
    </>
  )
}

export default Header

// import S from "./header.module.scss"
// import { Link } from "react-router-dom"
// import logo from "../../assets/icones/logo.png"

// const Header = () => {
//   return (
//     <>
//     <header className={S.header}>

//       <Link to={'/'}>
//       <img className={S.imgLogo} src={logo} alt="Imagem de logo do projeto com uma mao e um coração em cima" />      
//       </Link>


//       <nav className={S.nav}> 
//         <Link className={S.Link} to={"/doacao"}>Doação</Link>
//         <Link className={S.Link} to={"/voluntariado"}>Voluntariado</Link>
//         <Link className={S.Link} to={"/mentoria"}>Mentoria</Link>
//         <Link className={S.Link} to={"/eventosEP"}>Eventos</Link>
//       </nav>

//       <img className={S.imgUser} src="https://avatars.githubusercontent.com/u/181795838?v=4" alt="Imagem do usuário" />
//     </header>   
    
//     <nav className={S.navUser}>
//     <Link>Thiago Simas</Link>
//     <Link>Meu voluntariado</Link>
//     <Link>Configurações da conta</Link>
//     <Link>Sair</Link>
//     </nav> 
//     </>

//   )
// }

// ---------------------------------------
// export default Header

// import { useState } from "react"
// import S from "./header.module.scss"
// import { Link } from "react-router-dom"
// import logo from "../../assets/icones/logo.png"

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <>
//       <header className={S.header}>
//         <Link to="/">
//           <img className={S.imgLogo} src={logo} alt="Logo" />
//         </Link>

//         {/* Menu desktop */}
//         <nav className={S.nav}>
//           <Link to="/doacao">Doação</Link>
//           <Link to="/voluntariado">Voluntariado</Link>
//           <Link to="/mentoria">Mentoria</Link>
//           <Link to="/eventosEP">Eventos</Link>
//         </nav>

//         {/* Avatar = menu no mobile */}
//         <img
//           className={S.imgUser}
//           src="https://avatars.githubusercontent.com/u/181795838?v=4"
//           alt="Usuário"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//       </header>

//       {/* Menu unificado mobile / user */}
//       <nav className={`${S.navMobile} ${menuOpen ? S.active : ""}`}>
//         {/* Navegação */}
//         <Link to="/doacao" onClick={() => setMenuOpen(false)}>Doação</Link>
//         <Link to="/voluntariado" onClick={() => setMenuOpen(false)}>Voluntariado</Link>
//         <Link to="/mentoria" onClick={() => setMenuOpen(false)}>Mentoria</Link>
//         <Link to="/eventosEP" onClick={() => setMenuOpen(false)}>Eventos</Link>

//         <hr />

//         {/* Usuário */}
//         <span className={S.userName}>Thiago Simas</span>
//         <Link onClick={() => setMenuOpen(false)}>Meu voluntariado</Link>
//         <Link onClick={() => setMenuOpen(false)}>Configurações da conta</Link>
//         <Link onClick={() => setMenuOpen(false)}>Sair</Link>
//       </nav>
//     </>
//   )
// }
// -------------------------------------


// export default Header

// import { useState } from "react"
// import S from "./header.module.scss"
// import { Link } from "react-router-dom"
// import logo from "../../assets/icones/logo.png"

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <>
//       <header className={S.header}>
//         <Link to="/">
//           <img className={S.imgLogo} src={logo} alt="Logo" />
//         </Link>

//         {/* MENU DESKTOP */}
//         <nav className={S.navDesktop}>
//           <Link to="/doacao">Doação</Link>
//           <Link to="/voluntariado">Voluntariado</Link>
//           <Link to="/mentoria">Mentoria</Link>
//           <Link to="/eventosEP">Eventos</Link>
//         </nav>

//         {/* AVATAR */}
//         <img
//           className={S.imgUser}
//           src="https://avatars.githubusercontent.com/u/181795838?v=4"
//           alt="Usuário"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//       </header>

//       {/* MENU USUÁRIO (DESKTOP) */}
//       <nav className={`${S.navUser} ${menuOpen ? S.active : ""}`}>
//         <span className={S.userName}>Thiago Simas</span>
//         <Link>Meu voluntariado</Link>
//         <Link>Configurações da conta</Link>
//         <Link>Sair</Link>
//       </nav>

//       {/* MENU MOBILE (NAV + USER) */}
//       <nav className={`${S.navMobile} ${menuOpen ? S.active : ""}`}>
//         <Link to="/doacao">Doação</Link>
//         <Link to="/voluntariado">Voluntariado</Link>
//         <Link to="/mentoria">Mentoria</Link>
//         <Link to="/eventosEP">Eventos</Link>

//         <hr />

//         <span className={S.userName}>Thiago Simas</span>
//         <Link>Meu voluntariado</Link>
//         <Link>Configurações da conta</Link>
//         <Link>Sair</Link>
//       </nav>
//     </>
//   )
// }

// export default Header

// import { useState, useRef } from "react"
// import { useClickOutside } from "../../hook/useClickOutside"
// import S from "./header.module.scss"
// import { Link } from "react-router-dom"
// import logo from "../../assets/icones/logo.png"

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const menuRef = useRef(null)

//   useClickOutside(menuRef, () => setMenuOpen(false))

//   return (
//     <>
//       <header className={S.header}>
//         <Link to="/">
//           <img className={S.imgLogo} src={logo} alt="Logo" />
//         </Link>

//         <nav className={S.navDesktop}>
//           <Link to="/doacao">Doação</Link>
//           <Link to="/voluntariado">Voluntariado</Link>
//           <Link to="/mentoria">Mentoria</Link>
//           <Link to="/eventosEP">Eventos</Link>
//         </nav>

//         <img
//           className={S.imgUser}
//           src="https://avatars.githubusercontent.com/u/181795838?v=4"
//           alt="Usuário"
//           onClick={() => setMenuOpen(!menuOpen)}
//         />
//       </header>

//       {/* MENU DESKTOP */}
//       <nav
//         ref={menuRef}
//         className={`${S.navUser} ${menuOpen ? S.active : ""}`}
//       >
//         <span className={S.userName}>Thiago Simas</span>
//         <Link>Meu voluntariado</Link>
//         <Link>Configurações da conta</Link>
//         <Link>Sair</Link>
//       </nav>

//       {/* MENU MOBILE */}
//       <nav
//         ref={menuRef}
//         className={`${S.navMobile} ${menuOpen ? S.active : ""}`}
//       >
//         <Link to="/doacao">Doação</Link>
//         <Link to="/voluntariado">Voluntariado</Link>
//         <Link to="/mentoria">Mentoria</Link>
//         <Link to="/eventosEP">Eventos</Link>

//         <hr />

//         <span className={S.userName}>Thiago Simas</span>
//         <Link>Meu voluntariado</Link>
//         <Link>Configurações da conta</Link>
//         <Link>Sair</Link>
//       </nav>
//     </>
//   )
// }

// export default Header
