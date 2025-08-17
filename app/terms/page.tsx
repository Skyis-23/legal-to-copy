import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/logo.svg" alt="Skyler Bertone" width={40} height={40} className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-semibold">Skyler Bertone</h1>
                
              </div>
            </div>
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alla home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/40">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Termini e Condizioni d'Uso</h2>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="text-sm text-muted-foreground mb-6">Ultimo aggiornamento: 17 agosto 2025</div>

                <p className="leading-relaxed">
                  Benvenuto su skylerbertone.com (di seguito, "Sito"), gestito da Skyler Bertone (di seguito,
                  "Titolare").
                </p>

                <p className="leading-relaxed">
                  Accedendo e navigando sul Sito, l'utente accetta di rispettare i presenti Termini e Condizioni. Se non
                  intende accettarli, l'utente è invitato a non utilizzare il Sito.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">1. Oggetto</h3>
                  <p className="leading-relaxed">
                    Il Sito ha finalità esclusivamente informative e di presentazione del lavoro creativo e
                    professionale di Skyler Bertone (fashion design, progetti, portfolio).
                  </p>
                  <p className="leading-relaxed">
                    Non si tratta di un sito di e-commerce né di una piattaforma di servizi digitali.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">2. Proprietà intellettuale</h3>
                  <p className="leading-relaxed">
                    Tutti i contenuti del Sito (testi, immagini, video, grafiche, progetti, loghi, marchi, modelli 3D,
                    file scaricabili e qualsiasi altro materiale) sono protetti dalle leggi sul diritto d'autore e
                    proprietà intellettuale.
                  </p>
                  <p className="leading-relaxed">Salvo diversa indicazione, i diritti appartengono a Skyler Bertone.</p>
                  <p className="leading-relaxed">
                    È vietata la riproduzione, distribuzione, comunicazione al pubblico, pubblicazione o qualsiasi altro
                    utilizzo non autorizzato dei contenuti del Sito, se non previo consenso scritto del Titolare.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">3. Uso consentito del Sito</h3>
                  <p className="leading-relaxed">
                    L'utente si impegna a utilizzare il Sito in modo lecito, corretto e rispettoso delle normative
                    vigenti.
                  </p>
                  <p className="leading-relaxed">È vietato in particolare:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>utilizzare il Sito per finalità fraudolente o illecite;</li>
                    <li>
                      tentare di accedere in modo non autorizzato alle aree riservate, ai server o ai sistemi collegati
                      al Sito;
                    </li>
                    <li>compromettere il funzionamento o la sicurezza del Sito.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">4. Limitazione di responsabilità</h3>
                  <p className="leading-relaxed">
                    Il Titolare si impegna a mantenere i contenuti del Sito accurati e aggiornati, ma non garantisce
                    l'assenza di errori, inesattezze o interruzioni del servizio.
                  </p>
                  <p className="leading-relaxed">Il Titolare non è responsabile per:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>eventuali danni diretti o indiretti derivanti dall'uso del Sito;</li>
                    <li>contenuti di siti web esterni collegati tramite link;</li>
                    <li>eventuali malfunzionamenti dovuti a problemi tecnici, di rete o di hosting.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">5. Link esterni</h3>
                  <p className="leading-relaxed">
                    Il Sito può contenere collegamenti a siti web di terzi. L'inserimento di tali link ha scopo
                    informativo o di approfondimento e non implica alcuna responsabilità o approvazione da parte del
                    Titolare.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">6. Privacy e cookie</h3>
                  <p className="leading-relaxed">
                    Il trattamento dei dati personali avviene nel rispetto del Regolamento (UE) 2016/679 (GDPR) e della
                    normativa vigente.
                  </p>
                  <p className="leading-relaxed">
                    Per maggiori informazioni, consultare la nostra{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    e la{" "}
                    <Link href="/cookie-policy" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">7. Modifiche ai Termini e Condizioni</h3>
                  <p className="leading-relaxed">
                    Il Titolare si riserva il diritto di aggiornare o modificare i presenti Termini e Condizioni in
                    qualsiasi momento. Le modifiche avranno effetto dalla loro pubblicazione sul Sito.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">8. Legge applicabile e foro competente</h3>
                  <p className="leading-relaxed">
                    I presenti Termini e Condizioni sono disciplinati dalla legge italiana.
                  </p>
                  <p className="leading-relaxed">
                    Per qualsiasi controversia relativa all'uso del Sito, la competenza esclusiva è del Foro di
                    [inserisci città di residenza o domicilio del titolare].
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">9. Contatti</h3>
                  <p className="leading-relaxed">
                    Per qualsiasi informazione o richiesta relativa ai presenti Termini e Condizioni, l'utente può
                    contattare:
                  </p>
                  <div className="ml-4">
                    <p className="leading-relaxed">Skyler Bertone</p>
                    <p className="leading-relaxed">Email: contact@skylerbertone.com</p>
                    <p className="leading-relaxed">Sito: https://skylerbertone.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
