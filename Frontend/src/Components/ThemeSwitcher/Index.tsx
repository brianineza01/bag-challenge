import {
  Box,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="dark-mode" mb="0">
          Dark Mode
        </FormLabel>
        <Switch
          id="dark-mode"
          isChecked={colorMode === "dark"}
          onChange={() => toggleColorMode()}
        />
      </FormControl>
    </Box>
  );
};

export default ThemeSwitcher;
