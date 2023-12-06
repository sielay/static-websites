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
      pageTitle="Record Retreat Report"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          Over the past year, the Metropolitan Police has been inundated with a
          staggering 15,000 reports of perilous driving from the public. A
          mounting number of individuals, myself included, are turning to
          cameras as a potent weapon in the battle against road crime. Embarking
          on an odyssey of self-discovery, I delved into the movement&apos;s
          gripping history, encountering trailblazers, law enforcement
          mavericks, and high-profile figures fervently championing road safety.
        </>,
        <>
          In riveting interviews, I engaged with luminaries such as Jeremy Vine,
          Andy Cox, Mark Hodson, Mike van Erp, Dave Sherry, Traffic Droid, Cycle
          Granny, and more.
        </>,
        <>Unedited snippet:</>,
        <span key="2" className="italic">
          One thing you can’t say about Mark Hodson is that he’s quiet. No. Once
          you ask him your first question, he becomes a gift that keeps giving,
          even when you’re already satisfied with the answer. Direct,
          opinionated, energetic, and nonapologetic - the impressions you get
          wherever you meet him on social media, in one of his talks or in a
          direct conversation. No surprise he claims - and has a very right to
          do so - to be one of the spices that brew the third-party reporting as
          we know it today.
        </span>,
        <span key="3" className="italic">
          If Mark was a jalapeno, then his work partner, Stephen Hudson would be
          a vanilla - in a good sense. Mark was a fire that melted the ideas,
          Steve was the mould that let them settle, cool and come out as
          expected. “He was really sort of the one who made sure that everything
          got done properly. He was very much the one that kept everything in
          check and stopped me going off on to the next thing before we finished
          that.” Both were well-seasoned traffic officers from West Midlands
          Police who disrupted the way the police work.
        </span>,
        <>This cover design is temporary.</>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Record Retreat Report - Łukasz Marek Sieslki"
          width={400}
        />
      }
      copyright={
        <>
          RecordRetreatReport.co.uk &copy; 2003 Sielay Ltd (site/merchandise) /
          Łukasz Marek Sielski (book) / PhoneKills (social profiles)
        </>
      }
    />
  );
}
