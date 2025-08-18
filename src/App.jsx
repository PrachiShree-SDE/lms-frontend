
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Contact from './pages/Contact'
import Denied from './pages/Denied'
import CourseList from './pages/Course/CourseList'
import CourseDescription from './pages/Course/CourseDescription'
import CreateCourse from './pages/Course/CreateCourse'
import RequireAuth from './components/Auth/RequireAuth'
import Profile from './pages/User/Profile'
import EditProfile from './pages/User/EditProfile'

function App() {


  return (
    
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
           <Route path='/courses' element={<CourseList/>}/>
          <Route path='/course/description' element={<CourseDescription/>}/>

           {/* <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]}/>}>
              <Route path= "/user/profile" element={<Profile/>}/>
              <Route path= "/user/editprofile" element={<EditProfile/>}/>
          </Route> */}

          <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
              <Route path= "/course/create" element={<CreateCourse/>}/>
          </Route>

          <Route path='/contact' element={<Contact/>}/>
          <Route path='/denied' element={<Denied/>}/>
          <Route path='*' element={<NotFound/>}/>

             
              <Route path= "/user/profile" element={<Profile/>}/>
              <Route path= "/user/editprofile" element={<EditProfile/>}/>
    
      </Routes>
  )
}

export default App
