import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 px-64">
      <h1 className="font-bold text-2xl">Pedir seu delivery no iLeve é rápido e prático! Conheça as categorias</h1>
      <div className="w-full flex items-center gap-16 text-gray-600">
        <div className="flex flex-col items-center gap-2">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={100} height={100}/>
          <span className="text-center">Restaurantes</span>
        </div>
         <div className="flex flex-col items-center gap-2">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={100} height={100}/>
          <span className="text-center">Mercados</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={100} height={100}/>
          <span className="text-center">Bebidas</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={100} height={100}/>
          <span className="text-center">Hortifrutis</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={100} height={100}/>
          <span className="text-center">Suplementos</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={100} height={100}/>
          <span className="text-center">Premiun iLeve</span>
        </div>
      </div>
      <h2>Famosos no iLeve</h2>
      <div className="w-full flex items-center gap-8">
        <div className="flex items-center gap-2 border border-gray-200 p-4 rounded">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={80} height={80}/>
          <span>Churrasquinho do Zé</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 p-4 rounded">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={80} height={80}/>
          <span>Churrasquinho do Zé</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 p-4 rounded">
          <Image className="rounded" src="/comida.jpg" alt="imagem de churrasquinho" width={80} height={80}/>
          <span>Churrasquinho do Zé</span>
        </div>    
      </div>
    </div>
  );
}
