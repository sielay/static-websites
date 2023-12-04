import Image from "next/image";
import { PageLayout } from "ui";
import { Noticia_Text as NoticaText } from "next/font/google";
import StaticImage from "../../public/becomingdeveloper.png";

const noticaText = NoticaText({ weight: "700", subsets: ["latin"] });

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
    <PageLayout
      pageTitle="Becoming Developer"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          Embark on a compelling journey into the IT trade with seasoned expert
          Łukasz Marek Sielski in &quot;Should You Become a Software Developer?&quot; Sielski, with
          over two decades of experience, demystifies the life of an IT
          professional, offering crucial insights for success.
        </>,
        <>
          Whether you&apos;re contemplating a career shift or aiming to understand
          the IT world, this book is your indispensable companion. Sielski
          provides a focused roadmap, helping you navigate the competitive IT
          terrain, overcome challenges, and make informed decisions.
        </>,
        <>
          Explore different IT roles, potential earnings, and the impact of your
          choices. In &quot;My Story,&quot; Sielski shares his journey from a self-taught
          IT enthusiast to Head of IT Development.
        </>,
        <>
          &quot;Path&quot; guides you on securing your first IT job, &quot;Work&quot; delves into
          technical intricacies, and &quot;Environment&quot; prepares you for the
          realities of the IT industry. Addressing issues like imposter syndrome
          and burnout, this book is a mentor and guide specifically tailored to
          unlocking your potential in the IT trade. Whether you&apos;re a newcomer or
          an industry insider, it&apos;s your key to success in the world of IT.
        </>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Should You Become a Software Developer?: A book you should read before you decide to learn to code - Łukasz Marek Sieslki"
          width={1200}
        />
      }
    />
  );
}
