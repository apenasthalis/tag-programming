"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowRight, Send, ArrowLeft, Minus, Plus } from "lucide-react"

type SiteType = "Landing Page" | "Saas" | "E-commerce" | "ERP" | "Site Institucional" | null
type BudgetRange = "500 até 1000" | "1000 até 2000" | "2000-5000" | "acima de 5000" | "ainda não sei" | null

interface BudgetQuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  whatsappNumber: string
}

export function BudgetQuoteModal({ open, onOpenChange, whatsappNumber }: BudgetQuoteModalProps) {
  const [step, setStep] = useState(1)
  const [siteType, setSiteType] = useState<SiteType>(null)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [includeCopywriting, setIncludeCopywriting] = useState(false)
  const [budgetRange, setBudgetRange] = useState<BudgetRange>(null)

  const siteTypes: SiteType[] = ["Landing Page", "Saas", "E-commerce", "ERP", "Site Institucional"]
  const budgetRanges: BudgetRange[] = ["500 até 1000", "1000 até 2000", "2000-5000", "acima de 5000", "ainda não sei"]

  const handleReset = () => {
    setStep(1)
    setSiteType(null)
    setNumberOfPages(1)
    setIncludeCopywriting(false)
    setBudgetRange(null)
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(handleReset, 300)
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSiteTypeSelect = (type: SiteType) => {
    setSiteType(type)
    setStep(2)
  }

  const incrementPages = () => {
    setNumberOfPages((prev) => prev + 1)
  }

  const decrementPages = () => {
    setNumberOfPages((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleContinue = () => {
    if (numberOfPages) {
      setStep(3)
    }
  }

  const handleSendToWhatsApp = () => {
    const message = `Olá, Thalis! Gostaria de um orçamento para o seguinte projeto:

*Tipo de Site:* ${siteType}
*Número de Páginas:* ${numberOfPages}
*Copywriting Incluso:* ${includeCopywriting ? "Sim" : "Não"}
*Orçamento Disponível:* R$ ${budgetRange}

Aguardo retorno!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
    handleClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {step > 1 && (
          <Button
            onClick={handleBack}
            variant="ghost"
            size="icon"
            className="top-4 left-4 absolute data-[state=open]:bg-accent opacity-70 hover:opacity-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-ring ring-offset-background focus:ring-offset-2 data-[state=open]:text-muted-foreground transition-opacity disabled:pointer-events-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="sr-only">Voltar</span>
          </Button>
        )}

        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl text-center text-balance">
            {step === 1 && "Qual tipo de site você precisa?"}
            {step === 2 && "Detalhes do projeto"}
            {step === 3 && "Qual é seu orçamento?"}
          </DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {/* Step 1: Site Type Selection */}
          {step === 1 && (
            <div className="space-y-3">
              {siteTypes.map((type) => (
                <Button
                  key={type}
                  variant={siteType === type ? "default" : "outline"}
                  className="w-full h-12 text-base"
                  onClick={() => handleSiteTypeSelect(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          )}

          {/* Step 2: Pages and Copywriting */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="pages" className="text-base">
                  Quantas páginas?
                </Label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="bg-transparent w-12 h-12 shrink-0"
                    onClick={decrementPages}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    id="pages"
                    type="number"
                    min="1"
                    value={numberOfPages}
                    onChange={(e) => setNumberOfPages(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="h-12 text-base text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [appearance:textfield]"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="bg-transparent w-12 h-12 shrink-0"
                    onClick={incrementPages}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="copywriting"
                  checked={includeCopywriting}
                  onCheckedChange={(checked) => setIncludeCopywriting(checked as boolean)}
                />
                <Label htmlFor="copywriting" className="text-base cursor-pointer">
                  Copywriting incluso
                </Label>
              </div>

              <Button onClick={handleContinue} className="w-full h-12 text-base" size="lg">
                Continuar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Step 3: Budget Range */}
          {step === 3 && (
            <div className="space-y-3">
              {budgetRanges.map((range) => (
                <Button
                  key={range}
                  variant={budgetRange === range ? "default" : "outline"}
                  className="w-full h-12 text-base"
                  onClick={() => setBudgetRange(range)}
                >
                  {range === "ainda não sei" ? range : `R$ ${range}`}
                </Button>
              ))}

              {budgetRange && (
                <Button onClick={handleSendToWhatsApp} className="mt-6 w-full h-12 text-base" size="lg">
                  <Send className="mr-2 w-5 h-5" />
                  Enviar para WhatsApp
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Step indicator */}
        <div className="flex justify-center gap-2 pb-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 w-2 rounded-full transition-colors ${s === step ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
