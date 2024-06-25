import Button from "../../../../components/Button/Button";
import { MaxContainer } from "../../../../components/MaxContainer/MaxContainer";
import "./sec_sobre.css"
import imgCidade from "../../../../assets/cidade.jpeg";

export const Sec_sobre = () => {
  const Textos = () => {
    return (
      <div className="textos">
        <h2 className='logo-2'>Voluntarygame [Logo]</h2>

        <p className='texto'>
          Embarque em uma jornada transformadora com &apos;Desafios
          Humanitários&apos;. Este jogo inovador coloca você no coração das
          operações das ONGs, enfrentando os desafios reais que essas
          organizações encontram diariamente. Desde a mobilização de voluntários
          até a arrecadação de fundos, cada nível do jogo revela as
          complexidades e as recompensas do trabalho humanitário. Através de uma
          narrativa envolvente e mecânicas de jogo realistas, &apos;Desafios
          Humanitários&apos; não só entretem, mas também educa e inspira.
          Descubra como suas ações podem fazer a diferença no mundo real e apoie
          as causas que importam. Junte-se a nós e veja como é ser um herói do
          cotidiano!
        </p>

        <Button botao="cadastrar"/>
      </div>
    );
  };

  const ImagemJogo = () => {
    return (
      <div className='imagem-jogo'>
        <img src={imgCidade} alt='imagem-jogo' /> 
      </div>
    );
  };

  return (
    <>
      <section id="sec-sobre">
        <MaxContainer>
          <div className='content'>
            <Textos />
            <ImagemJogo />
          </div>
        </MaxContainer>
      </section>
    </>
  );
};
