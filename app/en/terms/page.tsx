import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function TermsPageEN() {
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">Terms and Conditions of Use</h2>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="text-sm text-muted-foreground mb-6">Last updated: August 17, 2025</div>

                <p className="leading-relaxed">
                  Welcome to skylerbertone.com (hereinafter, "Site"), managed by Skyler Bertone (hereinafter, "Owner").
                </p>

                <p className="leading-relaxed">
                  By accessing and browsing the Site, the user agrees to comply with these Terms and Conditions. If you
                  do not intend to accept them, you are invited not to use the Site.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">1. Purpose</h3>
                  <p className="leading-relaxed">
                    The Site has exclusively informative purposes and for presenting the creative and professional work
                    of Skyler Bertone (fashion design, projects, portfolio).
                  </p>
                  <p className="leading-relaxed">This is not an e-commerce site nor a digital services platform.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">2. Intellectual Property</h3>
                  <p className="leading-relaxed">
                    All Site content (texts, images, videos, graphics, projects, logos, trademarks, 3D models,
                    downloadable files and any other material) are protected by copyright and intellectual property
                    laws.
                  </p>
                  <p className="leading-relaxed">Unless otherwise indicated, the rights belong to Skyler Bertone.</p>
                  <p className="leading-relaxed">
                    Reproduction, distribution, public communication, publication or any other unauthorized use of Site
                    content is prohibited, except with prior written consent from the Owner.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">3. Permitted Use of the Site</h3>
                  <p className="leading-relaxed">
                    The user undertakes to use the Site in a lawful, correct manner and respectful of current
                    regulations.
                  </p>
                  <p className="leading-relaxed">It is particularly prohibited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>use the Site for fraudulent or illegal purposes;</li>
                    <li>
                      attempt to gain unauthorized access to restricted areas, servers or systems connected to the Site;
                    </li>
                    <li>compromise the operation or security of the Site.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">4. Limitation of Liability</h3>
                  <p className="leading-relaxed">
                    The Owner undertakes to keep Site content accurate and updated, but does not guarantee the absence
                    of errors, inaccuracies or service interruptions.
                  </p>
                  <p className="leading-relaxed">The Owner is not responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>any direct or indirect damages arising from use of the Site;</li>
                    <li>content of external websites linked through links;</li>
                    <li>any malfunctions due to technical, network or hosting problems.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">5. External Links</h3>
                  <p className="leading-relaxed">
                    The Site may contain links to third-party websites. The inclusion of such links is for informational
                    or educational purposes and does not imply any responsibility or approval by the Owner.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">6. Privacy and Cookies</h3>
                  <p className="leading-relaxed">
                    The processing of personal data takes place in compliance with Regulation (EU) 2016/679 (GDPR) and
                    current legislation.
                  </p>
                  <p className="leading-relaxed">
                    For more information, please consult our{" "}
                    <Link href="/en/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/en/cookie-policy" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">7. Changes to Terms and Conditions</h3>
                  <p className="leading-relaxed">
                    The Owner reserves the right to update or modify these Terms and Conditions at any time. Changes
                    will take effect from their publication on the Site.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">8. Applicable Law and Competent Court</h3>
                  <p className="leading-relaxed">These Terms and Conditions are governed by Italian law.</p>
                  <p className="leading-relaxed">
                    For any dispute relating to the use of the Site, the exclusive jurisdiction is the Court of [insert
                    city of residence or domicile of the owner].
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">9. Contact</h3>
                  <p className="leading-relaxed">
                    For any information or request relating to these Terms and Conditions, the user can contact:
                  </p>
                  <div className="ml-4">
                    <p className="leading-relaxed">Skyler Bertone</p>
                    <p className="leading-relaxed">Email: contact@skylerbertone.com</p>
                    <p className="leading-relaxed">Website: https://skylerbertone.com</p>
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
