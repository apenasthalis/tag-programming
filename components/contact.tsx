"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Calculator } from "lucide-react"
import { BudgetQuoteModal } from "@/components/budget-quote-modal"

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const whatsappNumber = "5564999051521"

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de conversar sobre um projeto.")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <section id="contato" className="bg-secondary/20 py-20 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl text-balance">
            {"Vamos Trabalhar Juntos?"}
          </h2>
          <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
            {
              "Tenho disponibilidade para novos projetos. Entre em contato pelo WhatsApp e vamos conversar sobre como posso ajudar a transformar sua ideia em realidade."
            }
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
            <Card
              className="group bg-card p-6 border-border hover:border-primary/50 transition-all cursor-pointer"
              onClick={handleWhatsAppContact}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-lg text-primary group-hover:text-primary-foreground transition-colors">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground text-sm">{"Fale pelo WhatsApp"}</div>
                  <div className="font-medium text-foreground">{"+55 (64) 99905-1521"}</div>
                </div>
                <Button variant="outline" className="bg-transparent w-full">
                  {"Iniciar Conversa"}
                </Button>
              </div>
            </Card>

            <Card
              className="group bg-card p-6 border-border hover:border-primary/50 transition-all cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-primary/10 group-hover:bg-primary p-4 rounded-lg text-primary group-hover:text-primary-foreground transition-colors">
                  <Calculator className="w-8 h-8" />
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground text-sm">{"Precisa de orçamento?"}</div>
                  <div className="font-medium text-foreground">{"Calcule seu projeto"}</div>
                </div>
                <Button variant="outline" className="bg-transparent w-full">
                  {"Fazer Orçamento"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <BudgetQuoteModal open={isModalOpen} onOpenChange={setIsModalOpen} whatsappNumber={whatsappNumber} />
    </section>
  )
}
