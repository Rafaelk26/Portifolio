import { Header } from "@/components/Header";
import { Inicio } from "@/components/Main";
import { Servicos } from "@/components/Servicos";
import { Projetos } from "@/components/Projetos";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#01040A] max-w-[1920px] w-full mx-auto">
      <Header />
      <Inicio />
        <div className="h-6 border-b border-white/10 shadow-lg shadow-white/3" id='servicos'/>
      <Servicos />
        <div className="h-6 border-b border-white/10 shadow-lg shadow-white/3" id='projetos'/>
      <Projetos />
        <div className="h-6 border-b border-white/10 shadow-lg shadow-white/3" id='contato'/>
      <Contato />
        <div className="h-6 border-b border-white/10 shadow-lg shadow-white/3" />
      <Footer />
    </main>
  );
}
