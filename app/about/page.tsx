import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <SiteHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-yellow-400 text-black mb-4">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The Laughing House
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your home for stand-up comedy and live entertainment since 2024.
            </p>
            <Button size="lg">Get in Touch</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <Reveal>
              <img
                src="https://picsum.photos/seed/about/800/600"
                alt="About"
                className="rounded-3xl"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  The Laughing House was founded with a simple mission: to bring the best stand-up comedy and live entertainment to Los Angeles. What started as a small comedy club has grown into a premier venue for comedy lovers.
                </p>
                <p className="text-gray-300 mb-4">
                  We believe in creating an intimate atmosphere where comedians can showcase their talent and audiences can enjoy an unforgettable night of laughter. Our talented lineup of comedians brings a diverse range of styles and perspectives to every show.
                </p>
                <p className="text-gray-300 mb-6">
                  Whether you're a seasoned comedy fan or new to the scene, The Laughing House has something for everyone. Join us for an evening of laughter, entertainment, and good times.
                </p>
                <Button size="lg">Learn More</Button>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.4}>
              <div className="bg-[#2a2a2a] rounded-3xl p-8 text-center">
                <h3 className="text-4xl font-bold text-yellow-400 mb-4">5+</h3>
                <p className="text-gray-300">Years of Comedy</p>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="bg-[#2a2a2a] rounded-3xl p-8 text-center">
                <h3 className="text-4xl font-bold text-yellow-400 mb-4">100+</h3>
                <p className="text-gray-300">Shows Per Year</p>
              </div>
            </Reveal>
            <Reveal delay={0.8}>
              <div className="bg-[#2a2a2a] rounded-3xl p-8 text-center">
                <h3 className="text-4xl font-bold text-yellow-400 mb-4">50+</h3>
                <p className="text-gray-300">Talented Comedians</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
