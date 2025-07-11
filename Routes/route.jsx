import React from "react";
import Signin from "../assets/pages/Auth/Signin";
import Signup  from "../assets/pages/Auth/Signup";
// import { Password_recovery } from "../assets/pages/Auth/Password_recovery";
// import { Verify_Code } from "../assets/pages/Auth/Verify_Code";
// import { New_password } from "../assets/pages/Auth/New_password";
import Layout from "../Components/Layout";
import Dashboard from "../assets/pages/Dashboard_relevant/Dashboard";
// import Community from "../assets/pages/Dashboard_relevant/Community";

import Users from "../assets/pages/Dashboard_relevant/Users.jsx";
import Knowledge_base from "../assets/pages/Dashboard_relevant/Knowledge_base.jsx";
import Dashboard_Settings from "../assets/pages/Dashboard_relevant/Dashboard_Settings.jsx";
import Notification_Setting from  "../assets/pages/Dashboard_relevant/Notification_Setting.jsx";
import Profile_Settings from '../assets/pages/Dashboard_relevant/Profile_Settings.jsx';
import Security_Settings from '../assets/pages/Dashboard_relevant/Security_Settings.jsx';
import Integrations from "../assets/pages/Dashboard_relevant/Integrations.jsx";
import Hallucination from "../assets/pages/Dashboard_relevant/Hallucination.jsx";

// import { Goals } from "../assets/pages/Dashboard_relevant/Goals";
 

const routes = [
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      // path: "/Password_recovery",
      // element: <Password_recovery />,
    },
    {
      // path: "/Verify_Code",
      // element: <Verify_Code />,
    },
    {
      // path: "/New_password",
      // element: <New_password />,
    },
    {
      path: "Dashboard",
      element: <Layout />,
      children: [
        { path:"Dashboard", element: <Dashboard /> },
        // { path: "Goals", element: <Goals /> },
        
        { path: "Users", element: < Users /> },
        { path: "Knowledge_base", element: <Knowledge_base /> },
        {
          path: "Dashboard_Settings",
          element: <Dashboard_Settings />,
          children: [
            { path: "Notification_Setting" , element: <Notification_Setting />},
            { path: "Profile_Settings" , element: <Profile_Settings/>},
            { path: "Security_Settings" , element: <Security_Settings/>},


          ],
        },
        {path:"Integrations",element:<Integrations/>},
        {path:"Hallucination",element:<Hallucination/>}
       
       
      ],
    },
    
  ];

export default routes;
