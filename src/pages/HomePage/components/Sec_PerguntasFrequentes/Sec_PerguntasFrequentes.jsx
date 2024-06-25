import { MaxContainer } from "./../../../../components/MaxContainer/MaxContainer";
import "./sec_PerguntasFrequentes.css";

export const Sec_PerguntasFrequentes = () => {
  return (
    <div>
      <section id='sec_PerguntasFrequentes'>
        <MaxContainer>
          <div className='content'>
            <h2>Perguntas Frequentes</h2>
            <p className='texto bold'>Como posso jogar voluntaryGame ?</p>
            <p className='texto'>
              VoluntaryGame está disponível para jogar em dispositivos móveis
              (Android e iOS). Basta acessar a página oficial e fazer seu
              cadastro., em seguida baixe o aplicativo na loja de aplicativos do
              seu dispositivo.
            </p>
            <p className="texto bold">Qual é o objetivo do jogo?</p>
            <p className="texto">
              O objetivo de voluntaryGame é simular as complexidades enfrentadas
              pelas Organizações Não Governamentais (ONGs) na busca por
              voluntários e financiamento para suas iniciativas humanitárias. Os
              jogadores assumem o papel de gestores de ONGs e enfrentam
              diferentes desafios em cada nível do jogo, desde recrutar
              voluntários até arrecadar fundos para projetos específicos.
            </p>
            <p className="texto bold">Há alguma taxa para jogar voluntaryGame?</p>
            <p className="texto">
              Não, voluntaryGame é um jogo gratuito para jogar. Você pode baixar
              o aplicativo gratuitamente em sua loja de aplicativos ou jogar
              diretamente em seu navegador, sem qualquer custo associado. No
              entanto, o jogo pode oferecer compras opcionais dentro do
              aplicativo para itens adicionais ou recursos premium.
            </p>
            <p className="texto bold">Como posso contribuir para causas reais através do jogo?</p>
            <p className="texto">
              Ao jogar voluntaryGame, você está não apenas se divertindo, mas
              também contribuindo para causas reais. O jogo tem parcerias com
              várias ONGs e instituições de caridade, e parte das receitas
              geradas por compras dentro do aplicativo ou doações voluntárias é
              destinada a apoiar essas organizações e seus projetos
              humanitários.
            </p>
          </div>
        </MaxContainer>
      </section>
    </div>
  );
};
