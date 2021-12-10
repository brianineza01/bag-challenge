import { Box } from "@chakra-ui/react";

const PlusIcon = ({
  bg,
  color,
  onClick,
  ...props
}: {
  bg: string;
  color: string;
  onClick?: () => void;
}) => (
  <Box
    h="40px"
    w="40px"
    borderRadius="full"
    bg={bg}
    p="5px"
    mr={1}
    _hover={{ bg: "#ebedf0" }}
    _active={{
      bg: "#dddfe2",
      transform: "scale(0.98)",
      borderColor: "#bec3c9",
    }}
    _focus={{
      boxShadow:
        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
    }}
    onClick={onClick}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill={color}
    >
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  </Box>
);

export default PlusIcon;
