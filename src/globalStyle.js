import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter-ExtraLight';
    font-style: normal;
    font-weight: normal;
    src: url('/static/fonts/Inter-ExtraLight.ttf');
  }

  @font-face {
    font-family: 'Inter-Light';
    font-style: normal;
    font-weight: normal;
    src: url('/static/fonts/Inter-Light.ttf');
  }

  @font-face {
    font-family: 'Inter-Thin';
    font-style: normal;
    font-weight: normal;
    src: url('/static/fonts/Inter-Thin.ttf');
  }

  @font-face {
    font-family: 'Inter-Regular';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/Inter-Regular.ttf');
  }

  @font-face {
    font-family: 'Inter-Medium';
    font-style: normal;
    font-weight: 500;
    src: url('/static/fonts/Inter-Medium.ttf');
  }

  @font-face {
    font-family: 'Inter-SemiBold';
    font-style: normal;
    font-weight: 600;
    src: url('/static/fonts/Inter-SemiBold.ttf');
  }

  @font-face {
    font-family: 'Inter-Bold';
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/Inter-Bold.ttf');
  }

  @font-face {
    font-family: 'Poppins-Regular';
    font-style: normal;
    font-weight: normal;
    src: url('/static/fonts/Poppins-Regular.ttf');
  }

  @font-face {
    font-family: 'Poppins-SemiBold';
    font-style: normal;
    font-weight: 600;
    src: url('/static/fonts/Poppins-SemiBold.ttf');
  }

  @font-face {
    font-family: 'Poppins-Bold';
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/Poppins-Bold.ttf');
  }
`

export default GlobalStyle
