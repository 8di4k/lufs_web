"use client";

import { useState, useEffect } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/hooks";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

/**
 * Sticky navigation header with mobile hamburger menu
 * Features smooth scroll to sections and backdrop blur effect
 */
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Smooth scroll to section
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300",
          isScrolled
            ? "bg-dark/80 backdrop-blur-lg border-b border-border shadow-lg"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo size="sm" showText />

            {/* Desktop Navigation */}
            {!isMobile && (
              <div className="flex items-center gap-8">
                <ul className="flex items-center gap-6">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={cn(
                          "text-sm font-medium text-foreground/80",
                          "hover:text-neon-green transition-colors duration-200",
                          "hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <Button
                    asChild
                    className={cn(
                      "bg-linear-to-r from-neon-green to-neon-cyan",
                      "text-dark font-semibold",
                      "hover:shadow-glow-green-strong",
                      "transition-all duration-300"
                    )}
                  >
                    <Link href="https://t.me/your_bot" target="_blank" rel="noopener noreferrer">
                      Open in Telegram
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={cn(
                    "h-10 w-10 rounded-full",
                    "bg-dark-card border border-border",
                    "hover:bg-dark-lighter hover:border-neon-green"
                  )}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {isMobileMenuOpen ? (
                    <Cross1Icon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <HamburgerMenuIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </Button>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={cn(
            "fixed inset-0 z-40 bg-dark/95 backdrop-blur-lg",
            "animate-fade-in"
          )}
        >
          <div className="container mx-auto px-4 pt-24">
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={cn(
                        "block text-2xl font-medium text-foreground",
                        "hover:text-neon-green transition-colors duration-200",
                        "hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              asChild
              className={cn(
                "mt-8 w-full",
                "bg-linear-to-r from-neon-green to-neon-cyan",
                "text-dark font-semibold",
                "hover:shadow-glow-green-strong",
                "transition-all duration-300"
              )}
            >
              <Link href="https://t.me/your_bot" target="_blank" rel="noopener noreferrer">
                Open in Telegram
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

