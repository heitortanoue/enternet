export default function Footer() {
  return (
    <div className="bg-azul flex justify-between">
      <div className="overflow-hidden relative px-12 py-5 w-full">
        <div className="relative flex font-roboto text-branco font-light text-lg flex-col lg:flex-row lg:justify-around lg:py-5 gap-1 z-10">
          <div>
            <span className="font-medium">Contato:</span> (19) 99123 - 4567
          </div>
          <div>
            <span className="font-medium">Doe um PIX:</span>{" "}
            tozaomello@gmail.com
          </div>
          <div>
            <span className="font-medium">CNPJ:</span> 45.960.411/0001-67
          </div>
        </div>
        <img src="globo.svg" className="absolute globo-footer" />
      </div>
    </div>
  );
}
