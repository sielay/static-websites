import type { ReactNode } from "react";
import { Card } from "./card";

interface Link {
  title: string;
  href: string;
  description: string;
}

export function PageLayout({
  pageTitle,
  headerClass,
  image,
  links,
  paragraphs,
  copyright,
}: {
  pageTitle: string;
  headerClass: string;
  image: ReactNode;
  links: Link[];
  paragraphs: ReactNode[];
  copyright: ReactNode;
}): JSX.Element {
  return (
    <main>
      <header className="ui-flex ui-flex-col ui-items-center ui-justify-between ui-px-24 ui-py-12 ui-pb-0">
        <h1
          className={`ui-z-10 ui-max-w-5xl ui-w-full ui-items-center ui-justify-between ui-text-3xl ui-text-center lg:ui-flex ${headerClass}`}
        >
          {pageTitle}
        </h1>
      </header>
      <section>
        <div className="ui-relative ui-flex ui-flex-col ui-items-center ui-justify-between lg:ui-px-24 ui-pb-0">
          <div className="ui-font-sans ui-w-auto ui-pt-[48px] ui-pl-8 md:ui-pt-16 lg:ui-pt-0 ui-flex ui-justify-between ui-gap-8 ui-items-center ui-flex-col ui-relative ui-z-0">
            <div className="ui-z-50 ui-flex ui-flex-col ui-items-center ui-justify-center ui-gap-5 ui-px-0 ui-text-center lg:ui-gap-6 ui-mb-6">
              {image}
            </div>
          </div>
        </div>
      </section>

      <section className="ui-hidden md:ui-flex ui-flex-col ui-items-center ui-justify-between ui-px-24 ui-pt-0">
        <div className="ui-grid ui-text-center lg:ui-max-w-5xl lg:ui-w-full lg:ui-mb-0 lg:ui-grid-cols-4 lg:ui-text-left ui-pb-8">
          {links.map(({ title, href, description }) => (
            <Card href={href} key={title} title={title}>
              {description}
            </Card>
          ))}
        </div>
      </section>

      <section className="ui-flex ui-flex-col ui-items-center ui-justify-between ui-text-lg md:ui-text-base ui-px-8 lg:ui-px-24 ui-pt-0">
        {paragraphs.map((node, index) => (
          <p
            className="ui-text-justify ui-pb-4 lg:ui-max-w-5xl lg:ui-w-full"
            key={index}
          >
            {node}
          </p>
        ))}
      </section>

      <section className="ui-flex md:ui-hidden ui-flex-col ui-items-center ui-justify-between ui-px-24 ui-pt-0">
        <div className="ui-grid ui-text-center lg:ui-max-w-5xl lg:ui-w-full lg:ui-mb-0 lg:ui-grid-cols-4 lg:ui-text-left ui-pb-8">
          {links.map(({ title, href, description }) => (
            <Card href={href} key={title} title={title}>
              {description}
            </Card>
          ))}
        </div>
      </section>

      <footer className="ui-flex ui-flex-col ui-items-center ui-justify-between ui-text-lg md:ui-text-base px-8 lg:ui-px-24 ui-pt-0 ui-px-8">
        <p className="ui-text-justify ui-pb-4 lg:ui-max-w-5xl lg:ui-w-full ui-text-sm ui-pt-8 ui-opacity-50">
          {copyright}
        </p>
      </footer>
    </main>
  );
}
