import type { Metadata } from "next";
import { Suspense } from "react";
import { WEBSITE_HOST_URL } from "./contants";
import { fonts } from "./font";
import "./globals.css";
import Loading from "./loading";
import { Providers } from "./providers";

const meta = {
    title: "Title",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis amet molestiae soluta qui vitae facilis.",
    image: `${WEBSITE_HOST_URL}/meta/og-preview.png`,
};

export const metadata: Metadata = {
    title: {
        template: "%s - Tilte",
        default: meta.title,
    },
    description: meta.description,
    openGraph: {
        title: meta.title,
        description: meta.description,
        url: WEBSITE_HOST_URL,
        locale: "en-US",
        siteName: meta.title,
        type: "website",
        images: [
            {
                url: meta.image,
            },
        ],
    },
    twitter: {
        title: meta.title,
        description: meta.description,
        images: meta.image,
        card: "summary_large_image",
    },
    alternates: {
        canonical: WEBSITE_HOST_URL,
    },
    icons: {
        icon: [
            { url: "/favicon/favicon.ico" },
            new URL("/favicon/favicon.ico", WEBSITE_HOST_URL),
            { url: "/favicon/favicon.ico", media: "(prefers-color-scheme: dark)" },
        ],
        shortcut: ["/favicon/apple-touch-icon.png"],
        apple: [
            { url: "/favicon/apple-touch-icon.png" },
            { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "apple-touch-icon-precomposed",
                url: "/favicon/apple-touch-icon.png",
            },
        ],
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={fonts.rubik.variable}>
                <Suspense fallback={<Loading />}>
                    <Providers>{children}</Providers>
                </Suspense>
            </body>
        </html>
    );
}
