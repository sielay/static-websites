import Image from "next/image";
import { PageLayout } from "ui";
import { Noticia_Text as NoticaText } from "next/font/google";
import StaticImage from "../../public/sielski.png";

const noticaText = NoticaText({ weight: "700", subsets: ["latin"] });

const LINKS = [
  {
    title: "My main website",
    href: "https://www.sielay.com",
    description: "Personal brand, projects, case studies and more",
  },
  {
    title: "My LinkedIn",
    href: "https://www.linkedin.com/in/sielay",
    description: "You can see my experience and networking spam",
  },
  {
    title: "My vanity book",
    href: "https://www.amazon.com/dp/B0B2CGTMVY",
    description:
      "Buy Should You Become a Software Developer as e-book on Amazon",
  },

  {
    title: "My Github",
    href: "https://www.github.com/sielay",
    description: "Random code and tone of unfinished projects",
  },
];

export default function Page(): JSX.Element {
  return (
    <PageLayout
      pageTitle="Sielski in UK"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          Oh, there are loads of Sielskis on the internet, and don't even get me
          started on the Lukasz Sielskis—seems like they're everywhere! You've
          got pages out there not even remotely related to any Lukasz or any
          Sielski, just squatting on the domain, probably to pull off a cheeky
          prank on me. Cheeky devils! But hey, not this one, mate. I'm holding
          onto this gem just because I fancy it. It's not my main page, mind
          you, but you can track it down in the links.
        </>,
        <>
          Now, don't go expecting any cookies here; I scoffed the lot. That's
          precisely why the AI-generated image above bears no resemblance to me
          whatsoever. I'd need a retina display resolution slapped on that
          picture to occupy the same space. Classic mix-up, really.
        </>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Should You Become a Software Developer?: A book you should read before you decide to learn to code - Łukasz Marek Sielski"
          width={463}
        />
      }
      copyright={<>&copy; 2023 Łukasz Marek Sielski</>}
    />
  );
}
