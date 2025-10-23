"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to detect keyboard key presses
 * @param targetKey - The key to listen for (e.g., "Escape", "Enter")
 * @returns boolean indicating if the key is currently pressed
 * 
 * @example
 * const escapePressed = useKeyPress("Escape");
 * const enterPressed = useKeyPress("Enter");
 * 
 * useEffect(() => {
 *   if (escapePressed) closeModal();
 * }, [escapePressed]);
 */
export function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}

/**
 * Custom hook to detect keyboard shortcuts (combination of keys)
 * @param keys - Array of keys to listen for (e.g., ["Control", "k"])
 * @param callback - Function to call when the combination is pressed
 * 
 * @example
 * useKeyboardShortcut(["Control", "k"], () => {
 *   openCommandPalette();
 * });
 */
export function useKeyboardShortcut(
  keys: string[],
  callback: () => void
): void {
  useEffect(() => {
    const pressedKeys = new Set<string>();

    const downHandler = (event: KeyboardEvent) => {
      pressedKeys.add(event.key);

      // Check if all keys in the combination are pressed
      const allPressed = keys.every((key) => pressedKeys.has(key));

      if (allPressed) {
        event.preventDefault();
        callback();
      }
    };

    const upHandler = (event: KeyboardEvent) => {
      pressedKeys.delete(event.key);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [keys, callback]);
}

