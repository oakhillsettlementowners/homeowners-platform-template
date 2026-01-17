import Link from "next/link";

interface RecallBannerProps {
  variant?: "mobile" | "desktop";
}

// TODO: Update these values for your community
const RECALL_DOMAIN = "recall.{{DOMAIN}}";

export default function RecallBanner({ variant = "desktop" }: RecallBannerProps) {
  if (process.env.NEXT_PUBLIC_SHOW_RECALL_BANNER !== 'true') {
    return null;
  }

  // Mobile banner - fixed at top, always visible when scrolling
  if (variant === "mobile") {
    return (
      <div className="md:hidden fixed top-0 left-0 right-0 z-[60] bg-amber-100 dark:bg-amber-900/50 border-b border-amber-200 dark:border-amber-800">
        <Link
          href={`https://${RECALL_DOMAIN}/petition#stage`}
          className="block px-4 py-2 text-center text-sm font-medium text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors"
        >
          📢 Recall effort in progress →
        </Link>
      </div>
    );
  }

  // Desktop banner - inline in nav, sticks with header
  return (
    <div className="hidden md:block">
      <Link
        href={`https://${RECALL_DOMAIN}/petition#stage`}
        className="block px-4 py-2 text-center text-sm font-medium text-amber-800 dark:text-amber-200 bg-amber-100/80 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-800/50 transition-colors border-b border-amber-200 dark:border-amber-800"
      >
        📢 Recall effort in progress — Sign the petition →
      </Link>
    </div>
  );
}

