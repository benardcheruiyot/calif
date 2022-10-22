let ShoppingCart = (function ($) {
  "use strict";

  // Cahce necesarry DOM Elements
  let productsEl = document.querySelector(".products"),
    cartEl = document.querySelector(".shopping-cart-list"),
    productQuantityEl = document.querySelector(".product-quantity"),
    emptyCartEl = document.querySelector(".empty-cart-btn"),
    cartCheckoutEl = document.querySelector(".cart-checkout"),
    cartNext = document.querySelector(".cart-next"),
    totalPriceEl = document.querySelector(".total-price");

  // Fake JSON data array here should be API call
  let products = [
    {
      id: 0,
      name: "5-MeO-DMT Cartridge 1mL <br>BUY DMT",
      discount: 0.9,
      description: "Buy 5-MeO-DMT Cartridge 1mL is one of the most potent psychedelics you can consume, and the experience can be intense and powerful in both positive and negative ways. Though everyone will undergo a unique and individual experience, there are some general things you can expect. Disclaimer: Buy 5-MeO-DMT Cartridge 1mL is only recommended for experienced users.1mL1g 5-MeO-DMTSpirit molecule psychedelic experience Cartridge You’ll be in the magical colorful dimension of God",
      imageUrl: "./img/download-5.jpg",
      price: 120 
    },
    {
      id: 1,
      name: "Bigchief carts <br>VAPE",
      discount: 0.9,
      description: "Buy Big chief carts: Many clients consider that shopping for Big Chief carts on-line could make you emerge as shopping falsified merchandise. you may now no longer face this trouble. Big Chief has been withinside the commercial enterprise of promoting top class exceptional carts and extracts of numerous marijuana flavors each in CBD and THC. The assure we soak up offering top class exceptional flavor in all our merchandise guarantees consumer satisfaction.",
      imageUrl: "./img/download-3.jpg",
      price: 55,
    },
    {
      id: 2,
      name: "A1 Meds <br>VAPE",
      discount: 0.9,
      description: "Cannabis Concentrate And Organic Terpenes direction remove rubber cap inhale on mouth piece to prime gently attach to the battery do not over tighten.1000mg cartridge",
      imageUrl: "./img/2021_06_16_09_39_IMG_5892-600x596.jpg",
      price: 33
    },
    {
      id: 3,
      name: "AC/DC CO2 Cartridge <br>VAPE",
      discount: 0.9,
      description: "AC/DC is high-CBD, sativa dominant strain. With a CBD:THC ratio of 20:1, the strain is non-psychoactive, but many patients still report extreme relief from pain, inflammation, depression, anxiety and stress.Our oil is one of the most potent on the market. Unlike many other brands that give you the results of raw oil that they then dilute, at Pure what you see is what you vape. Our Lab tests for each batch are printed on the package and most batches test well over 70% THC. Additionally, due to our natural process in which we use the terpenes found naturally in the flower, the flavor and draw from our cartridges is exceptionally smooth..",
      imageUrl: "./img/cartidge.png",
      price: 345
    },
    {
      id: 4,
      name: "Alienlabs carts <br>VAPE",
      discount: 0.9,
      description: "Buy Alienlabs cart: Alien Labs is one of the first California hashish manufacturers that determined to begin taking dangers and displaying up withinside the new California marketplace.   Since it is genesis of taking widely known flower traces and making them appear nearly otherworldly, to now pushing the “unique” verbal exchange ahead with the aid of using growing new and precise unique traces.  Alien Labs is for the Connoisseur who has attempted everything, is aware of what great is, and desires to revel in new traces. We’ve taken our requirements into area and beyond, making sure our clients acquire most effective top-notch products. Alien Labs’ course is navigated with the aid of using founder Ted Lidie who has advanced a life-time of revel in in cultivation, marketing, an ardour for the scientific and the tradition of hashish worldwide.  Cannabis tradition is a real life-style for the Alien Labs team, and we’re so excited to supply the pleasant of California, in Arizona. The finer matters,for people who like their finer matters a bit weird.Alienlabs has been developing high-great, out of this global fashion dressmaker weed in California for years. The Sacramento primarily based totally emblem has perfected small batch indoor cultivation techniques. Prepare for blast off. We’ll see ya’ in outer area.",
      imageUrl: "./img/10b870e0-e6b2-484a-9608-d27126772447-500x500-1-300x300.jpg",
      price: 45
    },
    {
      id: 5,
      name: "Girl Scout Cookies Vape Cartridges <br>VAPE",
      discount: 0.9,
      description: "Lab results: 74.8% THC – 0.44% CBD GSC (f.k.a. Girl Scout Cookies) HybridTaste: Sweet & EarthyGSC (f.k.a. Girl Scout Cookies) is a hybrid of two very popular strains, OG Kush &Durban Poison. The result is euphoria paired with full-body relaxation and a cerebralhigh. Patients have reported that this popular strain helps with pain and nausea.With a sweet and earthy aroma, Girl Scout Cookies launches you to euphoria’s top floor where full-body relaxation meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won Girl Scout Cookies numerous Cannabis Cup awards. Patients needing a strong dose of relief, however, may look to GSC for severe pain, nausea, and appetite loss.",
      imageUrl: "./img/cookies-300x300.png",
      price: 499.99
    },
    {
      id: 6,
      name: "Stiiizy carts <br>VAPE",
      discount: 0.9,
      description: "Buy Stiiizy carts online: STIIIZY gives a line of top rate hashish merchandise that has set a brand new enterprise general for portability and convenience. STIIIZY’s proprietary pod device has garnered a cult-like following given that its release and has emerged as a main way of life emblem in hashish. Stiiizy Carts, introducing the brand new era of contemporary-day THC shipping systems. STIIIZY is revolutionizing the hashish enterprise through developing a product that gives a discreet enjoy constructed for portability and convenience. Our top rate excellent concentrates uphold an excessive degree of efficiency and purity. Pre-crammed THC oil vape pods are a handy and excessive tech manner to get excessive. They supply scrumptious terpene-wealthy flavors and don’t produce a robust smell like smoke—due to the fact it’s vapor! Main kinds of pre-crammed oil cartridges are 510-well matched cartridges or stiiizy pods. In this manual we can provide an explanation for what pre-crammed THC oil carts and stiiizy pods are, and a few recommendations for purchasing and the usage of them.",
      imageUrl: "./img/112770_STIIIZY_Pineapple-Express-HalfGram_1600x-600x600.jpg",
      price: 40
    },
    {
      id: 7,
      name: "Girl Scout Cookies Vape Cartridges <br>VAPE",
      discount: 0.9,
      description: "Lab results: 74.8% THC – 0.44% CBD GSC (f.k.a. Girl Scout Cookies) HybridTaste: Sweet & EarthyGSC (f.k.a. Girl Scout Cookies) is a hybrid of two very popular strains, OG Kush &Durban Poison. The result is euphoria paired with full-body relaxation and a cerebralhigh. Patients have reported that this popular strain helps with pain and nausea.With a sweet and earthy aroma, Girl Scout Cookies launches you to euphoria’s top floor where full-body relaxation meets a time-bending cerebral space. A little goes a long way with this hybrid, whose THC heights have won Girl Scout Cookies numerous Cannabis Cup awards. Patients needing a strong dose of relief, however, may look to GSC for severe pain, nausea, and appetite loss.",
      imageUrl: "./img/cookies-300x300.png",
      price: 499.99
    },
    {
    id: 8,
    name: "Blue Raspberry Mushroom Gummy (Alice)  <br>MUSHROOMS EDIBLES",
    discount: 0.9,
    description: "Whether you’re looking to take a trip to a land far beyond your imagination, or want to enhance your day to day reality, Alice has you covered. By using the highest quality Psilocybin Mushrooms, we have created reliably dosed, yet unbelievably delicious edibles to take you wherever your mind wanders.Treat yourself and chase that white rabbit, you never know where it might take you! This product offers a delicious blue raspberry flavor and is nausea-free.Everybody reacts differently to mushrooms, therefore you should allow for an hour to pass before taking more. Your trip can last anywhere between 2-6 hours, with the effects being felt up to 8 hours after initial ingestion.If taking medication: make sure there are no known negative interactions with psilocybin.Blue Raspberry Mushroom Gummy by Alice shroom gummies is the perfect way to take a trip to a land far beyond your imagination, or even just to enhance your day to day reality Each Gummy Contains 1g Total of Golden Teacher Mushroom",
    imageUrl: "./img/1z-25-1-300x300.jpg",
    price: 80
  },
  {
    id: 9,
    name: "Cherry Mushroom Gummy (Alice) <br>MUSHROOM TEA",
    discount: 0.9,
    description: "Cherry Mushroom Gummy by Alice is the perfect way to take a trip to a land far beyond your imagination, or even just to enhance your day to day realityEach Gummy Contains 1g Total of Golden Teacher Mushroom.",
    imageUrl: "./img/cookies-300x300.png",
    price: 120
  },
  {
    id: 10,
    name: " Full Spectrum [20pk] (500mg) - RSO Capsules <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Cannabis infused capsules by Grassroots.",
    imageUrl: "./img/111f98b834494db23357e4110a5fdaf8.webp",
    price: 64
  },
  {
    id: 11,
    name: "Gelato 41 x Do-Si-Do <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "DescriptionOur Grassroots Flagship Flower Line and Pure Medicine Concentrates and Vapes provide patients with premium products made from unique genetics.",
    imageUrl: "./img/39bc4ad1f131ae4b909334b846f4232d.webp",
    price: 48
  },
  {
    id: 12,
    name: "Bubba Diagonal - Premium <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "INDICA -- An excellent representation of both parents, Bubba x Triangle Kush, this strain creates a potent Indica for a relaxing body high with couchlock effects. You will be introduced to an earthy and sweet taste accompanied by a gassy, piney scent. Bubba Diagonal buds are vivid green and purple, coated in amber hairs and an abundance of trichomes.",
    imageUrl: "./img/Flower-Buds-N (1).webp",
    price: 95
  },
  {
    id: 13,
    name: "Silly Suzan <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "No description available. If you have any info on this strain, drop us some knowledge at strains@iheartjane.com",
    imageUrl: "./img/Flower-Buds-N.webp",
    price: 56
  },
  {
    id: 14,
    name: "Grassroots Terpenado RSO Capsules 25mg (20pk) <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Cannabis infused capsules by Grassroots.",
    imageUrl: "./img/Oral-Capsule-N.webp",
    price: 42.25
  },
  {
    id: 15,
    name: "GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "HYBRID -- Birthday Cake This Indica-dominant Hybrid offers a very sweet, earthy aroma. Parents GSC and Cherry Pie come together to make a colorful. sweet flavored flower with strong relaxing body effects. Birthday Cake helps to ease anxiety and can be mildly sedating. As the name suggests, this strain offers a delicious treat you can enjoy any time of the day.",
    imageUrl: "./img/9e9a57024583049f953b514243c52da0.webp",
    price: 75
  },
  {
    id: 16,
    name: "Memory Loss - Rick Simpson Oil (RSO) <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "HYBRID -- Birthday Cake This Indica-dominant Hybrid offers a very sweet, earthy aroma. Parents GSC and Cherry Pie come together to make a colorful. sweet flavored flower with strong relaxing body effects. Birthday Cake helps to ease anxiety and can be mildly sedating. As the name suggests, this strain offers a delicious treat you can enjoy any time of the day.",
    imageUrl: "./img/299203ffecc8879e3827d58ae231d2ef.webp",
    price: 75
  },
  {
    id: 17,
    name: "Memory Loss [20pk] (500mg) - RSO Capsules <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "INDICA -- An excellent representation of both parents, Bubba x Triangle Kush, this strain creates a potent Indica for a relaxing body high with couchlock effects. You will be introduced to an earthy and sweet taste accompanied by a gassy, piney scent. Bubba Diagonal buds are vivid green and purple, coated in amber hairs and an abundance of trichomes.",
    imageUrl: "./img/Oral-Capsule-N.webp",
    price: 65
  },
  {
    id: 18,
    name: "Garlic Cookies - Rick Simpson Oil (RSO) <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Our Grassroots Flagship Flower Line and Pure Medicine Concentrates and Vapes provide patients with premium products made from unique genetics..",
    imageUrl: "./img/Concentrates-Oil-RSO.webp",
    price: 75
  },
  {
    id: 19,
    name: "Garlic Cookies - Rick Simpson Oil (RSO) <br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Our Grassroots Flagship Flower Line and Pure Medicine Concentrates and Vapes provide patients with premium products made from unique genetics..",
    imageUrl: "./img/ce6af7cdf0c7f8c49c6f21a553429a6d.webp",
    price: 75
  },
  {
    id: 20,
    name: "Novarine [2g] - Live Budder Jar<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: " A strain specific extract by Grassroots.",
    imageUrl: "./img/c2b24a06032636f575de1e60559853fb.webp",
    price: 120
  },
  {
    id: 21,
    name: "Bubba Diagonal (Blades) - Smalls<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: " Description INDICA -- An excellent representation of both parents, Bubba x Triangle Kush, this strain creates a potent Indica for a relaxing body high with couchlock effects. You will be introduced to an earthy and sweet taste accompanied by a gassy, piney scent. Bubba Diagonal buds are vivid green and purple, coated in amber hairs and an abundance of trichomes.",
    imageUrl: "./img/b8420a50ffec6babdb92bf19b57073ae.webp",
    price: 80
  },
  {
    id: 22,
    name: "Grassroots Terpenado RSO 1g<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "RSO, or Rick Simpson Oil, is named after a Canadian cancer patient turned cannabis activist. RSO is sometimes referred to as a 'whole plant' or 'full spectrum' extract because it retains the full cannabinoid, terpene, and chlorophyll profile of the source material by using specific solvents.",
    imageUrl: "./img/51bf4b159242736396f742d325aaafa3.webp",
    price: 52.5
  },
  {
    id: 23,
    name: "Grassroots Lucnda Williams X GSC Live Sugar 1g<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Concentrated cannabis products come in a wide variety of consistencies, compositions, and potencies. Cannabinoids are isolated and removed from plant material via extraction, agitation, compression, or other methods to create generally a very potent product. Concentrates have an immediate activation time and are generally used by experienced consumers.",
    imageUrl: "./img/Concentrates-ResinWax-Sugar.webp",
    price: 52.5
  },
  {
    id: 24,
    name: "Grassroots GSC Blades Flower 7g<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Dried cannabis flower is primarily ingested via inhalation. Activation time is roughly about 5 minutes and can last up to a few hours.",
    imageUrl: "./img/Flower-Buds-N (1).webp",
    price: 56.0
  },
  {
    id: 25,
    name: "Grassroots Terpenado RSO Capsules 50mg (10pk)<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "A version of the world-renowned ethanol extract is extremely potent and has an especially high level of THC that’s been reported to relieve a variety of ailments. Crafted from the same process that made RSO (Rick Simpson Oil) the most revered of all cannabis extracts, the syringe makes it easy to add directly to your own recipes.",
    imageUrl: "./img/c3037220a0f683fdf052b8b392fae868.webp",
    price: 45.5
  },
  {
    id: 26,
    name: "Grassroots Tarts Blades Flower 7gv",
    discount: 0.9,
    description: "Dried cannabis flower is primarily ingested via inhalation. Activation time is roughly about 5 minutes and can last up to a few hours.",
    imageUrl: "./img/Flower-Buds-N.webp",
    price: 56.0
  },
  {
    id: 27,
    name: "Grassroots Yuck Mouth Blades Flower 7g<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Dried cannabis flower is primarily ingested via inhalation. Activation time is roughly about 5 minutes and can last up to a few hours.",
    imageUrl: "./img/Flower-Buds-N.webp",
    price: 56.0
  },
  {
    id: 28,
    name: "Grassroots Memory Loss RSO Capsules 25mg (20pk)<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "A version of the world-renowned ethanol extract is extremely potent and has an especially high level of THC that’s been reported to relieve a variety of ailments. Crafted from the same process that made RSO (Rick Simpson Oil) the most revered of all cannabis extracts, the syringe makes it easy to add directly to your own recipes.",
    imageUrl: "./img/c3037220a0f683fdf052b8b392fae868 (1).webp",
    price: 45.5
  },
  {
    id: 29,
    name: "Grassroots GSC Blades Flower 7g<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Dried cannabis flower is primarily ingested via inhalation. Activation time is roughly about 5 minutes and can last up to a few hours.",
    imageUrl: "./img/5990e642a066c80f693658d2b0083aa9.webp",
    price: 56.0
  },
  {
    id: 30,
    name: "Grassroots Ghost Rider Blades Flower 7g<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Dried cannabis flower is primarily ingested via inhalation. Activation time is roughly about 5 minutes and can last up to a few hours.",
    imageUrl: "./img/d6ea60038363345112830cb247bbee77.webp",
    price: 56.0
  },
  {
    id: 31,
    name: "Grassroots Terpenado RSO Capsules 50mg (10pk)<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "50mg THC per capsule A version of the world-renowned ethanol extract is extremely potent and has an especially high level of THC that’s been reported to relieve a variety of ailments. Crafted from the same process that made RSO (Rick Simpson Oil) the most revered of all cannabis extracts, the syringe makes it easy to add directly to your own recipes.",
    imageUrl: "./img/c3037220a0f683fdf052b8b392fae868 (1).webp",
    price: 45.50
  },
  {
    id: 32,
    name: "Grassroots Garlic Cookies RSO Capsules 50mg (10pk)<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "50mg THC per capsule A version of the world-renowned ethanol extract is extremely potent and has an especially high level of THC that’s been reported to relieve a variety of ailments. Crafted from the same process that made RSO (Rick Simpson Oil) the most revered of all cannabis extracts, the syringe makes it easy to add directly to your own recipes.",
    imageUrl: "./img/c3037220a0f683fdf052b8b392fae868 (1).webp",
    price: 45.0
  },
  {
    id: 33,
    name: "Grassroots Novarine Blades Flower 7g<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Dried cannabis flower is primarily ingested via inhalation. Activation time is roughly about 5 minutes and can last up to a few hours.",
    imageUrl: "./img/Flower-Buds-N (5).webp",
    price: 80.0
  },
  {
    id: 34,
    name: "Novarine [2g] - Live Budder Jar<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "A strain specific extract by Grassroots.",
    imageUrl: "./img/c2b24a06032636f575de1e60559853fb (1).webp",
    price: 120.0
  },
  {
    id: 35,
    name: "Ray Charles [20pk] (500mg) - RSO Capsules<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Cannabis infused capsules by Grassroots.",
    imageUrl: "./img/9fd707a47ca843fb1dc8fa8e0375607a.webp",
    price: 64.0
  },
  {
    id: 36,
    name: "Cool Grapes #65 [100mg THC each] - Capsules<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Cannabis infused capsules by Grassroots.",
    imageUrl: "./img/fb0e06eb0f788e7e9157b6cd5b25589b.webp",
    price: 64.0
  },
  {
    id: 37,
    name: "Cool Grapes #65 [100mg THC each] - Capsules<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Cannabis infused capsules by Grassroots.",
    imageUrl: "./img/fb0e06eb0f788e7e9157b6cd5b25589b.webp",
    price: 64.0
  },
  {
    id: 38,
    name: "Memory Loss - Live Budder by GRASSROOTS CANNABIS<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "A strain specific cannabis extract.",
    imageUrl: "./img/e08bf0201f5c827ef57e465f3c0dd3bb.webp",
    price: 75
  },
  {
    id: 39,
    name: "Tahiti Lime - Blades <br> GRASSROOTS CANNABIS<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "No description available. If you have any info on this strain, drop us some knowledge at strains@iheartjane.com",
    imageUrl: "./img/1197ae0b0cc2dc0b58ccab7554b7036a.webp",
    price: 75
  },
  {
    id: 40,
    name: "Gelato 41 x Do-Si-Do <br> GRASSROOTS CANNABIS<br>GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "No description available. If you have any info on this strain, drop us some knowledge at strains@iheartjane.com.",
    imageUrl: "./img/4173f541bd3ad132a5f2bdf38026a50c.webp",
    price: 56.0
  },
  {
    id: 41,
    name: "Ray Charles [20pk] (500mg) - RSO Capsules <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: " Cannabis infused capsules by Grassroots",
    imageUrl: "./img/08ed9a0f70a6446fe164416685aa7fc4.webp",
    price: 64
  },
  {
    id: 42,
    name: "Tahiti Lime - Live Sugar and Sauce <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Our Grassroots Flagship Flower Line and Pure Medicine Concentrates and Vapes provide patients with premium products made from unique genetics.",
    imageUrl: "./img/f60a11d824311e2b9d97a4e1df0966d1.webp",
    price: 65
  },
  
  {
    id: 43,
    name: "Tahiti Lime [2g] - Live Sugar Jar <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: " A strain specific extract by Grassroots.",
    imageUrl: "./img/f60a11d824311e2b9d97a4e1df0966d1.webp",
    price: 120
  },
  {
    id: 44,
    name: "Bubba Diagonal (Blades) - Smalls <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "INDICA -- An excellent representation of both parents, Bubba x Triangle Kush, this strain creates a potent Indica for a relaxing body high with couchlock effects. You will be introduced to an earthy and sweet taste accompanied by a gassy, piney scent. Bubba Diagonal buds are vivid green and purple, coated in amber hairs and an abundance of trichomes.",
    imageUrl: "./img/b8420a50ffec6babdb92bf19b57073ae (1).webp",
    price: 80
  },
  {
    id: 45,
    name: "Tahiti Lime - Premium <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: " No description available. If you have any info on this strain, drop us some knowledge at strains@iheartjane.com",
    imageUrl: "./img/e74761e2928cf711df3c6fe78e6d4859.webp",
    price: 52
  },
  {
    id: 46,
    name: "Cookies N' Chem - Premium <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Our Grassroots Flagship Flower Line and Pure Medicine Concentrates and Vapes provide patients with premium products made from unique genetics.",
    imageUrl: "./img/5622a60cf83c410d9a14b62d82803bb1.webp",
    price: 95
  },
  {
    id: 47,
    name: "Ghost Rider [2g] - Live Sugar and Sauce <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "HYBRID -- Ghost Rider Ghost Rider is a Hybrid of the famed Ghost OG and Karma's Hells Angel OG backcross, Biker Kush. The progeny is an exotic OG Kush Hybrid that is sure to impress even the most seasoned OG connoisseur. The high B-Caryophyllene levels make this strain a good fit for those living with chronic pain or insomnia.",
    imageUrl: "./img/Concentrates-ResinWax-Sugar (1).webp",
    price: 120
  },
  {
    id: 48,
    name: "mory Loss <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Our Grassroots Flagship Flower Line and Pure Medicine Concentrates and Vapes provide patients with premium products made from unique genetic",
    imageUrl: "./img/0d35080b7ac184bd760feb5e5bdf9702.webp",
    price: 95
  },
  {
    id: 49,
    name: "Ghost Rider | Live Sugar | 2g <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "No description available",
    imageUrl: "./img/0302c410853c5ac85ec270ddb8d7544c.webp",
    price: 120
  },
  {
    id: 50,
    name: "RSO Capsules [10pk] 50mg THC per capsule (500mg Total) - Capsules <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "Cannabis infused capsules by Grassroots.",
    imageUrl: "./img/7176619a5f0db9beeea278896e76edec.webp",
    price: 72
  },
  {
    id: 51,
    name: "Memory Loss - Live Budder <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "A strain specific cannabis extract..",
    imageUrl: "./img/e08bf0201f5c827ef57e465f3c0dd3bb.webp",
    price: 75
  },
  {
    id: 52,
    name: "10ct/100mg RSO Capsules (Gelato 41 x Dosi dos) <br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "No description available",
    imageUrl: "./img/246c70d96f6edd7a8fce5cbc2f54e829.webp",
    price: 95
  },
  {
    id: 53,
    name: "Tahiti Lime Elite Live Cart 500mg<br> GRASSROOTS CANNABIS",
    discount: 0.9,
    description: "No description available",
    imageUrl: "./img/389df4d142a1f71ed70c41d41fcee2ab.webp",
    price: 50
  },
  ],
    productsInCart = [];

  // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
  let generateProductList = function () {
    products.forEach(function (item) {
      let productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-image">
                                <img src="${item.imageUrl}" alt="${item.name}">
                             </div>
                             <div class="product-name"><span>Product:</span> ${item.name}</div>
                             <div class="product-description"><span>Description:</span> ${item.description}</div>
                             <div class="product-price"><span>Discount:</span> ${item.discount * 100}% for three or more items</div>
                             <div class="product-price"><span>Price:</span> ${item.price} $</div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                             </div>
                          </div>
`;

      productsEl.appendChild(productEl);
    });
  }

  // Like one before and I have also used ES6 template strings
  let generateCartList = function () {

    cartEl.innerHTML = "";

    productsInCart.forEach(function (item) {
      let li = document.createElement("li");
      if (item.quantity > 2) {
        li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity * item.product.discount}`;
        cartEl.appendChild(li);
      } else {
        li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
        cartEl.appendChild(li);
      }
    });

    productQuantityEl.innerHTML = productsInCart.length;

    generateCartButtons()
  }


  // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
  let generateCartButtons = function () {
    if (productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }

  // Setting up listeners for click event on all products and Empty Cart button as well
  let setupListeners = function () {
    productsEl.addEventListener("click", function (event) {
      let el = event.target;
      if (el.classList.contains("add-to-cart")) {
        let elId = el.dataset.id;
        addToCart(elId);
      }
    });

    emptyCartEl.addEventListener("click", function (event) {
      if (confirm("Are you sure?")) {
        productsInCart = [];
      }
      generateCartList();
    });
    cartCheckoutEl.addEventListener("click", function (event) {
      openForm()
      generateCartList();
    });
    cartNext.addEventListener("click", function (event) {
      let email = document.getElementById('email').value;
      let phone = document.getElementById('phone').value;
      fetch("../MailProcessor.php ", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          email:email,
          phone:phone,
          cart:productsInCart
        })
      }).then(res => {
        console.log("Request complete! response:", res);
      }).catch(err => {
        // if any error occured, then catch it here
        console.error(err);
    });
    })
  }

  // Adds new items or updates existing one in productsInCart array
  let addToCart = function (id) {
    let obj = products[id];
    if (productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({ product: obj, quantity: 1 });
    } else {
      productsInCart.forEach(function (item) {
        if (item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }


  // This function checks if project is already in productsInCart array
  let productFound = function (productId) {
    return productsInCart.find(function (item) {
      return item.product.id === productId;
    });
  }

  let calculateTotalPrice = function () {
    return productsInCart.reduce(function (total, item) {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  // This functon starts the whole application
  let init = function () {
    generateProductList();
    setupListeners();
  }

  // Exposes just init function to public, everything else is private
  return {
    init: init
  };

  // I have included jQuery although I haven't used it
})(jQuery);

ShoppingCart.init();