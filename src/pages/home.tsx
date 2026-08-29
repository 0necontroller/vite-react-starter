import { Link } from "react-router";
import { IconArrowRight, IconBolt, IconPalette, IconRocket } from "@tabler/icons-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Vite + Tailwind + shadcn + React Router
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ship faster with a{" "}
              <span className="text-primary">ready-to-use</span> starter
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A minimal, opinionated template with Tailwind CSS, shadcn/ui,
              React Router and a clean project structure. Clone, rename, and
              build your next idea in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/" className={cn(buttonVariants({ size: "lg" }))}>
                Get Started <IconArrowRight size={18} className="ml-1" />
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                View on GitHub
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <span>⚡ Vite HMR</span>
              <span>•</span>
              <span>🎨 Tailwind v4</span>
              <span>•</span>
              <span>🧩 shadcn/ui</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-muted/20 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to start
            </h2>
            <p className="mt-4 text-muted-foreground">
              No bloat. Just the essentials configured correctly so you can focus
              on your product.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconBolt size={20} />
                </div>
                <CardTitle className="mt-4">Blazing Fast</CardTitle>
                <CardDescription>
                  Vite 8 with React Compiler, instant HMR and optimized
                  production builds.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• TypeScript strict</li>
                  <li>• Path aliases @/*</li>
                  <li>• Oxlint setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconPalette size={20} />
                </div>
                <CardTitle className="mt-4">Beautiful UI</CardTitle>
                <CardDescription>
                  Tailwind CSS v4 + shadcn/ui (Base Nova) with dark mode ready.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Button, Card, Dialog, etc.</li>
                  <li>• Tailwind merge utils</li>
                  <li>• next-themes + sonner</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <IconRocket size={20} />
                </div>
                <CardTitle className="mt-4">Routing Ready</CardTitle>
                <CardDescription>
                  React Router v7 with layout, nested routes and 404 handling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• App.tsx layout</li>
                  <li>• Scroll restoration</li>
                  <li>• Simple not-found page</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / Pricing placeholder */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Start building in seconds
          </h2>
          <p className="mt-4 text-muted-foreground">
            Replace this section with your product content. This is just a
            placeholder to show how sections work in the starter.
          </p>
          <div className="mt-8">
            <Link to="/" className={cn(buttonVariants({ size: "lg" }))}>
              Create your first page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
