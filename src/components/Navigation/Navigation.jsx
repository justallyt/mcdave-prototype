import React, { useState} from 'react'
import { sidebarContext } from './sidebarcontext'
import RegularNavbar from './RegularNavbar'
import ScrolledNavbar from './ScrolledNavbar'
import Sidebar from './Sidebar'
const Navigation = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false)
  return (
    <sidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
             <RegularNavbar />
             <ScrolledNavbar />
             <Sidebar />
    </sidebarContext.Provider>
  )
}

export default Navigation