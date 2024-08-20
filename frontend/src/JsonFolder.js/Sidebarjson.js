// const data = {
//   top: {
//     logo: {
//       leftText: "Broker",
//       rightText: "Unknown",
//       link: ""
//     }
//   },

//   home: {
//     folders: [
//       {

//         children:[
//           {
//             name: "Home",
//             link: "/" // Link to the home page
//           }
//         ]
       
//       },
//       {
//         // name: "Client Management",
//         children: [
//           { name: "Manage Client", link: "/dashboard-customer" }
//         ]
//       },
//       {
//         // name: "Policy Management",
//         children: [
//           { name: "Policies", link: "/policy-dashboard" },
//           // { name: "Manage Policy", link: "/manage-policy" }
//         ]
//       },
//       {
//         // name: "Billing Management",
//         children: [
//           { name: "Billing history", link: "/billing-dashboard" },
//           // { name: "Manage Invoice", link: "#" }
//         ]
//       },
//       {
//         // name: "Support & Communication",
//         children: [
//           { name: "Support ticket", link: "/support-dashboard" },
//           { name: "Knowledge Base", link: "/knowledge-base-faq" },
//           { name: "FAQ", link: "/knowledge-base-accordion" }
//         ]
//       },
//       {
//         // name: "Audit & Log Management",
//         children: [
//           { name: "Activity Log", link: "/activity-log" }
//         ]
//       },
//       {
//         // name: "Others",
//         children: [
//           { name: "Notification", link: "#" },
//           { name: "How to use", link: "/create-customer" },
//           { name: "Logout", link: "#" }
//         ]
//       }
//     ]
//   }
// };

// export default data;



const data = {
  top: {
    logo: {
      leftText: "Broker",
      rightText: "Unknown",
      link: ""
    }
  },

  home: {
    folders: [
      {
        children:[
          {
            name: "Home",
            link: "/" // Link to the home page
          }
        ]
      },
      {
        children: [
          { name: "Clients", link: "/dashboard-customer" }
        ]
      },
      // {
      //   children: [
      //     { name: "Policies", link: "/policy-dashboard" }
      //   ]
      // },
      // {
      //   children: [
      //     { name: "Billing history", link: "/billing-dashboard" }
      //   ]
      // },
      {
        children: [
          { name: "Support", link: "/support-dashboard" }
        ]
      },
      {
        children: [
          { name: "Knowledge Base", link: "/knowledge-base-faq" }
        ]
      },
      {
        children: [
          { name: "Quotes", link: "/quotes" }
        ]
      },
      // {
      //   children: [
      //     { name: "FAQ", link: "/knowledge-base-accordion" }
      //   ]
      // },
      
      // {
      //   children: [
      //     { name: "Activity Log", link: "/activity-log" }
      //   ]
      // },
      // {
      //   children: [
      //     { name: "Notification", link: "#" }
      //   ]
      // },
      {
        children: [
          { name: "How to use", link: "/create-customer" }
        ]
      },
      {
        children: [
          { name: "Logout", link: "#" }
        ]
      },
     
    ]
  }
};

export default data;

