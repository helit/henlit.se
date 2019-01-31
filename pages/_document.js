import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Colors } from "../components/Styles"

const resetStyles = `
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #fafafa;
    color: ${Colors.darkGrey};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

const globalStyles = `
  h1, h2, h3 {
    margin-bottom: 20px;
  }

  h4, h5, h6 {
    margin-bottom: 8px;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <title>henlit.se</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
