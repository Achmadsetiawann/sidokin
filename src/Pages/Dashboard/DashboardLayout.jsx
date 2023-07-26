import React, {  useState } from "react";

import { getCurrentUser } from "../../API/fireStoreAPI";
import SidebarComponent from "../../CommonComponents/Sidebar/SidebarComponent";

export default function DashboardLayout() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      <SidebarComponent/>
    </div>
  );
}
