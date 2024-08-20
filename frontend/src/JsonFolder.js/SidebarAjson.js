



const dataadmin = {
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
              link: "/admin/home" // Link to the home page
            }
          ]
        },
        {
          children: [
            { name: "Users", link: "/admin/manage-users" }
          ]
        },
        
      
        {
          children: [
            { name: "Support ticket", link: "/admin/support-ticket" }
          ]
        },
        {
          children: [
            { name: "Knowledge Base", link: "/admin/knowledge-base-faq" }
          ]
        },
        {
          children: [
            { name: "Billing Dashboard", link: "/admin/billing-dashboard" }
          ]
        },
      
    
       
       
      ]
    }
  };
  
  export default dataadmin;
  
  