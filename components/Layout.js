import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Head from "next/head";

const defaultComponent = (props) => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
        ></link>
      </Head>
      <Header/>
      {props.children}
    </Container>
  );
};

export default defaultComponent;