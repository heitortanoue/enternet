export default function Footer() {
  return (
    <div className="bg-azul px-12 py-5 flex justify-between">
      <div className="flex font-roboto text-branco font-light text-lg flex-col gap-1">
        <div>
          <span className="font-medium">Contato:</span> (19) 99123 - 4567
        </div>
        <div>
          <span className="font-medium">Doe um PIX:</span> tozaomello@gmail.com
        </div>
        <div>
          <span className="font-medium">CNPJ:</span> 45.960.411/0001-67
        </div>
      </div>
      <div className='relative'>
        <img src="globo.svg" className="absolute globo-footer" />
      </div>
    </div>
  );
}
