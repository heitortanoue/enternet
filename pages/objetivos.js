import Layout from "../components/layout";
import Body from "../components/body";
import Estructure from "../components/estructure";

export default function Objetivos({}) {
  return (
    <Layout>
      <Body title="Objetivos">
        <Estructure imagem="objetivos.svg">
          <div>
            &nbsp; &nbsp; &nbsp; &nbsp; A modernidade trouxe ao mundo um novo
            ambiente de circulação de pessoas, o ambiente virtual, cheio de
            vantagens e dificuldades, o que nós da <b>Enternet</b> apresentamos é, além
            de oferecer o melhor caminho por esse mundo novo, garantir também
            que a sua empresa esteja presente em todos os meios digitais
            possíveis para que o seu produto possa chegar ao cliente da melhor
            forma possível.
          </div>
          <div>
            &nbsp; &nbsp; &nbsp; &nbsp; Se ao ler essas palavras você se sente
            um pouco perdido por não saber como gerenciar um ambiente virtual,
            oferecer seus produtos pela internet e estar com um espaço bem
            organizado e apresentável para o seu cliente, pode respirar fundo e
            descansar, pois saiba que essas são algumas das nossas funções,
            estamos preparados para criar um ambiente virtual para seus produtos
            desde o zero, exigindo de vocês nenhum conhecimento prévio sobre o
            assunto.
          </div>
        </Estructure>
      </Body>
    </Layout>
  );
}
