import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import {Login, Home, LoginPage, SignupPage, AllPosts, AddPosts, EditPosts, Post, AuthLayout } from './components/index.js'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='/login'
//         element={
//           <AuthLayout authentication={false}>
//             <LoginPage />
//           </AuthLayout>}
//       />
//       <Route path='/signup'
//         element={
//           <AuthLayout authentication={false}>
//             <SignupPage />
//           </AuthLayout>}
//       />
//       <Route path='/all-posts'
//         element={
//           <AuthLayout authentication>
//             <AllPosts />
//           </AuthLayout>}
//       />
//       <Route path='/add-posts'
//         element={
//           <AuthLayout authentication>
//             <AddPosts />
//           </AuthLayout>}
//       />
//       <Route path='/edit-posts/:slug'
//         element={
//           <AuthLayout authentication>
//             <EditPosts />
//           </AuthLayout>}
//       />
//       <Route path='/post/:slug' element={<Post />} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
