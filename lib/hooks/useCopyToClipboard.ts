"use client";

import { useState } from "react";

interface CopyToClipboardResult {
  copiedText: string | null;
  copy: (text: string) => Promise<boolean>;
  isSuccess: boolean;
  isError: boolean;
}

/**
 * Custom hook to copy text to clipboard
 * @returns Object with copy function and state
 * 
 * @example
 * const { copy, isSuccess, copiedText } = useCopyToClipboard();
 * 
 * <button onClick={() => copy("Hello World")}>
 *   {isSuccess ? "Copied!" : "Copy"}
 * </button>
 */
export function useCopyToClipboard(): CopyToClipboardResult {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const copy = async (text: string): Promise<boolean> => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      setIsError(true);
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsSuccess(true);
      setIsError(false);

      // Reset success state after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);

      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      setIsSuccess(false);
      setIsError(true);

      // Reset error state after 2 seconds
      setTimeout(() => {
        setIsError(false);
      }, 2000);

      return false;
    }
  };

  return { copiedText, copy, isSuccess, isError };
}

