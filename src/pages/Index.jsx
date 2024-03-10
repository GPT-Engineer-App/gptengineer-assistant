import { Box, Button, Textarea, VStack, Heading, Divider } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  // Placeholder function to simulate running GPT engine
  const handleRunClick = () => {
    alert("This is a placeholder. In a real application, this would trigger an API call to a GPT engine.");
  };

  return (
    <VStack spacing={4} p={4}>
      <Heading>GPT Engineer Program</Heading>
      <Divider />
      <Textarea placeholder="Type your input for the GPT engine here..." size="sm" height="200px" />
      <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid" onClick={handleRunClick}>
        Run
      </Button>
      <Box p={4} w="100%" bg="gray.100" borderRadius="md">
        <Heading size="md">Output:</Heading>
        {/* Placeholder Output */}
        <Box p={2} bg="white" borderRadius="md" mt={2}>
          Your GPT engine output will appear here...
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;
