<template>
  <v-img
    height="100%"
    width="100%"
    fill-height
    fill-width
    src="https://image.freepik.com/free-photo/spa-massage-concept-herbal-compress-ball-cream-flower-soap-scented-candle_73344-3118.jpg"
  >
    <v-container fluid fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <!-- <v-flex shrink xs12 sm12 md12 order-md1 order-sm1>
          <v-card color="transparent" ma-0 pa-0 flat elevation="1">
            <v-card-text>
              <v-img
                height="100%"
                width="100%"
                src="https://s1.1zoom.me/b2327/175/Gerberas_Stones_Spa_552366_1920x1080.jpg"
              ></v-img>
            </v-card-text>
          </v-card>
        </v-flex>-->
        <v-flex xs12 sm12 md12 order-md2 order-sm2>
          <v-row>
            <v-col cols="12" md="3" sm="12" wrap v-for="(product, index) in products" :key="index">
              <bottle-component :product="product"></bottle-component>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>
<script>
import BottleComponent from "~/components/products/BottlesComponents.vue";
export default {
  components: {
    BottleComponent
  },
  data() {
    return {
      products: [
        {
          title: "Rafael Salgado Refined Olive Pomace Oil",
          subtitle: "R.S Refined Oil",
          subhead:
            "Refined Olive Pomace Oil Blended with Extra Virgin Olive Oil",
          price: 214,
          image:
            "https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1037389-1.jpg",
          description:
            "Introducing the Oriental Botanics Bath and Body Oil - A botanical delicately scented Body Oil making it the best oil for the skin. It is a light natural oil that penetrates your skin cells to moisturise and provides a soothing topical barrier without clogging pores which leaving skin feeling hydrated and enriched. This product is made from Almond, Jojoba, Grapeseed, Coconut, Avocado oils providing a comfortable and non-greasy feeling. When you have a stressful day and fatigued mind, the fresh and reviving fragrance of Jasmine and Nargis will freshen up and soothe your body and mind.",
          composition:
            "RS olive pomace oil blended with cold pressed olive oil" +
            "Advantages: Especially for massage and, little flavorgives" +
            "  a small bouquet. It differs from other pomace oils refined " +
            " thanks to the percentage of leading and quality of Extra virginn," +
            "  keeping the color longer than other conventional oils. Brought to you by Home Max Karachi",
          features: [
            "A blend of virgin and refined olive oil",
            "Contains 100 percent pure olives",
            "A cholesterol free product, with no additives or preservatives"
          ]
        },
        {
          title: "Xtreme Collection",
          subtitle: "Xtreme Collection Gold Scrub Cream",
          subhead: "Xtreme Collection Gold Facial Whitening Scrub - 500g",
          price: 199,
          image:
            "https://static-01.daraz.pk/original/c67313d6723986ef44e25bdb24f4e287.jpg",
          description:
            "Xtreme Collection Gold Scrub is a unique treatment with herbal combination involves special methods of massage and application " +
            "It is good for both dry and oily skin types. It improves blood circulation," +
            " skin elasticity, rejuvenates the skin and helps in delaying the formation of lines and wrinkles.This is an aromatic deep cleansing " +
            "scrub that gently and gradually removes surface impurities and " +
            " dead skin cells leaving your skin soft, smooth and glowing on regular continued usage." +
            " Suitable for all skins and also highly effective.",
          composition:
            "Vegetable Oils, Sweet Almond Oil, Apricot Kernel Oil, Sports Massage Essential Oil Blend.",
          features: [
            "100% pure and safe premium grade blended oil",
            "No additives, mineral oil, base oil, SLS, paraben or silicon are added"
          ]
        },
        {
          title: "Wheat germ oil",
          subtitle: "Wheat germ oil",
          subhead: " Wheat Germ Oil, 200 ml",
          price: 114,
          image:
            "https://millevertus.ca/boutique/image/cache/catalog/huile_vegetale/wheatgerm-Triticum-vulgare-vegetable-oil-500x500.jpg",
          description:
            "Wheat germ oil is derived from the germ of the wheat berry, which" +
            " is the nutrient-dense core that feeds the plant as it grows. This " +
            "also means that the majority of usable chemicals and compounds are " +
            "found in this germ. People often use wheat germ oil when they are" +
            " suffering from diabetes, high blood pressure, obesity, hair loss," +
            " dandruff, dry skin, wrinkles, premature aging, dementia, " +
            "memory loss, acne, fatigue, psoriasis, and various other health conditions.",
          composition:
            "Linoleic acid (omega-6), Palmitic acid, Oleic acid, Linolenic acid (omega-3)",
          features: [
            "Supply Type: OEM/ODM",
            "Certification: FDA",
            "Type: Pure Essential Oil",
            "Raw Material: Seeds",
            "Ingredient: Wheat germ Oil",
            "Place of Origin: Shaanxi, China (Mainland)",
            "Model Number: 95%"
          ]
        },
        {
          title: "Jojoba Oil",
          subtitle: "Jojoba Oil",
          subhead: "Soulflower Reflexology Aroma Massage Oil, 90 ml",
          price: 102,
          image:"https://5.imimg.com/data5/LS/UU/MY-544927/omega-9-fatty-acids-500x500.png",
          description:
            "Jojoba oil is the liquid produced in the seed of the Simmondsia chinensis (jojoba) plant, a shrub, which is native to southern Arizona, southern California, and northwestern Mexico. The oil makes up approximately 50% of the jojoba seed by weight.[1] The terms `jojoba oil` and `jojoba wax` are often used interchangeably because the wax visually appears to be a mobile oil, but as a wax it is composed almost entirely (~97%) of mono-esters of long-chain fatty acids and alcohols, accompanied by only a tiny fraction of triglyceride esters. This composition accounts for its extreme shelf-life stability and extraordinary resistance to high temperatures, compared with true vegetable oils.",
          composition: "Palmitic acid, Palmitoleic acid, Stearic acid, Oleic acid, Arachidic acid, Eicosenoic acid, Behenic acid, Erucic acid, Lignoceric acid, Nervonic acid",
          features: []
        },
        {
          title: "StBotanica Himalyan Lavender",
          subtitle: "StBotanica Himalyan",
          subhead: " Pure Aroma Essential Oil, 15 ml",
          price: 122,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/40140574_3-stbotanica-himalyan-lavender-pure-aroma-essential-oil.jpg",
          description:
            "Enriched with a sweet and floral-herbaceous scent, Lavender is very calm and soothing for mind and body, encouraging tranquility and relaxation. St Botanica Essential oils are rare opuses of nature, reminiscent of ancient therapies of the body and the soul. Handpicked and harvested from the worlds most verdant soils and meticulously perfected, their olfactory manna is an unearthed treasure. Each St Botanica essential oil is encased in this 100% recyclable glass chosen for its exquisite ability to preserve the molecular integrity of this delicate oil.",
          composition: "Pure Himalayan Lavender Oil",
          features: [
            "It is not diluted with chemicals, fillers, additives or any other ingredients",
            "It is widely used for amazing effects on hair and skin and for aromatherapy purposes",
            "The best remedy for aching muscles, fatigue and insomnia"
          ]
        },
        {
          title: "Chandrika Purifying Neem",
          subtitle: "Chandrika Purifying",
          subhead: "Chandrika Purifying Neem Face Wash, 50 g",
          price: 50,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/40018973_3-chandrika-purifying-neem-face-wash.jpg",
          description:
            "Made from an exceptional blend of Neem & Cinnamon, Chandrika Purifying Neem face wash prevents " +
            "the occurrence of acne/pimples and removes post pimple marks and serves as an excellent" +
            "Beauty Tonic for your skin. Its deep cleansing action flushes out impurities to give you a " +
            "visibly clear, flawless skin with every wash",
          composition:
            "Neem, Basil, Cucumber, Sandalwood, Cinnamon, Lemon, Turmeric.",
          features: []
        },
        {
          title: "CMom & World Massage Lotion",
          subtitle: "CMom & World Lotion",
          subhead: "For Stretch Marks, 120 ml",
          price: 26,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/40140596_5-mom-world-massage-lotion-for-stretch-marks.jpg",
          description:
            "Mom & World Massage Lotion for Stretch Marks helps to reduce and prevent the appearance of scars/stretch marks by firming and moisturizing your skin with a customized blend of high quality and natural ingredients. This lotion was formulated to deliver intense hydration and provide protection to help smooth rough skin/marks" +
            " and provide your skin with relief. Mom & World Anti Stretch Marks Lotion uses natural & effective ingredients that penetrate deep into your skin and deliver the highest levels of moisture." +
            "This hydrating and nourishing lotion helps to prevent and visibly reduce the appearance of stretch marks and scars. It can be added to any skincare routine and doubles as an all-over body Lotion for continuous" +
            "hydration. Advanced Anti-Stretch Marks formula helps visibly improve skin elasticity and reduce the appearance of stretch marks. Helps prevent the occurrence of future Stretch Marks.",
          composition:
            "Glycerin, Coconut (Cocos Nucifera) Water, Sweet Almond Cold Pressed Oil, Organic Olive 1000, Heptyl Undecylenate (Castor Oil Derived), Organic Shea Butter, Castor Cold Pressed Oil, Kokum Butter, Cocoa Butter, Matrixyl 3000, Sodium Hyaluronate (Hyaluronic Acid), Organic Moroccan Argan Cold Pressed Oil, Hydrolyzed Collagen Protein, Lavender Essential Oil, Tocopheryl Acetate (Vitamin E), Lemon Essential Oil, Gotu Kola Extract, Hazel Seed Oil, Sodium Ascorbyl Phosphate (Vitamin C), Disodium Edta, Lemon Extract, Organic Aloe Vera (Aloe Barbadensis) Gel, Rosemary Essential Oil, Carrot Seed Essential Oil.",
          features: [
            "Advanced anti-stretch marks formula helps visibly improve skin elasticity",
            "Reduce the appearance of stretch marks",
            "Hydrolyzed collagen protein, and hyaluronic acid to promote youthful-looking skin",
            "No Parabens, No Phthalates, and no Petrolatum or SLS"
          ]
        },
        {
          title: "Indulekha Hair Oil",
          subtitle: "Indulekha Oil",
          subhead: "Indulekha Hair Oil - Bhringa, 50 ml",
          price: 26,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/40111426-2_1-indulekha-hair-oil-bhringa.jpg",
          description:
            "Indulekha bringha oil is an ayurvedic proprietary medicine recommended for the regulation" +
            "of hair and scalp conditions like hairfall, dandruff etc. The excellent action of Indulekha" +
            "Bringha oil is due to the actions of its ingredients and the special manufacturing procedure" +
            "of the base oil. During the production of Indulekha Bringha Oil, the Swethakutaja leaves are" +
            " dipped in pure coconut milk oil (prepared by cold process technology). This prolonged blending" +
            "process helps to extract the entire medicinal quality of the leaves and thus makes it an effective" +
            " ingredient of Indulekha Bringha Oil.Active ingredients along with the base oil create an excellent" +
            " combination that is extremely beneficial for hair. SvethakutajaIt has anti-inflammatory and anti-dandruff" +
            " properties. Also known for its antimicrobial properties and hence used for all types of psoriasis (skin disorder)" +
            " and dandruff. Aloe veraAloe vera contains enzymes which repairs dead skin cells on the scalp. It promotes hair growth," +
            "prevents itching on the scalp, reduces dandruff and conditions your hair. It rejuvenates the hair with its own nutrients," +
            "giving it more elasticity and preventing breakage. NeemProvides anti-protozoal, antioxidant, anti-inflammatory" +
            "and antibacterial properties. Neem helps to treat these conditions of hair and cleanse the scalp for healthy hair growth." +
            "BringharajHelps to improve hair growth and colour. Its extracts rejuvenates hair keeping the hair lustrous, " +
            "dark and healthy. It also helps to nurture and condition hair. AmlaRichest source of Vitamin C & antioxidants." +
            "It helps maintain youthful hair color and retards premature graying and supports the strength of the hair follicles." +
            "Virgin Coconut OilVirgin coconut oil is extracted by the cold compression method. It is higher in vitamin content," +
            "antioxidants, minerals, fragrance and even the amount of protein. Features and Benefits: Prevents Hairfall Ayurvedic" +
            "Medicine Helps Grow Hair Selfie Ccomb Dispenses Oil Directly On Scalp No Wastage Of Oil 13 Natural Ingredients No " +
            "Artificial Colour Or Fragrance Added. " +
            "For Beauty tips, tricks & more visit https://bigbasket.blog/",
          composition: "Bringharaj, Svetakutaja and Virgin coconut oil.",
          features: []
        }
      ]
    };
  }
};
</script>
