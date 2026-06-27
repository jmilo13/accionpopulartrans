import { Outlet } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <main className="layout">
        <Outlet />
      </main>
    </>
  )
}
