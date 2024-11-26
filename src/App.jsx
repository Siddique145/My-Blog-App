// // // import React from "react"
// // // import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// // // import { ThemeProvider, createTheme } from "@mui/material/styles"
// // // import CssBaseline from "@mui/material/CssBaseline"
// // // import { AuthProvider } from "./contexts/Authcontext"
// // // import Header from "./components/Header"
// // // import Home from "./pages/Home"
// // // import SignUp from "./pages/Signup"
// // // import Login from "./pages/Login"
// // // import Dashboard from "./pages/Dashboard"
// // // import AdminDashboard from "./pages/AdminDashboard"
// // // import UserProfile from "./pages/UserProfile"
// // // import PrivateRoute from "./components/PrivateRoute"
// // // import AdminRoute from "./components/AdminRoute"

// // // const theme = createTheme()

// // // function App() {
// // //   return (
// // //     <ThemeProvider theme={theme}>
// // //       <CssBaseline />
// // //       <AuthProvider>
// // //         <Router>
// // //           <Header />
// // //           <Switch>
// // //             <Route exact path="/" component={Home} />
// // //             <Route path="/signup" component={SignUp} />
// // //             <Route path="/login" component={Login} />
// // //             <PrivateRoute path="/dashboard" component={Dashboard} />
// // //             <PrivateRoute path="/profile/:userId" component={UserProfile} />
// // //             <AdminRoute path="/admin" component={AdminDashboard} />
// // //           </Switch>
// // //         </Router>
// // //       </AuthProvider>
// // //     </ThemeProvider>
// // //   )
// // // }

// // // export default App






// // import React from "react"
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom"  // Replace Switch with Routes
// // import { ThemeProvider, createTheme } from "@mui/material/styles"
// // import CssBaseline from "@mui/material/CssBaseline"
// // import { AuthProvider } from "./contexts/Authcontext"
// // import Header from "./components/Header"
// // import Home from "./pages/Home"
// // import SignUp from "./pages/Signup"
// // import Login from "./pages/Login"
// // import Dashboard from "./pages/Dashboard"
// // import AdminDashboard from "./pages/AdminDashboard"
// // import UserProfile from "./pages/UserProfile"
// // import PrivateRoute from "./components/PrivateRoute"
// // import AdminRoute from "./components/AdminRoute"

// // const theme = createTheme()

// // function App() {
// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <AuthProvider>
// //         <Router>
// //           <Header />
// //           <Routes> {/* Use Routes instead of Switch */}
// //             <Route path="/" element={<Home />} />  {/* Use element instead of component */}
// //             <Route path="/signup" element={<SignUp />} />
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
// //             <Route path="/profile/:userId" element={<PrivateRoute component={UserProfile} />} />
// //             <Route path="/admin" element={<AdminRoute component={AdminDashboard} />} />
// //           </Routes>
// //         </Router>
// //       </AuthProvider>
// //     </ThemeProvider>
// //   )
// // }

// // export default App





// import React from "react"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { ChakraProvider, extendTheme } from "@chakra-ui/react"
// import { ConfigProvider } from "antd"
// import {
//   ThemeProvider,
//   createTheme as createMuiTheme
// } from "@mui/material/styles"
// import CssBaseline from "@mui/material/CssBaseline"
// import { AuthProvider } from "./contexts/Authcontext"
// import Header from "./components/Header"
// import Home from "./pages/Home"
// import SignUp from "./pages/Signup"
// import Login from "./pages/Login"
// import Dashboard from "./pages/Dashboard"
// import AdminDashboard from "./pages/AdminDashboard"
// import UserProfile from "./pages/UserProfile"
// import PrivateRoute from "./components/PrivateRoute"
// import AdminRoute from "./components/AdminRoute"

// // Extend Chakra theme
// const chakraTheme = extendTheme({
//   // Add your custom theme configurations here
// })

// // Configure Ant Design theme
// const antTheme = {
//   token: {
//     colorPrimary: "#1890ff"
//   }
// }

// // MUI Theme
// const muiTheme = createMuiTheme()

// function App() {
//   return (
//     <ChakraProvider theme={chakraTheme}>
//       <ConfigProvider theme={antTheme}>
//         <ThemeProvider theme={muiTheme}>
//           <CssBaseline />
//           <AuthProvider>
//             <Router>
//               <Header />
//               <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/signup" component={SignUp} />
//                 <Route path="/login" component={Login} />
//                 <PrivateRoute path="/dashboard" component={Dashboard} />
//                 <PrivateRoute path="/profile/:userId" component={UserProfile} />
//                 <AdminRoute path="/admin" component={AdminDashboard} />
//               </Switch>
//             </Router>
//           </AuthProvider>
//         </ThemeProvider>
//       </ConfigProvider>
//     </ChakraProvider>
//   )
// }

// export default App






import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Using 'Routes' instead of 'Switch' for React Router v6+
import { Layout, Button } from "antd";  // Ant Design components
import { ConfigProvider } from "antd";
import { AuthProvider } from "./contexts/Authcontext";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UserProfile from "./pages/UserProfile";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";

// Configure Ant Design theme
const antTheme = {
  token: {
    colorPrimary: "#1890ff",
  },
};

function App() {
  return (
    <ConfigProvider theme={antTheme}>
      <AuthProvider>
        <Router>
          <Layout style={{ minHeight: "100vh" }}>
            <Header /> {/* Your header component */}
            <Layout.Content style={{ padding: "0 50px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/profile/:userId" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              </Routes>
            </Layout.Content>
          </Layout>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
