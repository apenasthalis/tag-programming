"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Aqui você implementaria a lógica de envio
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")
    setFormData({ name: "", email: "", message: "" })
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
              "Temos disponibilidade para novos projetos. Entre em contato e vamos conversar sobre como podemos ajudar a transformar sua ideia em realidade."
            }
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="bg-card p-8 border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-foreground text-sm">
                  {"Nome"}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-foreground text-sm">
                  {"E-mail"}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-foreground text-sm">
                  {"Mensagem"}
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-me sobre seu projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full font-medium text-base">
                <Send className="mr-2 w-5 h-5" />
                {"Agendar Consulta Grátis"}
              </Button>
            </form>
          </Card>

          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mt-8">
            <Card className="bg-card p-6 border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground text-sm">{"E-mail"}</div>
                  <div className="font-medium text-foreground">{"tagprogrammingdev@gmail.com"}</div>
                </div>
              </div>
            </Card>

            <Card className="bg-card p-6 border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="mb-1 text-muted-foreground text-sm">{"WhatsApp"}</div>
                  <div className="font-medium text-foreground">{"+55 (64) 99905-1521"}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
