import { Box, Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box as="header">
        <Navbar />
      </Box>
      <Box as="main" sx={{ minH: "100vh", p: "1rem", bg: "gray.100" }}>
        {children}
      </Box>
    </>
  );
}
