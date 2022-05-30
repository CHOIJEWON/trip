const basic = {
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "최제원 Trip API", // short title.
      description: "portfolio", //  desc.
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