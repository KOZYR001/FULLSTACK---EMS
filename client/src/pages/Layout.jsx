import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex h-screen bg-lineear-to-br from-slate-50 via-white to-indigo-50/30">
        <p>Sidebar</p>
        <main>
            <div>
                <Outlet />
            </div>
        </main>
    </div>
  )
}

export default Layout