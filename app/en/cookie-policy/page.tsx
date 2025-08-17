import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPageEN() {
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">Cookie Policy</h2>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="text-sm text-muted-foreground mb-6">Last updated: August 17, 2025</div>

                <p className="leading-relaxed">
                  This document describes how cookies and similar technologies are used on the skylerbertone.com website
                  (hereinafter "Site").
                </p>

                <p className="leading-relaxed">
                  This Cookie Policy integrates our Privacy Policy and must be read together with it.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">1. What are cookies</h3>
                  <p className="leading-relaxed">
                    Cookies are small text files that are stored on the user's device when visiting a website. They
                    serve to make the browsing experience more efficient and to provide the site owner with certain
                    information.
                  </p>
                  <p className="leading-relaxed">
                    In addition to cookies, the Site may use similar technologies (e.g. pixels, tags, scripts, local
                    storage) for similar purposes.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">2. Types of cookies used</h3>

                  <div className="space-y-3">
                    <h4 className="font-medium">a) Technical cookies (necessary)</h4>
                    <p className="leading-relaxed">
                      These cookies are essential for the operation of the Site and do not require user consent.
                    </p>
                    <p className="leading-relaxed">
                      Examples: session cookies, cookies to save browsing preferences, cookies for managing the consent
                      banner.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">b) Analytical cookies</h4>
                    <p className="leading-relaxed">
                      We use Google Analytics 4, through Google Tag Manager, to collect information in aggregate form
                      about Site usage (pages visited, time spent, traffic source).
                    </p>
                    <p className="leading-relaxed">
                      These cookies are configured to anonymize users' IP addresses (IP anonymization function) and do
                      not allow direct identification.
                    </p>
                    <p className="leading-relaxed">Their use occurs only with user consent.</p>
                    <p className="leading-relaxed">
                      Provider: Google LLC – Privacy Policy: https://policies.google.com/privacy – Opt-out:
                      https://tools.google.com/dlpage/gaoptout
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">c) Profiling / marketing cookies</h4>
                    <p className="leading-relaxed">
                      The Site does not directly use profiling cookies for advertising purposes. However, through Google
                      Tag Manager, third-party scripts may be integrated which, with consent, could install cookies to
                      personalize ads or track marketing activities.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">3. Consent management</h3>
                  <p className="leading-relaxed">
                    Upon first access to the Site, the user sees a banner that allows them to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>accept all cookies,</li>
                    <li>reject non-necessary cookies,</li>
                    <li>customize preferences.</li>
                  </ul>
                  <p className="leading-relaxed">
                    Choices are recorded and can be modified at any time through the appropriate "Manage cookie
                    preferences" link available at the bottom of the page.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">4. How to disable cookies from the browser</h3>
                  <p className="leading-relaxed">
                    Users can manage or delete cookies directly from their browser settings. Below are links to
                    instructions for major browsers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chrome</li>
                    <li>Firefox</li>
                    <li>Safari</li>
                    <li>Edge</li>
                  </ul>
                  <p className="leading-relaxed">
                    Disabling some cookies may compromise the proper functioning of the Site.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">5. Data recipients</h3>
                  <p className="leading-relaxed">
                    Data collected through cookies may be processed by third-party providers who support us in Site
                    management, as well as by Google LLC (USA) within the scope of Google Analytics and Google Tag
                    Manager services.
                  </p>
                  <p className="leading-relaxed">
                    In case of extra-EU transfers, the guarantees provided by the GDPR are adopted (e.g. Standard
                    Contractual Clauses).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">6. Data controller</h3>
                  <p className="leading-relaxed">The data controller is:</p>
                  <div className="ml-4">
                    <p className="leading-relaxed">Skyler Bertone</p>
                    <p className="leading-relaxed">Email: contact@skylerbertone.com</p>
                    <p className="leading-relaxed">Website: https://skylerbertone.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">7. Updates</h3>
                  <p className="leading-relaxed">
                    This Cookie Policy may be updated to adapt to regulatory changes or new technical implementations of
                    the Site. Users are invited to consult it periodically.
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
