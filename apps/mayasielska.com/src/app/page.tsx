import Image from "next/image";
import { PageLayout } from "ui";
import { Noticia_Text as NoticaText } from "next/font/google";
import StaticImage from "../../public/mayasielska.png";

const noticaText = NoticaText({ weight: "700", subsets: ["latin"] });

const LINKS = [];

export default function Page(): JSX.Element {
  return (
    <PageLayout
      pageTitle="Maya Sielska"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          I'm just a tiny one now, too small to run my own webpage. But guess
          what? I've got this space right here, all ready and waiting for me to
          grow up a bit. When I'm bigger and have awesome things to share, this
          space will be mine to fill with all my cool stories and thoughts. It's
          like a special place just for me, and I can't wait to make it awesome
          when I'm a bit older! 🚀🌈
        </>,
        <>Any questions contact (at) mayasielska.com</>,
      ]}
      image={<Image src={StaticImage} alt="Maya Sielska" width={600} />}
      copyright={<>&copy; 2023 Maya Sielska</>}
    />
  );
}
