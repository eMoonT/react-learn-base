import { Link,Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>Layout
      <Link to={'/'}>about</Link>
      <Link to={'/board'}>board</Link>
      <Outlet />
    </div>
  )
}

export default Layout