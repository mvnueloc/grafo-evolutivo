import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "./global.css";
import { headers } from "next/headers";
import { Metadata } from "next";

import { baseURL, style, meta, og } from "@/once-ui/resources/config";

import { Background, Flex } from "@/once-ui/components";

type FontConfig = {
  variable: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  const metadataBase = host ? new URL(`https://${host}`) : undefined;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://" + baseURL,
      type: og.type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
    },
    metadataBase,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html"
      lang="en"
      fillHeight
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-border={style.border}
      data-theme={style.theme}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}>
      <Flex
        as="body"
        fillWidth
        fillHeight
        margin="0"
        padding="0">
        <Background
          style={{ zIndex: "-1" }}
          position="fixed"
          mask="cursor"
          dots={{
            display: true,
            opacity: 0.4,
            size: "20",
          }}
          gradient={{
            display: true,
            opacity: 0.4,
          }}
        />
        <Flex
          flex={1}
          direction="column">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
