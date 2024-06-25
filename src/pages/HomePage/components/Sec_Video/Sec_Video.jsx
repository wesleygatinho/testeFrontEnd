import { MaxContainer } from "./../../../../components/MaxContainer/MaxContainer";
import "./sec_Video.css";

export const Sec_Video = () => {
  return (
    <div>
      <section id='sec-video'>
        <MaxContainer>
          <div className='content'>
            <h2>Mergulhe nessa experiência</h2>
            <p>
              Mergulhe na emocionante jornada de VoluntaryGame. Veja como nosso
              jogo transforma os desafios enfrentados pelas ONGs em uma
              experiência interativa e envolvente. Assista ao trailer e descubra
              como você pode fazer a diferença, apoiando causas nobres e se
              tornando um verdadeiro herói do cotidiano
            </p>
            <div className="div-video">
              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/Ba-3gSzT83w?si=OuK2yUwr_Kp7t_Fo'
                title='YouTube video player'
                //   frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </MaxContainer>
      </section>
    </div>
  );
};
