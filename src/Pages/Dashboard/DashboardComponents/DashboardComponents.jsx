import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import Loader from "../../../CommonComponents/Loader/LoaderComponent";
import SidebarComponent from "../../../CommonComponents/Sidebar/SidebarComponent";

export default function DashboardComponents({ currentUser }) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <SidebarComponent currentUser={currentUser} />;
}
