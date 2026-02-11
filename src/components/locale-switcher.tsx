"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/routing";

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
    const router = useRouter();
    const pathname = usePathname();

    function changeLocale(nextLocale: Locale) {
        // Replace first segment (/en or /th) with next locale
        const segments = pathname.split("/");
        segments[1] = nextLocale;
        router.push(segments.join("/"));
    }

    return (
        <select
            value={currentLocale}
            onChange={(e) => changeLocale(e.target.value as Locale)}
            className="border rounded px-2 py-1"
        >
            {locales.map((loc) => (
                <option key={loc} value={loc}>
                    {loc.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
