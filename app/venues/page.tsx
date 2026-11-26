import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";

export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <SiteHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-yellow-400 text-black mb-4">
              Location
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              The Venue
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The perfect setting for an unforgettable night of comedy.
            </p>
            <Button size="lg">Get Directions</Button>
          </div>

          <div className="bg-[#2a2a2a] rounded-3xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://picsum.photos/seed/venue/800/600"
                  alt="Venue"
                  className="w-full rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">The Laughing House</h2>
                <p className="text-gray-300 mb-4">
                  Located in the heart of Los Angeles, The Laughing House is the perfect venue for comedy lovers. Our intimate setting ensures that you get the best experience possible.
                </p>
                <div className="space-y-2 text-gray-400">
                  <p>📍 123 Comedy Lane, Los Angeles, CA 90001</p>
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ info@laughinghouse.com</p>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button size="lg">Get Directions</Button>
                  <Button size="lg" variant="outline">View Gallery</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <Marquee
              items={["The Laughing House", "Los Angeles", "Comedy Venue", "Live Entertainment"]}
              className="bg-[#2a2a2a] rounded-3xl py-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2a2a2a] rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">Capacity</h3>
              <p className="text-4xl font-bold text-yellow-400 mb-4">500</p>
              <p className="text-gray-300">Perfect for intimate shows and large events</p>
            </div>
            <div className="bg-[#2a2a2a] rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">Parking</h3>
              <p className="text-4xl font-bold text-yellow-400 mb-4">Free</p>
              <p className="text-gray-300">Ample parking available for all guests</p>
            </div>
            <div className="bg-[#2a2a2a] rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-4xl font-bold text-yellow-400 mb-4">Full</p>
              <p className="text-gray-300">Fully accessible venue for all guests</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
