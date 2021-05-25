import React from 'react'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../themes/theme.material-ui'

interface IProps {
  Component: any
  pageProps: unknown
}

const MyApp: React.FC<IProps> = ({ Component, pageProps }: IProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
