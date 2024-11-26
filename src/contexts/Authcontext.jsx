import React, { createContext, useState, useEffect, useContext } from "react"
import { auth, db } from "../firebase/Firebase"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"

const AuthContext = createContext({ currentUser: null, isAdmin: false })
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      setCurrentUser(user)
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid))
        setIsAdmin(userDoc.data()?.isAdmin || false)
      } else {
        setIsAdmin(false)
      }
    })
    return unsubscribe
  }, [])
  return (
    <AuthContext.Provider value={{ currentUser, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}
