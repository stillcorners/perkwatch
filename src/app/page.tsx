import { getServerTranslation } from "../lib/serverTranslation"; // #경로로 수정

export default async function Home() {
  const { t } = await getServerTranslation("ko");

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold">
        {t("title")}
      </h1>
      <p>{t("selectHero")}</p>
    </div>
  );
}
