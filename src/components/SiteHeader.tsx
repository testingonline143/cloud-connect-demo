import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/resources", label: "Resources" },
  { to: "/learn", label: "Learn" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl"><div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8"><Link aria-label="Aidant IT home" className="flex items-center gap-2.5" to="/"><span className="grid size-8 place-items-center rounded-md bg-primary text-sm font-extrabold text-primary-foreground">A</span><span className="text-sm font-extrabold tracking-normal">AIDANT <span className="text-primary">IT</span></span></Link><nav className="hidden items-center gap-8 md:flex"><Link to="/services" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Services</Link><Link to="/resources" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Resources</Link><Link to="/learn" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Learn</Link><Link to="/about" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">About</Link></nav><div className="hidden md:block"><Link to="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Request an assessment <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Link></div><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button></div>{open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Request an assessment
            </Link>
          </nav>
        </div>
      ) : null}</header>
  );
}
