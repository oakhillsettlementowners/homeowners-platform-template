// TODO: Update these values for your community
const COMMUNITY_NAME = "{{COMMUNITY_NAME}}";

export default function Footer() {
  return (
    <footer className="border-t border-primary-200 dark:border-stone-800 bg-white dark:bg-stone-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-stone-600 dark:text-stone-400">
          © {new Date().getFullYear()} {COMMUNITY_NAME} Homeowners. 
          By homeowners, for homeowners. Not affiliated with the HOA board.
        </p>
      </div>
    </footer>
  );
}

