import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">Cookie Policy</h2>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="text-sm text-muted-foreground mb-6">Ultimo aggiornamento: 17 agosto 2025</div>

                <p className="leading-relaxed">
                  Il presente documento descrive le modalità di utilizzo dei cookie e di tecnologie similari sul sito
                  skylerbertone.com (di seguito "Sito").
                </p>

                <p className="leading-relaxed">
                  Questa Cookie Policy integra la nostra Privacy Policy e deve essere letta insieme ad essa.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">1. Cosa sono i cookie</h3>
                  <p className="leading-relaxed">
                    I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente quando
                    visita un sito web. Servono a rendere l'esperienza di navigazione più efficiente e a fornire al
                    titolare del sito determinate informazioni.
                  </p>
                  <p className="leading-relaxed">
                    Oltre ai cookie, il Sito può utilizzare tecnologie similari (ad es. pixel, tag, script, local
                    storage) per scopi analoghi.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">2. Tipologie di cookie utilizzati</h3>

                  <div className="ml-4 space-y-4">
                    <div>
                      <h4 className="font-medium">a) Cookie tecnici (necessari)</h4>
                      <p className="leading-relaxed">
                        Questi cookie sono indispensabili per il funzionamento del Sito e non richiedono il consenso
                        dell'utente.
                      </p>
                      <p className="leading-relaxed">
                        Esempi: cookie di sessione, cookie per salvare le preferenze di navigazione, cookie per la
                        gestione del banner dei consensi.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">b) Cookie analitici</h4>
                      <p className="leading-relaxed">
                        Utilizziamo Google Analytics 4, attraverso Google Tag Manager, per raccogliere informazioni in
                        forma aggregata sull'uso del Sito (pagine visitate, tempo di permanenza, provenienza del
                        traffico).
                      </p>
                      <p className="leading-relaxed">
                        Questi cookie sono configurati in modo da anonimizzare l'indirizzo IP degli utenti (funzione IP
                        anonymization) e non consentono l'identificazione diretta.
                      </p>
                      <p className="leading-relaxed">Il loro utilizzo avviene solo previo consenso dell'utente.</p>
                      <p className="leading-relaxed">
                        Fornitore: Google LLC – Privacy Policy: https://policies.google.com/privacy – Opt-out:
                        https://tools.google.com/dlpage/gaoptout
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">c) Cookie di profilazione / marketing</h4>
                      <p className="leading-relaxed">
                        Il Sito non utilizza direttamente cookie di profilazione per finalità pubblicitarie. Tuttavia,
                        tramite Google Tag Manager possono essere integrati script di terze parti che, previo consenso,
                        potrebbero installare cookie per personalizzare annunci o tracciare attività di marketing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">3. Gestione del consenso</h3>
                  <p className="leading-relaxed">
                    Al primo accesso al Sito, l'utente visualizza un banner che consente di:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>accettare tutti i cookie,</li>
                    <li>rifiutare i cookie non necessari,</li>
                    <li>personalizzare le preferenze.</li>
                  </ul>
                  <p className="leading-relaxed">
                    Le scelte vengono registrate e possono essere modificate in qualsiasi momento tramite l'apposito
                    link "Gestisci preferenze cookie" disponibile a fondo pagina.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">4. Come disabilitare i cookie dal browser</h3>
                  <p className="leading-relaxed">
                    L'utente può gestire o eliminare i cookie direttamente dalle impostazioni del proprio browser. Di
                    seguito i link alle istruzioni per i principali browser:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chrome</li>
                    <li>Firefox</li>
                    <li>Safari</li>
                    <li>Edge</li>
                  </ul>
                  <p className="leading-relaxed">
                    La disabilitazione di alcuni cookie potrebbe compromettere il corretto funzionamento del Sito.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">5. Destinatari dei dati</h3>
                  <p className="leading-relaxed">
                    I dati raccolti tramite i cookie possono essere trattati da fornitori terzi che ci supportano nella
                    gestione del Sito, nonché da Google LLC (USA) nell'ambito dei servizi di Google Analytics e Google
                    Tag Manager.
                  </p>
                  <p className="leading-relaxed">
                    In caso di trasferimenti extra-UE, sono adottate le garanzie previste dal GDPR (es. Clausole
                    Contrattuali Standard).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">6. Titolare del trattamento</h3>
                  <div className="ml-4">
                    <p className="leading-relaxed">Il titolare del trattamento è:</p>
                    <p className="leading-relaxed">Skyler Bertone</p>
                    <p className="leading-relaxed">Email: contact@skylerbertone.com</p>
                    <p className="leading-relaxed">Sito: https://skylerbertone.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">7. Aggiornamenti</h3>
                  <p className="leading-relaxed">
                    La presente Cookie Policy potrà essere aggiornata per adeguarsi a cambiamenti normativi o a nuove
                    implementazioni tecniche del Sito. L'utente è invitato a consultarla periodicamente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
