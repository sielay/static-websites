import Image from "next/image";
import { Card } from "ui";
import { Noticia_Text as NoticiaText } from "next/font/google";
import StaticImage from "../../public/shoudyou.png";

const noticaText = NoticiaText({ weight: "700", subsets: ["latin"] });

const LINKS = [
  {
    title: "E-book on Amazon.com",
    href: "https://www.amazon.com/dp/B0B2CGTMVY",
    description:
      "Buy Should You Become a Software Developer as e-book on Amazon",
  },
  {
    title: "Hardcover on Amazon.com",
    href: "https://www.amazon.com/Should-you-Become-Software-Developer/dp/B0B3N27GV5",
    description:
      "Buy Should You Become a Software Developer as hardcover on Amazon",
  },
  {
    title: "Paperback on Amazon.com",
    href: "https://www.amazon.com/Should-you-Become-Software-Developer/dp/B0B3LP8Z8M",
    description:
      "Buy Should You Become a Software Developer as paperback on Amazon",
  },
  {
    title: "Learn more about the author",
    href: "https://www.sielay.com",
    description: "Read more about Łukasz Marek Sielski and his creations",
  },
];

export default function Page(): JSX.Element {
  return (
    <main>
      <header className="flex flex-col items-center justify-between px-24 py-12 pb-0">
        <h1
          className={`z-10 max-w-5xl w-full items-center justify-between text-3xl text-center lg:flex ${noticaText.className}`}
        >
          ShouldYou?
        </h1>
      </header>
      <section>
        <div className="relative flex flex-col items-center justify-between lg:px-24 pb-0">
          <div className="font-sans w-auto pt-[48px] pl-8 md:pt-16 lg:pt-0 flex justify-between gap-8 items-center flex-col relative z-0">
            <div className="z-50 flex flex-col items-center justify-center gap-5 px-0 text-center lg:gap-6">
              <Image
                src={StaticImage}
                alt="Should You Become a Software Developer?: A book you should read before you decide to learn to code - Łukasz Marek Sieslki"
                width={1200}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:flex flex-col items-center justify-between px-24 pt-0">
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left pb-8">
          {LINKS.map(({ title, href, description }) => (
            <Card href={href} key={title} title={title}>
              {description}
            </Card>
          ))}
        </div>
      </section>
      
      <section className="flex flex-col items-center justify-between text-lg md:text-base px-8 lg:px-24 pt-0">
        <p className="text-justify pb-4 lg:max-w-5xl lg:w-full">
          Embark on the dynamic world of software development with seasoned
          expert Łukasz Marek Sielski in &quot;Should You Become a Software
          Developer?&quot; Sielski, with over two decades of experience, demystifies
          a developer&apos;s life beyond coding, offering insights for success.
        </p>
        <p className="text-justify pb-4 lg:max-w-5xl lg:w-full">
          Whether you&apos;re considering a career shift or want to understand the
          developer world, this book is your invaluable companion. Sielski
          provides a roadmap, helping you navigate the competitive terrain,
          overcome obstacles, and make informed decisions.
        </p>
        <p className="text-justify pb-4 lg:max-w-5xl lg:w-full">
          Explore types of developers, potential earnings, and the impact of
          your choices. In &quot;My Story,&quot; Sielski shares his journey from a
          self-taught coder to Head of Software Development.
        </p>
        <p className="text-justify pb-4 lg:max-w-5xl lg:w-full">
          &quot;Path&quot; guides you to secure your first job, &quot;Work&quot; delves into
          technical intricacies, and &quot;Environment&quot; prepares you for industry
          realities. Addressing issues like imposter syndrome and burnout, this
          book is a mentor and guide to unlocking your potential in software
          development. Whether novice or insider, it&apos;s your key to success.
        </p>
      </section>

      <section className="flex md:hidden flex-col items-center justify-between px-24 pt-0">
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left pb-8">
          {LINKS.map(({ title, href, description }) => (
            <Card href={href} key={title} title={title}>
              {description}
            </Card>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between text-lg md:text-base px-8 lg:px-24 pt-0">
        <p className="text-justify pb-4 lg:max-w-5xl lg:w-full text-sm pt-8 opacity-50">
          &copy; 2023 SIEALY ltd
        </p>
      </footer>
    </main>
  );
}
