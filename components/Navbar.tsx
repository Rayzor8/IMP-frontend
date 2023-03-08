import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { name: "Posts", href: "/" },
];

type NavlinkProps = { children: ReactNode; href: string };

const NavLink = ({ children, href }: NavlinkProps) => (
  <ChakraLink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={href}
  >
    <Heading size="sm">{children}</Heading>
  </ChakraLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        px={{ base: 4, md: 8, lg: 10 }}
        as="nav"
        textStyle="h1"
        shadow="sm"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"} >
            <Heading
              as="h1"
              size={{ base: "md", lg: "lg" }}
              rounded="lg"
              px="2"
              py="1"
            >
              IMP-Frontend
            </Heading>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
