import Image from "next/image";
import { PageLayout } from "ui";
import { Noticia_Text as NoticaText } from "next/font/google";
import StaticImage from "../../public/piwopodchmurka.png";

const noticaText = NoticaText({ weight: "700", subsets: ["latin"] });

const LINKS = [
  {
    title: "PARPA",
    href: "https://www.parpa.pl/",
    description: "Państwowa Agencja Rozwiązywania Problemów Alkoholowych",
  },
  {
    title: "Monar",
    href: "https://www.monar.org/o-nas/",
    description:
      "Stowar­zyszenie, pomagającego osobom uzależnionym, chorym, bezdomnym",
  },
  {
    title: "Piłeś? Nie jedź!",
    href: "https://www.pbd.org.pl/projekty/piles-nie-jedz/",
    description: "Partnerstwo dla Bezpieczeństwa Drogowego",
  },
  {
    title: "Ja, winien całego zamieszania",
    href: "https://www.sielay.com/projects/piwo-pod-chmurk%C4%85",
    description: "Lokalna akcja, która zaszła za daleko",
  },
];

export default function Page(): JSX.Element {
  return (
    <PageLayout
      pageTitle="Piwo Pod Chmurką"
      headerClass={noticaText.className}
      links={LINKS}
      paragraphs={[
        <>
          Szczecin, 2011, Deptak Bogusława. Odpoczywamy po ciężkim dniu pracy,
          ludzie wylewają się z pubów i dyskotek jak z psiego baniaka. Każdy
          trzyma w dłoni jakieś piwo lub wino, jakby to były eliksiry młodości.
          Nagle pojawia się straż miejska. Panika! Wszyscy udają niewinnego, a
          ich mimika mówi: "My, alkohol? Ależ skąd, to tylko woda mineralna z
          limonką". Lecą mandaty jak gradobicie. Mirek pyta z nieukrywanym
          zdziwieniem - "Serio, nawet tutaj nie można sobie w spokoju napić?
          Nawet w parku przy ognisku...". Rozważam, kombinuję. Może da się coś z
          tym zrobić. Konsultujemy się z prawnikiem, a tu okazuje się, że
          istnieje luka dla samorządów. Zaczynamy zbierać podpisy. Miasto jest
          jak niechętna teściowa, ale ludzie zaczynają nas kopiować w innych
          miejscowościach. Powstaje większa grupa, a potem projekt ustawy.
          Zapraszają nas do telewizji, gdzie co weekend jadę pociągiem do
          Warszawy na wywiad albo spotkanie z politykami. Mediacje w Sejmie,
          stand na Woodstocku, a poczta ugina się pod ciężarem kart z podpisami.
          Spotykamy się z komisją w Sejmie, ale terminy mijały jakbyśmy byli na
          kursie jogi. Tracimy siłę, bo nikt nie był zbyt chętny, aby działać
          dalej. Ostatecznie odkładam pałeczkę. Lokalne akcje w Warszawie i
          Szczecinie ciągną się przez lata jak powolne przewijanie się przez
          kasę w urzędzie.
        </>,
        <>
          Mija czas. Poznaję drugą stronę historii. Rodziny przyjaciół rozbite
          przez alkohol. Znajomi tracą zdrowie i życie.W życiowej wadze z
          nadwagą pierwsze co ucinam to alkohol. Postanawiam się zmienić, jakby
          przestawić swój życiowy kompas na bardziej rozsądne tory. Robię
          badania do książki o bezpieczeństwie w ruchu drogowym. Spotykam
          policjantów i ratowników, którzy opowiadają o wypadkach, gdzie alkohol
          był gościem honorowym. Czuję się trochę jak bohater filmu
          kryminalnego, ale z winą i wstydem.
        </>,
        <>
          Jako młodzi, cieszę się, że mieliśmy siłę i wolę walczyć o podstawowe
          wolności, zaufanie państwa do człowieka, i nieocenianie każdego jak
          potencjalnego przestępcy. Ale przekaz był inny. W końcu okazaliśmy się
          być trybikiem w wielkim przemyśle znieczulania i niszczenia zdrowia.
          Byliśmy usłużnymi idiotami na rzecz koncernów. Szanuję małe browary,
          winiarnie, rzemieślników, ale szanuję też ofiary. Nadszedł czas, aby
          się głęboko ukłonić i przeprosić.
        </>,
        <>Szczerze, przepraszam, Łukasz</>,
      ]}
      image={<Image src={StaticImage} alt="Piwo Pod Chmurką" width={300} />}
      copyright={<>PiwoPodChmurka.pl &copy; 2011-2023 Łukasz Marek Sielski</>}
    />
  );
}
