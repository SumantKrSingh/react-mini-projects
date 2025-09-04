import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
  // --- Breakfast ---
  {
    name: "Masala Dosa",
    price: 40,
    text: "A crispy rice crepe filled with spiced potato masala, served with chutney and sambar.",
    image: "/images/masala_dosa.png",
    type: "breakfast",
  },
  {
    name: "Idli Sambar",
    price: 35,
    text: "Steamed rice cakes served with sambar and coconut chutney.",
    image: "/images/idli_sambar.png",
    type: "breakfast",
  },
  {
    name: "Poha",
    price: 30,
    text: "Flattened rice cooked with onions, peas, spices, and garnished with coriander.",
    image: "/images/poha.png",
    type: "breakfast",
  },
  {
    name: "Aloo Paratha",
    price: 45,
    text: "Stuffed wheat flatbread with spiced mashed potatoes, served with curd and pickle.",
    image: "/images/aloo_paratha.png",
    type: "breakfast",
  },
  {
    name: "Upma",
    price: 30,
    text: "Semolina cooked with vegetables, spices, and garnished with coriander.",
    image: "/images/upma.png",
    type: "breakfast",
  },
  {
    name: "Bread Pakoda",
    price: 25,
    text: "Deep-fried bread stuffed with spiced potato filling, a popular street snack.",
    image: "/images/bread_pakoda.png",
    type: "breakfast",
  },
  {
    name: "Samosa",
    price: 20,
    text: "Crispy fried pastry stuffed with spiced potato and peas.",
    image: "/images/samosa.png",
    type: "breakfast",
  },
  {
    name: "Litti Chokha",
    price: 60,
    text: "Bihari delicacy of wheat balls stuffed with spiced gram flour, served with smoky mashed vegetables.",
    image: "/images/litti_chokha.png",
    type: "breakfast",
  },

  // --- Lunch ---
  {
    name: "Vada Pav",
    price: 25,
    text: "Mumbai’s famous street food – spiced potato fritter served in a pav with chutneys.",
    image: "/images/vada_pav.png",
    type: "lunch",
  },
  {
    name: "Pav Bhaji",
    price: 80,
    text: "Mashed spiced vegetables served with buttered pav.",
    image: "/images/pav_bhaji.png",
    type: "lunch",
  },
  {
    name: "Chhole Bhature",
    price: 120,
    text: "Spicy chickpeas served with fluffy deep-fried bhature.",
    image: "/images/chhole_bhature.png",
    type: "lunch",
  },
  {
    name: "Rajma Chawal",
    price: 100,
    text: "Kidney beans cooked in a thick curry, served with steamed rice.",
    image: "/images/rajma_chawal.png",
    type: "lunch",
  },
  {
    name: "Paneer Butter Masala",
    price: 180,
    text: "Paneer cubes in a creamy tomato-based gravy with butter and spices.",
    image: "/images/paneer_butter_masala.png",
    type: "lunch",
  },
  {
    name: "Dal Tadka",
    price: 90,
    text: "Yellow dal tempered with ghee, cumin, and garlic, served with rice or roti.",
    image: "/images/dal_tadka.png",
    type: "lunch",
  },
  {
    name: "Vegetable Pulao",
    price: 110,
    text: "Fragrant rice cooked with seasonal vegetables and mild spices.",
    image: "/images/vegetable_pulao.png",
    type: "lunch",
  },
  {
    name: "Kadhi Pakora",
    price: 100,
    text: "Gram flour fritters simmered in tangy yogurt curry.",
    image: "/images/kadhi_pakora.png",
    type: "lunch",
  },
  {
    name: "Gujarati Dhokla",
    price: 50,
    text: "Steamed gram flour cake, soft and spongy, tempered with mustard seeds and curry leaves.",
    image: "/images/dhokla.png",
    type: "lunch",
  },

  // --- Dinner ---
  {
    name: "Palak Paneer",
    price: 160,
    text: "Paneer cubes cooked in a smooth spinach gravy with aromatic Indian spices.",
    image: "/images/palak_paneer.png",
    type: "dinner",
  },
  {
    name: "Shahi Paneer",
    price: 190,
    text: "Paneer cooked in a rich, creamy cashew-based gravy.",
    image: "/images/shahi_paneer.png",
    type: "dinner",
  },
  {
    name: "Malai Kofta",
    price: 200,
    text: "Soft paneer and potato dumplings served in a creamy tomato-cashew gravy.",
    image: "/images/malai_kofta.png",
    type: "dinner",
  },
  {
    name: "Baingan Bharta",
    price: 120,
    text: "Smoky roasted brinjal mashed and cooked with onions, tomatoes, and spices.",
    image: "/images/baingan_bharta.png",
    type: "dinner",
  },
  {
    name: "Stuffed Capsicum",
    price: 140,
    text: "Bell peppers stuffed with spiced potato and paneer filling, cooked to perfection.",
    image: "/images/stuffed_capsicum.png",
    type: "dinner",
  },
  {
    name: "Mix Veg Curry",
    price: 130,
    text: "A medley of seasonal vegetables cooked in onion-tomato gravy.",
    image: "/images/mix_veg_curry.png",
    type: "dinner",
  },
  {
    name: "Aloo Gobi",
    price: 110,
    text: "Cauliflower and potatoes cooked with spices and herbs.",
    image: "/images/aloo_gobi.png",
    type: "dinner",
  },
  {
    name: "Matar Paneer",
    price: 150,
    text: "Paneer and green peas cooked in tomato-onion gravy.",
    image: "/images/matar_paneer.png",
    type: "dinner",
  },
  {
    name: "Jeera Rice",
    price: 80,
    text: "Steamed basmati rice flavored with cumin seeds and ghee.",
    image: "/images/jeera_rice.png",
    type: "dinner",
  },
  {
    name: "Vegetable Biryani",
    price: 150,
    text: "Layered aromatic rice cooked with vegetables and whole spices.",
    image: "/images/vegetable_biryani.png",
    type: "dinner",
  },
  {
    name: "Daal Baati Churma",
    price: 130,
    text: "Rajasthani classic of baked wheat balls with dal and sweet churma.",
    image: "/images/daal_baati.png",
    type: "dinner",
  },

  // --- Teas ---
  {
    name: "Masala Chai",
    price: 20,
    text: "Indian spiced tea brewed with milk, sugar, and masala spices.",
    image: "/images/masala_chai.png",
    type: "tea",
  },
  {
    name: "Ginger Tea",
    price: 20,
    text: "Black tea brewed with ginger, milk, and sugar.",
    image: "/images/ginger_tea.png",
    type: "tea",
  },
  {
    name: "Cardamom Tea",
    price: 20,
    text: "Tea flavored with fresh cardamom pods, milk, and sugar.",
    image: "/images/cardamom_tea.png",
    type: "tea",
  },
  {
    name: "Tulsi Tea",
    price: 25,
    text: "Herbal tea brewed with holy basil leaves for immunity and wellness.",
    image: "/images/tulsi_tea.png",
    type: "tea",
  },
  {
    name: "Lemon Tea",
    price: 20,
    text: "Refreshing black tea with lemon and a hint of honey.",
    image: "/images/lemon_tea.png",
    type: "tea",
  },

  // --- Desserts ---
  {
    name: "Gulab Jamun",
    price: 60,
    text: "Soft, deep-fried milk-solid dumplings soaked in cardamom sugar syrup.",
    image: "/images/gulab_jamun.png",
    type: "dessert",
  },
  {
    name: "Rasgulla",
    price: 55,
    text: "Spongy cottage cheese balls soaked in light sugar syrup.",
    image: "/images/rasgulla.png",
    type: "dessert",
  },
  {
    name: "Jalebi",
    price: 50,
    text: "Crispy spiral sweet made of deep-fried batter soaked in sugar syrup.",
    image: "/images/jalebi.png",
    type: "dessert",
  }
];


  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
