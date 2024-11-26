// import React, { useState, useEffect } from "react"
// import { useAuth } from "../contexts/Authcontext"
// import { db } from "../firebase/Firebase"
// import { collection, query, where, getDocs } from "firebase/firestore"
// import { Container, Typography, Grid, Paper } from "@mui/material"
// import BlogPost from "../components/BlogPost"

// const Dashboard = () => {
//   const { currentUser } = useAuth()
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     const fetchPosts = async () => {
//       if (currentUser) {
//         const q = query(
//           collection(db, "posts"),
//           where("userId", "==", currentUser.uid)
//         )
//         const querySnapshot = await getDocs(q)
//         const fetchedPosts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setPosts(fetchedPosts)
//       }
//     }

//     fetchPosts()
//   }, [currentUser])

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Your Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {posts.map(post => (
//           <Grid item xs={12} md={6} lg={4} key={post.id}>
//             <Paper elevation={3}>
//               <BlogPost post={post} />
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   )
// }

// export default Dashboard






// import React, { useState, useEffect } from "react"
// import { useAuth } from "../contexts/Authcontext"
// import { db } from "../firebase/Firebase"
// import { collection, query, where, getDocs } from "firebase/firestore"
// import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
// import { Card } from "antd"
// import BlogPost from "../components/BlogPost"

// const Dashboard = () => {
//   const { currentUser } = useAuth()
//   const [posts, setPosts] = useState([])
//   const bgColor = useColorModeValue("gray.50", "gray.800")

//   useEffect(() => {
//     const fetchPosts = async () => {
//       if (currentUser) {
//         const q = query(
//           collection(db, "posts"),
//           where("userId", "==", currentUser.uid)
//         )
//         const querySnapshot = await getDocs(q)
//         const fetchedPosts = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setPosts(fetchedPosts)
//       }
//     }

//     fetchPosts()
//   }, [currentUser])

//   return (
//     <Box
//       maxWidth="1200px"
//       margin="auto"
//       mt={8}
//       p={4}
//       bg={bgColor}
//       borderRadius="md"
//     >
//       <Heading as="h1" size="xl" mb={6}>
//         Your Dashboard
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
//         {posts.map(post => (
//           <Card key={post.id}>
//             <BlogPost post={post} />
//           </Card>
//         ))}
//       </SimpleGrid>
//     </Box>
//   )
// }

// export default Dashboard








import React, { useState, useEffect } from "react"
import { useAuth } from "../contexts/Authcontext"
import { db } from "../firebase/Firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import { Card, Row, Col, Typography } from "antd"  // Ant Design components
import BlogPost from "../components/BlogPost"

const { Title } = Typography

const Dashboard = () => {
  const { currentUser } = useAuth()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      if (currentUser) {
        const q = query(
          collection(db, "posts"),
          where("userId", "==", currentUser.uid)
        )
        const querySnapshot = await getDocs(q)
        const fetchedPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setPosts(fetchedPosts)
      }
    }

    fetchPosts()
  }, [currentUser])

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", marginTop: "32px", padding: "16px" }}>
      <Title level={1} style={{ textAlign: "center", marginBottom: "24px" }}>
        Your Dashboard
      </Title>
      <Row gutter={[16, 16]}>
        {posts.map(post => (
          <Col key={post.id} xs={24} sm={12} md={8} lg={6}>
            <Card>
              <BlogPost post={post} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Dashboard
