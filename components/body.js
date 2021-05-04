export default function Body({ children, title }) {
  return (
    <div className='container mx-auto px-8 md:px-0'>
      <div className="w-full text-center font-ubuntu font-bold text-5xl underline-verde">
        {title}
      </div>
      <div className="pt-8 font-roboto leading-relaxed text-justify">
          {children}
      </div>
    </div>
  );
}
