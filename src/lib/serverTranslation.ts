import i18next from "i18next";

const resources = {
  ko: {
    common: {
      title: "특전워치",
      selectHero: "영웅을 선택하세요",
    },
  },
  en: {
    common: {
      title: "PERKWATCH",
      selectHero: "Select a hero",
    },
  },
  ja: {
    common: {
      title: "パークウォッチ",
      selectHero: "ヒーローを選んでください",
    },
  },
};

export async function getServerTranslation(
  lng: "ko" | "en" | "ja"
) {
  const i18nInstance = i18next.createInstance();

  await i18nInstance.init({
    lng,
    fallbackLng: "ko",
    resources,
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });

  return {
    t: i18nInstance.t,
  };
}
