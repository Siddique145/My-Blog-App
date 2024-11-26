// import React, { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import { Container, Typography, Grid, Paper, Button } from "@mui/material"
// import {
//   doc,
//   getDoc,
//   collection,
//   query,
//   where,
//   getDocs
// } from "firebase/firestore"
// import { db } from "../firebase/Firebase"
// import { useAuth } from "../contexts/Authcontext"
// import BlogPost from "../components/BlogPost"

// const UserProfile = () => {
//   const { userId } = useParams()
//   const { currentUser } = useAuth()
//   const [userProfile, setUserProfile] = useState(null)
//   const [userPosts, setUserPosts] = useState([])
//   const [isFriend, setIsFriend] = useState(false)

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const userDoc = await getDoc(doc(db, "users", userId))
//       if (userDoc.exists()) {
//         setUserProfile(userDoc.data())
//       }
//     }

//     const fetchUserPosts = async () => {
//       const q = query(collection(db, "posts"), where("userId", "==", userId))
//       const querySnapshot = await getDocs(q)
//       const posts = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }))
//       setUserPosts(posts)
//     }

//     const checkFriendStatus = async () => {
//       if (currentUser && userId !== currentUser.uid) {
//         const friendDoc = await getDoc(
//           doc(db, "friends", `${currentUser.uid}_${userId}`)
//         )
//         setIsFriend(
//           friendDoc.exists() && friendDoc.data().status === "accepted"
//         )
//       }
//     }

//     fetchUserProfile()
//     fetchUserPosts()
//     checkFriendStatus()
//   }, [userId, currentUser])

//   const handleFriendRequest = async () => {
//     // Implement friend request logic here
//     console.log("Friend request sent")
//   }

//   if (!userProfile) {
//     return <Typography>Loading...</Typography>
//   }

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         {userProfile.name}'s Profile
//       </Typography>
//       {currentUser && userId !== currentUser.uid && !isFriend && (
//         <Button variant="contained" onClick={handleFriendRequest}>
//           Send Friend Request
//         </Button>
//       )}
//       <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
//         Posts
//       </Typography>
//       <Grid container spacing={3}>
//         {userPosts.map(post => (
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

// export default UserProfile












import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, Button, Typography, Row, Col, Spin } from "antd"  // Using Ant Design components
import { doc, getDoc, query, where, getDocs, collection } from "firebase/firestore"
import { db } from "../firebase/Firebase"
import { useAuth } from "../contexts/Authcontext"
import BlogPost from "../components/BlogPost"

const { Title, Text } = Typography

const UserProfile = () => {
  const { userId } = useParams()
  const { currentUser } = useAuth()
  const [userProfile, setUserProfile] = useState(null)
  const [userPosts, setUserPosts] = useState([])
  const [isFriend, setIsFriend] = useState(false)

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userDoc = await getDoc(doc(db, "users", userId))
      if (userDoc.exists()) {
        setUserProfile(userDoc.data())
      }
    }

    const fetchUserPosts = async () => {
      const q = query(collection(db, "posts"), where("userId", "==", userId))
      const querySnapshot = await getDocs(q)
      const posts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setUserPosts(posts)
    }

    const checkFriendStatus = async () => {
      if (currentUser && userId !== currentUser.uid) {
        const friendDoc = await getDoc(
          doc(db, "friends", `${currentUser.uid}_${userId}`)
        )
        setIsFriend(
          friendDoc.exists() && friendDoc.data().status === "accepted"
        )
      }
    }

    fetchUserProfile()
    fetchUserPosts()
    checkFriendStatus()
  }, [userId, currentUser])

  const handleFriendRequest = async () => {
    // Implement friend request logic here
    console.log("Friend request sent")
  }

  if (!userProfile) {
    return <Spin tip="Loading..." />
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", marginTop: "32px", padding: "16px" }}>
      <Title level={1} style={{ textAlign: "center" }}>
        {userProfile.name}'s Profile
      </Title>
      {currentUser && userId !== currentUser.uid && !isFriend && (
        <Button type="primary" onClick={handleFriendRequest}>
          Send Friend Request
        </Button>
      )}
      <Title level={2} style={{ marginTop: "32px" }}>
        Posts
      </Title>
      <Row gutter={[16, 16]}>
        {userPosts.map(post => (
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

export default UserProfile
