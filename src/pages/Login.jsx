// // import React, { useState } from "react"
// // import { useHistory } from "react-router-dom"
// // import { signInWithEmailAndPassword } from "firebase/auth"
// // import { auth } from "../firebase/Firebase"
// // import { Container, Typography, TextField, Button, Box } from "@mui/material"

// // const Login = () => {
// //   const [email, setEmail] = useState("")
// //   const [password, setPassword] = useState("")
// //   const history = useHistory()

// //   const handleLogin = async e => {
// //     e.preventDefault()
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password)
// //       history.push("/dashboard")
// //     } catch (error) {
// //       console.error("Error logging in:", error)
// //     }
// //   }

// //   return (
// //     <Container maxWidth="xs">
// //       <Box
// //         sx={{
// //           mt: 8,
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center"
// //         }}
// //       >
// //         <Typography component="h1" variant="h5">
// //           Login
// //         </Typography>
// //         <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
// //           <TextField
// //             margin="normal"
// //             required
// //             fullWidth
// //             label="Email Address"
// //             type="email"
// //             value={email}
// //             onChange={e => setEmail(e.target.value)}
// //           />
// //           <TextField
// //             margin="normal"
// //             required
// //             fullWidth
// //             label="Password"
// //             type="password"
// //             value={password}
// //             onChange={e => setPassword(e.target.value)}
// //           />
// //           <Button
// //             type="submit"
// //             fullWidth
// //             variant="contained"
// //             sx={{ mt: 3, mb: 2 }}
// //           >
// //             Login
// //           </Button>
// //         </Box>
// //       </Box>
// //     </Container>
// //   )
// // }

// // export default Login




// // import React, { useState } from "react"
// // import { useNavigate } from "react-router-dom"  // Import useNavigate instead of useHistory
// // import { signInWithEmailAndPassword } from "firebase/auth"
// // import { auth } from "../firebase/Firebase"
// // import { Container, Typography, TextField, Button, Box } from "@mui/material"

// // const Login = () => {
// //   const [email, setEmail] = useState("")
// //   const [password, setPassword] = useState("")
// //   const navigate = useNavigate()  // Initialize useNavigate

// //   const handleLogin = async e => {
// //     e.preventDefault()
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password)
// //       navigate("/dashboard")  // Use navigate() to go to the dashboard
// //     } catch (error) {
// //       console.error("Error logging in:", error)
// //     }
// //   }

// //   return (
// //     <Container maxWidth="xs">
// //       <Box
// //         sx={{
// //           mt: 8,
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center"
// //         }}
// //       >
// //         <Typography component="h1" variant="h5">
// //           Login
// //         </Typography>
// //         <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
// //           <TextField
// //             margin="normal"
// //             required
// //             fullWidth
// //             label="Email Address"
// //             type="email"
// //             value={email}
// //             onChange={e => setEmail(e.target.value)}
// //           />
// //           <TextField
// //             margin="normal"
// //             required
// //             fullWidth
// //             label="Password"
// //             type="password"
// //             value={password}
// //             onChange={e => setPassword(e.target.value)}
// //           />
// //           <Button
// //             type="submit"
// //             fullWidth
// //             variant="contained"
// //             sx={{ mt: 3, mb: 2 }}
// //           >
// //             Login
// //           </Button>
// //         </Box>
// //       </Box>
// //     </Container>
// //   )
// // }

// // export default Login





// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"  // Import useNavigate instead of useHistory
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../firebase/Firebase"
// import { Container, Typography, TextField, Button, Box, Grid } from "@mui/material"  // Import Grid for layout

// const Login = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate()  // Initialize useNavigate

//   const handleLogin = async e => {
//     e.preventDefault()
//     try {
//       await signInWithEmailAndPassword(auth, email, password)
//       navigate("/dashboard")  // Use navigate() to go to the dashboard
//     } catch (error) {
//       console.error("Error logging in:", error)
//     }
//   }

//   return (
//     <Container maxWidth="xs"> {/* Container with maxWidth "xs" to fit the content on mobile screens */}
//       <Box
//         sx={{
//           mt: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
//           <Grid container spacing={2}> {/* Use Grid container for responsive layout */}
//             <Grid item xs={12}> {/* Grid item spans full width (12 columns) */}
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}> {/* Another full-width item for password */}
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}> {/* Button spans full width */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Login
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   )
// }

// export default Login









// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from "../firebase/Firebase"
// import {
//   Box,
//   VStack,
//   Heading,
//   FormControl,
//   FormLabel,
//   Button,
//   useToast
// } from "@chakra-ui/react"
// import { Form, Input as AntInput } from "antd"

// const Login = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate()
//   const toast = useToast()

//   const handleLogin = async values => {
//     try {
//       await signInWithEmailAndPassword(auth, values.email, values.password)
//       navigate("/dashboard")
//     } catch (error) {
//       console.error("Error logging in:", error)
//       toast({
//         title: "Login Failed",
//         description: "Please check your credentials and try again.",
//         status: "error",
//         duration: 3000,
//         isClosable: true
//       })
//     }
//   }

//   return (
//     <Box maxWidth="400px" margin="auto" mt={8}>
//       <VStack spacing={4} align="stretch">
//         <Heading textAlign="center">Login</Heading>
//         <Form onFinish={handleLogin} layout="vertical">
//           <FormControl>
//             <FormLabel>Email Address</FormLabel>
//             <Form.Item
//               name="email"
//               rules={[{ required: true, message: "Please input your email!" }]}
//             >
//               <AntInput />
//             </Form.Item>
//           </FormControl>
//           <FormControl>
//             <FormLabel>Password</FormLabel>
//             <Form.Item
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your password!" }
//               ]}
//             >
//               <AntInput.Password />
//             </Form.Item>
//           </FormControl>
//           <Button type="submit" colorScheme="blue" width="full">
//             Login
//           </Button>
//         </Form>
//       </VStack>
//     </Box>
//   )
// }

// export default Login





import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/Firebase"
import { Form, Input, Button, Typography, message } from "antd"  // Ant Design components

const { Title } = Typography

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (values) => {
    try {
      // Sign in with Firebase authentication
      await signInWithEmailAndPassword(auth, values.email, values.password)
      navigate("/dashboard")
    } catch (error) {
      console.error("Error logging in:", error)
      // Display error message using Ant Design's message system
      message.error("Login Failed. Please check your credentials and try again.")
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "40px" }}>
      <Title level={2} style={{ textAlign: "center" }}>Login</Title>
      <Form onFinish={handleLogin} layout="vertical">
        {/* Email Field */}
        <Form.Item
          label="Email Address"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
