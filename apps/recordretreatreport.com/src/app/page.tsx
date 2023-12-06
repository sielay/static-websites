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
          In the last year, the Metropolitan Police down under copped a whopping
          15,000 reports of dodgy driving from the public. A growing number of
          folks, myself included, are chucking cameras into the mix to tackle
          road shenanigans. Setting off on a bit of a self-discovery journey, I
          dived into the movement&apos;s history, catching up with the
          trailblazers, law enforcement legends, and celebs going all-out for
          road safety.
        </>,
        <>
          Had a yarn with Jeremy Vine, Andy Cox, Mark Hodson, Mike van Erp, Dave
          Sherry, Traffic Droid, Cycle Granny, and a few more.
        </>,
        <>Unedited snippet:</>,
        <span key="2" className="italic">
          When you dig long enough you can strike a gold line or unexploded WW2
          bomb. Sometimes both at the same time. As officers around the country
          work hard to save people’s lives, there are some who put their own ego
          above the public interest. There are some who would go after a person
          that proves there are areas, where the force underperforms. Lucky as
          is often the case with with East European dictators, such
          individuals&appos; tactics fall apart due to the incompetence of the
          only people willing to follow their lead.
        </span>,
        <span key="3" className="italic">
          The following story is based on several accounts from the same period
          and place. In all cases, the interviewees felt confident enough to
          share their experience, ready to defend their stand in the court if
          challenged, but required to keep names and locations edited. It isn’t
          my aim to set a fire, but to raise awareness and initiate debates -
          some of which can and should be behind closed doors of constabularies.
        </span>,
        <>This cover design is temporary.</>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Record Retreat Report - Łukasz Marek Sieslki"
          width={600}
        />
      }
      copyright={
        <>
          RecordRetreatReport.com &copy; 2003 Sielay Ltd (site/merchandise) /
          Łukasz Marek Sielski (book) / PhoneKills (social profiles)
        </>
      }
    />
  );
}
