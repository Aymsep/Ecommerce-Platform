module.exports = {
    roles: [
      {
        name: "guest",
        permissions: [
          "view_products",
        ]
      },
      {
        name: "user",
        permissions: [
          "view_products",
          "update_products",
          "delete_products",
          "update_profile",
          "delete_profile",
        ]
      }
    ]
};  
