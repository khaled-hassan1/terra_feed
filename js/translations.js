// Translation system for TerraFeed website
const translations = {
  en: {
    // Name Site
    site_title: "TerraFeed - High-Quality Natural Seasoning",

    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_products: "Products",
    nav_contact: "Contact",
    nav_pages: "Pages",
    nav_spices: "Our Spices",
    nav_recipes: "Recipes",
    nav_blog: "Blog",
    nav_wholesale: "Wholesale",

    // Hero Section
    hero_title: "Premium Spices from Nature's Garden",
    hero_subtitle:
      "Discover the finest selection of organic spices and natural ingredients sourced directly from trusted farmers worldwide.",
    hero_cta_primary: "Explore Products",
    hero_cta_secondary: "Get In Touch",

    // Features
    feature_organic_title: "100% Organic",
    feature_organic_desc:
      "Certified organic spices without any harmful chemicals or pesticides.",
    feature_global_title: "Global Sourcing",
    feature_global_desc:
      "Direct partnerships with farmers from around the world for authentic flavors.",
    feature_quality_title: "Premium Quality",
    feature_quality_desc:
      "Rigorous quality control ensures only the finest spices reach your kitchen.",

    // About Section
    about_title: "About TerraFeed",
    about_desc1:
      "TerraFeed was born from a passion for authentic flavors and sustainable agriculture. We believe that the best spices come from the earth, nurtured by farmers who understand the delicate balance between tradition and innovation. Our humble start began more than 50 years ago, founded by a visionary who aimed to bring the finest spices to every home.",
    about_desc2:
      "Our journey began with a simple mission: to connect kitchens around the world with the finest spices while supporting farming communities that preserve ancient cultivation methods. From expanding from a small garage to over 500,000 square-foot of Distribution and Production Facility, TerraFeed is now a Global and Nationwide Company that is a leader in the spice category. While sourcing for raw material is around the globe, Corporate Headquarters, Production, and Distribution Facilities are all located in South Florida.",
    about_desc3:
      "Currently, we offer a wide variety of products for every need in every size, from take-out packets to pails and industrial sizes. Our categories include Spices & Herbs, Seasoning Blends, Olive Oils, Beverages, Hot Sauces, Teas, Marinades & Dressings, Organic & Healthy items, Side Dishes, and Soup Bases. We are committed to quality and sustainability in every product we deliver.",
    
    // NEW About page content
    about_page_subheader: "Discover our story, mission, and commitment to premium quality spices",
    our_history_title: "Our History",
    our_history_desc: "Over 50 years of dedication to bringing authentic flavors from around the world to your kitchen.",
    our_mission_title: "Our Mission",
    our_mission_desc: "To connect kitchens worldwide with premium spices while supporting sustainable farming communities.",
    our_vision_title: "Our Vision",
    our_vision_desc: "To be the global leader in premium spices, setting standards for quality and sustainability.",
    our_values_title: "Our Values",
    value_sustainability_title: "Sustainability",
    value_sustainability_desc: "We are committed to environmentally responsible sourcing and supporting sustainable farming practices.",
    value_quality_title: "Quality Excellence",
    value_quality_desc: "Every product undergoes rigorous quality control to ensure only the finest spices reach our customers.",
    value_partnership_title: "Fair Partnerships",
    value_partnership_desc: "We build lasting relationships with farmers and suppliers based on fairness and mutual respect.",
    value_community_title: "Community Focus",
    value_community_desc: "We support the communities where we source our spices, contributing to their growth and prosperity.",

    // Products Section (Standardized)
    view_all_products: "View All Products",
    products_title: "Our Premium Collection",
    products_subtitle:
      "Discover our carefully curated selection of premium spices",
    product_exotic_title: "Exotic Spices",
    product_exotic_desc:
      "Rare and exotic spices from remote regions, perfect for adventurous cooking.",
    product_mediterranean_title: "Mediterranean Herbs",
    product_mediterranean_desc:
      "Sun-dried herbs from the Mediterranean coast, bringing authentic flavors to your dishes.",
    product_asian_title: "Asian Spice Blends",
    product_asian_desc:
      "Traditional spice blends from across Asia, crafted using ancient recipes.",

    // Individual Spices (these keys were not used in index.html, so they can be removed or restructured)
    curry_title: "Curry Powder",
    curry_description:
      "A versatile blend of aromatic spices like turmeric, coriander, and cumin. It's the cornerstone of many Indian, Thai, and Caribbean dishes, providing a warm, complex flavor profile.",
    seafood_seasoning_title: "Seafood Seasoning",
    seafood_seasoning_description:
      "A zesty, peppery blend typically featuring celery seed, paprika, salt, and red pepper. It adds a signature bold flavor to shrimp, crab, fish, and other seafood.",
    cumin_title: "Cumin",
    cumin_description:
      "A warm, earthy spice with a slightly bitter, peppery taste. Cumin is a key ingredient in Mexican, Middle Eastern, and Indian cuisines, essential for chili and taco blends.",
    paprika_title: "Paprika",
    paprika_description:
      "Made from ground red peppers, paprika ranges from sweet and mild to hot and smoky. It adds vibrant color and a gentle, sweet flavor to roasted meats, stews, and sauces.",
    basil_origano_title: "Basil & Oregano",
    basil_origano_description:
      "A classic Mediterranean blend combining the sweet, peppery notes of basil with the robust, earthy flavor of oregano. Perfect for pasta sauces, pizza, and roasted vegetables.",
    sazon_title: "Sazón",
    sazon_description:
      "A vibrant Latin American seasoning blend with a savory, umami-rich flavor. It typically contains salt, garlic, cumin, and coriander, giving a distinctive savory taste and a yellow-orange hue to rice, stews, and meats.",
    poultry_seasoning_title: "Poultry Seasoning",
    poultry_seasoning_description:
      "An aromatic blend of herbs like sage, thyme, rosemary, and marjoram. It enhances the flavor of chicken, turkey, and other poultry dishes with classic, savory notes.",
    garlic_paprika_onion_title: "Garlic, Paprika & Onion Blend",
    garlic_paprika_onion_description:
      "A foundational, all-purpose seasoning that combines the pungent warmth of garlic and onion with the sweet, mild flavor of paprika. Ideal for seasoning vegetables, meats, and soups.",
    sazon_paprika_garlic_title: "Sazón, Paprika & Minced Garlic Blend",
    sazon_paprika_garlic_description:
      "A powerful, savory blend that combines the rich flavor of Sazón with the vibrant color and sweetness of paprika and the aromatic punch of minced garlic. A go-to for many Spanish and Latin dishes.",
    orange_pepper_title: "Orange Pepper",
    orange_pepper_description:
      "A tangy and mildly spicy blend featuring black pepper, orange peel, and other spices. It provides a bright, citrusy zing to chicken, fish, and marinades.",
    steak_canadian_blend_title: "Canadian Steak Seasoning",
    steak_canadian_blend_description:
      "A bold, robust blend of coarse spices, typically featuring black pepper, dill seed, coriander, and garlic. It creates a savory, peppery crust on steaks and burgers.",
    cayenne_title: "Cayenne Pepper",
    cayenne_description:
      "A fine ground powder from dried red chili peppers. It delivers a clean, sharp heat that can be added to any dish to increase its spiciness.",
    cinnamon_title: "Cinnamon",
    cinnamon_description:
      "A warm, sweet spice with a fragrant aroma. It's a staple in baking and desserts but also adds depth to savory dishes like Moroccan stews and Middle Eastern rice.",
    garlic_title: "Garlic Powder",
    garlic_description:
      "The dried, ground form of garlic cloves. It offers a pungent, savory flavor that can be used to season nearly any savory dish, from vegetables to sauces and rubs.",
    chili_title: "Chili Powder",
    chili_description:
      "A vibrant blend of ground chili peppers with other spices like cumin, oregano, and garlic. It's the key ingredient for making classic chili con carne and a great rub for meat.",
    salt_title: "Salt",
    salt_description:
      "An essential mineral used to enhance and balance flavors. It is a fundamental seasoning in all cuisines worldwide.",

    // Contact Section
    contact_title: "Get In Touch",
    contact_subtitle: "Ready to elevate your culinary experience?",
    contact_address_title: "Our Location",
    contact_address: "123 Spice Street<br>Flavor District, FD 12345",
    contact_phone_title: "Call Us",
    contact_email_title: "Email Us",
    contact_hero_subtitle: "Ready to elevate your culinary experience? We'd love to hear from you.",


    // Form
    form_name: "Name",
    form_email: "Email",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send Message",

    // CTA Section
    ready_to_explore: "Ready to Explore Our Premium Spices?",
    discover_collection: "Discover our carefully curated collection of premium spices from around the world.",

    // Footer
    footer_copyright: "© 2025 TerraFeed. All rights reserved.",

    // Google Maps
    view_map: "View on Map",
    find_us: "Location",

    // Spices Page
    spices_page_title: "Our Premium Spices",
    spices_page_subtitle:
      "Discover the world of flavors with our carefully selected spices",
    filter_all: "All Spices",
    filter_whole: "Whole Spices",
    filter_ground: "Ground Spices",
    filter_blends: "Spice Blends",
    filter_herbs: "Herbs",

    // Individual Spices
    spice_cardamom_title: "Green Cardamom",
    spice_cardamom_origin: "Origin: India, Guatemala",
    spice_cardamom_desc:
      'Known as the "Queen of Spices," cardamom offers a sweet, floral aroma with hints of citrus and mint.',
    spice_uses: "Uses:",
    spice_benefits: "Health Benefits:",
    spice_ingredients: "Ingredients:",
    learn_more: "Learn More",

    // Spice Care Tips
    spice_care_title: "Spice Care & Storage Tips",
    spice_care_subtitle: "Keep your spices fresh and flavorful",
    tip_temperature_title: "Temperature Control",
    tip_temperature_desc:
      "Store spices in a cool, dry place away from heat sources like stoves and direct sunlight.",
    tip_container_title: "Proper Containers",
    tip_container_desc:
      "Use airtight containers to prevent moisture and maintain freshness. Glass jars work best.",
    tip_freshness_title: "Check Freshness",
    tip_freshness_desc:
      "Replace ground spices every 2-3 years and whole spices every 3-4 years for best flavor.",

    // Recipes Page
    recipes_page_title: "Spice-Inspired Recipes",
    recipes_page_subtitle:
      "Discover delicious recipes using our premium spices",
    filter_all_recipes: "All Recipes",
    filter_appetizers: "Appetizers",
    filter_main: "Main Dishes",
    filter_desserts: "Desserts",
    filter_beverages: "Beverages",
    featured_spices: "Featured Spices:",
    view_recipe: "View Recipe",
    ingredients: "Ingredients:",
    instructions: "Instructions:",

    // Blog Page
    blog_page_title: "Spice Knowledge Hub",
    blog_page_subtitle:
      "Discover the world of spices through our expert insights",
    featured: "Featured",
    read_more: "Read More",
    category_health: "Health",
    category_cooking: "Cooking",
    category_sustainability: "Sustainability",
    category_tips: "Tips",
    category_culture: "Culture",
    category_seasonal: "Seasonal",
    previous: "Previous",
    next: "Next",
    newsletter_title: "Stay Updated",
    newsletter_desc:
      "Subscribe to our newsletter for the latest spice tips, recipes, and industry insights.",
    newsletter_placeholder: "Enter your email",
    subscribe: "Subscribe",

    // Wholesale Page
    wholesale_page_title: "Wholesale Solutions",
    wholesale_page_subtitle:
      "Premium spices for restaurants, retailers, and food manufacturers",
    wholesale_benefits_title: "Why Choose TerraFeed Wholesale?",
    wholesale_benefits_subtitle:
      "Trusted by businesses worldwide for quality and reliability",
    benefit_delivery_title: "Fast Delivery",
    benefit_delivery_desc:
      "Reliable supply chain with quick turnaround times to keep your business running smoothly.",
    benefit_pricing_title: "Competitive Pricing",
    benefit_pricing_desc:
      "Volume discounts and flexible pricing structures to maximize your profit margins.",
    benefit_quality_title: "Quality Assurance",
    benefit_quality_desc:
      "Rigorous testing and certification processes ensure consistent, premium quality products.",
    benefit_support_title: "Dedicated Support",
    benefit_support_desc:
      "Personal account managers and 24/7 customer support for all your business needs.",

    // Wholesale Categories
    wholesale_categories_title: "Our Wholesale Categories",
    wholesale_categories_subtitle:
      "Comprehensive spice solutions for every business need",
    category_restaurant_title: "Restaurant Solutions",
    category_retail_title: "Retail Solutions",
    category_manufacturing_title: "Manufacturing Solutions",
    get_quote: "Get Quote",

    // Pricing
    pricing_title: "Wholesale Pricing Tiers",
    pricing_subtitle: "Flexible pricing based on your volume requirements",
    tier_starter_title: "Starter",
    tier_professional_title: "Professional",
    tier_enterprise_title: "Enterprise",
    discount_off: "off retail prices",
    contact_sales: "Contact Sales",

    // Wholesale Form
    wholesale_contact_title: "Get Started with Wholesale",
    wholesale_contact_subtitle:
      "Tell us about your business needs and we'll create a custom solution",
    form_company: "Company Name",
    form_business_type: "Business Type",
    form_contact_name: "Contact Name",
    form_phone: "Phone",
    form_monthly_volume: "Expected Monthly Volume",
    form_spices_interest: "Spices of Interest",
    form_additional_info: "Additional Information",
    submit_inquiry: "Submit Inquiry",
    select_business_type: "Select Business Type",
    business_restaurant: "Restaurant/Food Service",
    business_retail: "Retail Store",
    business_manufacturing: "Food Manufacturing",
    business_distributor: "Distributor",
    business_other: "Other",
    select_volume: "Select Volume",
  },

  ar: {
    // Name Site
    site_title: "TerraFeed - توابل طبيعية عالية الجودة",

    // Navigation
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_products: "المنتجات",
    nav_contact: "تواصل معنا",
    nav_pages: "الصفحات",
    nav_spices: "توابلنا",
    nav_recipes: "الوصفات",
    nav_blog: "المدونة",
    nav_wholesale: "الجملة",

    // Hero Section
    hero_title: "توابل فاخرة من حديقة الطبيعة",
    hero_subtitle:
      "اكتشف أجود مجموعة من التوابل العضوية والمكونات الطبيعية المصدرة مباشرة من المزارعين الموثوقين حول العالم.",
    hero_cta_primary: "استكشف المنتجات",
    hero_cta_secondary: "تواصل معنا",

    // Features
    feature_organic_title: "١٠٠٪ عضوي",
    feature_organic_desc:
      "توابل عضوية معتمدة بدون أي مواد كيميائية ضارة أو مبيدات حشرية.",
    feature_global_title: "مصادر عالمية",
    feature_global_desc:
      "شراكات مباشرة مع المزارعين من جميع أنحاء العالم للحصول على نكهات أصيلة.",
    feature_quality_title: "جودة فاخرة",
    feature_quality_desc: "مراقبة جودة صارمة تضمن وصول أجود التوابل إلى مطبخك.",

    // About Section
    about_title: "عن تيرافيد",
    about_desc1:
      "ولدت تيرافيد من شغف بالنكهات الأصيلة والزراعة المستدامة. نحن نؤمن بأن أفضل التوابل تأتي من الأرض، ترعاها الأيادي الخبيرة للمزارعين الذين يفهمون التوازن الدقيق بين التقاليد والابتكار. بدأت بدايتنا المتواضعة منذ أكثر من 50 عامًا، بتأسيس من قبل رؤيوي يهدف إلى جلب أجود التوابل إلى كل منزل.",
    about_desc2:
      "بدأت رحلتنا بمهمة بسيطة: ربط المطابخ حول العالم بأجود التوابل مع دعم المجتمعات الزراعية التي تحافظ على أساليب الزراعة القديمة. من التوسع من مرآب صغير إلى منشأة توزيع وإنتاج تزيد مساحتها عن 500,000 قدم مربع، أصبحت تيرافيد الآن شركة عالمية ورائدة على مستوى البلاد في فئة التوابل. بينما يتم توريد المواد الخام من جميع أنحاء العالم، تقع المقرات الرئيسية للشركة ومرافق الإنتاج والتوزيع كلها في جنوب فلوريدا.",
    about_desc3:
      "نقدم حاليًا مجموعة واسعة من المنتجات لتلبية كل الاحتياجات وبجميع الأحجام، من عبوات الوجبات الجاهزة إلى الدلاء والأحجام الصناعية. تشمل فئات منتجاتنا التوابل والأعشاب، خلطات التوابل، زيوت الزيتون، المشروبات، الصلصات الحارة، الشاي، التتبيلات والصلصات، المنتجات العضوية والصحية، الأطباق الجانبية، وقواعد الحساء. نحن ملتزمون بالجودة والاستدامة في كل منتج نقدمه.",
    
    // NEW About page content
    about_page_subheader: "اكتشف قصتنا، مهمتنا، والتزامنا بجودة التوابل الفاخرة",
    our_history_title: "تاريخنا",
    our_history_desc: "أكثر من 50 عامًا من التفاني في جلب النكهات الأصيلة من جميع أنحاء العالم إلى مطبخك.",
    our_mission_title: "مهمتنا",
    our_mission_desc: "ربط المطابخ حول العالم بالتوابل الفاخرة مع دعم المجتمعات الزراعية المستدامة.",
    our_vision_title: "رؤيتنا",
    our_vision_desc: "أن نكون الشركة الرائدة عالميًا في التوابل الفاخرة، وأن نضع معايير للجودة والاستدامة.",
    our_values_title: "قيمنا",
    value_sustainability_title: "الاستدامة",
    value_sustainability_desc: "نحن ملتزمون بالمصادر المسؤولة بيئيًا ودعم ممارسات الزراعة المستدامة.",
    value_quality_title: "تميز الجودة",
    value_quality_desc: "يخضع كل منتج لمراقبة جودة صارمة لضمان وصول أجود التوابل إلى عملائنا.",
    value_partnership_title: "شراكات عادلة",
    value_partnership_desc: "نبني علاقات دائمة مع المزارعين والموردين على أساس العدالة والاحترام المتبادل.",
    value_community_title: "التركيز على المجتمع",
    value_community_desc: "ندعم المجتمعات التي نستورد منها توابلنا، مما يساهم في نموها وازدهارها.",

    // Products Section (Standardized)
    view_all_products: "عرض جميع المنتجات",
    products_title: "مجموعتنا الفاخرة",
    products_subtitle: "اكتشف مجموعتنا المختارة بعناية من التوابل الفاخرة",
    product_exotic_title: "توابل غريبة",
    product_exotic_desc:
      "توابل نادرة وغريبة من مناطق نائية، مثالية للطهي المغامر.",
    product_mediterranean_title: "أعشاب متوسطية",
    product_mediterranean_desc:
      "أعشاب مجففة بالشمس من سواحل البحر الأبيض المتوسط، تجلب نكهات أصيلة لأطباقك.",
    product_asian_title: "خلطات توابل آسيوية",
    product_asian_desc:
      "خلطات توابل تقليدية من جميع أنحاء آسيا، مصنوعة باستخدام وصفات قديمة.",

    // Individual Spices (unreferenced in HTML, can be removed)
    curry_title: "مسحوق الكاري",
    curry_description:
      "مزيج متعدد الاستخدامات من التوابل العطرية مثل الكركم والكزبرة والكمون. إنه حجر الزاوية في العديد من الأطباق الهندية والتايلاندية والكاريبية، مما يوفر نكهة دافئة ومعقدة.",
    seafood_seasoning_title: "بهارات المأكولات البحرية",
    seafood_seasoning_description:
      "مزيج حار وحاد يتميز عادة ببذور الكرفس والبابريكا والملح والفلفل الأحمر. يضيف نكهة جريئة مميزة للجمبري وسرطان البحر والأسماك والمأكولات البحرية الأخرى.",
    cumin_title: "الكمون",
    cumin_description:
      "توابل ترابية دافئة ذات طعم مرير وفلفلي قليلاً. الكمون مكون رئيسي في المطابخ المكسيكية والشرق أوسطية والهندية، وهو ضروري لخلطات الفلفل الحار والتاكو.",
    paprika_title: "البابريكا",
    paprika_description:
      "مصنوعة من الفلفل الأحمر المطحون، تتراوح نكهة البابريكا من الحلو والخفيف إلى الحار والمدخن. يضيف لونًا نابضًا بالحياة ونكهة حلوة ولطيفة إلى اللحوم المشوية واليخنات والصلصات.",
    basil_origano_title: "الريحان والأوريجانو",
    basil_origano_description:
      "مزيج متوسطي كلاسيكي يجمع بين النكهات الحلوة والفلفلية للريحان مع النكهة القوية والترابية للأوريجانو. مثالي لصلصات المعكرونة والبيتزا والخضروات المشوية.",
    sazon_title: "سازون",
    sazon_description:
      "مزيج توابل لاتيني أمريكي نابض بالحياة ذو نكهة لذيذة وغنية. يحتوي عادة على الملح والثوم والكمون والكزبرة، مما يمنح طعمًا مالحًا مميزًا ولونًا أصفر مائلًا للبرتقالي للأرز واليخنات واللحوم.",
    poultry_seasoning_title: "بهارات الدواجن",
    poultry_seasoning_description:
      "مزيج عطري من الأعشاب مثل المريمية والزعتر وإكليل الجبل. يعزز نكهة الدجاج والديك الرومي وغيرها من أطباق الدواجن بنكهات كلاسيكية ومالحة.",
    garlic_paprika_onion_title: "مزيج الثوم والبابريكا والبصل",
    garlic_paprika_onion_description:
      "توابل أساسية لجميع الأغراض تجمع بين الدفء اللاذع للثوم والبصل مع النكهة الحلوة والخفيفة للبابريكا. مثالية لتتبيل الخضروات واللحوم والشوربات.",
    sazon_paprika_garlic_title: "مزيج السازون والبابريكا والثوم المفروم",
    sazon_paprika_garlic_description:
      "مزيج قوي ولذيذ يجمع بين النكهة الغنية للـ Sazón مع اللون النابض بالحياة والحلاوة للبابريكا والنكهة العطرية للثوم المفروم. مثالي للعديد من الأطباق الإسبانية واللاتينية.",
    orange_pepper_title: "فلفل البرتقال",
    orange_pepper_description:
      "مزيج حامض وحار خفيف يحتوي على الفلفل الأسود وقشر البرتقال وتوابل أخرى. يمنح نكهة حمضية منعشة للدجاج والأسماك والتتبيلات.",
    steak_canadian_blend_title: "بهارات الستيك الكندية",
    steak_canadian_blend_description:
      "مزيج جريء وقوي من التوابل الخشنة، يتميز عادة بالفلفل الأسود وبذور الشبت والكزبرة والثوم. يخلق قشرة لذيذة ومتبلة على شرائح اللحم والبرغر.",
    cayenne_title: "فلفل الكايين",
    cayenne_description:
      "مسحوق ناعم مطحون من فلفل الكايين الأحمر المجفف. يضيف حرارة نظيفة وحادة يمكن إضافتها إلى أي طبق لزيادة مستوى الحرارة.",
    cinnamon_title: "القرفة",
    cinnamon_description:
      "توابل دافئة وحلوة ذات رائحة عطرة. إنها عنصر أساسي في الخبز والحلويات ولكنها تضيف أيضًا عمقًا إلى الأطباق اللذيذة مثل اليخنات المغربية والأرز الشرقي.",
    garlic_title: "مسحوق الثوم",
    garlic_description:
      "الشكل المجفف والمطحون من فصوص الثوم. يقدم نكهة لاذعة ولذيذة يمكن استخدامها لتتبيل أي طبق مالح تقريبًا، من الخضروات إلى الصلصات والتوابل الجافة.",
    chili_title: "مسحوق الفلفل الحار (التشيلي)",
    chili_description:
      "مزيج حيوي من الفلفل الحار المطحون مع توابل أخرى مثل الكمون والأوريجانو والثوم. إنه المكون الأساسي لصنع طبق الفلفل الحار الكلاسيكي وهو توابل رائعة للحوم.",
    salt_title: "الملح",
    salt_description:
      "معدن أساسي يستخدم لتعزيز وتوازن النكهات. إنه توابل أساسية في جميع المطابخ حول العالم.",
    // Contact Section
    contact_title: "تواصل معنا",
    contact_subtitle: "هل أنت مستعد لرفع مستوى تجربتك في الطهي؟",
    contact_address_title: "موقعنا",
    contact_address: "١٢٣ شارع التوابل<br>منطقة النكهات، ن ن ١٢٣٤٥",
    contact_phone_title: "اتصل بنا",
    contact_email_title: "راسلنا",
    contact_hero_subtitle: "على استعداد لرفع تجربتك في الطهي؟ يسعدنا أن نسمع منك.",


    // Form
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_subject: "الموضوع",
    form_message: "الرسالة",
    form_submit: "إرسال الرسالة",

    // CTA Section
    ready_to_explore: "هل أنت مستعد لاستكشاف توابلنا الفاخرة؟",
    discover_collection: "اكتشف مجموعتنا المختارة بعناية من التوابل الفاخرة من جميع أنحاء العالم.",

    // Footer
    footer_copyright: "© ٢٠٢٥ تيرافيد. جميع الحقوق محفوظة.",

    // Google Maps
    view_map: "عرض على الخريطة",
    find_us: "موقعنا",

    // Spices Page
    spices_page_title: "توابلنا الفاخرة",
    spices_page_subtitle: "اكتشف عالم النكهات مع توابلنا المختارة بعناية",
    filter_all: "جميع التوابل",
    filter_whole: "التوابل الكاملة",
    filter_ground: "التوابل المطحونة",
    filter_blends: "خلطات التوابل",
    filter_herbs: "الأعشاب",

    // Individual Spices
    spice_cardamom_title: "الهيل الأخضر",
    spice_cardamom_origin: "المنشأ: الهند، غواتيمالا",
    spice_cardamom_desc:
      'يُعرف باسم "ملكة التوابل"، يقدم الهيل رائحة حلوة وزهرية مع لمحات من الحمضيات والنعناع.',
    spice_uses: "الاستخدامات:",
    spice_benefits: "الفوائد الصحية:",
    spice_ingredients: "المكونات:",
    learn_more: "اعرف المزيد",

    // Spice Care Tips
    spice_care_title: "نصائح العناية بالتوابل والتخزين",
    spice_care_subtitle: "حافظ على توابلك طازجة ولذيذة",
    tip_temperature_title: "التحكم في درجة الحرارة",
    tip_temperature_desc:
      "احفظ التوابل في مكان بارد وجاف بعيداً عن مصادر الحرارة مثل المواقد وأشعة الشمس المباشرة.",
    tip_container_title: "الحاويات المناسبة",
    tip_container_desc:
      "استخدم حاويات محكمة الإغلاق لمنع الرطوبة والحفاظ على النضارة. البرطمانات الزجاجية هي الأفضل.",
    tip_freshness_title: "فحص النضارة",
    tip_freshness_desc:
      "استبدل التوابل المطحونة كل ٢-٣ سنوات والتوابل الكاملة كل ٣-٤ سنوات للحصول على أفضل نكهة.",

    // Recipes Page
    recipes_page_title: "وصفات مستوحاة من التوابل",
    recipes_page_subtitle: "اكتشف وصفات لذيذة باستخدام توابلنا الفاخرة",
    filter_all_recipes: "جميع الوصفات",
    filter_appetizers: "المقبلات",
    filter_main: "الأطباق الرئيسية",
    filter_desserts: "الحلويات",
    filter_beverages: "المشروبات",
    featured_spices: "التوابل المميزة:",
    view_recipe: "عرض الوصفة",
    ingredients: "المكونات:",
    instructions: "التعليمات:",

    // Blog Page
    blog_page_title: "مركز معرفة التوابل",
    blog_page_subtitle: "اكتشف عالم التوابل من خلال رؤى خبرائنا",
    featured: "مميز",
    read_more: "اقرأ المزيد",
    category_health: "الصحة",
    category_cooking: "الطبخ",
    category_sustainability: "الاستدامة",
    category_tips: "نصائح",
    category_culture: "الثقافة",
    category_seasonal: "موسمي",
    previous: "السابق",
    next: "التالي",
    newsletter_title: "ابق على اطلاع",
    newsletter_desc:
      "اشترك في نشرتنا الإخبارية للحصول على أحدث نصائح التوابل والوصفات ورؤى الصناعة.",
    newsletter_placeholder: "أدخل بريدك الإلكتروني",
    subscribe: "اشترك",

    // Wholesale Page
    wholesale_page_title: "حلول الجملة",
    wholesale_page_subtitle: "توابل فاخرة للمطاعم وتجار التجزئة ومصنعي الأغذية",
    wholesale_benefits_title: "لماذا تختار جملة تيرافيد؟",
    wholesale_benefits_subtitle:
      "موثوق به من قبل الشركات في جميع أنحاء العالم للجودة والموثوقية",
    benefit_delivery_title: "التسليم السريع",
    benefit_delivery_desc:
      "سلسلة توريد موثوقة مع أوقات تسليم سريعة للحفاظ على سير عملك بسلاسة.",
    benefit_pricing_title: "أسعار تنافسية",
    benefit_pricing_desc:
      "خصومات الكمية وهياكل التسعير المرنة لزيادة هوامش ربحك.",
    benefit_quality_title: "ضمان الجودة",
    benefit_quality_desc:
      "عمليات اختبار وشهادات صارمة تضمن منتجات عالية الجودة ومتسقة.",
    benefit_support_title: "دعم مخصص",
    benefit_support_desc:
      "مديرو حسابات شخصيون ودعم عملاء على مدار الساعة لجميع احتياجات عملك.",

    // Wholesale Categories
    wholesale_categories_title: "فئات الجملة لدينا",
    wholesale_categories_subtitle: "حلول توابل شاملة لكل احتياجات العمل",
    category_restaurant_title: "حلول المطاعم",
    category_retail_title: "حلول التجزئة",
    category_manufacturing_title: "حلول التصنيع",
    get_quote: "احصل على عرض سعر",

    // Pricing
    pricing_title: "مستويات أسعار الجملة",
    pricing_subtitle: "تسعير مرن بناءً على متطلبات الكمية الخاصة بك",
    tier_starter_title: "المبتدئ",
    tier_professional_title: "المحترف",
    tier_enterprise_title: "المؤسسة",
    discount_off: "خصم من أسعار التجزئة",
    contact_sales: "اتصل بالمبيعات",

    // Wholesale Form
    wholesale_contact_title: "ابدأ مع الجملة",
    wholesale_contact_subtitle: "أخبرنا عن احتياجات عملك وسننشئ حلاً مخصصاً",
    form_company: "اسم الشركة",
    form_business_type: "نوع العمل",
    form_contact_name: "اسم جهة الاتصال",
    form_phone: "الهاتف",
    form_monthly_volume: "الحجم الشهري المتوقع",
    form_spices_interest: "التوابل المهتم بها",
    form_additional_info: "معلومات إضافية",
    submit_inquiry: "إرسال الاستفسار",
    select_business_type: "اختر نوع العمل",
    business_restaurant: "مطعم/خدمة طعام",
    business_retail: "متجر تجزئة",
    business_manufacturing: "تصنيع الأغذية",
    business_distributor: "موزع",
    business_other: "أخرى",
    select_volume: "اختر الحجم",
  },
};

// Function to change language
function changeLanguage(lang) {
  // Store selected language
  localStorage.setItem("selectedLanguage", lang);

  // Update HTML lang and dir attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update all translatable elements
  const translatableElements = document.querySelectorAll("[data-translate]");

  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === "INPUT" && element.type === "submit") {
        element.value = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });

  // Update active language button
  document.querySelectorAll(".language-switcher .btn").forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline-primary");
    if (
      (lang === "en" && btn.textContent.trim() === "EN") ||
      (lang === "ar" && btn.textContent.trim() === "العربية")
    ) {
      btn.classList.remove("btn-outline-primary");
      btn.classList.add("btn-primary");
    }
  });

  // Update form placeholders if needed
  updateFormPlaceholders(lang);
}

function updateFormPlaceholders(lang) {
  const placeholders = {
    en: {
      name: "Your Name",
      email: "your.email@example.com",
      subject: "Subject",
      message: "Your message here...",
    },
    ar: {
      name: "اسمك",
      email: "your.email@example.com",
      subject: "الموضوع",
      message: "رسالتك هنا...",
    },
  };

  if (placeholders[lang]) {
    Object.keys(placeholders[lang]).forEach((key) => {
      const element = document.getElementById(key);
      if (element) {
        element.placeholder = placeholders[lang][key];
      }
    });
  }
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

  // Set initial language without triggering event
  changeLanguage(savedLanguage);
});
