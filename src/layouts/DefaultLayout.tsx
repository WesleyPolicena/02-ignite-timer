import { Header } from "../componets/Header";
import { Outlet } from 'react-router-dom'
export function DefaultLayout() {
  return(
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}