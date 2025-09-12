"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "@/components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const verifyLogin = () => {
    if (email === "maria@email.com" || password === "1234") {
      return true;
    }
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);

    if (verifyLogin()) {
      router.push("/");
    } else {
      alert("Credenciais inválidas!");
    }
  };
  return (
    <main className="flex justify-center items-center min-h-screen">
      <section className="bg-white p-8 rounded-lg shadow-lg min-h-[50vh] min-w-[40vw] flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold text-gray-800">Fazer login</h1>
        <form onSubmit={handleSubmit} className="w-[80%] flex flex-col gap-6">
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
