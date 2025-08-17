import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">Privacy Policy</h2>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="text-sm text-muted-foreground mb-6">Ultimo aggiornamento: 17 agosto 2025</div>

                <p className="leading-relaxed">
                  La presente Privacy Policy descrive le modalità con cui il sito skylerbertone.com (di seguito "Sito")
                  raccoglie, utilizza e protegge i dati personali degli utenti, in conformità al Regolamento (UE)
                  2016/679 (GDPR) e alla normativa nazionale applicabile.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">1. Titolare del trattamento</h3>
                  <div className="ml-4">
                    <p className="leading-relaxed">Il titolare del trattamento è:</p>
                    <p className="leading-relaxed">Skyler Bertone</p>
                    <p className="leading-relaxed">Email: contact@skylerbertone.com</p>
                    <p className="leading-relaxed">Sito: https://skylerbertone.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">2. Tipologie di dati raccolti</h3>
                  <p className="leading-relaxed">Durante la navigazione sul Sito possono essere raccolti:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine
                      visitate, tempo di permanenza, provenienza del traffico (tramite Google Analytics e Google Tag
                      Manager). Questi dati sono raccolti in forma aggregata e anonima quando possibile.
                    </li>
                    <li>
                      <strong>Cookie e tecnologie similari:</strong> informazioni tecniche necessarie al funzionamento
                      del Sito e dati per finalità statistiche e, previo consenso, di marketing. Maggiori dettagli nella{" "}
                      <Link href="/cookie-policy" className="text-primary hover:underline">
                        Cookie Policy
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>Dati forniti volontariamente dall'utente:</strong> ad esempio tramite l'invio di email di
                      contatto, candidature, richieste di informazioni o collaborazione.
                    </li>
                  </ul>
                  <p className="leading-relaxed">
                    Il Sito non raccoglie dati particolari (sensibili) ai sensi dell'art. 9 del GDPR.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">3. Finalità e base giuridica del trattamento</h3>
                  <p className="leading-relaxed">I dati personali sono trattati per le seguenti finalità:</p>

                  <div className="ml-4 space-y-4">
                    <div>
                      <h4 className="font-medium">1. Funzionamento del Sito</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Cookie tecnici e dati di navigazione necessari al corretto utilizzo del Sito.</li>
                        <li>
                          Base giuridica: esecuzione di misure precontrattuali (art. 6.1.b GDPR) e interesse legittimo
                          (art. 6.1.f GDPR).
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">2. Statistiche e analisi</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          Utilizzo di Google Analytics 4 tramite Google Tag Manager, con indirizzi IP anonimizzati.
                        </li>
                        <li>Base giuridica: consenso dell'utente (art. 6.1.a GDPR).</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">3. Comunicazioni con l'utente</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Gestione delle richieste inviate tramite email o form di contatto.</li>
                        <li>Base giuridica: esecuzione di misure precontrattuali (art. 6.1.b GDPR).</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium">4. Finalità di marketing e profilazione (eventuale)</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Solo previo consenso, attraverso cookie di terze parti o strumenti di tracciamento.</li>
                        <li>Base giuridica: consenso dell'utente (art. 6.1.a GDPR).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">4. Modalità del trattamento</h3>
                  <p className="leading-relaxed">
                    I dati sono trattati con strumenti informatici e telematici, adottando misure di sicurezza idonee a
                    prevenire accessi non autorizzati, divulgazione, perdita o distruzione.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">5. Conservazione dei dati</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Dati di navigazione:</strong> cancellati o anonimizzati entro 14 mesi.
                    </li>
                    <li>
                      <strong>Dati raccolti tramite Google Analytics:</strong> conservati per un massimo di 14 mesi,
                      come da impostazioni di Google.
                    </li>
                    <li>
                      <strong>Dati inviati tramite email:</strong> conservati per il tempo necessario a rispondere alla
                      richiesta e, se necessario, per adempiere a obblighi legali.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">6. Destinatari dei dati</h3>
                  <p className="leading-relaxed">I dati possono essere trattati da:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fornitori di servizi di hosting e piattaforma (Framer).</li>
                    <li>Google LLC (USA) per Google Analytics e Google Tag Manager.</li>
                    <li>Eventuali collaboratori o consulenti che supportano il Titolare nella gestione del Sito.</li>
                  </ul>
                  <p className="leading-relaxed">
                    In caso di trasferimenti extra-UE (es. verso USA con Google), vengono adottate le Clausole
                    Contrattuali Standard (SCC) approvate dalla Commissione Europea come garanzia.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">7. Diritti dell'utente</h3>
                  <p className="leading-relaxed">
                    L'utente, in qualità di interessato, può esercitare i seguenti diritti:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Accesso ai propri dati personali (art. 15 GDPR).</li>
                    <li>Rettifica dei dati inesatti (art. 16 GDPR).</li>
                    <li>Cancellazione dei dati ("diritto all'oblio", art. 17 GDPR).</li>
                    <li>Limitazione del trattamento (art. 18 GDPR).</li>
                    <li>Portabilità dei dati (art. 20 GDPR).</li>
                    <li>Opposizione al trattamento (art. 21 GDPR).</li>
                    <li>
                      Revoca del consenso prestato, senza pregiudicare la liceità del trattamento basato sul consenso
                      prima della revoca (art. 7 GDPR).
                    </li>
                  </ul>
                  <p className="leading-relaxed">
                    Per esercitare i diritti è possibile scrivere a: contact@skylerbertone.com.
                  </p>
                  <p className="leading-relaxed">
                    L'utente ha inoltre diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati
                    Personali (www.garanteprivacy.it).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">8. Minori di 16 anni</h3>
                  <p className="leading-relaxed">
                    Il Sito non è rivolto a minori di 16 anni. Nel caso in cui vengano raccolti dati personali di minori
                    senza il consenso dei genitori o di chi ne esercita la responsabilità, il Titolare provvederà alla
                    loro cancellazione.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">9. Modifiche alla Privacy Policy</h3>
                  <p className="leading-relaxed">
                    Il Titolare si riserva il diritto di aggiornare o modificare la presente Privacy Policy in qualsiasi
                    momento. Le modifiche avranno effetto dalla loro pubblicazione sul Sito.
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
