import {
  Button,
  FormControl,
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
};

const AddForm = ({ posts, setPosts }: AddFormProps) => {
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    console.log(values);
    setPosts([{ id: Date.now(), ...values }, ...posts]);
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
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormLabel>Body</FormLabel>
        <Textarea
          placeholder="Input body here.."
          {...register("body", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <Button colorScheme="teal" type="submit">
          Create Post
        </Button>
      </FormControl>
    </form>
  );
};

export default AddForm;
