import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";

const logo = (
  <span>
    <svg width={60} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 50">
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke:#333;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px}"
          }
        </style>
      </defs>
      <g id="g1">
        <path
          id="gge232"
          d="M2.5 47.5v-45h20l5 10 5-10h20v45h-15v-30l-10 15-10-15v30h-15"
          className="cls-1"
        />
        <path id="gge235" d="M52.5 17.5v30h30l-15-30h-15" className="cls-1" />
        <path id="gge238" d="M52.5 2.5v15h30v-15h-30" className="cls-1" />
        <path
          id="gge241"
          d="M82.5 2.5v45h30v-45h-15v30-30h-15"
          className="cls-1"
        />
      </g>
    </svg>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/miru-project",
  },
  docsRepositoryBase: "https://github.com/miru-project/docs/tree/main/",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Miru",
      };
    }
  },
  logo,
  head: function useHead() {
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="支持视频、漫画、小说扩展源的多功能播放器开源，永久免费"
        />
        <meta
          name="og:description"
          content="支持视频、漫画、小说扩展源的多功能播放器开源，永久免费"
        />
        <meta name="apple-mobile-web-app-title" content="Miru" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="#" target="_blank" rel="noreferrer">
  //       🎉 Miru 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          AGPLv3 © {new Date().getFullYear()} Miru Project.
        </p>
      </div>
    ),
  },
};

export default config;
