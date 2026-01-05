export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-4">
      <main className="w-full max-w-3xl text-center space-y-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
          Secure Careers Portal
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Welcome to your{" "}
          <span className="text-emerald-400">candidate access</span> portal.
        </h1>
        <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto">
          Manage applications, track interviews, and collaborate with hiring
          managers — all behind a secure authentication layer designed for
          professional careers sites.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Login to portal
          </a>
          <a
            href="/register"
            className="inline-flex h-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-6 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/80"
          >
            Create recruiter account
          </a>
        </div>
        <p className="text-xs text-slate-500">
          Passwords are stored using industry-standard hashing for secure access
          across your team.
        </p>
      </main>
    </div>
  );
}
