import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="text-2xl font-bold text-foreground">{"<TAG />"}</div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {"Sobre"}
            </Link>
            <Link href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {"Projetos"}
            </Link>
            <Link
              href="#recomendacoes"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {"Recomendações"}
            </Link>
            <Link href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {"Contato"}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            {`© ${currentYear} TAG. Todos os direitos reservados.`}
          </div>
        </div>
      </div>
    </footer>
  )
}
