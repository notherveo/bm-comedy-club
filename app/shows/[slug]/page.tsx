import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { shows } from "@/lib/shows";

export function generateStaticParams() {
  return shows.map((show) => ({ slug: show.id }));
}

export default async function ShowDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <SiteHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {shows.map((show) => {
            if (show.id !== slug) return null;
            return (
              <div key={show.id}>
                <div className="relative h-96 rounded-3xl overflow-hidden mb-16">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <Badge variant="secondary" className="bg-yellow-400 text-black mb-4">
                      {show.tags[0] || "Live Show"}
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                      {show.title}
                    </h1>
                    <p className="text-xl text-gray-300">{show.comedian}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="bg-[#2a2a2a] rounded-3xl p-8 mb-8">
                      <h2 className="text-2xl font-bold mb-6">Show Details</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Description</h3>
                          <p className="text-gray-300">{show.description}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Comedian</h3>
                          <p className="text-gray-300">{show.comedian}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Tags</h3>
                          <div className="flex gap-2">
                            {show.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-yellow-400 text-black">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#2a2a2a] rounded-3xl p-8">
                      <h2 className="text-2xl font-bold mb-6">Lineup</h2>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gray-700" />
                          <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-400">Opening Act</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gray-700" />
                          <div>
                            <p className="font-semibold">Jane Smith</p>
                            <p className="text-sm text-gray-400">Headliner</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gray-700" />
                          <div>
                            <p className="font-semibold">Mike Johnson</p>
                            <p className="text-sm text-gray-400">Special Guest</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-[#2a2a2a] rounded-3xl p-6 sticky top-24">
                      <h2 className="text-2xl font-bold mb-6">Event Info</h2>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-400">Date</p>
                          <p className="font-semibold">{show.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Time</p>
                          <p className="font-semibold">{show.time}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Venue</p>
                          <p className="font-semibold">{show.venue}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Location</p>
                          <p className="font-semibold">{show.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Price</p>
                          <p className="text-2xl font-bold text-yellow-400">{show.price}</p>
                        </div>
                        <Button size="lg" className="w-full">
                          Get Tickets
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
