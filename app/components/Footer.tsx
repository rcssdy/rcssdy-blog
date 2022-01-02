import { Box, Container, Grid, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Container maxW="container.lg" my={8}>
      <Box display="flex" justifyContent={"space-between"}>
        <Text color={"gray.400"} my="auto">
          Copyright © {new Date().getFullYear()} Ryan Cassidy. All rights
          reserved.
        </Text>
        <Grid display="flex" gap={4}>
          <a href="https://twitter.com/rcssdy">
            <Icon as={FaTwitter} w={6} h={6} color={"blue.400"} />
          </a>
          <a href="https://github.com/rcssdy">
            <Icon as={FaGithub} w={6} h={6} />
          </a>
        </Grid>
      </Box>
    </Container>
  );
}
