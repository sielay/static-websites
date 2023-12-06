import Image from "next/image";
import { PageLayout } from "ui";
import { Noticia_Text as NoticaText } from "next/font/google";
import StaticImage from "../../public/record.png";

const noticaText = NoticaText({ weight: "700", subsets: ["latin"] });

const LINKS = [
  {
    title: "PhoneKills on Twitter",
    href: "https://www.twitter.com/phonekills",
    description: "3000+ followers and active community",
  },
  {
    title: "PhoneKills on YouTube",
    href: "https://www.youtube.com/channel/UCwGCL1LGlODVG_HyXqzGYcg",
    description: "Videos of events from London streets",
  },
  {
    title: "PhoneKills profile on TikTok",
    href: "https://www.tiktok.com/@phonekills.com",
    description: "Short videos from the rides and else",
  },
  {
    title: "Learn more about the upcoming book",
    href: "https://www.sielay.com/product-page/record-retreat-report",
    description: "Read more about Record Retreat Report",
  },
];

export default function Page(): JSX.Element {
  return (
    <PageLayout
      pageTitle="PhoneKills"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          In the last year, the Metropolitan Police alone received over 15,000
          reports of dangerous driving from the public. A growing number of
          individuals, including myself, are turning to cameras as a tool to
          combat road crime. Embarking on a self-discovery journey, I explored
          the movement&apos;s history, meeting pioneers, disruptors within law
          enforcement, and celebrities actively involved in promoting road
          safety.
        </>,
        <>
          I interviewed Jeremy Vine, Andy Cox, Mark Hodson, Mike van Erp, Dave
          Sherry, Traffic Droid, Cycle Granny, and more.
        </>,
        <>Unedited snippet:</>,
        <span key="2" className="italic">
          That’s where I decided to throw a curve ball. The oldest article, I
          found in the archives containing “cycle” and “Jeremy Vine” I found
          “It’s very difficult to overstate the inconvenience I feel about
          living in London the rudeness and anger everywhere. Like the fact that
          seemingly every smoker throws their cigarette butts into the street
          and cyclists think they can cycle on the pavement. It’s very
          irritating…”161. He looked at me up from above his plate - still
          enjoying the hummus - smiled and laughed “That’s pretty good research.
          Good journalism”. I blushed.
        </span>,
        <>This cover design is temporary.</>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Record Retreat Report - Łukasz Marek Sielski"
          width={400}
        />
      }
      copyright={<>PhoneKills.com &copy; 2023 Sielay Ltd (site/merchandise) / Łukasz Marek Sielski (book) / PhoneKills (social profiles)</>}
    />
  );
}
