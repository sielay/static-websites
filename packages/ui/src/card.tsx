import * as React from "react";

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className="ui-border ui-border-gray-600 ui-m-2 md:ui-m-0 ui-shadow-md md:ui-shadow-none md:ui-border-none ui-group ui-rounded-lg ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors hover:ui-bg-neutral-800/30"
      href={`${href}?utm_source=create-turbo&utm_medium=with-tailwind&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="ui-mb-3 ui-text-2xl ui-font-semibold">{title}</h2>
      <p className="ui-m-0 md:ui-max-w-[30ch] ui-text-sm ui-opacity-50">
        {children}
      </p>
    </a>
  );
}
