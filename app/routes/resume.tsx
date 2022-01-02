import {
  Box,
  Text,
  Heading,
  Grid,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  DiAngularSimple,
  DiJsBadge,
  DiMysql,
  DiPhp,
  DiReact,
  DiRedis,
  DiWordpress,
} from "react-icons/di";

export default function Resume() {
  return (
    <Box>
      <Grid gap={4} autoFlow="row dense">
        <Heading as="h1" size="lg">
          Resume
        </Heading>
        <Text>
          Experienced software engineer with 7+ years of experience in
          commercial software development. In previous roles, I’ve built
          software that has been served to millions of users. I believe my
          background is unique as I learned software development under
          supervision from an experienced database professional, having spent
          much of my career fixing old, outdated applications rather than
          greenfield projects. This has given me solid foundations in software
          engineering.
        </Text>
        <Heading as="h2" size="md">
          Technologies
        </Heading>
        <Flex>
          <Icon as={DiJsBadge} w={12} h={12} />
          <Icon as={DiReact} w={12} h={12} />
          <Icon as={DiAngularSimple} w={12} h={12} />
          <Icon as={DiPhp} w={12} h={12} />
          <Icon as={DiWordpress} w={12} h={12} />
          <Icon as={DiMysql} w={12} h={12} />
          <Icon as={DiRedis} w={12} h={12} />
        </Flex>
        <Heading as="h2" size="md">
          Roles
        </Heading>
        <Grid
          borderWidth="1px"
          borderRadius="lg"
          p={6}
          boxShadow="base"
          gap={2}
          autoFlow="row dense"
        >
          <Heading as="h3" size="md">
            Senior Software Engineer, Happy Group
          </Heading>
          <Text fontSize="lg">Jan 2021 - Present</Text>
          <UnorderedList>
            <ListItem>
              Take responsibility for the direction of internal tools and new
              recruitment website through contributing to codebase and fixing
              urgent issues
            </ListItem>
            <ListItem>
              Educate team members on how to write clean code, solve problems
              and communicate effectively
            </ListItem>
            <ListItem>
              Fulfill DevOps requirements through continuous integration,
              monitoring and logging
            </ListItem>
            <ListItem>
              Interpret requirements from management, and relay to development
              team
            </ListItem>
            <ListItem>
              Perform regular code reviews (one to one) to ensure code conforms
              to internal standards, and inspire confidence in team members when
              problems arise
            </ListItem>
          </UnorderedList>
        </Grid>
      </Grid>
    </Box>
  );
}
