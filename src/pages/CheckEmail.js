import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";

const CheckEmail = ({isopen, onclose}) => {
  return (
    <>
      <Modal isOpen={isopen} onClose={onclose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You've Got Mail!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Please check your email for the login URL</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onclose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckEmail;
