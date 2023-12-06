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
          In the previous year, the Metropolitan Police alone received over
          15,000 reports of dangerous driving from the public. A growing number
          of individuals, including myself, are turning to cameras as a tool to
          combat road crime. Embarking on a self-discovery journey, I explored
          the movement&appos;s history, meeting pioneers, disruptors within law
          enforcement, and celebrities actively involved in promoting road
          safety.
        </>,
        <>
          I conducted interviews with Jeremy Vine, Andy Cox, Mark Hodson, Mike
          van Erp, Dave Sherry, Traffic Droid, Cycle Granny, and more.
        </>,
        <>Unedited snippet:</>,
        <span key="1" className="text-2xl">
          A land of snitches
        </span>,
        <span key="2" className="italic">
          In the eyes of Telegraph columnist, Celia Walden, the United Kingdom
          became a country of snitches.1 In the context of the 2020 lockdown,
          she ridiculed people reporting barbecues, sleepovers or laughs, and
          then moved to Mike Van Erp’s video that landed Guy Ritchie a six-month
          driving ban. I may be too thick, but after she wrote “There’s one
          thing I loathe more”, I can’t work out if she meant dangerous drivers
          using handheld devices behind the wheel or those who report them.
        </span>,
        <span key="3" className="italic">
          What do we hate more? Wrongdoing or standing up to offenders? Does it
          depend on one’s role in the event or preexisting affiliations? Would
          we report a burglar? What about a drunk driver? Then what about
          someone who passed a cyclist close enough to scare, but not enough to
          kill?
        </span>,
        <span key="4" className="italic">
          I sat in a crowded bus, somewhere in central Warsaw, and realised that
          Walden might have been onto something. During that unplanned trip to
          the country of my origin, I was both shocked and enlightened. There
          were far more drivers glued to their screens than I see in London. In
          2021 in Poland were almost twice as many road deaths per million
          inhabitants than in the UK (Poland 22452 per 38 million - 59, UK 11583
          per 63 million - 24). You can’t state otherwise - Polish roads are far
          more dangerous. So frightening to be used as an opening to the amazing
          book “Watching the English” by Kate Fox. So why does it seem that the
          UK is the leader in third-party recording (reporting crime and
          offences by the members of the public)? Why it’s not the US where the
          technology used in our cameras was developed? Why not Australia where,
          as some say, the first “headcammers” appeared? Why not Netherlands,
          Denmark, Germany or France which have a much larger number of commuter
          cyclists, so possibly a greater chance for tension as well?
        </span>,
        <span key="5" className="italic">
          Is “snitching” a profoundly British thing? Is it a fault or a national
          virtue?
        </span>,

        <span key="6" className="italic">
          “The police are the public and the public are the police.4“- Sir
          Robert Peel
        </span>,
        <span key="6" className="italic">
          (...)
        </span>,
        <>This cover design is temporary.</>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Record Retreat Report - Łukasz Marek Sielski"
          width={1000}
        />
      }
      copyright={
        <>
          PhoneKills.co.uk &copy; 2023 Sielay Ltd (site/merchandise) / Łukasz
          Marek Sielski (book) / PhoneKills (social profiles)
        </>
      }
    />
  );
}
