<template>
  <v-img
    height="100%"
    width="100%"
    fill-height
    fill-width
    src="https://www.eymockup.com/wp-content/uploads/2019/09/Coconut-Spa-Product-Bottle-Mockup.jpg"
  >
    <v-container fluid fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex shrink xs12 sm12 md12 order-md1 order-sm1>
          <v-card color="transparent" ma-0 pa-0 flat>
            <v-card-text>
              <v-img
                height="100%"
                width="100%"
                fill-height
                fill-width
                src="https://www.eymockup.com/wp-content/uploads/2019/09/Coconut-Spa-Product-Bottle-Mockup.jpg"
              ></v-img>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm12 md12 order-md2 order-sm2>
          <v-row>
            <v-col cols="12" md="3" sm="12" wrap v-for="(product, index ) in products" :key="index">
              <bottle-component :product="product"></bottle-component>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
    <!--<v-container fluid>
      <v-subheader class="display-1 black--text font-weight-black">Products</v-subheader>
      <v-row>
        <v-col cols="12" md="3" sm="12" v-for="(product, index ) in products" :key="index">
          <bottle-component :product="product"></bottle-component>
        </v-col>
      </v-row>
    </v-container>-->
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
          title: "Oriental Botanics",
          subtitle: "Body Massage Oil - Jasmine & Nargis, 200 ml",
          price: 214,
          image:
            "https://www.bigbasket.com/media/uploads/p/xxl/40140526_2-oriental-botanics-body-massage-oil-jasmine-nargis.jpg",
          description:
            "Introducing the Oriental Botanics Bath and Body Oil - A botanical delicately scented Body Oil making it the best oil for the skin. It is a light natural oil that penetrates your skin cells to moisturise and provides a soothing topical barrier without clogging pores which leaving skin feeling hydrated and enriched. This product is made from Almond, Jojoba, Grapeseed, Coconut, Avocado oils providing a comfortable and non-greasy feeling. When you have a stressful day and fatigued mind, the fresh and reviving fragrance of Jasmine and Nargis will freshen up and soothe your body and mind.",
          composition:
            "Rice Bran (Oryza Sativa) Oil 20%, Sweet Almond (Prunus dulcis) Cold Pressed Oil 20%, Virgin Golden Jojoba (Simmondsia chimesis) Cold Pressed Oil 10%, Grapeseed (Vitis vinifera) Cold Pressed Oil 15%, Organic Virgin Coconut (Cocus nucifera) Cold Pressed Oil 15%, Avocado (Persea americana) Cold Pressed Oil 10%, Safflower Seed (Carthamus tinctorius) Cold Pressed Oil 5%, Fragrance Blend (Derived From Jasmine and Nargis Essential Oil)",
          features: [
            "With a deeply soothing and calming nature, it produces a feeling of confidence, optimism and euphoria, while soothing and nourishing skin",
            "100% pure and safe premium grade blended oil",
            "No additives, mineral oil, base oil, SLS, paraben or silicon are added"
          ]
        },
        {
          title: "Aloe Veda",
          subtitle: " Body Massage Oil - Sports Massage, 200 ml",
          price: 199,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/40020321_5-aloe-veda-body-massage-oil-sports-massage.jpg",
          description:
            "This Distil Sports Massage Body Massage Oil is specially formulated with a healing blend of" +
            "pure Essential Oils in a carrier oil base of premium Sweet Almond Oil. Distil Oils are gentle, light on the" +
            " skin and easily absorbed by the body due to its ideal viscosity. It contains beta-carotene, gamma-oryzanol," +
            "tocotrienols (vitamin E) and vitamins D, C. The rich presence of essential fatty acids like palmitic, stearic," +
            " and linoleic acid moisturizes the skin, balances both dry and oily patches, reduce inflammation, soothes discomfort " +
            "and is a wonderful oil for itchy alligator skin. Regular massage with Distil Massage Oils, promote the restoration of" +
            "collagen at the cellular level, makes the skin firm, smooth and youthful in appearance. The special blend of Essential" +
            "Oils is specially formulated for a massage after strenuous physical activity and speeds healing of aching muscles," +
            "joints and ligaments",
          composition:
            "Vegetable Oils, Sweet Almond Oil, Apricot Kernel Oil, Sports Massage Essential Oil Blend.",
          features: [
            "100% pure and safe premium grade blended oil",
            "No additives, mineral oil, base oil, SLS, paraben or silicon are added"
          ]
        },
        {
          title: "Ayusya Massage Oil",
          subtitle: "Ayusya Massage Oil, 200 ml",
          price: 114,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/40108119_1-ayusya-massage-oil.jpg",
          description:
            "Calms Nerves, Stress And Makes You Relax, Relieves Fatigue, Aches," +
            "Pain & Increases Circulation, Keeps The Joints Flexible & Nourishes," +
            " The Whole Body, Promotes Deeper And Better Sleep, Improves Energy And" +
            "Mental Alertness, Clean And Glowing Skin Naturally, . For Beauty tips, tricks & more visit https://bigbasket.blog/",
          composition:
            "Dashmool Bharad, Ashwagandha, Shatavari, Tagar, Nirgundi, , Til Tel.",
          features: [
            "100% pure and safe premium grade blended oil",
            "No additives, mineral oil, base oil, SLS, paraben or silicon are added"
          ]
        },
        {
          title: "Soulflower Reflexology Aroma",
          subtitle: "Soulflower Reflexology Aroma Massage Oil, 90 ml",
          price: 102,
          image:
            "https://www.bigbasket.com/media/uploads/p/l/30006528-2_3-soulflower-tea-tree-foot-reflexology-aroma-massage-oil.jpg",
          description:
            "Soulflower Tea Tree Foot Reflexology Aroma Massage Oil is a blend of light oils that" +
            " get easily absorbed by your skin. This perfect formulation relaxes and refreshes tired" +
            " feet, softens rough skin and corns." +
            " Reflexology can help you by increasing blood flow and decreasing stress.",
          composition: "Tea Tree",
          features: []
        },
        {
          title: "StBotanica Himalyan Lavender",
          subtitle: " Pure Aroma Essential Oil, 15 ml",
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
          subtitle: "Chandrika Purifying Neem Face Wash, 50 g",
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
          subtitle: "For Stretch Marks, 120 ml",
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
          subtitle: "Indulekha Hair Oil - Bhringa, 50 ml",
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