import { useHistory } from "react-router-dom";
import { Navigation, NavItemProps } from "react-minimal-side-navigation/lib";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "./style.css";

export default function Sidebar() {
  const history = useHistory();
  //   const { auth } = props;

  const sidebarItems: NavItemProps[] = [
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
    {
      title: "Analytics",
      itemId: "6",
      subNav: [{ title: "One on One", itemId: "/analytics/oneOnOne" }],
    },
  ];

  return (
    <div className='sidebar'>
      <Navigation
        onSelect={({ itemId }) => {
          if (isNaN(parseInt(itemId))) history.push(itemId);
        }}
        activeItemId='/dashboard'
        items={sidebarItems}
      />
    </div>
  );
}
