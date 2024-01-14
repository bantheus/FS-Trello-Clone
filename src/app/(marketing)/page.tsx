import { Button } from "@/components/ui/button";
import { headingFont, textFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "./components/badge";
import { TitleCard } from "./components/title-card";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-14",
          headingFont.className,
        )}
      >
        <Badge />
        <h1 className="text-center text-3xl text-neutral-800 md:text-6xl">
          Aumente sua produtividade <br /> com{" "}
          <span className="font-medium text-sky-600">Taskify</span>
        </h1>
        <TitleCard text="Maximize seus resultados." />
      </div>
      <div
        className={cn(
          "mx-auto mt-8 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-lg",
          textFont.className,
        )}
      >
        Colabore, gerencie projetos e alcance novos níveis de desempenho. Da
        sede corporativa ao home office, otimize a dinâmica de trabalho da sua
        equipe com Taskify.
      </div>
      <Button className="mt-6 text-lg" size="lg" asChild>
        <Link href="/sign-up">Comece aqui, é grátis!</Link>
      </Button>
    </div>
  );
}
