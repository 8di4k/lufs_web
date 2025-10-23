"use client";

import { Share1Icon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/lib/hooks";

interface ShareButtonProps {
  url?: string;
  title?: string;
  text?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

/**
 * Share button with native Web Share API and clipboard fallback
 * @param url - URL to share (defaults to current page)
 * @param title - Title for the share dialog
 * @param text - Description text for the share
 */
export function ShareButton({
  url,
  title = "LUFS Music Analyzer",
  text = "Check out this AI-powered audio analysis tool!",
  className,
  variant = "outline",
  size = "default",
}: ShareButtonProps) {
  const [isShared, setIsShared] = useState(false);
  const { copy, isSuccess } = useCopyToClipboard();

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const handleShare = async () => {
    // Try native Web Share API first
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      } catch (error) {
        // User cancelled or error occurred - silently ignore
      }
    } else {
      // Fallback to copying URL to clipboard
      await copy(shareUrl);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleShare}
      className={cn(
        "gap-2 transition-all duration-300",
        "hover:shadow-glow-cyan hover:border-neon-cyan",
        isShared || isSuccess ? "border-neon-green shadow-glow-green" : "",
        className
      )}
      aria-label="Share"
    >
      {isShared || isSuccess ? (
        <>
          <CheckIcon className="h-4 w-4 text-neon-green" />
          {size !== "icon" && <span className="text-neon-green">Shared!</span>}
        </>
      ) : (
        <>
          <Share1Icon className="h-4 w-4" />
          {size !== "icon" && <span>Share</span>}
        </>
      )}
    </Button>
  );
}

