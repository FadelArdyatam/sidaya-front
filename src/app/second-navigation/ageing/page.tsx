import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AgeingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ageing</h1>
              <p className="text-xl mb-6">
                Payments and services for people retiring or accessing aged care. Help for people who care for older Australians.
              </p>
              <div className="flex items-center">
                <Button className="bg-[#FFB200] text-white rounded-none hover:bg-gray-800">
                  Listen <span className="ml-2">🔊</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img src="https://ext.same-assets.com/1015004795/4061061103.svg" alt="Ageing" className="w-64 h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>Ageing</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Retirement */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="55" width="60" height="30" rx="5" fill="#63d3eb" />
                    <circle cx="35" cy="35" r="15" fill="#63d3eb" />
                    <path d="M27 50C27 44.4772 31.4772 40 37 40H65C70.5228 40 75 44.4772 75 50V55H27V50Z" fill="#63d3eb" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Retirement</h3>
                <p className="mb-4">Payments and services for people who are retired or planning for retirement. How your payment rates change as you get older.</p>
                <Link href="/retirement" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Aged care */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="40" width="50" height="40" rx="5" fill="#63d3eb" />
                    <path d="M40 40V30C40 25.5817 43.5817 22 48 22H52C56.4183 22 60 25.5817 60 30V40" stroke="#63d3eb" strokeWidth="4" />
                    <circle cx="50" cy="55" r="5" fill="white" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Aged care</h3>
                <p className="mb-4">Help for older Australians who need care at home or in an aged care home. Information about aged care assessments, costs and what help you can get.</p>
                <Link href="/aged-care" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Caring for someone */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="40" r="15" fill="#63d3eb" />
                    <circle cx="65" cy="40" r="10" fill="#63d3eb" />
                    <path d="M25 60C25 54.4772 29.4772 50 35 50C40.5228 50 45 54.4772 45 60V75H25V60Z" fill="#63d3eb" />
                    <path d="M55 60C55 54.4772 59.4772 50 65 50C70.5228 50 75 54.4772 75 60V70H55V60Z" fill="#63d3eb" />
                    <path d="M45 60H55V65H45V60Z" fill="#63d3eb" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Caring for someone</h3>
                <p className="mb-4">Support for carers of older people. Information about payments, respite care and other services to help you in your caring role.</p>
                <Link href="/caring-for-someone" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* When someone dies */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 30H70V80H30V30Z" fill="#63d3eb" />
                    <path d="M25 30H75V40H25V30Z" fill="#63d3eb" />
                    <path d="M35 20H65V30H35V20Z" fill="#63d3eb" />
                    <path d="M45 45H55V65H45V45Z" fill="white" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">When someone dies</h3>
                <p className="mb-4">What to do when someone close to you dies. Information about bereavement payments and other support services available.</p>
                <Link href="/when-someone-dies" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Concession and health care cards */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="30" width="70" height="40" rx="5" fill="#63d3eb" />
                    <rect x="25" y="45" width="20" height="5" fill="white" />
                    <rect x="25" y="55" width="30" height="5" fill="white" />
                    <circle cx="70" cy="50" r="10" fill="white" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Concession and health care cards</h3>
                <p className="mb-4">Information about the different concession and health care cards available for seniors. Discounts and benefits you can get with these cards.</p>
                <Link href="/concession-and-health-care-cards" className="text-blue-600 hover:underline flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            {/* Financial information */}
            <Card className="sa-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" fill="#63d3eb" />
                    <path d="M50 30V70" stroke="white" strokeWidth="4" />
                    <path d="M40 40H60" stroke="white" strokeWidth="4" />
                    <path d="M40 50H60" stroke="white" strokeWidth="4" />
                    <path d="M40 60H60" stroke="white" strokeWidth="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Financial information</h3>
                <p className="mb-4">Help with managing your finances in retirement. Information about budget planning, investments and accessing your superannuation.</p>
                <Link href="/financial-information" className="text-blue-600 hover:underline flex items-center">
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

      {/* Was this page useful section */}
      <section className="py-8 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <p className="font-medium mb-2">Was this page useful?</p>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-300">No</Button>
                <Button variant="outline" className="border-gray-300">Yes</Button>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              Page last updated: 15 January 2023.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
