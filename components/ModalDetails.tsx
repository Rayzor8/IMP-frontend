import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Posts } from "../types/posts";

type ModalDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPost: undefined | Posts;
};

const ModalDetails = ({
  isOpen,
  onClose,
  selectedPost,
}: ModalDetailsProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt={5}>
        <ModalHeader>{selectedPost?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{selectedPost?.body}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDetails;
