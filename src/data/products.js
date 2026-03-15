const SHOPIFY_DOMAIN = "https://madeitfox.myshopify.com";

export const getCheckoutUrl = (variantId, quantity = 1) =>
  `${SHOPIFY_DOMAIN}/cart/${variantId}:${quantity}`;

export const products = [
  {
    slug: "statement-hoodie",
    name: "The Statement Hoodie",
    tag: "FLAGSHIP",
    images: ["/images/products/hoodie-back.png", "/images/products/hoodie-front.png"],
    colour: "Black",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"],
    shopifyVariants: {
      "S": "57131557814655",
      "M": "57131557847423",
      "L": "57131557880191",
      "XL": "57131558044031",
      "2XL": "57131557912959",
      "3XL": "57131557945727",
      "4XL": "57131557978495",
      "5XL": "57131558011263",
    },
    prices: {
      S: 34.99, M: 34.99, L: 34.99, XL: 34.99,
      "2XL": 37.99, "3XL": 39.99, "4XL": 41.99, "5XL": 44.99
    },
    basePrice: "£34.99",
    description: "Started at the bottom. This hoodie didn't. Full-colour slogan artwork across the back with Big Ben, the phone box, and the London skyline. Embroidered fox head on the left chest. Premium black Gildan 18500 pullover hoodie.",
    details: "DTG printed back artwork. 50% cotton, 50% polyester. Pre-shrunk. Double-lined hood with matching drawcord. Front pouch pocket. Set-in sleeves."
  },
  {
    slug: "bigben-tee",
    name: "Big Ben Graphic Tee",
    tag: "ICONIC",
    images: ["/images/products/bigben-tee.png"],
    colour: "Black",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    shopifyVariants: {
      "XS": "57130828530047",
      "S": "57130828562815",
      "M": "57130828595583",
      "L": "57130828628351",
      "XL": "57130828661119",
      "2XL": "57130828693887",
      "3XL": "57130828726655",
      "4XL": "57130828759423",
    },
    prices: {
      XS: 17.99, S: 17.99, M: 17.99, L: 17.99, XL: 17.99,
      "2XL": 19.99, "3XL": 21.99, "4XL": 24.99
    },
    basePrice: "£17.99",
    description: "The Made It Fox stands in front of Big Ben like he owns the place. Because he does. Full-colour front print on a premium Bella + Canvas 3001 tee.",
    details: "DTG printed. 100% combed ringspun cotton. Side-seamed construction. Shoulder-to-shoulder taping. Retail fit."
  },
  {
    slug: "understated-tee",
    name: "The Understated Tee",
    tag: "CORE",
    images: ["/images/products/understated-tee.png"],
    colour: "Navy",
    sizes: ["S", "M", "L", "XL", "2XL"],
    shopifyVariants: {
      "S": "57130865525119",
      "M": "57130865557887",
      "L": "57130865590655",
      "XL": "57130865623423",
      "2XL": "57130865656191",
    },
    prices: {
      S: 17.99, M: 17.99, L: 17.99, XL: 17.99, "2XL": 19.99
    },
    basePrice: "£17.99",
    description: "Not everyone needs to know you made it. Small fox head on the chest. You know what it means. Clean navy Bella + Canvas 3001.",
    details: "DTG printed. 100% combed ringspun cotton. Side-seamed construction. Shoulder-to-shoulder taping. Retail fit."
  },
  {
    slug: "snapback",
    name: "Top Hat Snapback",
    tag: "HEADWEAR",
    images: ["/images/products/snapback.png"],
    colour: "Black",
    sizes: ["One size"],
    shopifyVariants: {
      "One size": "57130867523967",
    },
    prices: { "One size": 25.99 },
    basePrice: "£25.99",
    description: "Tip your hat to the hustle. Embroidered Made It Fox on a Yupoong 6089M classic snapback. Structured six-panel crown, flat brim, adjustable plastic snap closure.",
    details: "Embroidered front panel. 80% acrylic, 20% wool. Green under-visor. Classic structured fit."
  },
  {
    slug: "morning-mug",
    name: "Morning Fox Mug",
    tag: "LIFESTYLE",
    images: ["/images/products/mug.png"],
    colour: "White",
    sizes: ["11oz", "15oz"],
    shopifyVariants: {
      "11oz": "57130890658175",
      "15oz": "57130890690943",
    },
    prices: { "11oz": 9.99, "15oz": 13.99 },
    basePrice: "from £9.99",
    description: "Start your morning like you've already made it. The Made It Fox and Big Ben on your morning brew. Dishwasher and microwave safe.",
    details: "Sublimation printed. White glossy ceramic. C-handle. Printed on both sides."
  },
  {
    slug: "sticker",
    name: "Die-Cut Sticker",
    tag: "STICKER",
    images: ["/images/products/sticker.png"],
    colour: "White",
    sizes: ['3"', '4"', '5.5"'],
    shopifyVariants: {
      '3"': "57130868932991",
      '4"': "57130868965759",
      '5.5"': "57130868998527",
    },
    prices: { '3"': 3.99, '4"': 4.49, '5.5"': 4.99 },
    basePrice: "from £3.99",
    description: "Stick it where it matters. Die-cut Made It Fox sticker with the full slogan artwork. Weatherproof vinyl, goes on laptops, water bottles, notebooks, anywhere.",
    details: "Kiss-cut white vinyl. Indoor and outdoor use. Waterproof."
  }
];
