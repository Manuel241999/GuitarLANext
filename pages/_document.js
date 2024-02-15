import { Html, Head, Main, NextScript } from "Next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" context="GuitarLA - Venta de guitarras y blog de música" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
          rel="stylesheet"/>
          <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>
      <body>
        <Main>

        </Main>
        <NextScript />
      </body>
    </Html>
  );
}
