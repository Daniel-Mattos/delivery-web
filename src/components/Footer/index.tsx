"use client";
import Image from "next/image";
import logoImage from "@/assets/imgs/logo.png";

export default function Footer() {

  return (
    <footer className="flex items-center justify-center text-gray-500">
      <Image src={logoImage} alt="logo-delivery" width={100} height={100} />
      <div className="pr-4">
        <p>© Copyright 2021 - delivery - Todos os direitos reservados delivery com Agência de Restaurantes Online S.A.</p>
        <p>Avenida dos Astronautas, nº 0000, Vila Varia, Estelar/SP - CEP 00.000-000</p>
      </div>
      <div className="flex gap-4 font-bold">
        <p>Termos e Condições de uso</p>
        <p>Código de conduta</p>
        <p>Privacidade</p>
        <p>Dicas de segurança</p>
      </div>
    </footer>
  );
}
