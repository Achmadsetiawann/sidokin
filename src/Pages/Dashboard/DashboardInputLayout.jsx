import React, {  useState } from "react";
import SidebarInputComponents from '../../CommonComponents/SidebarInputDocument/SidebarInputComponent'


export default function DashboardInputLayout() {

  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
        <SidebarInputComponents/>
    </div>
  )
}
