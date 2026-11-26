import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { comedians } from "@/lib/comedians";
import { ComicCard } from "@/components/comic-card";

export default function ComediansPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <SiteHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-yellow-400 text-black mb-4">
              Talent
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Comedians
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Meet the talented comedians who bring the laughter to The Laughing House.
            </p>
            <Button size="lg">View All Comedians</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comedians.map((comedian) => (
              <ComicCard key={comedian.id} comedian={comedian} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
