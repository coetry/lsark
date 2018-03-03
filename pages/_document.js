import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Lonestar Auto Repair Katy</title>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          * { box-sizing: border-box; }
          body { margin: 0; }
        `}</style>
      </html>
    )
  }
}
