const PORT = process.env.PORT || "3000";
const docs = {
  servers: [
    {
      url: `http://localhost:${PORT}`,
      description: "Local server",
    },
  ],
};

export default docs;