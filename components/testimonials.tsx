import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Silva",
    role: "CEO, Smart Devs",
    content:
      "Trabalho excepcional! O TAG entregou nosso projeto antes do prazo e superou todas as expectativas. A qualidade do código e atenção aos detalhes são impressionantes.",
    rating: 5,
  },
  {
    name: "Rodrigo Almeida",
    role: "Dono da hamburgueria, rodrigo burger",
    content:
      "Profissional extremamente competente e comunicativo. Transformou nossa visão em uma plataforma robusta e escalável. Recomendo sem hesitação!",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    role: "CTO, DesignHub",
    content:
      "A colaboração foi perfeita do início ao fim. TAG não apenas desenvolveu o que pedimos, mas também sugeriu melhorias que agregaram muito valor ao projeto.",
    rating: 5,
  },
  {
    name: "Ricardo Santos",
    role: "Dono LevelCars",
    content:
      "Experiência técnica de alto nível combinada com excelente comunicação. O sistema desenvolvido está rodando perfeitamente há meses sem nenhum problema.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="recomendacoes" className="bg-background py-20 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl text-balance">
            {"O Que Dizem Sobre Nós"}
          </h2>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            {"Feedback de clientes satisfeitos que confiaram em nosso trabalho para seus projetos."}
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-card hover:shadow-lg hover:shadow-primary/5 p-6 border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="fill-primary w-5 h-5 text-primary" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground text-pretty leading-relaxed">{`"${testimonial.content}"`}</p>
              <div className="pt-4 border-border border-t">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
