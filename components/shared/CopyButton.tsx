"use client";

import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/lib/hooks";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
  toastMessage?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  showToast?: boolean;
}

/**
 * Universal copy button with success animation and toast notification
 * @param text - Text to copy to clipboard
 * @param toastMessage - Custom toast message (defaults to "Copied to clipboard!")
 * @param showToast - Whether to show toast notification (defaults to true)
 */
export function CopyButton({
  text,
  toastMessage = "Copied to clipboard!",
  className,
  variant = "ghost",
  size = "icon",
  showToast = true,
}: CopyButtonProps) {
  const { copy, isSuccess } = useCopyToClipboard();

  const handleCopy = async () => {
    const success = await copy(text);
    if (success && showToast) {
      toast.success(toastMessage);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={cn(
        "transition-all duration-300",
        "hover:border-neon-green hover:shadow-glow-green",
        isSuccess ? "border-neon-green shadow-glow-green" : "",
        className
      )}
      aria-label="Copy to clipboard"
    >
      {isSuccess ? (
        <CheckIcon className="h-4 w-4 text-neon-green animate-scale-in" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
      {size !== "icon" && !isSuccess && <span>Copy</span>}
      {size !== "icon" && isSuccess && (
        <span className="text-neon-green">Copied!</span>
      )}
    </Button>
  );
}

