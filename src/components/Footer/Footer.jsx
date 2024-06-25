import { MaxContainer } from "../MaxContainer/MaxContainer";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <MaxContainer>
        <div className='content'>
          <div className='div-form'>
            <h2>logo</h2>
            <p className="texto">Fique por dentro e inscreva-se na nossa newsletter</p>
            <input type='text' placeholder="E-mail" />
          </div>
          <nav>
            <a href='#'>O Jogo</a>
            <a href='#'>Recursos</a>
            <a href='#'>Trailer</a>
            <a href='#'>Contexto</a>
            <a href='#'>Perguntas Frequentes </a>
          </nav>
          <div className='redes-sociais'>
            <h3>Redes sociais</h3>
            <a href='#'>Facebook</a>
            <a href='#'>Instagram</a>
            <a href='#'>YouTube</a>
            <a href='#'>Twitter</a>
          </div>
        </div>
      </MaxContainer>
      <MaxContainer>
        <div className='copy'>
          <p>© VoluntaryGame Inc. Todos os direitos reservados 2024</p>
          <a href='#'>Termos e condições</a>
        </div>
      </MaxContainer>
    </footer>
  );
};
