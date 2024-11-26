// import React from "react"
// import { Link as RouterLink } from "react-router-dom"
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"
// import { useAuth } from "../contexts/Authcontext"

// const Header = () => {
//   const { currentUser, isAdmin } = useAuth()

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <RouterLink
//             to="/"
//             style={{ color: "inherit", textDecoration: "none" }}
//           >
//             Blogging App
//           </RouterLink>
//         </Typography>
//         <Box>
//           {currentUser ? (
//             <>
//               <Button color="inherit" component={RouterLink} to="/dashboard">
//                 Dashboard
//               </Button>
//               {isAdmin && (
//                 <Button color="inherit" component={RouterLink} to="/admin">
//                   Admin
//                 </Button>
//               )}
//               <Button
//                 color="inherit"
//                 component={RouterLink}
//                 to={`/profile/${currentUser.uid}`}
//               >
//                 Profile
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" component={RouterLink} to="/login">
//                 Login
//               </Button>
//               <Button color="inherit" component={RouterLink} to="/signup">
//                 Sign Up
//               </Button>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Header






// import React from "react"
// import { Link as RouterLink } from "react-router-dom"
// import { Box, Flex, Spacer} from "@chakra-ui/react"
// import { useColorModeValue } from "@chakra-ui/react";

// import { Menu } from "antd"
// import { useAuth } from "../contexts/Authcontext"

// const Header = () => {
//   const { currentUser, isAdmin } = useAuth()
//   const bgColor = useColorModeValue("white", "gray.800")
//   const textColor = useColorModeValue("gray.800", "white")

//   return (
//     <Box bg={bgColor} px={4} boxShadow="sm">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <Box fontWeight="bold" fontSize="xl" color={textColor}>
//           <RouterLink to="/">Blogging App</RouterLink>
//         </Box>
//         <Spacer />
//         <Menu mode="horizontal" theme="light">
//           {currentUser ? (
//             <>
//               <Menu.Item key="dashboard">
//                 <RouterLink to="/dashboard">Dashboard</RouterLink>
//               </Menu.Item>
//               {isAdmin && (
//                 <Menu.Item key="admin">
//                   <RouterLink to="/admin">Admin</RouterLink>
//                 </Menu.Item>
//               )}
//               <Menu.Item key="profile">
//                 <RouterLink to={`/profile/${currentUser.uid}`}>
//                   Profile
//                 </RouterLink>
//               </Menu.Item>
//             </>
//           ) : (
//             <>
//               <Menu.Item key="login">
//                 <RouterLink to="/login">Login</RouterLink>
//               </Menu.Item>
//               <Menu.Item key="signup">
//                 <RouterLink to="/signup">Sign Up</RouterLink>
//               </Menu.Item>
//             </>
//           )}
//         </Menu>
//       </Flex>
//     </Box>
//   )
// }

// export default Header

// import React, { useState } from "react"
// import { Link as RouterLink } from "react-router-dom"
// import { Box, Flex, Spacer } from "@chakra-ui/react"
// import { Menu } from "antd"
// import { useAuth } from "../contexts/Authcontext"

// const Header = () => {
//   const { currentUser, isAdmin } = useAuth()

//   // Theme state (light/dark)
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   // Toggle theme function
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode)
//   }

//   // Define styles based on theme
//   const bgColor = isDarkMode ? "gray.800" : "white"
//   const textColor = isDarkMode ? "white" : "gray.800"

//   return (
//     <Box bg={bgColor} px={4} boxShadow="sm">
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <Box fontWeight="bold" fontSize="xl" color={textColor}>
//           <RouterLink to="/">Blogging App</RouterLink>
//         </Box>
//         <Spacer />
//         <Menu mode="horizontal" theme={isDarkMode ? "dark" : "light"}>
//           {currentUser ? (
//             <>
//               <Menu.Item key="dashboard">
//                 <RouterLink to="/dashboard">Dashboard</RouterLink>
//               </Menu.Item>
//               {isAdmin && (
//                 <Menu.Item key="admin">
//                   <RouterLink to="/admin">Admin</RouterLink>
//                 </Menu.Item>
//               )}
//               <Menu.Item key="profile">
//                 <RouterLink to={`/profile/${currentUser.uid}`}>
//                   Profile
//                 </RouterLink>
//               </Menu.Item>
//             </>
//           ) : (
//             <>
//               <Menu.Item key="login">
//                 <RouterLink to="/login">Login</RouterLink>
//               </Menu.Item>
//               <Menu.Item key="signup">
//                 <RouterLink to="/signup">Sign Up</RouterLink>
//               </Menu.Item>
//             </>
//           )}
//         </Menu>
//         {/* Toggle Button */}
//         <Box
//           as="button"
//           onClick={toggleTheme}
//           bg={isDarkMode ? "gray.700" : "gray.200"}
//           color={isDarkMode ? "white" : "black"}
//           px={3}
//           py={1}
//           borderRadius="md"
//           _hover={{
//             bg: isDarkMode ? "gray.600" : "gray.300"
//           }}
//         >
//           {isDarkMode ? "Light Mode" : "Dark Mode"}
//         </Box>
//       </Flex>
//     </Box>
//   )
// }

// export default Header








import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Layout, Menu, Button, Typography } from "antd"
import { useAuth } from "../contexts/Authcontext"

const { Header } = Layout
const { Title } = Typography

const AppHeader = () => {
  const { currentUser, isAdmin } = useAuth()

  // Theme state (light/dark)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Define styles based on theme
  const themeMode = isDarkMode ? "dark" : "light"

  return (
    <Header style={{ padding: "0 20px", backgroundColor: isDarkMode ? "#001529" : "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Title level={3} style={{ color: isDarkMode ? "white" : "#001529" }}>
          <RouterLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Blogging App
          </RouterLink>
        </Title>

        <Menu mode="horizontal" theme={themeMode} style={{ lineHeight: "64px" }}>
          {currentUser ? (
            <>
              <Menu.Item key="dashboard">
                <RouterLink to="/dashboard">Dashboard</RouterLink>
              </Menu.Item>
              {isAdmin && (
                <Menu.Item key="admin">
                  <RouterLink to="/admin">Admin</RouterLink>
                </Menu.Item>
              )}
              <Menu.Item key="profile">
                <RouterLink to={`/profile/${currentUser.uid}`}>Profile</RouterLink>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="login">
                <RouterLink to="/login">Login</RouterLink>
              </Menu.Item>
              <Menu.Item key="signup">
                <RouterLink to="/signup">Sign Up</RouterLink>
              </Menu.Item>
            </>
          )}
        </Menu>

        {/* Toggle Button */}
        <Button
          onClick={toggleTheme}
          style={{
            backgroundColor: isDarkMode ? "#555" : "#f0f0f0",
            color: isDarkMode ? "white" : "black",
            border: "none"
          }}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </Header>
  )
}

export default AppHeader
