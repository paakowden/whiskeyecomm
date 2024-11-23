//import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  //users: [
  //  {
  //     name: "John",
  //   email: "admin@example.com",
  //   password: hashSync("123456", 10),
  //   role: "admin",
  //  },
  //  {
  //   name: "Jane",
  //  email: "jane@example.com",
  //   password: hashSync("123456", 10),
  //  role: "user",
  //  },
  //],
  products: [
    {
      name: "Experience the joy of exceptional #3 whiskey in a well crafted bottle, where every glass is filled with passion and warmth",
      slug: "Takes you to your imagination",
      category: "Beverages",
      images: [
        "/assets/images/3Whiskey_1.jpg",
        "/assets/images/3Whiskey_2.jpg",
      ],
      price: "24.00",
      brand: "#3 Whiskey",
      rating: "4.5",
      numReviews: 10,
      stock: 1000,
      description:
        "Experience the joy of exceptional #3 whiskey in a well crafted bottle, where every glass is filled with passion and warmth. #3 Whiskey, is brewed in Ghana with a distinct flavor and iconic branding. We are working towards leaving an indelible mark on the industry. From our modest beginnings, we want to rise to the level of a global sensation",
      isFeatured: true,
      banner: "/assets/images/3Whiskey.jpg",
    },
    {
      name: "Experience the joy of exceptional #3 whiskey in a well crafted bottle, where every glass is filled with passion and warmth",
      slug: "Takes you to your imagination one",
      category: "Beverages",
      images: [
        "/assets/images/3Whiskey_3.jpg",
        "/assets/images/3Whiskey_4.jpg",
      ],
      price: "24.00",
      brand: "#3 Whiskey",
      rating: "4.2",
      numReviews: 8,
      stock: 1000,
      description:
        "Experience the joy of exceptional #3 whiskey in a well crafted bottle, where every glass is filled with passion and warmth. #3 Whiskey, is brewed in Ghana with a distinct flavor and iconic branding. We are working towards leaving an indelible mark on the industry. From our modest beginnings, we want to rise to the level of a global sensation",
      isFeatured: true,
      banner: "/assets/images/.3Whiskey.jpg",
    },
    {
      name: "Experience the joy of exceptional #3 whiskey in a well crafted bottle, where every glass is filled with passion and warmth",
      slug: "Takes you to your imagination two",
      category: "Beverages",
      images: [
        "/assets/images/3Whiskey_7.jpg",
        "/assets/images/3Whiskey_5.jpg",
      ],

      price: "24.00",
      brand: "#3 Whiskey",
      rating: "4.9",
      numReviews: 3,
      stock: 100,
      description:
        "Experience the joy of exceptional #3 whiskey in a well crafted bottle, where every glass is filled with passion and warmth. #3 Whiskey, is brewed in Ghana with a distinct flavor and iconic branding. We are working towards leaving an indelible mark on the industry. From our modest beginnings, we want to rise to the level of a global sensation",
    },
    {
      name: "Experience the joy of exceptional #3 whiskey in a well crafted bottle, where every glass is filled with passion and warmth",
      slug: "Takes you to your imagination three",
      category: "Beverages",
      images: [
        "/assets/images/3Whiskey_6.jpg",
        "/assets/images/3Whiskey_7.jpg",
      ],
      price: "24.00",
      brand: "#3 Whiskey",
      rating: "3.6",
      numReviews: 5,
      stock: 10,
      description:
        "Experience the joy of exceptional #3 whiskey in a well crafted bottle, where every glass is filled with passion and warmth. #3 Whiskey, is brewed in Ghana with a distinct flavor and iconic branding. We are working towards leaving an indelible mark on the industry. From our modest beginnings, we want to rise to the level of a global sensation",
    },
  ],
};

export default sampleData;
