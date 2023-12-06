import Image from "next/image";
import { PageLayout } from "ui";
import { Noticia_Text as NoticaText } from "next/font/google";
import StaticImage from "../../public/shoudyou.png";

const noticaText = NoticaText({ weight: "700", subsets: ["latin"] });

const LINKS = [
  {
    title: "Follow the author on TikTok",
    href: "https://www.tiktok.com/@shouldyoubecomedeveloper",
    description: "Join 1K+ followers on the most engaging social platform",
  },
  {
    title: "Follow the author on Twitter/X",
    href: "https://www.twitter.com/coderebased",
    description: "Follow on the most dividing social platform",
  },
  {
    title: "E-book on Amazon.com",
    href: "https://www.amazon.com/dp/B0B2CGTMVY",
    description:
      "Buy Should You Become a Software Developer as e-book on Amazon",
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
      pageTitle="ShouldYou?"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          Embark on the dynamic world of software development with seasoned
          expert Łukasz Marek Sielski in &quot;Should You Become a Software
          Developer?&quot; Sielski, with over two decades of experience,
          demystifies a developer&apos;s life beyond coding, offering insights
          for success.
        </>,
        <>
          Whether you&apos;re considering a career shift or want to understand
          the developer world, this book is your invaluable companion. Sielski
          provides a roadmap, helping you navigate the competitive terrain,
          overcome obstacles, and make informed decisions.
        </>,

        <>
          Explore types of developers, potential earnings, and the impact of
          your choices. In &quot;My Story,&quot; Sielski shares his journey from
          a self-taught coder to Head of Software Development.
        </>,
        <>
          &quot;Path&quot; guides you to secure your first job, &quot;Work&quot;
          delves into technical intricacies, and &quot;Environment&quot;
          prepares you for industry realities. Addressing issues like imposter
          syndrome and burnout, this book is a mentor and guide to unlocking
          your potential in software development. Whether novice or insider,
          it&apos;s your key to success.
        </>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Should You Become a Software Developer?: A book you should read before you decide to learn to code - Łukasz Marek Sieslki"
          width={1000}
        />
      }
      copyright={<>ShouldYou.co &copy; 2001 - 2003 Sielay Ltd</>}
    />
  );
}
