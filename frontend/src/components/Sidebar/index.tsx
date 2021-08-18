import React from "react";
import { useHistory } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation/lib";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./style.css";

export default function Sidebar() {
  const history = useHistory();
  //   const { auth } = props;

  const sidebarItems = [
    {
      title: "Home",
      itemId: "/dashboard",
    },
    {
      title: "Admin",
      itemId: "1",
      subNav: [
        { title: "Career Frameworks", itemId: "/frameworks" },
        { title: "Users", itemId: "/settings/users" },
      ],
    },
    {
      title: "Settings",
      itemId: "2",
      subNav: [{ title: "Integrations", itemId: "/settings/connect" }],
    },
    { title: "Analytics", itemId: "/analytics" },
  ];

  return (
    <div className='sidebar'>
      <Navigation
        onSelect={({ itemId }) => {
          if (!Number.isInteger(itemId)) history.push(itemId);
        }}
        activeItemId='/dashboard'
        items={sidebarItems}
      />
    </div>
  );
}
