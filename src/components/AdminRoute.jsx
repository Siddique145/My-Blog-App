// import React from "react"
// import { Route, Redirect } from "react-router-dom"
// import { useAuth } from "../contexts/Authcontext"

// const AdminRoute = ({ component: Component, ...rest }) => {
//   const { currentUser, isAdmin } = useAuth()

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         currentUser && isAdmin ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   )
// }

// export default AdminRoute





import React from "react"
import { Route, Navigate } from "react-router-dom"  // Import Navigate instead of Redirect
import { useAuth } from "../contexts/Authcontext"

const AdminRoute = ({ component: Component, ...rest }) => {
  const { currentUser, isAdmin } = useAuth()

  return (
    <Route
      {...rest}
      element={currentUser && isAdmin ? <Component /> : <Navigate to="/" />} // Use element and Navigate
    />
  )
}

export default AdminRoute
