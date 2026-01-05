import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in to your hiring workspace"
      subtitle="Access your pipeline, shortlist candidates, and keep your hiring team aligned in one secure place."
      footer={
        <>
          Don&apos;t have an account yet?{" "}
          <Link href="/register" className="text-emerald-400 hover:text-emerald-300">
            Create one here
          </Link>
          .
        </>
      }
    >
      <form className="space-y-4">
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-200"
          >
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-0 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-slate-200"
            >
              Password
            </label>
            <button
              type="button"
              className="text-[11px] text-slate-400 hover:text-slate-200"
            >
              Forgot password?
            </button>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-0 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
        >
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
}

