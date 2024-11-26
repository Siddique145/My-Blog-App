// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"  // Use useNavigate instead of useHistory
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { setDoc, doc } from "firebase/firestore"
// import { auth, db } from "../firebase/Firebase"
// import { Container, Typography, TextField, Button, Box } from "@mui/material"

// const SignUp = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [name, setName] = useState("")
//   const navigate = useNavigate()  // Initialize useNavigate

//   const handleSignUp = async e => {
//     e.preventDefault()
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       )
//       await setDoc(doc(db, "users", userCredential.user.uid), {
//         name,
//         email,
//         isAdmin: false
//       })
//       navigate("/dashboard")  // Use navigate to redirect
//     } catch (error) {
//       console.error("Error signing up:", error)
//     }
//   }

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           mt: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center"
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign Up
//         </Typography>
//         <Box component="form" onSubmit={handleSignUp} sx={{ mt: 3 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Name"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   )
// }

// export default SignUp




// import React from "react"
// import { useNavigate } from "react-router-dom"
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { setDoc, doc } from "firebase/firestore"
// import { auth, db } from "../firebase/Firebase"
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

// const SignUp = () => {
//   const navigate = useNavigate()
//   const toast = useToast()

//   const handleSignUp = async values => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         values.email,
//         values.password
//       )
//       await setDoc(doc(db, "users", userCredential.user.uid), {
//         name: values.name,
//         email: values.email,
//         isAdmin: false
//       })
//       navigate("/dashboard")
//     } catch (error) {
//       console.error("Error signing up:", error)
//       toast({
//         title: "Sign Up Failed",
//         description: "An error occurred during sign up. Please try again.",
//         status: "error",
//         duration: 3000,
//         isClosable: true
//       })
//     }
//   }

//   return (
//     <Box maxWidth="400px" margin="auto" mt={8}>
//       <VStack spacing={4} align="stretch">
//         <Heading textAlign="center">Sign Up</Heading>
//         <Form onFinish={handleSignUp} layout="vertical">
//           <FormControl>
//             <FormLabel>Name</FormLabel>
//             <Form.Item
//               name="name"
//               rules={[{ required: true, message: "Please input your name!" }]}
//             >
//               <AntInput />
//             </Form.Item>
//           </FormControl>
//           <FormControl>
//             <FormLabel>Email Address</FormLabel>
//             <Form.Item
//               name="email"
//               rules={[
//                 { required: true, message: "Please input your email!" },
//                 { type: "email", message: "Please enter a valid email!" }
//               ]}
//             >
//               <AntInput />
//             </Form.Item>
//           </FormControl>
//           <FormControl>
//             <FormLabel>Password</FormLabel>
//             <Form.Item
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your password!" },
//                 {
//                   min: 6,
//                   message: "Password must be at least 6 characters long!"
//                 }
//               ]}
//             >
//               <AntInput.Password />
//             </Form.Item>
//           </FormControl>
//           <Button type="submit" colorScheme="blue" width="full">
//             Sign Up
//           </Button>
//         </Form>
//       </VStack>
//     </Box>
//   )
// }

// export default SignUp








import React from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import { auth, db } from "../firebase/Firebase"
import { Form, Input, Button, Typography, message } from "antd"  // Using antd components

const { Title } = Typography

const SignUp = () => {
  const navigate = useNavigate()

  const handleSignUp = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: values.name,
        email: values.email,
        isAdmin: false
      })
      message.success("Sign Up Successful! Redirecting to dashboard...")
      navigate("/dashboard")
    } catch (error) {
      console.error("Error signing up:", error)
      message.error("Sign Up Failed. Please try again.")  // Using Ant Design's message for error notification
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "40px" }}>
      <Title level={2} style={{ textAlign: "center" }}>Sign Up</Title>
      <Form onFinish={handleSignUp} layout="vertical">
        {/* Name Field */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        {/* Email Field */}
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters long!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUp
