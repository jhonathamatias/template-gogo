export default {
  sidebar: {
    countClickMenu: 1,
    menu: {
      open: true,
      items: [
        {
          icon: "Dashboard",
          text: "Dashboard",
          path: "#",
          id: "dashboard"
        }
      ],
      itemClicked: null
    },
    subMenu: {
      open: false,
      items: [
        {
          parent: "dashboard",
          subItems: [
            {
              icon: "pie-chart",
              text: "Gráfico",
              path: "/dashboard/charts"
            }
          ]
        }
      ]
    },
    fetching: false,
    error: {
      message: "",
      failed: false
    }
  },
  auth: {
    authenticated: true
  }
};
