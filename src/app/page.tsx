import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">SIDAYA</h1>
              <p className="text-xl mb-6">We deliver government payments and services</p>
              <div className="flex items-center">
                <Button className="bg-[#FFB200] text-white rounded-none hover:bg-gray-800">
                  Listen <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L93.3 75H6.7L50 0Z" fill="#63d3eb" />
                <path d="M50 100L6.7 25H93.3L50 100Z" fill="#63d3eb" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What can we help with section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">What can we help with?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Raising kids */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/3547723459/3406953177.svg" alt="Raising kids" className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-bold mb-2">Raising kids</h3>
                <p className="mb-4">Payments and services to help with the cost of raising a child. Information about child care and child support. Help for teenagers becoming independent.</p>
                <Link href="/raising-kids" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Living arrangements */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/1015004795/260646423.svg" alt="Living arrangements" className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-bold mb-2">Living arrangements</h3>
                <p className="mb-4">Information about moving house, relationship changes and moving to Australia. Help and support if you're affected by natural disasters or family and domestic violence.</p>
                <Link href="/living-arrangements" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Ageing */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/1015004795/4061061103.svg" alt="Ageing" className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ageing</h3>
                <p className="mb-4">Payments and services for people retiring or accessing aged care. Help for people who care for older Australians.</p>
                <Link href="/ageing" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Work */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/3547723459/2781757559.svg" alt="Work" className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-bold mb-2">Work</h3>
                <p className="mb-4">Payments and services if you're unemployed, looking for work or can't work while you're sick or injured. Help managing your money. Support for businesses.</p>
                <Link href="/work" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/3547723459/2365500772.svg" alt="Education" className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="mb-4">Support and payments while you study, retrain or complete an apprenticeship.</p>
                <Link href="/education" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Health and disability */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/3547723459/4023139803.svg" alt="Health and disability" className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-bold mb-2">Health and disability</h3>
                <p className="mb-4">Accessing Medicare and some health services at low or no cost. Help for people with disability or if you're caring for someone. What to do when a loved one dies.</p>
                <Link href="/health-and-disability" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important topics section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Important topics</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Scams and identity theft */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/1015004795/548389142.svg" alt="Scams and identity theft" className="w-24 h-24" />
                </div>
                <h3 className="text-xl font-bold mb-2">Scams and identity theft</h3>
                <p className="mb-4">Protect yourself against scams. Learn what to do if you're the victim of a scam or identity theft, including if your details are exposed in a data breach.</p>
                <Link href="/scams-and-identity-theft" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Natural disaster support */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/1015004795/2563901416.svg" alt="Natural disaster support" className="w-24 h-24" />
                </div>
                <h3 className="text-xl font-bold mb-2">Natural disaster support</h3>
                <p className="mb-4">Support for people directly affected by a declared natural disaster.</p>
                <Link href="/natural-disaster-support" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Family and domestic violence */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <img src="https://ext.same-assets.com/1015004795/3783633550.svg" alt="Family and domestic violence" className="w-24 h-24" />
                </div>
                <h3 className="text-xl font-bold mb-2">Family and domestic violence</h3>
                <p className="mb-4">Information, referrals and support for people affected by family and domestic violence.</p>
                <Link href="/family-and-domestic-violence" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
