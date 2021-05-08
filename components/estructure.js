
export default function Estructure({children, imagem}) {
    return(
        <div className="flex md:flex-row gap-8 flex-col">
        <img src={imagem} className="mx-auto w-full md:w-3/5" />
        <div className="flex justify-center flex-col">
            {children}
        </div>
      </div>
    )
}