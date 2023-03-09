import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Posts } from "../types/posts";

type FormValues = {
  title: string;
  body: string;
};

type AddFormProps = {
  posts: Posts[];
  setPosts: Dispatch<SetStateAction<Posts[]>>;
  type: Posts | undefined;
  selectedPost: undefined | Posts;
  setSelectedPost:Dispatch<SetStateAction<Posts | undefined>>
  onClose?: () => void;
};

const AddForm = ({
  posts,
  setPosts,
  type,
  selectedPost,
  setSelectedPost,
  onClose,
}: AddFormProps) => {
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      title: selectedPost ? selectedPost.title : "",
      body: selectedPost ? selectedPost.body : "",
    },
  });
  const { ref } = register("title");

  const onSubmit = (values: FormValues) => {
    if (!selectedPost) {
      setPosts([{ id: Date.now(), ...values }, ...posts]);
    } else {
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post.id === selectedPost.id) {
            return (post = { id: Date.now(), ...values });
          } else {
            return post;
          }
        })
      );
      onClose && onClose();
      setSelectedPost(undefined)
    }
    resetField("title");
    resetField("body");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        w={{ lg: "500px" }}
        sx={{ display: "flex", flexDir: "column", gap: 4 }}
        bg="white"
        p={5}
        rounded="md"
        shadow="lg"
      >
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          placeholder="input title here.."
          {...register("title", {
            required: true,
          })}
        />
        <FormLabel>Body</FormLabel>
        <Textarea
          placeholder="Input body here.."
          {...register("body", {
            required: true,
          })}
        />
        <Button colorScheme="teal" type="submit">
          {type ? "Edit Post" : "Create Post"}
        </Button>
      </FormControl>
    </form>
  );
};

export default AddForm;
