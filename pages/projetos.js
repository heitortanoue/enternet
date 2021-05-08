import Layout from "../components/layout";
import Body from "../components/body";
import Estructure from "../components/estructure"

export default function Projetos({}) {
  return (
    <Layout>
      <Body title="Projetos">
        <Estructure imagem="projetos.svg">
        <div>
              &nbsp; &nbsp; &nbsp; &nbsp; A ideia da criação de uma empresa foi
              originada através de um projeto de imersão e criação de ideas de
              startups realizados pela SAEComp em 2021. Uma incubadora de
              instituições universitárias voltadas para impacto social positivo
              de grande escala e desenvolvimento pessoal e técnico de seus
              colaboradores. Desde então, a <b>Enternet</b> trabalha conjuntamente com
              a SAEComp em diversas esferas como captação de clientes e
              desenvolvimento de marca.
            </div>
            <div>
              &nbsp; &nbsp; &nbsp; &nbsp; Mediante ao recente histórico
              empresarial, a nossa empresa está em fase de desenvolvimento de
              seus primeiros projetos de forma extremamente interativa e
              dedicada. Então, para o desenvolvimento de empreendimentos
              digitais, a Enternet busca por empresas que estejam dispostos a
              engajar em uma proposta moderna de construção de projetos
              centrados no cliente, com alta eficiência e visão de mercado.
            </div>
        </Estructure>
      </Body>
    </Layout>
  );
}
