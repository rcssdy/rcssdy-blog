import { Box, Text, Heading, Grid, Button, Image } from "@chakra-ui/react";

export default function Index() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={["column-reverse", "column-reverse", "row"]}
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        gap={4}
        boxShadow="base"
      >
        <Grid gap={4} autoFlow="row dense">
          <Heading as="h1" size="xl">
            Hi, I'm Ryan Cassidy 👋🏻
          </Heading>
          <Text fontSize="lg">
            I'm a Senior Software Engineer at Happy Group, solving complex
            problems with JavaScript & PHP. I've travelled the world writing
            code for ~8 years now, visiting many different countries in the
            process.
          </Text>
          <Button size="lg" width={"150px"}>
            Learn more
          </Button>
        </Grid>
        <Box>
          <Image
            src="/assets/me.jpg"
            alt="Ryan Cassidy"
            width={["60%", "60%", "450px"]}
            mx={["auto", "auto", "0"]}
            borderRadius={"100%"}
          />
        </Box>
      </Box>
    </>
  );
}
