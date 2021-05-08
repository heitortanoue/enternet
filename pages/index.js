import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="pb-16 flex flex-col md:flex-row justify-between items-center container mx-auto gap-5 md:gap-16 px-12 md:px-5">
        <div className="text-3xl md:text-4xl font-bold italic text-preto title-space">
          <div className="">A GENTE</div>
          <div className="not-italic text-5xl md:text-7xl text-azul text-center animated-palavras"></div>
          <div className="text-right">VOCÊ</div>

          <div className="text-2xl pt-8 hidden md:block">
            Nosso papel é de integrar sua empresa ao mundo digital promovendo
            sua expansão e integração
          </div>
        </div>

        <div className="w-full md:w-auto flex-grow">
          <img src="mundo.svg" className="w-full" />
        </div>
      </div>

      <div className="bg-azul p-8 w-full sm:flex-row flex-col flex justify-around text-roboto text-branco font-light text-lg md:text-xl text-center items-center px-5 md:px-8 gap-4 md:gap-8">
        <div className="flex flex-col justify-center items-center">
          <img src="connect.svg" className="icon" />
          Seu negócio mais digital
        </div>
        <hr className="bg-white border-1 border-white w-full sm:hidden" />
        <div className="flex flex-col justify-center items-center">
          <img src="wifi.svg" className="icon" />
          Seja encontrado mais facilmente
        </div>
        <hr className="bg-white border-1 border-white w-full sm:hidden" />
        <div className="flex flex-col justify-center items-center">
          <img src="maos.svg" className="icon" />
          Seus clientes vêm até você
        </div>
      </div>

      <div className="px-8 py-6 container mx-auto w-full text-justify text-roboto">
        <div className="py-4">
          <div className="text-ubuntu font-bold text-4xl text-center pb-3">
            Nossos serviços
          </div>
          <div>
            <div className="text-left font-ubuntu text-xl text-azul underline-verde-min">
              Imagem digital:
            </div>
            Criamos toda a presença da sua empresa na internet, desde
            desenvolvimento da logo, e do site, até aperfeiçoamento e
            profissionalização de páginas de redes sociais da empresa, buscando
            mostrar a seriedade e qualidade do seu trabalho.
            <div className="text-left font-ubuntu text-xl pt-2 text-azul underline-verde-min">
              Segurança na Internet:
            </div>
            Ao desenvolvermos todas as questões relativas à sua marca na web,
            nosso time de segurança garantirá todos os protocolos de segurança
            de alto nível, evitando falhas no sistema, deixando os dados de seus
            clientes ainda mais seguros.{" "}
            <div className="text-left font-ubuntu text-xl pt-2 text-azul underline-verde-min">
              Presença online:
            </div>{" "}
            Utilizando das mais modernas plataformas de anúncios, buscamos
            colocar sua marca em destaque na rede. Com preferência na ordem de
            aparição em algoritmos de busca, como o Google, com vídeos rápidos e
            dinâmicos em plataformas como o YouTube, damos à sua marca um
            destaque diferenciado, mostrando a qualidade dos serviços da
            empresa, e atraindo mais clientes.
          </div>
        </div>
        <div className="py-4">
          <div className="text-ubuntu font-bold text-4xl text-center pb-3">
            Parceiros
          </div>
          <div className="flex justify-around items-center flex-col md:flex-row gap-10 md:gap-0">
            <img src="saecomp.png" className="" />
            <img src="usp.png" className="" />            
          </div>
        </div>
      </div>
    </Layout>
  );
}
