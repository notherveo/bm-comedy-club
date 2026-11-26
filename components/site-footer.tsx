import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer bg-[#2a2a2a] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              The Laughing House
            </Link>
            <p className="text-gray-400 mt-4">
              Your home for stand-up comedy and live entertainment.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Shows", "Comedians", "Venues", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Comedy Lane</li>
              <li>Los Angeles, CA 90001</li>
              <li>(555) 123-4567</li>
              <li>info@laughinghouse.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Laughing House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
