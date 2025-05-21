"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* SIDAYA */}
          <div>
            <h3 className="font-medium text-lg mb-4">SIDAYA</h3>
            <nav className="space-y-2">
              <Link href="/about-us" className="block hover:underline">
                About us
              </Link>
              <Link href="/forms" className="block hover:underline">
                Forms
              </Link>
              <Link href="/scams-and-identity-theft" className="block hover:underline">
                Scams
              </Link>
              <Link href="/media" className="block hover:underline">
                Media
              </Link>
              <Link href="https://ministers.dss.gov.au/katy-gallagher" className="block hover:underline">
                Our Minister
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <nav className="space-y-2">
              <Link href="/contact-us" className="block hover:underline">
                Contact us
              </Link>
              <Link href="https://findus.servicesaustralia.gov.au" className="block hover:underline">
                Find us
              </Link>
              <Link href="/complaints-and-feedback" className="block hover:underline">
                Complaints and feedback
              </Link>
            </nav>
          </div>

          {/* Businesses */}
          <div>
            <h3 className="font-medium text-lg mb-4">Businesses</h3>
            <nav className="space-y-2">
              <Link href="/proda-provider-digital-access" className="block hover:underline">
                PRODA
              </Link>
              <Link href="/business-hub" className="block hover:underline">
                Business Hub
              </Link>
              <Link href="/paid-parental-leave-scheme-for-employers" className="block hover:underline">
                Paid Parental Leave scheme for employers
              </Link>
            </nav>
          </div>

          {/* Community groups */}
          <div>
            <h3 className="font-medium text-lg mb-4">Community groups</h3>
            <nav className="space-y-2">
              <Link href="/community-resources-and-help" className="block hover:underline">
                Community resources and help
              </Link>
              <Link href="/providing-voluntary-work-opportunities" className="block hover:underline">
                Providing voluntary work opportunities
              </Link>
              <Link href="/family-organisations" className="block hover:underline">
                Family organisations
              </Link>
            </nav>
          </div>

          {/* Health professionals */}
          <div>
            <h3 className="font-medium text-lg mb-4">Health professionals</h3>
            <nav className="space-y-2">
              <Link href="/patient-care" className="block hover:underline">
                Patient care
              </Link>
              <Link href="/payments-and-claims-for-your-patients" className="block hover:underline">
                Payments and claims
              </Link>
              <Link href="/practice-administration" className="block hover:underline">
                Practice administration
              </Link>
              <Link href="/individual-practitioners" className="block hover:underline">
                Individual practitioners
              </Link>
              <Link href="/resources-for-health-professionals" className="block hover:underline">
                Resources for health professionals
              </Link>
            </nav>
          </div>
        </div>

        {/* Footer bottom links */}
        <div className="flex flex-wrap gap-4 mt-12 border-t border-gray-800 pt-6">
          <Link href="/your-right-to-privacy" className="text-sm hover:underline">
            Privacy
          </Link>
          <Link href="/site-notices" className="text-sm hover:underline">
            Site notices
          </Link>
          <Link href="/accessibility" className="text-sm hover:underline">
            Accessibility
          </Link>
          <Link href="/access-to-information" className="text-sm hover:underline">
            Access to information
          </Link>
          <Link href="/accessing-our-services" className="text-sm hover:underline">
            Accessing our services
          </Link>
        </div>

        {/* Languages and Social Media */}
        <div className="flex flex-col md:flex-row justify-between mt-12">
          <div>
            <h3 className="font-medium mb-4">Languages</h3>
            <Link href="/information-your-language" className="inline-flex items-center hover:underline">
              <span className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#333" />
                </svg>
              </span>
              Español
            </Link>
          </div>

          <div>
            <h3 className="font-medium mb-4 mt-6 md:mt-0">Follow us</h3>
            <div className="flex space-x-4">
              <Link href="/connect-with-us-social-media" className="hover:opacity-80">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="/connect-with-us-social-media" className="hover:opacity-80">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="/connect-with-us-social-media" className="hover:opacity-80">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="/connect-with-us-social-media" className="hover:opacity-80">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright and Acknowledgement */}
        <div className="mt-12 text-sm">
          <p className="mb-4">
            Sidaya acknowledges the Traditional Custodians of the lands we live on. We pay our
            respects to all Elders, past and present, of all Aboriginal and Torres Strait Islander nations.
          </p>
          <div className="flex items-center">
            <svg width="30" height="20" viewBox="0 0 30 20">
              <image href="https://ext.same-assets.com/1015004795/2895575613.svg" width="30" height="20" />
            </svg>
            <svg width="100" height="20" className="mx-2">
              <image href="https://ext.same-assets.com/1015004795/3160495444.svg" width="100" height="20" />
            </svg>
            <svg width="30" height="20">
              <image href="https://ext.same-assets.com/1015004795/2771603144.svg" width="30" height="20" />
            </svg>
            <span className="ml-2">ABN - 90794605008</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
