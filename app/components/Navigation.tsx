import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
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
  Collapse,
  Icon,
  IconButton,
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

const DesktopNavigation = () => {
  return (
    <Flex marginY="auto" gap={4}>
      {NAVIGATION_ITEMS.map((item) => (
        <Link key={item.label} to={item.href}>
          {item.label}
        </Link>
      ))}
    </Flex>
  );
};

const MobileNavigation = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      display={{ md: "none" }}
      mb={4}
    >
      {NAVIGATION_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        to={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse> */}
    </Stack>
  );
};

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

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
                  👨🏻‍💻 rcssdy
                </Heading>
              </Link>
            </Box>

            <Box alignItems={"center"}>
              <Stack direction={"row"} spacing={4}>
                <Flex display={{ base: "none", md: "flex" }}>
                  <DesktopNavigation />
                </Flex>

                <IconButton
                  onClick={onToggle}
                  display={{ base: "flex", md: "none" }}
                  icon={
                    isOpen ? (
                      <CloseIcon w={3} h={3} />
                    ) : (
                      <HamburgerIcon w={5} h={5} />
                    )
                  }
                  variant={"ghost"}
                  aria-label={"Toggle Navigation"}
                />

                <IconButton
                  onClick={toggleColorMode}
                  icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  variant={"ghost"}
                  aria-label={"Toggle Color Mode"}
                />
              </Stack>
            </Box>
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <MobileNavigation />
          </Collapse>
        </Container>
      </Box>
    </>
  );
}
