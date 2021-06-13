import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Mercy Kids Express API with Swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Mercy Project",
          url: "https://github.com/mercy-project",
          // email: "mercy@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/index.js"],
  };
  
  const specs = swaggerJSDoc(options);

export default specs;