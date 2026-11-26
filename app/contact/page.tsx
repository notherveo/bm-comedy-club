"use client";
import * as React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Marquee } from "@/components/marquee";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <SiteHeader />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-yellow-400 text-black mb-4">
              Contact
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have a question or want to book a show? We'd love to hear from you.
            </p>
            <Button size="lg">Send Message</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-[#2a2a2a] border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-[#2a2a2a] rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="font-semibold">123 Comedy Lane, Los Angeles, CA 90001</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-semibold">(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">info@laughinghouse.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Hours</p>
                    <p className="font-semibold">Mon-Sun: 6:0 PM - 2:0 AM</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#2a2a2a] rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Book a Show
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Artist Booking
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    Venue Rental
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </div>
              </div>

              <Marquee
                items={["Contact Us", "Get Tickets", "Book a Show", "Artist Booking"]}
                className="bg-[#2a2a2a] rounded-3xl py-8"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
