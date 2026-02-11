import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/locale-switcher";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl text-center space-y-4 px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {t("title")}
        </h1>
        <p className="text-muted-foreground">
          {t("subtitle")}
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <Button>{t("ctaPrimary")}</Button>
          <Button variant="outline">{t("ctaSecondary")}</Button>
        </div>
      </div>
    </main>
  );
}
