const basic = {
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "Simple Todos API", // short title.
      description: "A simple todos API", //  desc.
      version: "1.0.0", // version number
      contact: {
        name: "CHOI JEWON", // your name
        email: "jewonchoe2@gmail.com", // your email
        url: "web.com", // your website
      },
    },
    security : [
      {
      basicAuth : []
    }
  ]
  };
  
export default basic;