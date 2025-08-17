import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Image src="/logo.svg" alt="Skyler Bertone" width={40} height={40} className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-semibold">Skyler Bertone</h1>
              
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Documenti Legali</h2>
          <p className="text-muted-foreground mb-12">
            Consulta i nostri documenti legali per informazioni su termini di utilizzo, privacy e cookie.
          </p>

          <div className="grid gap-6 md:grid-cols-1 max-w-md mx-auto">
            <Card className="border-border/40 hover:border-border transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Termini e Condizioni</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Regole e condizioni per l'utilizzo del sito skylerbertone.com
                </p>
                <Link
                  href="/terms"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Leggi i Termini →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-border transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Cookie Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Informazioni sull'utilizzo dei cookie e tecnologie similari
                </p>
                <Link
                  href="/cookie-policy"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Leggi la Cookie Policy →
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-border transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali
                </p>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Leggi la Privacy Policy →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Skyler Bertone. Tutti i diritti riservati.</p>
            <p className="mt-2">
              Per domande:{" "}
              <a href="mailto:contact@skylerbertone.com" className="text-foreground hover:underline">
                contact@skylerbertone.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
