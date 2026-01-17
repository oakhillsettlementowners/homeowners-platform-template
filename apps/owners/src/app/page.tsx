import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import RecallBanner from "@/components/RecallBanner";
import ScrollIndicator from "@/components/ScrollIndicator";
import { SHOW_CHAT, SHOW_RECALL_BANNER } from "@/lib/features";

// TODO: Update these values for your community
const COMMUNITY_NAME = "{{COMMUNITY_NAME}}";
const LOT_COUNT = "{{LOT_COUNT}}";
const LOCATION = "{{CITY_STATE}}";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-[41px] md:pt-0">
      <header className={`${SHOW_RECALL_BANNER ? 'min-h-[calc(100svh-41px)]' : 'min-h-[100svh]'} md:min-h-0 flex flex-col md:block border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm [@media(min-width:768px)_and_(min-height:500px)]:sticky [@media(min-width:768px)_and_(min-height:500px)]:top-0 z-50`}>
        <RecallBanner variant="desktop" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10 text-primary-800 dark:text-primary-400" />
            <div>
              <h1 className="text-xl font-bold text-primary-900 dark:text-white">{COMMUNITY_NAME}</h1>
              <p className="text-sm text-stone-600 dark:text-stone-400">Homeowner Community Hub</p>
            </div>
          </div>
        </div>
        <nav className="pl-8 md:pl-0 pr-4 sm:px-6 lg:px-8 pb-16 md:pb-0 md:absolute md:right-4 lg:right-8 md:top-1/2 md:-translate-y-1/2 mt-auto md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            <li>
              <a
                href="/#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-900 dark:text-white font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                aria-current="page"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <Link
                href="/rights/#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-stone-700 dark:text-stone-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
                Know Your Rights
              </Link>
            </li>
            <li>
              <Link
                href="/documents/#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-stone-700 dark:text-stone-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
              >
                <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                Documents
              </Link>
            </li>
            {SHOW_CHAT && (
              <li>
                <Link
                  href="/chat/#stage"
                  className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-stone-700 dark:text-stone-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 rounded px-2 py-1 -mx-2 -my-1"
                >
                  <svg className="w-8 h-8 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                  Ask AI
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <ScrollIndicator />
      </header>

      <main id="stage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">
            Welcome to {COMMUNITY_NAME}
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            An independent resource hub for the {LOT_COUNT} homeowners in our community. 
            By homeowners, for homeowners.
          </p>
        </section>

        {/* Quick Actions */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Link
            href="/rights/#stage"
            className="block p-6 bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Know Your Rights</h3>
            <p className="text-stone-600 dark:text-stone-400">
              Understand your rights as a homeowner under state law and your community&apos;s governing documents.
            </p>
          </Link>

          <Link
            href="/documents/#stage"
            className="block p-6 bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">View Documents</h3>
            <p className="text-stone-600 dark:text-stone-400">
              Access CC&amp;Rs, Bylaws, and other governing documents that define our community rules.
            </p>
          </Link>

          {SHOW_CHAT && (
            <Link
              href="/chat/#stage"
              className="block p-6 bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">Ask AI Assistant</h3>
              <p className="text-stone-600 dark:text-stone-400">
                Get instant answers about your rights and governing documents from our AI assistant.
              </p>
            </Link>
          )}
        </section>

        {/* About Section */}
        <section className="bg-white dark:bg-stone-900 rounded-xl p-8 border border-stone-200 dark:border-stone-800">
          <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-4">About This Site</h2>
          <p className="text-stone-600 dark:text-stone-400 mb-4">
            This is an independent community hub created by and for homeowners in {COMMUNITY_NAME}. 
            We are not affiliated with the HOA board or management company.
          </p>
          <p className="text-stone-600 dark:text-stone-400">
            Our goal is to help homeowners understand their rights, access governing documents, 
            and participate meaningfully in community decisions.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

