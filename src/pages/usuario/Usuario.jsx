import s from './usuario.module.scss'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";

const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <img src="https://avatars.githubusercontent.com/u/181795838?v=4" alt="Imagem do perfil do usuario" />

        <div className={s.div}>
          <h1>Thiago Simas</h1>
          <h2>Voluntário ativo</h2>
          <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>

          <ul className={s.ulInfo}>
            <li><IoLocationOutline /> Rio de Janeiro - RJ</li>
            <li><MdOutlineEmail /> thiagosimas1@gmail.com</li>
            <li><FiCalendar /> Membro desde Janeiro 2022</li>
          </ul>
          <ul className={s.listaSkislls}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>

      </section>
    </main>
  )
}

export default Usuario
