import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useQuery, useMutation } from "react-query";
import { Posts } from "../types/posts";
import { useState } from "react";
import AddForm from "../components/AddForm";

export default function Home() {
  const [posts, setPosts] = useState<Posts[]>([]);

  async function fetchPosts() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setPosts(data);
    return data;
  }
  const { isLoading } = useQuery({
    queryKey: ["getPost"],
    queryFn: fetchPosts,
  });

  return (
    <>
      <Head>
        <title>IMP Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <AddForm posts={posts} setPosts={setPosts} />

        <Stack>
          <Heading as="h1" size="md" textAlign="center">
            Posts Data
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(260px, 1fr))"
          >
            {!isLoading && posts.map((post: Posts) => (
              <Card key={post.id}>
                <CardBody>
                  <Text>{post.title}</Text>
                </CardBody>
                <CardFooter gap={2}>
                  <Button colorScheme="telegram" size="sm">
                    Details
                  </Button>
                  <Button colorScheme="facebook" size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button colorScheme="orange" size="sm" variant="outline">
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </>
  );
}
