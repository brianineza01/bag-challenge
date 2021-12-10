import { Box } from "@chakra-ui/react";

const TickIcon = ({
  bg,
  color,
  hoverColor,
  onClick,
  ...props
}: {
  bg: string;
  color: string;
  hoverColor?: string;
  onClick?: () => void;
}) => (
  <Box
    h="40px"
    w="40px"
    borderRadius="full"
    bg={bg}
    p="5px"
    _hover={{ bg: hoverColor }}
    _active={{
      bg: hoverColor,
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
        d="M5 13l4 4L19 7"
      />
    </svg>
  </Box>
);

export default TickIcon;
