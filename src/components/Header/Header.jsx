import "./header.css";
import { MaxContainer } from "../MaxContainer/MaxContainer";

export const Header = () => {
  return (
    <header>
      
      <MaxContainer>
        <div className="content-header">
        <div className="barra-verde"></div>
          <a href="" className="logo">VoluntaryGame</a>
          <nav>
            <a href="">O jogo</a>
            <a href="">Recursos</a>
            <a href="">Trailer</a>
            <a href="">Contexto</a>
            <a href="">FAQ</a>
          </nav>
        </div>
      </MaxContainer>
    </header>
  );
};
