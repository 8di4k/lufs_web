import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UIState {
  // Modal states
  isPricingModalOpen: boolean;
  isDemoModalOpen: boolean;

  // Menu state
  isMenuOpen: boolean;

  // Active section tracking (for navigation highlighting)
  activeSection: string | null;

  // Scroll state
  isScrolled: boolean;

  // Loading states
  isDemoLoading: boolean;

  // Actions
  openPricingModal: () => void;
  closePricingModal: () => void;
  togglePricingModal: () => void;

  openDemoModal: () => void;
  closeDemoModal: () => void;
  toggleDemoModal: () => void;

  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;

  setActiveSection: (section: string | null) => void;
  setIsScrolled: (scrolled: boolean) => void;
  setIsDemoLoading: (loading: boolean) => void;

  // Reset all modals
  closeAllModals: () => void;
}

/**
 * Global UI state store using Zustand
 * Manages modals, menu, active sections, and loading states
 */
export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set) => ({
        // Initial state
        isPricingModalOpen: false,
        isDemoModalOpen: false,
        isMenuOpen: false,
        activeSection: null,
        isScrolled: false,
        isDemoLoading: false,

        // Pricing modal actions
        openPricingModal: () => set({ isPricingModalOpen: true }),
        closePricingModal: () => set({ isPricingModalOpen: false }),
        togglePricingModal: () =>
          set((state) => ({ isPricingModalOpen: !state.isPricingModalOpen })),

        // Demo modal actions
        openDemoModal: () => set({ isDemoModalOpen: true }),
        closeDemoModal: () => set({ isDemoModalOpen: false }),
        toggleDemoModal: () =>
          set((state) => ({ isDemoModalOpen: !state.isDemoModalOpen })),

        // Menu actions
        openMenu: () => set({ isMenuOpen: true }),
        closeMenu: () => set({ isMenuOpen: false }),
        toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

        // Other setters
        setActiveSection: (section) => set({ activeSection: section }),
        setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),
        setIsDemoLoading: (loading) => set({ isDemoLoading: loading }),

        // Close all modals
        closeAllModals: () =>
          set({
            isPricingModalOpen: false,
            isDemoModalOpen: false,
            isMenuOpen: false,
          }),
      }),
      {
        name: "lufs-ui-storage", // localStorage key
        // Only persist certain keys (don't persist transient state)
        partialize: () => ({
          // Don't persist modals or menu state
          // Only persist preferences if needed
        }),
      }
    ),
    {
      name: "LUFS UI Store", // DevTools name
    }
  )
);

// Selectors for optimal re-renders
export const useIsPricingModalOpen = () =>
  useUIStore((state) => state.isPricingModalOpen);
export const useIsDemoModalOpen = () =>
  useUIStore((state) => state.isDemoModalOpen);
export const useIsMenuOpen = () => useUIStore((state) => state.isMenuOpen);
export const useActiveSection = () =>
  useUIStore((state) => state.activeSection);
export const useIsScrolled = () => useUIStore((state) => state.isScrolled);
export const useIsDemoLoading = () =>
  useUIStore((state) => state.isDemoLoading);

