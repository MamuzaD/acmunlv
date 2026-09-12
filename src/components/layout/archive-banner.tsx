import { Archive, ExternalLink } from 'lucide-react'

export function ArchiveBanner() {
  return (
    <aside
      aria-label="Portfolio archive notice"
      className="flex min-h-16 items-center justify-center border-b border-amber-800/25 bg-gradient-to-b from-white/55 to-white/0 bg-amber-50 px-4 py-2 text-center text-xs text-amber-950 md:min-h-10 md:text-sm"
    >
      <p className="max-w-2xl leading-relaxed">
        <span className="mr-1 inline-flex items-center gap-1 rounded-sm border border-amber-900/25 bg-amber-900/5 px-1.5 py-0.5 align-middle font-mono text-[0.7em] font-medium text-amber-900">
          <Archive className="h-3 w-3" aria-hidden />
          archived
        </span>
        Snapshot preserved by{' '}
        <a
          className="font-semibold underline decoration-amber-900/40 underline-offset-2 hover:decoration-amber-900"
          href="https://danielmamuza.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Mamuza
        </a>
        , not the current ACM UNLV site.{' '}
        <a
          className="inline-flex items-center gap-0.5 font-semibold underline decoration-amber-900/40 underline-offset-2 hover:decoration-amber-900"
          href="https://github.com/ACM-UNLV/www"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official repo
          <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      </p>
    </aside>
  )
}
