import {
  Box,
  Text,
  Heading,
  Grid,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Flex,
  Button,
  Link,
  Image,
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

type ResumeItem = {
  position: string;
  company: string;
  duration?: string;
  responsibilities?: string[];
  logo?: string;
};

const RESUME_ITEMS: Array<ResumeItem> = [
  {
    position: "Senior Software Engineer",
    company: "Happy Group",
    duration: "January 2021 - Present",
    responsibilities: [
      "Take responsibility for the direction of internal tools and new recruitment website through contributing to codebase and fixing urgent issues",
      "Educate team members on how to write clean code, solve problems and communicate effectively",
      "Fulfill DevOps requirements through continuous integration, monitoring and logging",
      "Interpret requirements from management, and relay to development team",
      "Perform regular code reviews (one to one) to ensure code conforms to internal standards, and inspire confidence in team members when problems arise",
    ],
  },
  {
    position: "Senior WordPress Engineer",
    company: "Tridaz s.r.o",
    duration: "January 2016 - October 2020",
    responsibilities: [
      "Responsible for creating solutions to complex WordPress issues",
      "Co-ordinate client projects with management, and delegate design / development tasks to in-house team",
      "Build custom themes and plugins, making use of the latest technologies and techniques to build high-performing websites",
      "Educate team on best practices in WordPress, and document standard operating procedures to improve team efficiency",
    ],
  },
  {
    position: "Software Engineer",
    company: "Oceania University of Medicine",
    duration: "June 2016 - May 2017",
    responsibilities: [
      "Rewrite PHP codebase to fit with latest business requirements",
      "Optimize database queries to operate efficiently on large datasets",
      "Standardise design practices through effective use of the Bootstrap CSS framework",
      "Attend regular code reviews with management (database administrator) to improve knowledge of infrastructure and databases",
    ],
  },
  {
    position: "Software Engineer",
    company: "Balboa Pacific Media",
    duration: "June 2015 - May 2016",
    responsibilities: [
      "Integrate high-risk payment solutions and adhere to PCI compliance standards",
      "Construct sales funnels and co-ordinate required features with copywriting and design team",
      "Build and deploy product websites in a high-traffic environment with many concurrent users",
      "Advise on direction of e-commerce assets and new funnels",
    ],
  },
];

const ResumeItem = ({
  position,
  company,
  duration,
  responsibilities,
  logo,
}: ResumeItem) => {
  return (
    <>
      <Grid
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        boxShadow="base"
        gap={2}
        autoFlow="row dense"
      >
        <Flex
          direction={["column-reverse", "column-reverse", "row"]}
          justifyContent={"space-between"}
        >
          <Box>
            <Heading as="h3" size="md">
              {position}, {company}
            </Heading>
            <Text fontSize="lg">{duration}</Text>
            <UnorderedList>
              {responsibilities?.map((responsibility) => (
                <ListItem>{responsibility}</ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box>
            {logo && (
              <Image
                src={logo}
                display={{ base: "none", md: "flex" }}
                width={"100px"}
              />
            )}
          </Box>
        </Flex>
      </Grid>
    </>
  );
};

export default function Resume() {
  return (
    <Box>
      <Grid gap={8} autoFlow="row dense">
        <Grid gap={4} autoFlow="row dense">
          <Flex justifyContent={"space-between"}>
            <Box>
              <Heading as="h1" size="lg">
                Resume
              </Heading>
            </Box>
            <Box>
              <Link as={Button} to="/contact">
                Get in touch
              </Link>
            </Box>
          </Flex>
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
        </Grid>
        <Grid gap={4} autoFlow="row dense">
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
        </Grid>
        <Grid gap={4} autoFlow="row dense">
          <Heading as="h2" size="md">
            Roles
          </Heading>
          {RESUME_ITEMS.map((item) => (
            <ResumeItem {...item} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
