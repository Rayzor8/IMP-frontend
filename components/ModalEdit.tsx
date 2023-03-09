import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Posts } from "../types/posts";
import AddForm from "./AddForm";

type ModalEditProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPost: undefined | Posts;
  setSelectedPost: Dispatch<SetStateAction<Posts | undefined>>;
  posts: Posts[];
  setPosts: Dispatch<SetStateAction<Posts[]>>;
};
const ModalEdit = ({
  isOpen,
  onClose,
  selectedPost,
  setSelectedPost,
  posts,
  setPosts,
}: ModalEditProps) => {
  const handleClose = () => {
    onClose();
    setSelectedPost(undefined);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Edit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AddForm
            posts={posts}
            setPosts={setPosts}
            type={selectedPost}
            selectedPost={selectedPost}
            setSelectedPost={setSelectedPost}
            onClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalEdit;
