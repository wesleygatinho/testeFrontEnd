import { Header } from "../../../../components/Header/Header";
import "./sec_Inicio.css";
import { MaxContainer } from "./../../../../components/MaxContainer/MaxContainer";
import Button from "../../../../components/Button/Button";
import { ImagemJogo } from "./components/ImagemJogo";
import { ChamadasParaAcao } from "./components/ChamadasParaAcao";
import { Logins } from "./components/Logins";


export const Sec_Inicio = () => {
  const Textos = () => {
    return (
      <div className='div-textos'>
        <h1>Desvende os Desafios das ONGs e Faça a Diferença.</h1>
        <p className='subtitulo'>
          Um jogo transformador que coloca você no centro das ações
          humanitárias.
        </p>
        <ChamadasParaAcao />
        <Button botao="CADASTRAR"/>
        <Logins />
      </div>
    );
  };

  return (
    <>
      <Header />
      <section id='hero-section'>
        <MaxContainer>
          <div className='content-sec-inicio'>
            <Textos />
            <ImagemJogo />
          </div>
        </MaxContainer>
      </section>
    </>
  );
};
