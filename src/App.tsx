import {useEffect} from "react"
import {Navigate, Route, Routes} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import {Loader} from "lucide-react"

import {useAuthStore} from "./store/useAuthStore"

// components
import Home from "./pages/home"
import SignIn from "./pages/sign-in"
import SignUp from "./pages/sign-up"
import ProfilePage from "./pages/profile"
import Settings from "./pages/settings"
import Navbar from "./components/navbar"
import {useThemeStore} from "./store/useThemeStore"

const App = () => {
    const {checkUser, isCheckingUserLoader, authUser} = useAuthStore()
    const {theme} = useThemeStore()

    useEffect(() => {
        checkUser()
    }, [checkUser])

    if (!isCheckingUserLoader) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="size-10 animate-spin" />
            </div>
        )
    }

    return (
        <main data-theme={theme}>
        <Toaster position="top-center" reverseOrder={false} />
        {authUser && <Navbar />}
  
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/sign-in" replace />}
          />
          <Route
            path="/sign-in"
            element={!authUser ? <SignIn /> : <Navigate to="/" replace />}
          />
          <Route
            path="/sign-up"
            element={!authUser ? <SignUp /> : <Navigate to="/" replace />}
          />
          <Route
            path="/profile"
            element={authUser ? <ProfilePage /> : <Navigate to="/sign-in" replace />}
          />
          <Route
            path="/settings"
            element={authUser ? <Settings /> : <Navigate to="/sign-in" replace />}
          />
        </Routes>
      </main>
    )
}

export default App
