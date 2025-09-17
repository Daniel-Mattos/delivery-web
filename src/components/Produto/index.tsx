"use client";
import Image from "next/image";

interface ProdutosProps {
  name: string;
  description: string;
  path: string;
}

export default function Produto({
  name,
  description,
  path
}: ProdutosProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        className="rounded"
        src={path}
        alt={description}
        width={100}
        height={100}
      />
      <span className="text-center">{name}</span>
    </div>
  );
}
