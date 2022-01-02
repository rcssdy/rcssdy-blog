import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "remix";

interface NavItem {
  label: string;
  href?: string;
}

const NAVIGATION_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Resume",
    href: "/resume",
  },
];

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        px={4}
        borderBottom={"1px"}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        mb={8}
      >
        <Container maxW="container.lg">
          <Flex py={4} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Link to="/">
                <Heading as="h1" size="lg">
                  rcssdy
                </Heading>
              </Link>
            </Box>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Flex marginY="auto" gap={4}>
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link key={item.label} to={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </Flex>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
