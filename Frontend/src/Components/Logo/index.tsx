import { Box, Img, useColorMode } from "@chakra-ui/react";
import BlackLogo from "../../Assets/blackLogo.svg";
import WhiteLogo from "../../Assets/whiteLogo.svg";

const Logo = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Img
        src={colorMode === "dark" ? WhiteLogo : BlackLogo}
        className="App-logo"
        alt="logo"
      />
    </Box>
  );
};

export default Logo;
