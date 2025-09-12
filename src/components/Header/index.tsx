"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSearch } from "react-icons/md";
import logoImage from "@/assets/imgs/logo.png";

export default function Header() {
  const pathname = usePathname();

  const hiddenPaths = ["/login", "/register"];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  return (
    <header className="flex items-center gap-8 px-4 text-gray-500 border border-green-200 font-bold">
      <nav className="px-8">
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">
              <Image
                src={logoImage}
                alt="logo-delivery"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link href="/" className={pathname === "/" ? "text-green-800" : ""}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/restaurantes"
              className={pathname === "/restaurantes" ? "text-green-800" : ""}
            >
              Restaurantes
            </Link>
          </li>
          <li>
            <Link
              href="/mercados"
              className={pathname === "/mercados" ? "text-green-800" : ""}
            >
              Mercados
            </Link>
          </li>
          <li>
            <Link
              href="/bebidas"
              className={pathname === "/bebidas" ? "text-green-800" : ""}
            >
              Bebidas
            </Link>
          </li>
        </ul>
      </nav>
      <div className="relative flex flex-1 items-center border-none">
        <MdSearch className="absolute left-3 text-green-800" size={25} />
        <input
          placeholder="Buscar"
          className="rounded-md py-3 pl-10 w-full bg-gray-100 focus:outline-none"
        />
      </div>
      <div className="flex items-center pl-4 pr-16 gap-6 whitespace-nowrap">
        <a href="/login">Entrar</a>
        <a href="/register">Criar conta</a>
      </div>
    </header>
  );
}
