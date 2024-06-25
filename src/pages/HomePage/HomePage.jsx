import { Footer } from "../../components/Footer/Footer";
import { Sec_Cadastro_Login } from "./components/Sec_Cadastro_Login/Sec_Cadastro_Login";
import { Sec_ContextoSocial } from "./components/Sec_ContextoSocial/Sec_ContextoSocial";
import { Sec_Inicio } from "./components/Sec_Inicio/Sec_Inicio";
import { Sec_PerguntasFrequentes } from "./components/Sec_PerguntasFrequentes/Sec_PerguntasFrequentes";
import { Sec_sobre } from "./components/Sec_Sobre/Sec_sobre";
import { Sec_Video } from "./components/Sec_Video/Sec_Video";
import "./homePage.css";

export const HomePage = () => {
  return (
    <div>
      <Sec_Inicio />
      <Sec_sobre />
      <Sec_Video/>
      <Sec_ContextoSocial/>
      <Sec_PerguntasFrequentes/>
      <Sec_Cadastro_Login/>
      <Footer/>
    </div>
  );
};
