import Image from "next/image";
import { PageLayout } from "ui";
import StaticImage from "../../public/book.png";

const LINKS = [];

export default function Page(): JSX.Element {
  return (
    <PageLayout
      pageTitle="Record Retreat Report"
      headerClass=""
      links={LINKS}
      paragraphs={[
        <>
          You will be shortly redirected to the book website at phonekill.com.
          If nothing happens click on this{" "}
          <a className="underline" href="https://phonekills.com">
            link
          </a>
          .
        </>,
      ]}
      image={
        <Image
          src={StaticImage}
          alt="Record Retreat Report - Łukasz Marek Sielski"
          width={600}
        />
      }
      copyright={<>RecordRetreatReport.com &copy; 2023-2024 SIELAY Ltd</>}
    />
  );
}
