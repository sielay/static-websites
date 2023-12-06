import Image from "next/image";
import { PageLayout } from "ui";
import { Noticia_Text as NoticaText } from "next/font/google";
import StaticImage from "../../public/martinsielski.png";

const noticaText = NoticaText({ weight: "700", subsets: ["latin"] });

const LINKS = [];

export default function Page(): JSX.Element {
  return (
    <PageLayout
      pageTitle="Martin Sielski"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          Hey there! I'm Martin, and this is my special space. It's like my own
          little corner that's waiting for me to grow up a bit. Right now, I'm
          just a kid, and I don't have super exciting things to share yet. But
          one day, when I'm a bit older, I'll fill this space with all the cool
          stuff I want to tell everyone. Until then, it's my own little world in
          the making! 🌟
        </>,
        <>Any questions contact (at) martinsielski.com</>
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Should You Become a Software Developer?: A book you should read before you decide to learn to code - Łukasz Marek Sielski"
          width={500}
        />
      }
      copyright={<>&copy; 2023 Martin Sielski</>}
    />
  );
}
