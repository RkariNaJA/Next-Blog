import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/*To portal notifications component into this place */}
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
