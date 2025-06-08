import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = "ko" | "en" | "ja";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore =
  create<LanguageState>()(
    persist(
      (set) => ({
        language: "ko",
        setLanguage: (lang) =>
          set({ language: lang }),
      }),
      { name: "language-store" }
    )
  );
