import Link from "next/link";

// TODO: Update these values for your community
const COMMUNITY_NAME = "{{COMMUNITY_NAME}}";
const OWNERS_DOMAIN = "owners.{{DOMAIN}}";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <header className="min-h-[100svh] md:min-h-0 flex flex-col md:block border-b border-primary-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm [@media(min-width:768px)_and_(min-height:500px)]:sticky [@media(min-width:768px)_and_(min-height:500px)]:top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-900 dark:text-white">Recall the Board</h1>
              <p className="text-sm text-stone-600 dark:text-stone-400">{COMMUNITY_NAME}</p>
            </div>
          </div>
        </div>
        <nav className="pl-8 md:pl-0 pr-4 sm:px-6 lg:px-8 pb-16 md:pb-0 md:absolute md:right-4 lg:right-8 md:top-1/2 md:-translate-y-1/2 mt-auto md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
            <li>
              <a
                href="/#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-primary-900 dark:text-white font-bold"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                href="/petition#stage"
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-stone-700 dark:text-stone-300 hover:text-primary-700 dark:hover:text-primary-400"
              >
                Sign Petition
              </Link>
            </li>
            <li>
              <a
                href={`https://${OWNERS_DOMAIN}/#stage`}
                className="flex items-center gap-3 md:gap-2 text-[2.4rem] md:text-base text-stone-700 dark:text-stone-300 hover:text-primary-700 dark:hover:text-primary-400"
              >
                Owners Hub
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="stage" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-900 dark:text-white mb-4">
            It&apos;s Time for Change
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Our community deserves transparent, accountable leadership. 
            Join fellow homeowners in calling for a recall election.
          </p>
        </section>

        <section className="bg-white dark:bg-stone-900 rounded-xl p-8 border border-stone-200 dark:border-stone-800 mb-8">
          <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-4">Why Recall?</h3>
          <ul className="space-y-3 text-stone-600 dark:text-stone-400">
            <li className="flex gap-3">
              <span className="text-red-500">•</span>
              <span>Add your specific concerns here</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">•</span>
              <span>Document issues with current board leadership</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">•</span>
              <span>Reference relevant violations of governing documents</span>
            </li>
          </ul>
        </section>

        <div className="text-center">
          <Link
            href="/petition#stage"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Sign the Petition
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </main>

      <footer className="border-t border-primary-200 dark:border-stone-800 bg-white dark:bg-stone-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-stone-600 dark:text-stone-400">
            © {new Date().getFullYear()} {COMMUNITY_NAME} Homeowners. 
            By homeowners, for homeowners.
          </p>
        </div>
      </footer>
    </div>
  );
}

