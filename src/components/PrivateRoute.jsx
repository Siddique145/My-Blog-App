// import React from "react"
// import { Route, Redirect } from "react-router-dom"
// import { useAuth } from "../contexts/Authcontext"

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { currentUser } = useAuth()

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         currentUser ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   )
// }

// export default PrivateRoute



import React from "react"
import { Route, Navigate } from "react-router-dom" // Import Navigate instead of Redirect
import { useAuth } from "../contexts/Authcontext"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      element={currentUser ? <Component /> : <Navigate to="/login" />} // Use element and Navigate
    />
  )
}

export default PrivateRoute
