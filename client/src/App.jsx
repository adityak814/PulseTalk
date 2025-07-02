import React, { Children, useEffect } from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Auth from './pages/auth/index';
import Chat from './pages/chat/index';
import Profile from './pages/profile/index';
import { useAppStore } from './store/index';
import { apiClient } from './lib/api-client';
import { GET_USER_INFO } from './utils/constants';
import { useState } from 'react';


const PrivateRoute = ({children}) => {
  const {userInfo} = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? children : <Navigate to="/auth" />;
}

const AuthRoute = ({children}) => {
  const {userInfo} = useAppStore();
  const isAuthenticated = !!userInfo;
  return isAuthenticated ? <Navigate to="/chat"/> : children; 
}

const App = () => {

  const {userInfo, setUserInfo} = useAppStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUserData = async () => { 

      try{
        const response  = await apiClient.get(GET_USER_INFO, { withCredentials: true })
        
        if(response.status === 200 && response.data.id){
          setUserInfo(response.data)
        }else{
          setUserInfo(undefined)
        }
        console.log({response})
      } catch(error){
        setUserInfo(undefined)
      } finally {
        setLoading(false)
      }

    }

    if(!userInfo){
      getUserData()
    }else{
      setLoading(false)
    }

  }, [userInfo])

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthRoute> <Auth /> </AuthRoute>} />
          <Route path="/chat" element={<PrivateRoute> <Chat /> </PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App