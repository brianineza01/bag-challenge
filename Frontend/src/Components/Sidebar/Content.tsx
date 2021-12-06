import { Box, Link, VStack } from "@chakra-ui/react";
import Logo from "../Logo";

const SidebarContent = ({ handleClick }: { handleClick: Function }) => (
  <VStack>
    <Logo />
    <Box pt={10}>
      <Link>MY LIST</Link>
    </Box>
    <Box>
      <Link>VISITED</Link>
    </Box>
    <Box>
      <Link>TO VISIT</Link>
    </Box>
  </VStack>
);

export default SidebarContent;
