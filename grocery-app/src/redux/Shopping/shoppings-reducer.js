import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "Tide Detergent Washing Powder - Lemon & Mint",
      description:
        "New Tide+ with extra power detergent, now with the added power of a bar, has been developed to provide brilliant whiteness on your clothes. It removes the dirt even from the washed clothes to give you even better cleaning. The enzyme formula in the washing powder helps in washing away the toughest stains on the clothes, thus making them look bright and fresh. Kids often come with mud on their clothes, especially school uniforms, with tough-to-remove stains and dirt. Tide+ with Extra Power is a fine detergent powder which dissolves easily in water and quickly generates foam. The superior formulation can remove dirt, even from difficult to clean areas like collars and cuffs, and leaves behind a wonderful fragrance. The product works on both white and coloured clothes. Extra Power Tide+ is more powerful as compared to the previous Tide Plus. Tide, a unit of Procter & Gamble, is the worlds oldest & most trusted detergent brand and is the market leader in 23 countries around the world.",
      category: "house cleaning",
      price: 200,
      imgLocation:
        "https://m.media-amazon.com/images/I/81YakxRZLzL._SY450_.jpg",
    },
    {
      id: 2,
      name: "Rajdhani Chakki Fresh Atta  (10 kg)",
      description:
        "There isn't one heaven, there are two. Nestled comfortably among the rich heritage, perfect rhythm of season, colorful festivals and different varieties of food... India, the fertile land of Ganga offers the best agro products. The land of ancient vedas and scripture where old traditions still hold good, where children still look forward to holidays with grandmothers, longing for delicious crisp paranthas along with famous old time fables. Lest we forget the traditions, Rajdhani brings to you a distinct quality of wheat flour made out of the choicest grains and processed in the state of the art processing plants.",
      category: "food",
      price: 500,
      imgLocation:
        "https://www.jiomart.com/images/product/original/490870618/rajdhani-full-fibre-chakki-fresh-whole-wheat-atta-10-kg-product-images-o490870618-p490870618-0-202203151438.jpg",
    },
    {
      id: 3,
      name: "Dove Deep Moisture Body Wash - Nutrium Moisture",
      description:
        "Who doesn’t like having smooth skin? We all want to keep our skin looking healthy, nourished and well cared for, and it’s much easier to make that a regular part of your routine if you’ve found a moisturising body wash. This moisturising body wash combines Nutrium Moisture with mild cleansers to help your skin retain its natural moisture, leaving you with softer, smoother skin. There are 631 million beautiful women in India. Women of all ages, shapes, sizes and skin tones. Yet, as a society, we’re often led to believe in a very limited idea of beauty. And while youthful looks, fair skin, long black flowing hair and a trim figure are some ways to express beauty – they are not the only ways With your help, we can represent the true diversity of beauty in India and empower every woman to realise her personal beauty potential. Together, we can break the rules and change the face of beauty. We don’t believe that the 631 million women living in India can possibly be represented by just one beauty ideal. Ours is a country rich in diversity and that’s something we can all be proud of, especially when it comes to beauty. We received an incredible response when we asked you to help us showcase #Real Beauty. We think that speaks volumes about how much we all want to see a more diverse range of beauty represented in India",
      category: "beauty",
      price: 450,
      imgLocation:
        "https://m.media-amazon.com/images/I/71cYkixLU4L._SL1500_.jpg",
    },
    {
      id: 4,
      name: "Fresho Capsicum - Green",
      description:
        "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods. They have thick and shiny skin with a fleshy texture inside.",
      category: "Vegetable",
      price: 66,
      imgLocation:
        "https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg",
    },
    {
      id: 5,
      name: "Fresho Cauliflower",
      description:
        "Cauliflower is made up of tightly bound clusters of soft, crumbly, sweet cauliflower florets that form a dense head.Resembling a classic tree, the florets are attached to a central edible white trunk which is firm and tender.",
      price: 30,
      category: "Vegetable",
      imgLocation:
        "https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg",
    },
    {
      id: 6,
      name: "Philips LED Bulb - 10 Watt, Energy Efficient",
      description:
        "LED light bulbs help you transform your living space with beautiful and warm lights. It offers numerous lighting possibilities and helps in saving 90% of energy consumption. The instant brightness of the light is able to create a comfortable environment in your home. LED bulbs help to emit cooler and more energising light. To enjoy a perfect light quality and no warm-up time, you should buy LED bulbs. Among the Philips range, use revolutionary Philips T-bulb for a wider light spread and aesthetic pleasure. I",
      price: 95,
      category: "electronics",
      imgLocation:
        "https://www.bigbasket.com/media/uploads/p/l/40197380_8-philips-led-bulb-10-watt-cool-day-light-ace-saver-base-b22.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      console.log("add to cart running");
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
