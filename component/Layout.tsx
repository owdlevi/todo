/** @jsx jsx */
import { ThemeProvider, jsx, Container } from "theme-ui";
import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import theme from "./theme";
import SwitchColorMode from "./SwitchColorMode";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header
      sx={{
        variant: "styles.header"
      }}
    >
      <Container
        p={4}
        bg="muted"
        sx={{
          maxWidth: "100%",
          mx: "auto",
          display: "flex",
          alignItems: "baseline"
        }}
      >
        <Link href="/">
          <a
            sx={{
              variant: "styles.navlink",
              fontSize: 5,
              py: 2
            }}
          >
            To Do
          </a>
        </Link>
        <div sx={{ mx: "auto" }} />
        <SwitchColorMode
          sx={{
            variant: "styles.button",
            ml: 3,
            py: 2
          }}
        />
      </Container>
    </header>
    <Container p={4} bg="muted">
      {children}
    </Container>

    <footer>
      <Container p={4} bg="muted">
        <hr />
        <span>I'm here to stay (Footer)</span>
      </Container>
    </footer>
  </ThemeProvider>
);

export default Layout;
