    // import React, { useState } from "react"
    // import { Link as RouterLink } from "react-router-dom"
    // import {
    // Card,
    // CardContent,
    // CardActions,
    // Typography,
    // Button,
    // Avatar,
    // Box,
    // TextField,
    // IconButton
    // } from "@mui/material"
    // import { ThumbUp, Comment, Send } from "@mui/icons-material"
    // import { formatDistanceToNow } from "date-fns"
    // import { useAuth } from "../contexts/Authcontext"

    // const BlogPost = ({ post }) => {
    // const { currentUser } = useAuth()
    // const [liked, setLiked] = useState(false)
    // const [showComments, setShowComments] = useState(false)
    // const [newComment, setNewComment] = useState("")

    // const handleLike = () => {
    //     setLiked(!liked)
    //     // TODO: Implement like functionality with Firebase
    // }

    // const handleComment = () => {
    //     setShowComments(!showComments)
    // }

    // const handleSubmitComment = e => {
    //     e.preventDefault()
    //     if (newComment.trim()) {
    //     // TODO: Implement comment submission with Firebase
    //     console.log("Submitting comment:", newComment)
    //     setNewComment("")
    //     }
    // }

    // return (
    //     <Card>
    //     <CardContent>
    //         <Box display="flex" alignItems="center" mb={2}>
    //         <Avatar src={post.author.avatar} alt={post.author.name} />
    //         <Box ml={2}>
    //             <Typography
    //             variant="subtitle1"
    //             component={RouterLink}
    //             to={`/profile/${post.author.id}`}
    //             style={{ textDecoration: "none", color: "inherit" }}
    //             >
    //             {post.author.name}
    //             </Typography>
    //             <Typography variant="caption" color="textSecondary">
    //             {formatDistanceToNow(post.createdAt.toDate(), {
    //                 addSuffix: true
    //             })}
    //             </Typography>
    //         </Box>
    //         </Box>
    //         <Typography variant="h6" gutterBottom>
    //         {post.title}
    //         </Typography>
    //         <Typography variant="body1" paragraph>
    //         {post.content}
    //         </Typography>
    //     </CardContent>
    //     <CardActions>
    //         <Button
    //         startIcon={<ThumbUp color={liked ? "primary" : "action"} />}
    //         onClick={handleLike}
    //         aria-label={liked ? "Unlike post" : "Like post"}
    //         >
    //         {post.likes + (liked ? 1 : 0)}
    //         </Button>
    //         <Button
    //         startIcon={<Comment />}
    //         onClick={handleComment}
    //         aria-label={showComments ? "Hide comments" : "Show comments"}
    //         >
    //         {post.comments.length} Comments
    //         </Button>
    //     </CardActions>
    //     {showComments && (
    //         <CardContent>
    //         {post.comments.map(comment => (
    //             <Box key={comment.id} mb={2}>
    //             <Typography
    //                 variant="subtitle2"
    //                 component={RouterLink}
    //                 to={`/profile/${comment.author.id}`}
    //                 style={{ textDecoration: "none", color: "inherit" }}
    //             >
    //                 {comment.author.name}
    //             </Typography>
    //             <Typography variant="body2">{comment.content}</Typography>
    //             <Typography variant="caption" color="textSecondary">
    //                 {formatDistanceToNow(comment.createdAt.toDate(), {
    //                 addSuffix: true
    //                 })}
    //             </Typography>
    //             </Box>
    //         ))}
    //         {currentUser && (
    //             <Box
    //             component="form"
    //             onSubmit={handleSubmitComment}
    //             display="flex"
    //             alignItems="center"
    //             >
    //             <TextField
    //                 fullWidth
    //                 variant="outlined"
    //                 size="small"
    //                 placeholder="Add a comment..."
    //                 value={newComment}
    //                 onChange={e => setNewComment(e.target.value)}
    //             />
    //             <IconButton
    //                 type="submit"
    //                 color="primary"
    //                 aria-label="Submit comment"
    //             >
    //                 <Send />
    //             </IconButton>
    //             </Box>
    //         )}
    //         </CardContent>
    //     )}
    //     </Card>
    // )
    // }

    // export default BlogPost






//     import React, { useState } from "react"
// import { Link as RouterLink } from "react-router-dom"
// import {
//   Box,
//   VStack,
//   HStack,
//   Text,
//   Avatar,
//   Button,
//   Input,
//   IconButton,
//   useColorModeValue
// } from "@chakra-ui/react"
// import { Card, Typography } from "antd"
// import { LikeOutlined, CommentOutlined, SendOutlined } from "@ant-design/icons"
// import { formatDistanceToNow } from "date-fns"
// import { useAuth } from "../contexts/Authcontext"

// const { Title, Paragraph } = Typography

// const BlogPost = ({ post }) => {
//   const { currentUser } = useAuth()
//   const [liked, setLiked] = useState(false)
//   const [showComments, setShowComments] = useState(false)
//   const [newComment, setNewComment] = useState("")
//   const bgColor = useColorModeValue("white", "gray.700")
//   const textColor = useColorModeValue("gray.800", "white")

//   const handleLike = () => {
//     setLiked(!liked)
//     // TODO: Implement like functionality with Firebase
//   }

//   const handleComment = () => {
//     setShowComments(!showComments)
//   }

//   const handleSubmitComment = e => {
//     e.preventDefault()
//     if (newComment.trim()) {
//       // TODO: Implement comment submission with Firebase
//       console.log("Submitting comment:", newComment)
//       setNewComment("")
//     }
//   }

//   return (
//     <Card>
//       <VStack align="stretch" spacing={4}>
//         <HStack>
//           <Avatar src={post.author.avatar} name={post.author.name} />
//           <Box>
//             <Text
//               as={RouterLink}
//               to={`/profile/${post.author.id}`}
//               fontWeight="bold"
//               color={textColor}
//             >
//               {post.author.name}
//             </Text>
//             <Text fontSize="sm" color="gray.500">
//               {formatDistanceToNow(post.createdAt.toDate(), {
//                 addSuffix: true
//               })}
//             </Text>
//           </Box>
//         </HStack>
//         <Title level={4}>{post.title}</Title>
//         <Paragraph>{post.content}</Paragraph>
//         <HStack>
//           <Button
//             leftIcon={<LikeOutlined />}
//             onClick={handleLike}
//             colorScheme={liked ? "blue" : "gray"}
//           >
//             {post.likes + (liked ? 1 : 0)}
//           </Button>
//           <Button leftIcon={<CommentOutlined />} onClick={handleComment}>
//             {post.comments.length} Comments
//           </Button>
//         </HStack>
//         {showComments && (
//           <VStack align="stretch" spacing={2}>
//             {post.comments.map(comment => (
//               <Box key={comment.id} p={2} bg={bgColor} borderRadius="md">
//                 <Text
//                   fontWeight="bold"
//                   as={RouterLink}
//                   to={`/profile/${comment.author.id}`}
//                 >
//                   {comment.author.name}
//                 </Text>
//                 <Text>{comment.content}</Text>
//                 <Text fontSize="xs" color="gray.500">
//                   {formatDistanceToNow(comment.createdAt.toDate(), {
//                     addSuffix: true
//                   })}
//                 </Text>
//               </Box>
//             ))}
//             {currentUser && (
//               <form onSubmit={handleSubmitComment}>
//                 <HStack>
//                   <Input
//                     placeholder="Add a comment..."
//                     value={newComment}
//                     onChange={e => setNewComment(e.target.value)}
//                   />
//                   <IconButton
//                     icon={<SendOutlined />}
//                     aria-label="Submit comment
// "
//                     type="submit"
//                     colorScheme="blue"
//                   />
//                 </HStack>
//               </form>
//             )}
//           </VStack>
//         )}
//       </VStack>
//     </Card>
//   )
// }

// export default BlogPost






// import React, { useState } from "react"
// import { Link as RouterLink } from "react-router-dom"
// import {
//   Box,
//   VStack,
//   HStack,
//   Text,
//   Avatar,
//   Button,
//   Input,
//   IconButton
// } from "@chakra-ui/react"
// import { Card, Typography } from "antd"
// import { LikeOutlined, CommentOutlined, SendOutlined } from "@ant-design/icons"
// import { formatDistanceToNow } from "date-fns"
// import { useAuth } from "../contexts/Authcontext"

// const { Title, Paragraph } = Typography

// const BlogPost = ({ post }) => {
//   const { currentUser } = useAuth()

//   // Custom state for like and dark mode toggle
//   const [liked, setLiked] = useState(false)
//   const [showComments, setShowComments] = useState(false)
//   const [newComment, setNewComment] = useState("")
//   const [isDarkMode, setIsDarkMode] = useState(false) // Custom dark mode state

//   // Custom light/dark mode colors based on `isDarkMode`
//   const bgColor = isDarkMode ? "#2D3748" : "#ffffff"
//   const textColor = isDarkMode ? "#ffffff" : "#2D3748"

//   const handleLike = () => {
//     setLiked(!liked)
//     // TODO: Implement like functionality with Firebase
//   }

//   const handleComment = () => {
//     setShowComments(!showComments)
//   }

//   const handleSubmitComment = e => {
//     e.preventDefault()
//     if (newComment.trim()) {
//       // TODO: Implement comment submission with Firebase
//       console.log("Submitting comment:", newComment)
//       setNewComment("")
//     }
//   }

//   // Toggle light/dark mode
//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode)
//   }

//   return (
//     <Card>
//       <VStack align="stretch" spacing={4}>
//         <HStack>
//           <Avatar src={post.author.avatar} name={post.author.name} />
//           <Box>
//             <Text
//               as={RouterLink}
//               to={`/profile/${post.author.id}`}
//               fontWeight="bold"
//               color={textColor}
//             >
//               {post.author.name}
//             </Text>
//             <Text fontSize="sm" color="gray.500">
//               {formatDistanceToNow(post.createdAt.toDate(), {
//                 addSuffix: true
//               })}
//             </Text>
//           </Box>
//         </HStack>
//         <Title level={4}>{post.title}</Title>
//         <Paragraph>{post.content}</Paragraph>
//         <HStack>
//           <Button
//             leftIcon={<LikeOutlined />}
//             onClick={handleLike}
//             colorScheme={liked ? "blue" : "gray"}
//           >
//             {post.likes + (liked ? 1 : 0)}
//           </Button>
//           <Button leftIcon={<CommentOutlined />} onClick={handleComment}>
//             {post.comments.length} Comments
//           </Button>
//         </HStack>
//         {showComments && (
//           <VStack align="stretch" spacing={2}>
//             {post.comments.map(comment => (
//               <Box key={comment.id} p={2} bg={bgColor} borderRadius="md">
//                 <Text
//                   fontWeight="bold"
//                   as={RouterLink}
//                   to={`/profile/${comment.author.id}`}
//                 >
//                   {comment.author.name}
//                 </Text>
//                 <Text>{comment.content}</Text>
//                 <Text fontSize="xs" color="gray.500">
//                   {formatDistanceToNow(comment.createdAt.toDate(), {
//                     addSuffix: true
//                   })}
//                 </Text>
//               </Box>
//             ))}
//             {currentUser && (
//               <form onSubmit={handleSubmitComment}>
//                 <HStack>
//                   <Input
//                     placeholder="Add a comment..."
//                     value={newComment}
//                     onChange={e => setNewComment(e.target.value)}
//                   />
//                   <IconButton
//                     icon={<SendOutlined />}
//                     aria-label="Submit comment"
//                     type="submit"
//                     colorScheme="blue"
//                   />
//                 </HStack>
//               </form>
//             )}
//           </VStack>
//         )}
//       </VStack>
//       <Button onClick={toggleTheme} mt={4}>
//         Toggle {isDarkMode ? "Light" : "Dark"} Mode
//       </Button>
//     </Card>
//   )
// }

// export default BlogPost













import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Card, Button, Input, Avatar, Row, Col, Typography, Space } from "antd"
import { LikeOutlined, CommentOutlined, SendOutlined } from "@ant-design/icons"
import { formatDistanceToNow } from "date-fns"
import { useAuth } from "../contexts/Authcontext"

const { Title, Paragraph } = Typography

const BlogPost = ({ post }) => {
  const { currentUser } = useAuth()

  // Custom state for like and dark mode toggle
  const [liked, setLiked] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false) // Custom dark mode state

  // Custom light/dark mode colors based on `isDarkMode`
  const bgColor = isDarkMode ? "#2D3748" : "#ffffff"
  const textColor = isDarkMode ? "#ffffff" : "#2D3748"

  const handleLike = () => {
    setLiked(!liked)
    // TODO: Implement like functionality with Firebase
  }

  const handleComment = () => {
    setShowComments(!showComments)
  }

  const handleSubmitComment = e => {
    e.preventDefault()
    if (newComment.trim()) {
      // TODO: Implement comment submission with Firebase
      console.log("Submitting comment:", newComment)
      setNewComment("")
    }
  }

  // Toggle light/dark mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    <Card style={{ marginBottom: "20px" }}>
      <Row gutter={16}>
        <Col span={3}>
          <Avatar src={post.author.avatar} />
        </Col>
        <Col span={21}>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Space direction="vertical" size={2}>
              <Typography.Text
                strong
                style={{ color: textColor }}
              >
                <RouterLink to={`/profile/${post.author.id}`} style={{ color: "inherit" }}>
                  {post.author.name}
                </RouterLink>
              </Typography.Text>
              <Typography.Text
                style={{ color: "gray", fontSize: "12px" }}
              >
                {formatDistanceToNow(post.createdAt.toDate(), {
                  addSuffix: true
                })}
              </Typography.Text>
            </Space>

            <Title level={4} style={{ color: textColor }}>
              {post.title}
            </Title>
            <Paragraph style={{ color: textColor }}>
              {post.content}
            </Paragraph>

            <Row gutter={16}>
              <Col>
                <Button
                  type="text"
                  icon={<LikeOutlined />}
                  onClick={handleLike}
                  style={{ color: liked ? "blue" : "inherit" }}
                >
                  {post.likes + (liked ? 1 : 0)}
                </Button>
              </Col>
              <Col>
                <Button
                  type="text"
                  icon={<CommentOutlined />}
                  onClick={handleComment}
                >
                  {post.comments.length} Comments
                </Button>
              </Col>
            </Row>

            {showComments && (
              <div style={{ marginTop: "20px" }}>
                {post.comments.map(comment => (
                  <Card key={comment.id} style={{ backgroundColor: bgColor, marginBottom: "10px" }}>
                    <Space direction="vertical" style={{ width: "100%" }}>
                      <Typography.Text
                        strong
                        style={{ color: textColor }}
                      >
                        <RouterLink to={`/profile/${comment.author.id}`} style={{ color: "inherit" }}>
                          {comment.author.name}
                        </RouterLink>
                      </Typography.Text>
                      <Typography.Text style={{ color: textColor }}>
                        {comment.content}
                      </Typography.Text>
                      <Typography.Text style={{ color: "gray", fontSize: "12px" }}>
                        {formatDistanceToNow(comment.createdAt.toDate(), {
                          addSuffix: true
                        })}
                      </Typography.Text>
                    </Space>
                  </Card>
                ))}

                {currentUser && (
                  <form onSubmit={handleSubmitComment}>
                    <Space style={{ width: "100%" }}>
                      <Input
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                      />
                      <Button
                        icon={<SendOutlined />}
                        type="primary"
                        htmlType="submit"
                      />
                    </Space>
                  </form>
                )}
              </div>
            )}
          </Space>
        </Col>
      </Row>

      <Button
        type="link"
        onClick={toggleTheme}
        style={{ marginTop: "20px", color: isDarkMode ? "white" : "black" }}
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </Button>
    </Card>
  )
}

export default BlogPost
