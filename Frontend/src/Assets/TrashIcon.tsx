import { Box } from "@chakra-ui/react";

const TrashIcon = ({
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
    mr="5px"
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
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  </Box>
);

export default TrashIcon;
