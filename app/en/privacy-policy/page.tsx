import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPageEN() {
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
              Back to home
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
                <div className="text-sm text-muted-foreground mb-6">Last updated: August 17, 2025</div>

                <p className="leading-relaxed">
                  This Privacy Policy describes how the skylerbertone.com website (hereinafter "Site") collects, uses
                  and protects users' personal data, in compliance with Regulation (EU) 2016/679 (GDPR) and applicable
                  national legislation.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">1. Data controller</h3>
                  <p className="leading-relaxed">The data controller is:</p>
                  <div className="ml-4">
                    <p className="leading-relaxed">Skyler Bertone</p>
                    <p className="leading-relaxed">Email: contact@skylerbertone.com</p>
                    <p className="leading-relaxed">Website: https://skylerbertone.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">2. Types of data collected</h3>
                  <p className="leading-relaxed">During navigation on the Site, the following may be collected:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Navigation data:</strong> IP address, browser type, operating system, pages visited, time
                      spent, traffic source (through Google Analytics and Google Tag Manager). This data is collected in
                      aggregate and anonymous form when possible.
                    </li>
                    <li>
                      <strong>Cookies and similar technologies:</strong> technical information necessary for Site
                      operation and data for statistical purposes and, with consent, marketing purposes. More details in
                      the Cookie Policy.
                    </li>
                    <li>
                      <strong>Data voluntarily provided by the user:</strong> for example through sending contact
                      emails, applications, information requests or collaboration requests.
                    </li>
                  </ul>
                  <p className="leading-relaxed">
                    The Site does not collect special (sensitive) data as defined in art. 9 of the GDPR.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">3. Purposes and legal basis of processing</h3>
                  <p className="leading-relaxed">Personal data is processed for the following purposes:</p>

                  <div className="space-y-3">
                    <h4 className="font-medium">1. Site operation</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Technical cookies and navigation data necessary for proper Site use.</li>
                      <li>
                        Legal basis: execution of pre-contractual measures (art. 6.1.b GDPR) and legitimate interest
                        (art. 6.1.f GDPR).
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">2. Statistics and analysis</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Use of Google Analytics 4 through Google Tag Manager, with anonymized IP addresses.</li>
                      <li>Legal basis: user consent (art. 6.1.a GDPR).</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">3. Communications with the user</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Management of requests sent via email or contact forms.</li>
                      <li>Legal basis: execution of pre-contractual measures (art. 6.1.b GDPR).</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">4. Marketing and profiling purposes (if applicable)</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Only with prior consent, through third-party cookies or tracking tools.</li>
                      <li>Legal basis: user consent (art. 6.1.a GDPR).</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">4. Processing methods</h3>
                  <p className="leading-relaxed">
                    Data is processed with computer and telematic tools, adopting appropriate security measures to
                    prevent unauthorized access, disclosure, loss or destruction.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">5. Data retention</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Navigation data:</strong> deleted or anonymized within 14 months.
                    </li>
                    <li>
                      <strong>Data collected through Google Analytics:</strong> retained for a maximum of 14 months, as
                      per Google settings.
                    </li>
                    <li>
                      <strong>Data sent via email:</strong> retained for the time necessary to respond to the request
                      and, if necessary, to comply with legal obligations.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">6. Data recipients</h3>
                  <p className="leading-relaxed">Data may be processed by:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Hosting and platform service providers (Framer).</li>
                    <li>Google LLC (USA) for Google Analytics and Google Tag Manager.</li>
                    <li>Any collaborators or consultants who support the Controller in Site management.</li>
                  </ul>
                  <p className="leading-relaxed">
                    In case of extra-EU transfers (e.g. to USA with Google), Standard Contractual Clauses (SCC) approved
                    by the European Commission are adopted as a guarantee.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">7. User rights</h3>
                  <p className="leading-relaxed">The user, as data subject, may exercise the following rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access to personal data (art. 15 GDPR).</li>
                    <li>Rectification of inaccurate data (art. 16 GDPR).</li>
                    <li>Erasure of data ("right to be forgotten", art. 17 GDPR).</li>
                    <li>Restriction of processing (art. 18 GDPR).</li>
                    <li>Data portability (art. 20 GDPR).</li>
                    <li>Objection to processing (art. 21 GDPR).</li>
                    <li>
                      Withdrawal of consent given, without prejudice to the lawfulness of processing based on consent
                      before withdrawal (art. 7 GDPR).
                    </li>
                  </ul>
                  <p className="leading-relaxed">To exercise rights, you can write to: contact@skylerbertone.com.</p>
                  <p className="leading-relaxed">
                    The user also has the right to lodge a complaint with the Data Protection Authority
                    (www.garanteprivacy.it).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">8. Minors under 16 years</h3>
                  <p className="leading-relaxed">
                    The Site is not intended for minors under 16 years. In case personal data of minors is collected
                    without parental consent or consent from those exercising responsibility, the Controller will
                    proceed with their deletion.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">9. Changes to the Privacy Policy</h3>
                  <p className="leading-relaxed">
                    The Controller reserves the right to update or modify this Privacy Policy at any time. Changes will
                    take effect from their publication on the Site.
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
