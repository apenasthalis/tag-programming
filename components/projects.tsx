import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Construtor de Tabelas Inteligentes",
    description:
      "Plataforma de construção de tabelas inteligentes com funcionalidades avançadas de filtragem, ordenação e visualização de dados.",
    image: "/smart-table.png",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    github: "https://github.com/apenasthalis/smart-table",
    demo: "https://smart-table-tan.vercel.app/",
  },
  {
    title: "Sistema de Gestão para Oficina Mecânica",
    description:
      "Sistema de gestão para oficina mecânica com controle de serviços, agendamentos, endereço para atendimentos e cultura da empresa Level Cars.",
    image: "/level-cars.png",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    github: "https://github.com/apenasthalis/levelcars-mechanic",
    demo: "https://levelcars-mechanic.vercel.app/",
  },
  {
    title: "Cardápio Digital - Rodrigo Burguer",
    description: "Aplicativo web para divulgação do cardápio digital de um restaurante, endereço para pedidos online e informações de contato da empresa rodrigo burguer.",
    image: "/rodrigo-burguer.png",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    github: "https://github.com/apenasthalis/rodrigo-burger-app",
    demo: "https://rodrigo-burger-app.vercel.app/",
  },
  {
    title: "Construtor Visual de Workflows (Fluxos)",
    description: "Landing page para um produto, destacando suas funcionalidades, benefícios e planos de assinatura.",
    image: "/workflow.png",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    github: "https://github.com/apenasthalis/visual-workflow-builder",
    demo: "https://visual-workflow-builder-puce.vercel.app/",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="bg-secondary/20 py-20 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl text-balance">
            {"Projetos em Destaque"}
          </h2>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            {
              "Alguns dos projetos que desenvolvi recentemente. Cada um representa um desafio único e uma solução criativa."
            }
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group bg-card hover:shadow-primary/5 hover:shadow-xl border-border hover:border-primary/50 overflow-hidden transition-all duration-300"
            >
              <div className="relative bg-secondary h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-bold text-foreground text-xl">{project.title}</h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 px-3 py-1 border border-primary/20 rounded-full font-medium text-primary text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link target="_blank" href={project.github}>
                      <Github className="mr-2 w-4 h-4" />
                      {"Código"}
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <Link target="_blank" href={project.demo}>
                      <ExternalLink className="mr-2 w-4 h-4" />
                      {"Demo"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
