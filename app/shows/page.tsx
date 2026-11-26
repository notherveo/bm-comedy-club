import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { shows } from "@/lib/shows";
import { EventCalendar } from "@/components/event-calendar";

export default function ShowsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <SiteHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-yellow-400 text-black mb-4">
              Events
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Upcoming Shows
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't miss out on the next comedy night. Get your tickets now!
            </p>
            <Button size="lg">Get Tickets</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-[#2a2a2a] rounded-3xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">Calendar</h2>
                <EventCalendar events={shows} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {shows.map((show) => (
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

            <div>
              <div className="bg-[#2a2a2a] rounded-3xl p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Quick Info</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Venue</h3>
                    <p className="text-gray-300">The Laughing House</p>
                    <p className="text-sm text-gray-400">Los Angeles, CA</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Age Limit</h3>
                    <p className="text-gray-300">21+ with valid ID</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Parking</h3>
                    <p className="text-gray-300">Free parking available</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <p className="text-gray-300">(555) 123-4567</p>
                    <p className="text-sm text-gray-400">info@laughinghouse.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
