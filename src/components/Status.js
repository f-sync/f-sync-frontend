import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Status = ({ values, status }) => {
  const Success = (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      marginTop="5%"
      height="200px"
      w="40%"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Product Added!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        You've added {values} successfully!! 🥳.
      </AlertDescription>
    </Alert>
  );

  const Failed = (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      marginTop="5%"
      height="200px"
      w="40%"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Failed
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        There was an error processing your request.
      </AlertDescription>
    </Alert>
  );

  return <>{status ? Success : Failed}</>;
};

export default Status;
