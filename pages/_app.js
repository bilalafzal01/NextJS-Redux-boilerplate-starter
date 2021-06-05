import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { withRouter } from 'next/router'
import App from 'next/app'

import createStore from 'store/createStore'
import Layout from 'components/Layout'

import 'antd/dist/antd.css'
import theme from 'theme'
import GlobalStyle from 'globalStyle'

class MyApp extends App {
  render () {
    const { Component, pageProps, router, store } = this.props
    const title = 'NextJS Starter Kit'
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property='og:title' content={title} />
          <link rel='icon' href='/static/docs_icon.svg' />
          <link
            rel='preload'
            href='/static/fonts/Poppins-Bold.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/static/fonts/Poppins-SemiBold.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/static/fonts/Poppins-Regular.ttf'
            as='font'
            crossOrigin=''
          />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyle />
            <Layout>
              <Component router={router} {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}

export default withRedux(createStore)(withRouter(MyApp))
