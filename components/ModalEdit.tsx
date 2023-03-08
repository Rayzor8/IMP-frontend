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

type ModalEditProps = {
  isOpen: boolean;
  onClose: () => void;
};
const ModalEdit = ({ isOpen, onClose }: ModalEditProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Edit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque
            odit accusantium, consequuntur culpa alias? Odit reiciendis eum
            eveniet minus repudiandae ipsa cupiditate!
          </p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEdit;
