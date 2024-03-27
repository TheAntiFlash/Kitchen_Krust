const MenuItem = require("./menu_item");
const items = [
    new MenuItem(
        {
            itemName: "Tokyo",
            description: "Chicken Zinger",
            imageUrl: "/images/menu-items/Tokyo.png",
            options: {
                first: {
                    name: "Single",
                    price: 510
                },
                second: {
                    name: "Double",
                    price: 649
                }
            },
            category: "Burgers"
        }),new MenuItem(
        {
            itemName: "Dublin",
            description: "Double Fillet/Patty",
            imageUrl: "/images/menu-items/Dublin.png",
            options: {
                first: {
                    name: "Chicken",
                    price: 699
                },
                second: {
                    name: "Beef",
                    price: 749
                }
            },
            category: "Burgers"
        }),new MenuItem(
        {
            itemName: "Nairobi",
            description: "Spicy Double Fillet/Patty",
            imageUrl: "/images/menu-items/Nairobi.png",
            options: {
                first: {
                    name: "Chicken",
                    price: 699
                },
                second: {
                    name: "Beef",
                    price: 749
                }
            },
            category: "Burgers"
        }),new MenuItem(
        {
            itemName: "Monaco",
            description: "Smoky BBQ Double Fillet/Patty",
            imageUrl: "/images/menu-items/Monaco.png",
            options: {
                first: {
                    name: "Chicken",
                    price: 699
                },
                second: {
                    name: "Beef",
                    price: 749
                }
            },
            category: "Burgers"
        }),new MenuItem(
        {
            itemName: "Jakarta",
            description: "Creamy Mushroom Double Fillet/Patty",
            imageUrl: "/images/menu-items/Jakarta.png",
            options: {
                first: {
                    name: "Chicken",
                    price: 699
                },
                second: {
                    name: "Beef",
                    price: 749
                }
            },
            category: "Burgers"
        }),new MenuItem(
        {
            itemName: "Havana",
            description: "Sweet and Sour Double Fillet/Patty",
            imageUrl: "/images/menu-items/Havana.png",
            options: {
                first: {
                    name: "Chicken",
                    price: 699
                },
                second: {
                    name: "Beef",
                    price: 749
                }
            },
            category: "Burgers"
        }),new MenuItem(
        {
            itemName: "Kingston",
            description: "Triple Fillet/Patty With Homemade Sauces",
            imageUrl: "/images/menu-items/Kingston.png",
            options: {
                first: {
                    name: "Chicken",
                    price: 910
                },
                second: {
                    name: "Beef",
                    price: 959
                }
            },
            category: "Burgers"
        }),new MenuItem(
        {
            itemName: "Nashville",
            description: "Buffalo Spicy Jalapeno Wrap",
            imageUrl: "/images/menu-items/Nashville.png",
            options: {
                first: {
                    name: "Zinger",
                    price: 499
                },
                second: {
                    name: "Doner",
                    price: 899
                }
            },
            category: "Wraps"
        }),new MenuItem(
        {
            itemName: "Boston",
            description: "BBQ Sauce Black Olive Wrap",
            imageUrl: "/images/menu-items/Boston.png",
            options: {
                first: {
                    name: "Zinger",
                    price: 499
                },
                second: {
                    name: "Doner",
                    price: 899
                }
            },
            category: "Wraps"
        }),new MenuItem(
        {
            itemName: "Orlando",
            description: "Garlic Mayo Creamy Sauce Wrap With Mushrooms",
            imageUrl: "/images/menu-items/Orlando.png",
            options: {
                first: {
                    name: "Zinger",
                    price: 499
                },
                second: {
                    name: "Doner",
                    price: 899
                }
            },
            category: "Wraps"
        }),
]

module.exports = items