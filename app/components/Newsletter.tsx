import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Form } from "remix";

export default function Newsletter() {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      gap={8}
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      boxShadow="base"
    >
      <Box>
        <Grid gap={4}>
          <Heading as="h1" size="md">
            Get Weekly Developer Notes 📝
          </Heading>
          <Text fontSize="lg">
            I write a weekly email that contains tips and tricks for developers
            looking to improve their coding skills and climb the career ladder.
          </Text>
          <Text fontSize="lg">
            I draw on my experience and knowledge to provide you with some of
            the best advice to help you get the most out of web development.
          </Text>
        </Grid>
      </Box>
      <Box>
        <Form method="post">
          <Grid gap={4}>
            <FormControl>
              <FormLabel htmlFor="email">Your Name</FormLabel>
              <Input id="name" name="name" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <Input id="email" name="email" type="email" />
              <FormHelperText>I'll never share your email.</FormHelperText>
            </FormControl>
            <Button type="submit">Subscribe</Button>
          </Grid>
        </Form>
      </Box>
    </SimpleGrid>
  );
}
