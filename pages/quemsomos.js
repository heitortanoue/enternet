import Layout from "../components/layout";
import Body from "../components/body";
import Estructure from "../components/estructure";

export default function QuemSomos() {
  return (
    <Layout>
      <Body title="Quem somos">
        <Estructure imagem="team.svg">
          <div>
            &nbsp; &nbsp; &nbsp; &nbsp; Nós somos a <b>Enternet</b>, uma empresa
            fundada em meados de 2020 como uma startup cujo intuito era de
            introduzir diferentes negócios no mundo virtual, de maneira segura,
            promovendo assim um grande crescimento dos mesmos. De maneira
            sucinta, oferecemos três ramos de serviços, sendo eles o de imagem,
            segurança e presença digital. Fazemos com que seu negócio decole nas
            redes digitais, garantindo ao mesmo toda a infraestrutura necessária
            para um excelente desempenho.
          </div>
          <div>
            &nbsp; &nbsp; &nbsp; &nbsp; Nosso time atualmente conta com 6
            membros, todos especializados em consultoria digital para empresas
          </div>
        </Estructure>
      </Body>
    </Layout>
  );
}
