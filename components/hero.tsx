import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex justify-center items-center pt-16 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/50 mb-8 px-4 py-2 border border-border rounded-full animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-medium text-muted-foreground text-sm">{"Disponível para novos projetos"}</span>
          </div>

          <h1 className="mb-6 font-bold text-foreground text-5xl sm:text-6xl lg:text-7xl text-balance animate-fade-in">
            {"TAG Programming"}
          </h1>

          <p className="mb-8 text-muted-foreground text-xl sm:text-2xl text-balance leading-relaxed animate-fade-in">
            {
              "Transformamos ideias em soluções digitais inovadoras. Especializados em criar experiências web modernas e de alta performance."
            }
          </p>

          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 animate-fade-in">
            <Button asChild size="lg" className="group px-8 text-base">
              <Link href="#contato">
                {"Agendar Consulta Grátis"}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent px-8 text-base">
              <Link href="#projetos">
                <Code2 className="mr-2 w-5 h-5" />
                {"Ver Projetos"}
              </Link>
            </Button>
          </div>

          <div className="gap-8 grid grid-cols-3 mx-auto mt-16 max-w-2xl">
            <div className="text-center">
              <div className="mb-2 font-bold text-primary text-3xl sm:text-4xl">{"5+"}</div>
              <div className="text-muted-foreground text-sm">{"Anos de Experiência"}</div>
            </div>
            <div className="border-border border-x text-center">
              <div className="mb-2 font-bold text-primary text-3xl sm:text-4xl">{"50+"}</div>
              <div className="text-muted-foreground text-sm">{"Projetos Entregues"}</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-bold text-primary text-3xl sm:text-4xl">{"100%"}</div>
              <div className="text-muted-foreground text-sm">{"Satisfação"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
