import Image from "next/image";
import Produto from "@/components/Produto";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 px-64">
      <h1 className="font-bold text-2xl">
        Pedir seu delivery no iLeve é rápido e prático! Conheça as categorias
      </h1>
      <div className="w-full flex items-center gap-16 text-gray-600">
        <Produto
          name="Restaurantes"
          description="imagem Restaurante"
          path="/comida.jpg"
        />
        <Produto 
          name="Mercados"
          description="imagem Mercado"
          path="/comida.jpg"
        />
        <Produto
          name="Bebidas"
          description="imagem Bebidas"
          path="/comida.jpg"
        />
        <Produto
          name="Hortifrutis"
          description="imagem Hortifrutis"
          path="/comida.jpg"
        />
        <Produto
          name="Suplementos"
          description="imagem Suplementos"
          path="/comida.jpg"
        />
        <Produto
          name="Premiun iLeve"
          description="imagem Premiun iLeve"
          path="/comida.jpg"
        />
      </div>
      <h2>Famosos no iLeve</h2>
      <div className="w-full flex items-center gap-8">
        <div className="flex items-center gap-2 border border-gray-200 p-4 rounded">
          <Image
            className="rounded"
            src="/comida.jpg"
            alt="imagem de churrasquinho"
            width={80}
            height={80}
          />
          <span>Churrasquinho do Zé</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 p-4 rounded">
          <Image
            className="rounded"
            src="/comida.jpg"
            alt="imagem de churrasquinho"
            width={80}
            height={80}
          />
          <span>Churrasquinho do Zé</span>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 p-4 rounded">
          <Image
            className="rounded"
            src="/comida.jpg"
            alt="imagem de churrasquinho"
            width={80}
            height={80}
          />
          <span>Churrasquinho do Zé</span>
        </div>
      </div >
        <div className="w-full flex items-center gap-16 mt-8">
          <Produto
            name="Mercado"
            description="imagem Mercado"
            path="/comida.jpg"
          />
          <Produto
            name="Brasileira"
            description="comidas Brasileiras"
            path="/comida.jpg"
          />
          <Produto
            name="Promoções"
            description="Promoções do dia"
            path="/comida.jpg"
          />
        </div>
    </div>
  );
}
