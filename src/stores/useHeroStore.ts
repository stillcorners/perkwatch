import { create } from "zustand";

type HeroSlug = string;

interface HeroState {
  selectedHero: HeroSlug | null;
  selectHero: (slug: HeroSlug) => void;
}

export const useHeroStore = create<HeroState>()(
  (set) => ({
    selectedHero: null,
    selectHero: (slug) =>
      set({ selectedHero: slug }),
  })
);
