import React, {  useState } from "react";

import { getCurrentUser } from "../../API/fireStoreAPI";
import DashboardComponents from "./DashboardComponents/DashboardComponents";

export default function DashboardLayout() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      <DashboardComponents currentUser={currentUser}/>
    </div>
  );
}
