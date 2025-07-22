// Support page
// frontend/pages/support.js
"use client"

import { Mail, Phone, MessageSquare, HelpCircle } from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A237E]">Contact & Support</h1>
          <p className="text-lg text-gray-700 mt-2">We&apos;re here to help you with any questions or issues.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#1A237E]">Contact Methods</h2>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-gray-600 mt-1">Send us an email and we&apos;ll respond within 24 hours</p>
                  <a href="mailto:support@petconnect.com" className="text-purple-700 hover:underline mt-2 inline-block">
                    support@petconnect.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone Support</h3>
                  <p className="text-gray-600 mt-1">Call us during business hours (9AM-5PM)</p>
                  <a href="tel:+18005551234" className="text-purple-700 hover:underline mt-2 inline-block">
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Help Resources */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#1A237E]">Help Resources</h2>

            <Link href="/faq" className="p-6 border rounded-lg hover:shadow-md transition-shadow block">
              <div className="flex items-start space-x-4">
                <HelpCircle className="h-6 w-6 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-semibold">FAQs</h3>
                  <p className="text-gray-600 mt-1">Find answers to common questions</p>
                </div>
              </div>
            </Link>

            <Link href="/contact-form" className="p-6 border rounded-lg hover:shadow-md transition-shadow block">
              <div className="flex items-start space-x-4">
                <MessageSquare className="h-6 w-6 text-purple-700 mt-1" />
                <div>
                  <h3 className="font-semibold">Contact Form</h3>
                  <p className="text-gray-600 mt-1">Send us a message directly from our platform</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="font-semibold text-red-800">Emergency Support</h3>
          <p className="text-red-700 mt-2">
            For urgent pet emergencies, please contact your local veterinarian or animal hospital immediately.
          </p>
          <p className="text-red-700 mt-1">
            If you believe a pet is in immediate danger, call your local animal control or emergency services.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
