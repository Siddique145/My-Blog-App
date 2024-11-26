// import React, { useState, useEffect } from "react"
// import { db } from "../firebase/Firebase"
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   IconButton
// } from "@mui/material"
// import DeleteIcon from "@mui/icons-material/Delete"

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const querySnapshot = await getDocs(collection(db, "users"))
//       const fetchedUsers = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }))
//       setUsers(fetchedUsers)
//     }

//     fetchUsers()
//   }, [])

//   const handleDeleteUser = async userId => {
//     try {
//       await deleteDoc(doc(db, "users", userId))
//       setUsers(users.filter(user => user.id !== userId))
//     } catch (error) {
//       console.error("Error deleting user:", error)
//     }
//   }

//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Admin Dashboard
//       </Typography>
//       <List>
//         {users.map(user => (
//           <ListItem key={user.id}>
//             <ListItemText primary={user.name} secondary={user.email} />
//             <ListItemSecondaryAction>
//               <IconButton
//                 edge="end"
//                 aria-label="delete"
//                 onClick={() => handleDeleteUser(user.id)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   )
// }

// export default AdminDashboard





import React, { useState, useEffect } from "react"
import { db } from "../firebase/Firebase"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { List, Button, Typography, Space } from "antd"
import { DeleteOutlined } from "@ant-design/icons"

const AdminDashboard = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"))
      const fetchedUsers = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setUsers(fetchedUsers)
    }

    fetchUsers()
  }, [])

  const handleDeleteUser = async userId => {
    try {
      await deleteDoc(doc(db, "users", userId))
      setUsers(users.filter(user => user.id !== userId))
    } catch (error) {
      console.error("Error deleting user:", error)
    }
  }

  return (
    <div style={{ margin: "20px" }}>
      <Typography.Title level={2}>Admin Dashboard</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={user => (
          <List.Item
            actions={[
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta title={user.name} description={user.email} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default AdminDashboard
