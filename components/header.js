import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const paginas = [
    {nome: 'Projetos', path: '/projetos'},
    {nome: 'Objetivos', path: '/objetivos'},
    {nome: 'Quem somos', path: '/quemsomos'},
  ]

  return (
    <div className='mb-12 md:mb-0'>
        <div
          style={{
            width: `${open ? "250px" : "0"}`,
            paddingLeft: `${open ? "20px" : "0"}`,
            paddingRight: `${open ? "20px" : "0"}`,
          }}
          className={`sideMenu text-branco font-roboto shadow-2xl md:hidden text-xl px-6`}
        >
          <div className="pb-5">
            <div className="text-cinza font-ubuntu font-medium text-xl">PÁGINAS</div>
            <div className="flex flex-col pl-2 gap-1">
              {paginas.map((el) => {
                return (
                  <div key={el.nome}>
                    <Link href={el.path}>{el.nome}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      

      <div className="bg-azul p-4 shadow-sm md:shadow-none pl-5 px-12 flex justify-between z-50 items-center overflow-hidden fixed md:static w-full">
        <img
          src="menu.svg"
          onClick={() => {
            setOpen(!open);
          }}
          className='md:hidden w-9'
        />
        <Link href="/">
        <div className="font-ubuntu font-bold text-branco italic text-3xl relative cursor-pointer">
          <img src="globo.svg" className="absolute globo-header" />
          
            <div className="relative">ENTERNET</div>
          
        </div>
        </Link>
        <div className="items-center justify-evenly gap-8 text-branco font-roboto text-lg md:flex hidden">
          {paginas.map((el, ind) => {
                return (
                  <>
                  <div key={el.nome} className='cursor-pointer'>
                    <Link href={el.path}><span className="font-regular p-2">{el.nome}</span></Link>
                  </div>
                  { paginas.length != ind + 1 ? <div>
                  | 
                  </div> : null}
                  </>
                )
              })}
        </div>
      </div>
    </div>
  );
}
