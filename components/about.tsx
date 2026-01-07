import { Card } from "@/components/ui/card"
import { Code2, Palette, Rocket, Zap } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "React, Next.js, TypeScript, Node.js e as mais modernas tecnologias web",
  },
  {
    icon: Palette,
    title: "Design & UX",
    description: "Interfaces intuitivas e responsivas com foco na experiência do usuário",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Aplicações otimizadas para velocidade e eficiência máxima",
  },
  {
    icon: Rocket,
    title: "Inovação",
    description: "Sempre utilizando as melhores práticas e tecnologias de ponta",
  },
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl text-balance">
            {"Sobre Nós"}
          </h2>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            {
              "Somos apaixonados por criar soluções digitais que fazem a diferença. Com mais de 4 anos de experiência, trabalhamos com empresas de todos os tamanhos para transformar suas visões em realidade através de código limpo e eficiente."
            }
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.title}
                className="bg-card hover:shadow-lg hover:shadow-primary/5 p-6 border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground text-lg">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="bg-secondary/30 p-8 border-border">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "PHP",
                "Laravel",
                "PHPUnit",
                "Vue.js",
                "RabbitMQ",
                "Redis",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "MySql",
                "GraphQL",
                "Docker",
                "Jest.Js",
                "Git",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-background px-4 py-2 border border-border hover:border-primary/50 rounded-full font-medium text-foreground text-sm transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
