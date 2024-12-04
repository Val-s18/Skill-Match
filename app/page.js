"use client";
import Image from "next/image";
import Button from "./components/button";
import ButtonQuizz from "./components/buttonquiz";
import Header from "./components/headers"; // Vérifiez l'import
import Link from "next/link";
import dynamic from "next/dynamic";

const WebFontLoader = dynamic(() => import("../components/WebFontLoader"), {
  ssr: false,
});

export default function Home(text) {
  return (
    <div>
      <WebFontLoader />
      <main>
        {/* Titre principal */}
        <div className="text-4xl flex items-center justify-center mt-10">
          Skill-Match
        </div>

        {/* Boutons */}
        <div className="flex flex-col items-center justify-center gap-7 mt-20">
          <Link rel="stylesheet" href="/quiz">
            <button className="bg-orange text-white flex items-center px-[68px] py-2 text-xl transition rounded-tl-[30px] rounded-br-[30px]">
              QUIZ
            </button>
          </Link>
          <Button text="SOFT SKILLS" href="/skill" />
        </div>

        {/* Section manifeste */}
        <div className="flex items-center justify-center gap-10 mt-20">
          <p className="w-80 text-center text-base">
            Manifeste de notre projet (conditions dans lesquelles jouer, à qui
            ça s’adresse principalement ET comment jouer)
          </p>
        </div>
        <div className="flex items-center justify-center gap-10 mt-20">
          <Image
            src="/design.png" // Remplace par le chemin de ton logo
            alt="Logo"
            layout="intrinsic"
            width={800}
            height={600}
            className="max-w-full h-auto block sm:hidden" // Cacher l'image au-dessus de 400px
          />
        </div>

        <div className="flex items-center justify-center pt-20 pb-20 bg-beige ">
          <div className="flex flex-col items-center justify-center gap-8 ">
            <p className="text-center w-[365px] text-base  ">
              Explications de comment fonctionne le mode QUIZ et quel est son
              intérêt. Lorem ipsum dolor sit amet consectetur. Nunc accumsan
              amet ultricies diam sodales nec elementum.{" "}
            </p>
            <ButtonQuizz text="Quiz" href="/quiz" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5  pt-20 pb-20  ">
          <p className="text-center  w-[365px]  ">
            Découvrez la liste des soft-skills et leurs définitions
          </p>
          <Button text="Soft skills" href="/skill" />
        </div>
      </main>
    </div>
  );
}
