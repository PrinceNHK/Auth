import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-center">
        {/* Left: marketing / careers imagery */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Career Portal · Secure Candidate Access
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
              {title}
            </h1>
            {subtitle && (
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className="relative h-52 md:h-64 rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.25)]">
                <Image
                  src="/globe.svg"
                  alt="Global hiring illustration"
                  width={56}
                  height={56}
                  className="opacity-90"
                />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-300">
                  Trusted by hiring teams
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  Keep your candidate data secure while your team hires faster.
                </p>
              </div>
              <div className="hidden sm:flex -space-x-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/90 text-xs font-semibold text-slate-950">
                  HR
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/90 text-xs font-semibold text-slate-950 ring-2 ring-slate-900">
                  TA
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/90 text-xs font-semibold text-slate-950 ring-2 ring-slate-900">
                  CXO
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Encrypted passwords
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Role-ready for production
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Built for modern careers sites
            </span>
          </div>
        </div>

        {/* Right: auth card */}
        <div className="w-full max-w-md mx-auto">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
            <p>Auth Portal</p>
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="hover:text-slate-100 transition-colors"
              >
                Login
              </Link>
              <span className="text-slate-600">·</span>
              <Link
                href="/register"
                className="hover:text-slate-100 transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30 backdrop-blur">
            {children}
          </div>
          {footer && <div className="mt-4 text-xs text-slate-500">{footer}</div>}
        </div>
      </div>
    </div>
  );
}

