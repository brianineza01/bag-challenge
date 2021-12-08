import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box
        ml={!variants?.navigationButton ? 200 : undefined}
        py={15}
        px={[5, 10, 20]}
      >
        <Outlet />
      </Box>
    </>
  );
}
