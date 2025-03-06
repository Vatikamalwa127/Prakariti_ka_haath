
console.log("Seeding data to MongoDB...");
  const sampleListings = [  
    {
      title: " MP Sharbati Premium Fresh Chakki Atta",
    description: "Shudh Atta Chakki, your destination for premium quality flour that embodies the essence of freshness and purity. Introducing our MP Sharbati Atta, a testament to our..",
    price: "₹30-50/kg",
    //https://www.sharmispassions.com/wp-content/uploads/2013/12/homemadewheatflour_step1.jpg
    //https://www.sharmispassions.com/wp-content/uploads/2013/12/WholeWheatFlour2.jpg
    image: {
          url: "https://thenaturespalm.in/cdn/shop/files/4.jpg?v=1716899435",
          filename: "Prakriti_ka_haath_DEVELOPER_MP Sharbati Atta",
    },
    location: "Haldor,jamna wala Mohalla ",
    city: "Bijnor", 
  },
{
    title: "Ragi/Finger Millet Fresh Chakki Atta",
    description: "Our Ragi/Finger Millet Fresh Chakki Atta is ground using traditional chakki grinding methods, preserving the natural nutrients and flavor. Made from 100% pure finger millet, this flour is free from..",
    price: "₹50-70/kg",
    image: {
      url: "https://thenaturespalm.in/cdn/shop/files/Khadyot-002-1.webp?v=1716898670",
      filename: "Prakriti_ka_haath_DEVELOPER_Ragi",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor", 
  },

  {  
    title:"Bajra Atta (Pearl Millet Flour)",
    description: "Bajra flour is made from small round grains of black millet, also called bajra. The flour is greyish in colour and has a slightly nutty flavour. Since it is a...",
    price: "₹40-60/kg",
    image: {
         url: "https://thenaturespalm.in/cdn/shop/files/farmbean-organic-bajra-flour-5kg-bajra-sabut-pearl-millet-flour-bajra-atta-bajra-ka-atta-sajje-kambu-mavu-organic-flour-rich-in-dietary-fibers-healthy-food-gluten-free-atta-no-preserv.webp?v=1716905783",
         filename: "Prakriti_ka_haath_DEVELOPER_Bajra_Atta",
    },
         location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
     title: " Makka Chakki Fresh Atta (Corn Flour)",
    description: "Sourced from premium grains, our Makka Atta embodies the essence of nature's bounty, ensuring each bite is packed with wholesome goodness and unparalleled flavor. What sets us apart is our...",
    price: "₹35-50/kg",
    image: { 
           url: "https://thenaturespalm.in/cdn/shop/files/4_600x_fe7340fc-6030-4ac6-831d-84d9732af442.webp?v=1716902270",
           filename: "Prakriti_ka_haath_DEVELOPER_Makka atta",
    },
           location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Kuttu Atta | Buckwheat Flour | Vrat Atta | | Kuttu without Husk",
    description: "Note - It can be used in fast as it is made in chakki only used for fast items.  Buckle up for some buckwheat goodness. If you are agonizing over...",
    price: "₹100-80/kg",
    image: {
         url: "https://thenaturespalm.in/products/kuttu-atta-buckwheat-flour#images",
         filename: "Prakriti_ka_haath_DEVELOPER_kuttu atta",
    },
    location: "Haldor,jamna wala Mohalla",
    cancelIdleCallbackity: "Bijnor",
  },
    { 
    title: "Rice Atta (Idli Rice)",
    description: "Introducing our Rice Atta,crafted exclusively from premium Idli rice to bring you the authentic taste...",
    price: "₹40-60/kg",
    image: {
         url: "https://thenaturespalm.in/cdn/shop/files/how-to-make-rice-flour_jpg.webp?v=1716898598",
         filename: "Prakriti_ka_haath_DEVELOPER_Rice Atta",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor" ,
  },
    {
   title: "Kala Chana Fresh Shudh Chakki Atta",
    description: "Desi Kala chana will be used for this atta. Kala Chana/Black Chickpeas Flour is an energy booster that gives strength, provides stamina, and is good for the stomach. It is...",
    price: "₹70-60/kg",
    image: {
        url: "https://thenaturespalm.in/cdn/shop/files/1580292011_Chana_898.jpg?v=1716904527",
        filename: "Prakriti_ka_haath_DEVELOPER_Kala Chana"},
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    { 
    title: "Black Mustard Wood Pressed Oil",
    description: " Black Mustard is a pungent and aromatic oil, widely grown and used in North India. It has a near ideal Omega3: Omega6, which makes it a good choice fo ",
    price: "₹240-300/kg",
    image: {
      url: "https://thenaturespalm.in/cdn/shop/files/Black_Mustard_Back.jpg?v=1720616166",
      filename: "Black Mustard Wood Pressed Oil",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: " Yellow Mustard Wood Pressed Oil - Pungent ",
    description: " Why do we need Cold Pressed Oils ? Most of the modern day diseases like Stress, Joint pains, Gas, Hairfall are due to Vata imbalance and the easiest way to....",
    price: "₹250-310/kg",
    image: {
      url: " https://thenaturespalm.in/cdn/shop/files/Yellow_Mustard_Back.jpg?v=1720616166 ",
      filename: " Yellow Mustard Wood Pressed Oil",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title:"Coconut Wood Pressed Oil | Available in Jars in Winters",
    description: " Why do we need Cold Pressed Oils ? Most of the modern day diseases like Stress, Joint pains, Gas, Hairfall are due to Vata imbalance and the easiest way to...",
    price: "₹250-320/kg",
    image: {
      url: " https://thenaturespalm.in/cdn/shop/files/Coconut_Oil_1_Ltr_Back.jpg?v=1720616166",
      filename: "Coconut Wood Pressed Oil",
    },
    location: "Haldor,jamna wala Mohallaa",
    city: "Bijnor",
  },
    {
    title: " Peanut/Ground Nut Wood Pressed Oil",
    description: "Why do we need Wood Pressed Oils?  Most of the modern day diseases like Stress, Joint pains, Gas, Hairfall are due to Vata imbalance and the easiest way to balance....",
    price: "₹350-420/kg",
    image: { 
        url: " https://thenaturespalm.in/cdn/shop/files/Peanut_Oil_Back.jpg?v=1720616166 ",
        filename: " Peanut/Ground Nut Wood Pressed Oil",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Jeera Seeds | Cumin Seeds",
    description: "Using Cumin(Jeera) seed in tea also works for relief from stress. It does not let your brain feel dizzy and sleepy. Thus it increases the dopamine and serotonin concentration in the.",
    price: "₹60-70/-100Gms",
    image: {
        url: "https://thenaturespalm.in/cdn/shop/files/small-fennel-seed-jpg.webp?v=1716889899",
        filename: "Jeera Seeds",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
     {
    title: " Dhaniya Saabut | Coriander Seeds Whole",
    description: " Coriander or Dhaniya Seed is a must-have spices ingredient in all Indian Households. Ranging from the North to the South of India, Dhaniya sees itself as part of all kinds...",
    price: "₹30-50/-100Gms",
    image:  {
        url: " https://thenaturespalm.in/cdn/shop/files/coriander-seed-whole-fine-quality-1kg-dhaniya-sabut-seeds.20220910093819.webp?v=1716825980",
        filename: " Dhaniya Saabut",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: " Methi Dana | Fenugreek Seeds ",
    description: "Fenugreek Can Help Control Diabetes – It seems to benefit both type 1 and type 2 diabetics, along with improving general carb tolerance in non-diabetic, healthy individuals Reduces Signs Of... ",
    price: "₹20-30/-100Gms",
    image: {
        url: " https://thenaturespalm.in/cdn/shop/files/fenugreek-feature-1676488089_0c0b6e48-0815-45a4-9bff-35823853a039.webp?v=1716804238",
       filename: " Methi Dana",
    },
        location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Black Pepper Jumbo Whole | Kaali Mirch Sabut |",
    description: " Black pepper, also known as the king of spices has a load of health benefits and a major benefit of consuming pepper is that it aids in weight loss. It....",
    price: "₹100-150/-100Gms",
    image: {
         url: "https://thenaturespalm.in/cdn/shop/files/blackPepper-185067429-770x533-1_jpg.webp?v=1716811548 ",
         filename:  "Kaali Mirch Sabut",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Badi Saunf | Big Fennel Seeds | Hari Saunf | Natural Sounf",
    description: "Fennel Seeds are also known as Sounf in India. Being an aromatic and enticing seed with culinary and medicinal importance, fennel seeds are used for garnishing salad and as a...",
    price: "₹70-80/-100Gms",
    image: {
        url: " https://thenaturespalm.in/cdn/shop/files/green-fennel-jpg.webp?v=1716803155",
        filename: "Badi Saunf",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Peepal Badi | Whole Long Pepper | Peepli/Pippali",
    description: "Introducing our premium selection of Whole Spices, a culinary treasure trove that elevates every dish to gourmet perfection. Crafted from the finest sources around the globe, our whole spices are...",
    price: "₹100-120/-50Gms",
    image: {
         url: " https://thenaturespalm.in/cdn/shop/files/pipal-badi-250-gm-pipli-pippali-chavya-long-pepper-thippli-peepri-coorg-spices.20230603170349.webp?v=1716803834",
        filename: "Peepal Badi",
    },
         location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
     {
    title: "Laung Premium JUMBO | Laal Pari | Cloves",
    description: "Laung Premium is a top-quality whole clove product that combines aromatic flavor with potential health benefits. With 100% pure, premium cloves, this product is perfect for adding depth and spice....",
    price: "₹100-120/-50Gms",
    image: {
      url: " https://thenaturespalm.in/products/laung-premium-laal-pari#images-1",
      filename: "Laung Premium",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Hari Elaichi | Green Elaichi | Khadi Elachi",
    description: "Green cardamom, also known as the “Queen of Spices”, is a unique spice with a characteristic flavor close to allspice or pepper with a bit of heat but sweeter which...",
    price: "₹250-270/-50Gms",
    image: {
         url: " https://thenaturespalm.in/cdn/shop/files/71yxl1Au1ML._SL1500_-jpg.jpg?v=1716890327",
         filename: "Hari Elaichi",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Badi Elaichi | Whole Black Cardamom Big Size",
    description: " Black cardamom is a popular Indian spice, called badi elaichi or kali elaichi, that is used in many of the cuisines signature dishes. About this item Black cardamom is a...",
    price: "₹150-170/-50Gms",
    image: {
      url: " https://thenaturespalm.in/cdn/shop/files/black-cardamom-jpg.webp?v=1716890491",
      filename: "Badi Elaichi",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },

    {
    title: "Ajwain Kori Green | Carom Seeds",
    description: "An herb belonging to the cumin and parsley family, carom seeds (ajwain) are tiny, erect and oval-shaped with a sharp and penetrating taste. It has been used since ancient times....",
    price: "₹60-70/-100Gms",
    image: {
       url:"https://thenaturespalm.in/cdn/shop/files/Zeera-Kala-Asli.jpg?v=1716802925",
       filename:  "Ajwain Kori Green",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Sabut Safed Mirch | White Pepper Whole",
    description: " White pepper consists of only the inner seed with the pericarp removed by soaking and rubbing or by decorticating when dry. Its outer shrunken skin is rubbed off, exposing the...",
    price: "₹30-50/kg",
    image: {
        url: "https://thenaturespalm.in/products/white-pepper-whole-natural-white-peppercorns-sabut-safed-mirch#images-1",
        filename: "Sabut Safed Mirch ",
    },   
        location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
     {
    title: "Rai Choti for Pickles",
    description: "Introducing our premium selection of Whole Spices, a culinary treasure trove that elevates every dish to gourmet perfection. Crafted from the finest sources around the globe, our whole spices are",
    price: "₹25-30/-50Gms",
    image: {
      url: "https://thenaturespalm.in/cdn/shop/files/IMG_3637.jpg?v=1718006179",
      filename: "Rai Choti for Pickles",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Jayafal (nutmeg)",
    description: "Introducing our premium selection of Whole Spices, a culinary treasure trove that elevates every dish to gourmet perfection. Crafted from the finest sources around the globe, our whole spices ",
    price: "₹10-15/ par pice",
    image: {
      url: "https://thenaturespalm.in/cdn/shop/files/Nutmeg.webp?v=1716812073",
      filename: "Jayafal (nutmeg)",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
    {
    title: "Javitri Big Size | Mace Jumbo",
    description: "Javitri, or mace flower, is a rare spice that one can find in a variety of cuisines from around the world. With its warm and slightly sweet flavour, it is...",
    price: "₹200-250/-50Gms",
    image: {
      url: "https://thenaturespalm.in/products/jaavitri-mace#images",
      filename: "Javitri Big Size",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
  
  {
    title: "Daalcheeni | Cinnamon",
    description: " Introducing our premium selection of Whole Spices, a culinary treasure trove that elevates every dish to gourmet perfection. Crafted from the finest sources around the globe, our whole spices are...",
    price: "₹30-35/-50Gms",
    image: {
       url: "https://thenaturespalm.in/cdn/shop/files/50-dalchini-daalcheeni-50g-moovalley-original-imagtwhdzh2uzp6g.webp?v=1716826297",
       filename: "Daalcheeni",
    },
       location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },

  { 
    title: " Guntur Laal Mirch Saabut | Guntu Red Chilli ",
    description: " Guntur Laal Mirch Saabut is a whole red chilli from the Guntur region, known for its vibrant color and intense spicy flavor. Each chilli is carefully handpicked and dried to...",
    price: "₹30-35/-50Gms",
    image: {
        url: "https://thenaturespalm.in/cdn/shop/files/2a3d4f_3f750360163f48ffb5e4ac943efd0dfb_mv2.webp?v=1716810736", 
        filename: " Guntur Laal Mirch Saabut",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },

  { 
    title: "Home Ground Amba Haldi Powder ",
    description: "Herbal Amba Haldi powder may help to stimulate the production of bile, a digestive juice needed in the digestion of fat. Amba haldi for face glow and may support... ",
    price: "₹80-100/-50Gms",
    image: {
         url: "https://thenaturespalm.in/cdn/shop/files/thewholesaler_amba-haldi-white-turmeric_powder.jpg?v=1718003614", 
         filename: "Home Ground Amba Haldi Powder ",
    },
         location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
  { 
    title: " Amla Murabba in Misri Dhaaga ",
    description: "Welcome to The Natures Palm, where we bring you the timeless essence of tradition with our Homemade Amla Murabba in Misri Dhaga. Crafted using a cherished generation-old recipe, this Murabba... ",
    price: "₹240-250/-500Gms",
    image: {
        url: "https://thenaturespalm.in/cdn/shop/files/Amla1_2KgMurabbaBack.webp?v=1718194755", 
        filename:  " Amla Murabba in Misri Dhaaga ",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
  { 
    title: " Home Made Dry Ramkela Mango Pickle ",
    description: "Order this tester and experience the amazing home made taste with the fresh aroma of wood pressed mustard oil.  Image is for reference purpose only, tester packaging will be small... ",
    price: "₹240-300/- 1kg",
    image: {
          url: "https://thenaturespalm.in/cdn/shop/files/Ramkela_Back.webp?v=1718122771", 
          filename:  " Home Made Dry Ramkela Mango Pickle ",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
  { 
    title: " Desi Sahiwal Cow Bilona Ghee",
    description: " Only Mitti Handi Used Traditional Bilona Method Hand Churned Made from Curd Lab Tested 100% Organic Benefits-Good for heart Weight Balance Improves Eyesight Bone Development Improves Digestion Strengthens... ",
    price: "₹1000-1100/kg",
    image: {
         url: " https://thenaturespalm.in/cdn/shop/files/Ghee.jpg?v=1717243576", 
           filename: " Desi Sahiwal Cow Bilona Ghee",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
  { 
    title: " Mamra almond|Mamra Badam|Big Size",
    description: "Introducing our exquisite Mamra Almonds from Iran, a true delicacy cherished for their superior quality, rich flavor, and unmatched nutritional benefits. Sourced from the pristine orchards nestled in the foothills... ",
    price: "₹600-650/kg",
    image: {
         url: " https://thenaturespalm.in/cdn/shop/files/MamraBig.webp?v=1716897301",
          filename: " Mamra almond|Mamra Badam|Big Size",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },
  { 
    title: "Kishmish Gol|Raisins ",
    description: " Introducing Kishmish, the ultimate snack companion for those who crave a burst of natural sweetness in every bite. Sourced from the finest vineyards, our premium raisins are carefully selected to... ",
    price: "₹120-150/-250Gms",
    image: {
         url: "https://thenaturespalm.in/cdn/shop/files/Gol-Kishmish-4.jpg?v=1716894754", 
          filename: "Kishmish Gol|Raisins ",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
  },

  {
    title: "Safed Til (White Sesame Seeds)",
    description: "Introducing our premium White Sesame Seeds, nature's tiny treasures packed with flavor and nutritional goodness. Sourced from the finest sesame plants and meticulously processed to preserve their delicate taste and...",
    price: "₹100-120/-250Gms",
    image: {
         url: " https://thenaturespalm.in/cdn/shop/files/sesame-seeds-1.jpg?v=1716891742",
         filename: "Safed Til (White Sesame Seeds)",
    },
    location: "Haldor,jamna wala Mohalla",
    city: "Bijnor",
    },
];
console.log("Data seeding complete!");

module.exports = { data: sampleListings };
