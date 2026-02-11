const supportedLocales = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(
    ",",
) ?? ["en", "th"];

export const locales = supportedLocales as unknown as readonly [
    string,
    ...string[],
];
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale =
    process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en";
