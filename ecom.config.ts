// This is the configuration file for the e-commerce application.
// You can customize your application settings here.

const ecomconfig = {
  baseurl: "http://localhost:3000",

  app: {
    name: "E-Commerce App",
    version: "1.0.0",
    description:
      "A sample e-commerce application built with Next.js and TypeScript.",
  },

  database: {
    provider: "mongodb",
    uri: process.env.MONGODB_URI ?? "mongodb://localhost:27017/ecommerce",

    databaseName: "ecommerce",
  },

  auth: {
    session: {
      cookieName: "ec_session",
      expiresIn: "2h",
    },

    defaultRole: "user",

    publicRoutes: [
      "/",
      "/login",
      "/register",
      "/forgot-password",
      "/reset-password",
      "/verify-email",

      "/api/public",
    ],

    roles: {
      user: {
        permissions: [],
        routes: ["/dashboard", "/profile", "/orders"],
      },

      seller: {
        permissions: [],
        routes: ["/seller"],
      },

      admin: {
        permissions: ["*"],
        routes: ["*"],
      },
    },
  },
};

export default ecomconfig;
