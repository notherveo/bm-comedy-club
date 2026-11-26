import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { shows } from "@/lib/shows";
import { comedians } from "@/lib/comedians";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <SiteHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-yellow-400 text-black mb-4">
              Live Comedy
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The Laughing House
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Your home for stand-up comedy and live entertainment. Join us for an unforgettable night of laughter.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Tickets</Button>
              <Button size="lg" variant="outline">View Shows</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shows.slice(0, 2).map((show) => (
              <div key={show.id} className="show-card bg-[#2a2a2a] rounded-3xl overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold">{show.title}</h3>
                    <p className="text-sm text-gray-300">{show.comedian}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{show.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-yellow-400">{show.price}</span>
                    <Button size="sm">Book Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Upcoming Shows</h2>
            <p className="text-gray-300">Don't miss out on the next comedy night!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shows.slice(2, 5).map((show) => (
              <div key={show.id} className="show-card bg-[#2a2a2a] rounded-3xl overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold">{show.title}</h3>
                    <p className="text-sm text-gray-300">{show.comedian}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{show.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-yellow-400">{show.price}</span>
                    <Button size="sm">Book Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Comedians</h2>
            <p className="text-gray-300">The talent behind the laughter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comedians.slice(0, 3).map((comedian) => (
              <div key={comedian.id} className="comic-card bg-[#2a2a2a] rounded-3xl overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={comedian.image}
                    alt={comedian.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold">{comedian.name}</h3>
                    <p className="text-sm text-gray-300">{comedian.style}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{comedian.bio}</p>
                  <Button variant="outline" size="sm">View Profile</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Venue</h2>
            <p className="text-gray-300">The perfect setting for comedy</p>
          </div>

          <div className="bg-[#2a2a2a] rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://picsum.photos/seed/venue/800/600"
                  alt="Venue"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">The Laughing House</h3>
                <p className="text-gray-300 mb-4">
                  Located in the heart of Los Angeles, The Laughing House is the perfect venue for comedy lovers. Our intimate setting ensures that you get the best experience possible.
                </p>
                <div className="flex gap-4">
                  <Button size="lg">Get Directions</Button>
                  <Button size="lg" variant="outline">View Gallery</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Laugh?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us for an unforgettable night of comedy and entertainment.
          </p>
          <Button size="lg">Get Tickets</Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
