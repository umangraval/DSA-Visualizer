import React from "react";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import "public/global.css";
import PropTypes from "prop-types";
import Layout from "components/Layout";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "utils/auth";
import Head from "next/head";
import Favicon from "components/Favicon";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DSA Visualizer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="title" content="DSA Visualizer" />
        <meta name="description" content="DSA Visualization" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DSA Visualizer" />
        <meta property="og:title" content="DSA Visualizer" />
        <meta property="og:description" content="DSA Visualization" />

        <meta name="robots" content="all" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        <Favicon />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/atom-one-dark.min.css"
        ></link>
        <script src="https://unpkg.com/react-quill@1.3.3/dist/react-quill.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
      </Head>
      <AuthProvider>
        <ToastContainer />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
