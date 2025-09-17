"use client";
import Image from "next/image";
import logoImage from "@/assets/imgs/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-gray-500 gap-8">
      <hr className="h-16 bg-gray-200 w-full border-0" />
      <hr className="h-1 w-[80vw] border-gray-400" />
      <div className="">
        <h3 className="font-bold text-lg">iLeve</h3>
        <Link href="/" className="text-gray-200"/>
      </div>
      <hr className="h-1 w-[80vw] border-gray-400" />
      <div className="flex items-center justify-center text-gray-500">
        <Image src={logoImage} alt="logo-delivery" width={100} height={100} />
        <div className="pr-4">
          <p>
            © Copyright 2021 - iLeve - Todos os direitos reservados iLeve com
            Agência de Restaurantes Online S.A.
          </p>
          <p>
            Avenida dos Astronautas, nº 0000, Vila Varia, Estelar/SP - CEP
            00.000-000
          </p>
        </div>
        <div className="flex gap-4 font-bold">
          <p>Termos e Condições de uso</p>
          <p>Código de conduta</p>
          <p>Privacidade</p>
          <p>Dicas de segurança</p>
        </div>
      </div>
    </footer>
  );
}
