import Image from "next/image";
import { PageLayout } from "ui";
import { Noticia_Text as NoticaText } from "next/font/google";
import StaticImage from "../../public/becoming.png";

const noticaText = NoticaText({ weight: "700", subsets: ["latin"] });

const LINKS = [
  {
    title: "Follow the author on TikTok",
    href: "https://www.tiktok.com/@shouldyoubecomedeveloper",
    description:
      "Join 1K+ followers on the most engaging social platform",
  },
  {
    title: "Follow the author on Twitter/X",
    href: "https://www.twitter.com/coderebased",
    description:
      "Follow on the most dividing social platform",
  },
  {
    title: "E-book on Amazon.co.uk",
    href: "https://www.amazon.co.uk/dp/B0B2CGTMVY",
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
      pageTitle="Becoming Developer"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          Embark on an exciting journey into the vibrant world of the IT trade
          alongside the seasoned expert Łukasz Marek Sielski in &quot;Should You
          Become a Software Developer?&quot; With over two decades of
          experience, Sielski skillfully unravels the life of an IT
          professional, offering invaluable insights for a fulfilling and
          successful career.
        </>,
        <>
          Whether you&apos;re contemplating a transformative career shift or
          simply seeking to understand the intricacies of the IT world, this
          book stands as your indispensable companion. Sielski provides a
          focused roadmap, expertly guiding you through the competitive IT
          landscape, helping you surmount challenges, and empowering you to make
          informed decisions.
        </>,
        <>
          Discover the diverse roles within the IT industry, explore potential
          earnings, and understand the far-reaching impact of your choices. In
          the heartfelt &quot;My Story&quot;section, Sielski shares his personal
          journey from a self-taught IT enthusiast to the esteemed position of
          Head of IT Development.
        </>,
        <>
          The chapters titled &quot;Path,&quot; &quot;Work,&quot; and
          &quot;Environment&quot; are tailored to equip you with the necessary
          knowledge, from securing your inaugural IT job to navigating technical
          intricacies and acclimating to the realities of the industry. Delving
          into issues like imposter syndrome and burnout, Sielski serves not
          only as an experienced guide but also as an encouraging mentor.
        </>,
        <>
          This book is more than just a guide; it&apos;s an invitation to unlock
          your potential in the fascinating world of the IT trade. Whether
          you&apos;re new to the field or an industry insider seeking fresh
          perspectives, &quot;Should You Become a Software Developer?&quot; is
          your key to an enriching and successful journey in the realm of IT.
          Embrace the opportunity to enhance your understanding, overcome
          challenges, and chart a course towards a fulfilling IT career.
        </>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Should You Become a Software Developer?: A book you should read before you decide to learn to code - Łukasz Marek Sieslki"
          width={400}
        />
      }
      copyright={<>BecomingDeveloper.co.uk &copy; 2001 - 2003 Sielay Ltd</>}
    />
  );
}
