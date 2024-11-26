// import React, { useState, useEffect } from "react"
// import { Container, Typography, Grid, Paper } from "@mui/material"
// import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
// import { db } from "../firebase/Firebase"
// import BlogPost from "../components/BlogPost"

// const Home = () => {
//   const [recentPosts, setRecentPosts] = useState([])

//   useEffect(() => {
//     const fetchRecentPosts = async () => {
//       const q = query(
//         collection(db, "posts"),
//         orderBy("createdAt", "desc"),
//         limit(6)
//       )
//       const querySnapshot = await getDocs(q)
//       const posts = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }))
//       setRecentPosts(posts)
//     }

//     fetchRecentPosts()
//   }, [])

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Welcome to Our Blogging Community
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         Recent Posts
//       </Typography>
//       <Grid container spacing={3}>
//         {recentPosts.map(post => (
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

// export default Home





// import React, { useState, useEffect } from "react"
// import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
// import { Card } from "antd"
// import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
// import { db } from "../firebase/Firebase"
// import BlogPost from "../components/BlogPost"

// const Home = () => {
//   const [recentPosts, setRecentPosts] = useState([])
//   const bgColor = useColorModeValue("gray.50", "gray.800")

//   useEffect(() => {
//     const fetchRecentPosts = async () => {
//       const q = query(
//         collection(db, "posts"),
//         orderBy("createdAt", "desc"),
//         limit(6)
//       )
//       const querySnapshot = await getDocs(q)
//       const posts = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }))
//       setRecentPosts(posts)
//     }

//     fetchRecentPosts()
//   }, [])

//   return (
//     <Box
//       maxWidth="1200px"
//       margin="auto"
//       mt={8}
//       p={4}
//       bg={bgColor}
//       borderRadius="md"
//     >
//       <Heading as="h1" size="xl" mb={4}>
//         Welcome to Our Blogging Community
//       </Heading>
//       <Heading as="h2" size="lg" mb={6}>
//         Recent Posts
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
//         {recentPosts.map(post => (
//           <Card key={post.id}>
//             <BlogPost post={post} />
//           </Card>
//         ))}
//       </SimpleGrid>
//     </Box>
//   )
// }

// export default Home



// import React, { useState, useEffect } from "react"
// import { Box, Heading, SimpleGrid, Button } from "@chakra-ui/react"
// import { Card } from "antd"
// import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
// import { db } from "../firebase/Firebase"
// import BlogPost from "../components/BlogPost"

// const Home = () => {
//   const [recentPosts, setRecentPosts] = useState([])
//   const [isDarkMode, setIsDarkMode] = useState(false) // State for toggling dark mode

//   // Define custom colors for light and dark modes
//   const bgColor = isDarkMode ? "#2D3748" : "#F7FAFC"
//   const textColor = isDarkMode ? "#E2E8F0" : "#2D3748"

//   useEffect(() => {
//     const fetchRecentPosts = async () => {
//       const q = query(
//         collection(db, "posts"),
//         orderBy("createdAt", "desc"),
//         limit(6)
//       )
//       const querySnapshot = await getDocs(q)
//       const posts = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }))
//       setRecentPosts(posts)
//     }

//     fetchRecentPosts()
//   }, [])

//   // Toggle between light and dark mode
//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode)
//   }

//   return (
//     <Box
//       maxWidth="1200px"
//       margin="auto"
//       mt={8}
//       p={4}
//       bg={bgColor}
//       borderRadius="md"
//       color={textColor}
//     >
//       <Heading as="h1" size="xl" mb={4}>
//         Welcome to Our Blogging Community
//       </Heading>
//       <Heading as="h2" size="lg" mb={6}>
//         Recent Posts
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
//         {recentPosts.map(post => (
//           <Card key={post.id}>
//             <BlogPost post={post} />
//           </Card>
//         ))}
//       </SimpleGrid>
//       {/* Theme toggle button */}
//       <Button mt={6} onClick={toggleTheme} colorScheme={isDarkMode ? "blue" : "gray"}>
//         Toggle {isDarkMode ? "Light" : "Dark"} Mode
//       </Button>
//     </Box>
//   )
// }

// export default Home







import React, { useState, useEffect } from "react"
import { Layout, Typography, Row, Col, Button, Card } from "antd"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { db } from "../firebase/Firebase"
import BlogPost from "../components/BlogPost"

const { Title } = Typography

const Home = () => {
  const [recentPosts, setRecentPosts] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(false) // State for toggling dark mode

  // Define custom colors for light and dark modes
  const bgColor = isDarkMode ? "#2D3748" : "#F7FAFC"
  const textColor = isDarkMode ? "#E2E8F0" : "#2D3748"

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(6)
      )
      const querySnapshot = await getDocs(q)
      const posts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setRecentPosts(posts)
    }

    fetchRecentPosts()
  }, [])

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <Layout style={{ background: bgColor, color: textColor }}>
      <Layout.Content style={{ maxWidth: "1200px", margin: "auto", padding: "24px" }}>
        <Title level={1} style={{ marginBottom: "20px" }}>
          Welcome to Our Blogging Community
        </Title>
        <Title level={2} style={{ marginBottom: "20px" }}>
          Recent Posts
        </Title>

        <Row gutter={[16, 16]} justify="center">
          {recentPosts.map(post => (
            <Col xs={24} sm={12} md={8} key={post.id}>
              <Card>
                <BlogPost post={post} />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Theme toggle button */}
        <Button
          style={{ marginTop: "20px" }}
          onClick={toggleTheme}
          type="primary"
          shape="round"
          size="large"
          danger={isDarkMode}
        >
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </Button>
      </Layout.Content>
    </Layout>
  )
}

export default Home
