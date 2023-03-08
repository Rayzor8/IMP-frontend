import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layouts";
import { Inter } from "next/font/google";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import React from "react";
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <ChakraProvider>
      <Layout>
        <section className={inter.className}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </section>
      </Layout>
    </ChakraProvider>
  );
}
