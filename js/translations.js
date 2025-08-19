// Translation system for TerraFeed website
const translations = {
    en: {
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
        hero_subtitle: "Discover the finest selection of organic spices and natural ingredients sourced directly from trusted farmers worldwide.",
        hero_cta_primary: "Explore Products",
        hero_cta_secondary: "Get In Touch",
        
        // Features
        feature_organic_title: "100% Organic",
        feature_organic_desc: "Certified organic spices without any harmful chemicals or pesticides.",
        feature_global_title: "Global Sourcing",
        feature_global_desc: "Direct partnerships with farmers from around the world for authentic flavors.",
        feature_quality_title: "Premium Quality",
        feature_quality_desc: "Rigorous quality control ensures only the finest spices reach your kitchen.",
        
        // About Section
        about_title: "Our Story",
        about_desc1: "TerraFeed was born from a passion for authentic flavors and sustainable agriculture. We believe that the best spices come from the earth, nurtured by farmers who understand the delicate balance between tradition and innovation.",
        about_desc2: "Our journey began with a simple mission: to connect kitchens around the world with the finest spices while supporting farming communities that preserve ancient cultivation methods.",
        stat_countries: "Countries Sourced",
        stat_experience: "Years Experience",
        
        // Products Section
        products_title: "Our Premium Collection",
        products_subtitle: "Discover our carefully curated selection of premium spices",
        product_exotic_title: "Exotic Spices",
        product_exotic_desc: "Rare and exotic spices from remote regions, perfect for adventurous cooking.",
        product_mediterranean_title: "Mediterranean Herbs",
        product_mediterranean_desc: "Sun-dried herbs from the Mediterranean coast, bringing authentic flavors to your dishes.",
        product_asian_title: "Asian Spice Blends",
        product_asian_desc: "Traditional spice blends from across Asia, crafted using ancient recipes.",
        product_cta: "Learn More",
        
        // Contact Section
        contact_title: "Get In Touch",
        contact_subtitle: "Ready to elevate your culinary experience?",
        contact_address_title: "Our Location",
        contact_address: "123 Spice Street<br>Flavor District, FD 12345",
        contact_phone_title: "Call Us",
        contact_email_title: "Email Us",
        
        // Form
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_submit: "Send Message",
        
        // Footer
        footer_copyright: "© 2025 TerraFeed. All rights reserved.",
        
        // Google Maps
        view_map: "View on Map",
        find_us: "Find Us",
        
        // Spices Page
        spices_page_title: "Our Premium Spices",
        spices_page_subtitle: "Discover the world of flavors with our carefully selected spices",
        filter_all: "All Spices",
        filter_whole: "Whole Spices",
        filter_ground: "Ground Spices",
        filter_blends: "Spice Blends",
        filter_herbs: "Herbs",
        
        // Individual Spices
        spice_cardamom_title: "Green Cardamom",
        spice_cardamom_origin: "Origin: India, Guatemala",
        spice_cardamom_desc: "Known as the \"Queen of Spices,\" cardamom offers a sweet, floral aroma with hints of citrus and mint.",
        spice_uses: "Uses:",
        spice_benefits: "Health Benefits:",
        spice_ingredients: "Ingredients:",
        learn_more: "Learn More",
        
        // Spice Care Tips
        spice_care_title: "Spice Care & Storage Tips",
        spice_care_subtitle: "Keep your spices fresh and flavorful",
        tip_temperature_title: "Temperature Control",
        tip_temperature_desc: "Store spices in a cool, dry place away from heat sources like stoves and direct sunlight.",
        tip_container_title: "Proper Containers",
        tip_container_desc: "Use airtight containers to prevent moisture and maintain freshness. Glass jars work best.",
        tip_freshness_title: "Check Freshness",
        tip_freshness_desc: "Replace ground spices every 2-3 years and whole spices every 3-4 years for best flavor.",
        
        // Recipes Page
        recipes_page_title: "Spice-Inspired Recipes",
        recipes_page_subtitle: "Discover delicious recipes using our premium spices",
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
        blog_page_subtitle: "Discover the world of spices through our expert insights",
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
        newsletter_desc: "Subscribe to our newsletter for the latest spice tips, recipes, and industry insights.",
        newsletter_placeholder: "Enter your email",
        subscribe: "Subscribe",
        
        // Wholesale Page
        wholesale_page_title: "Wholesale Solutions",
        wholesale_page_subtitle: "Premium spices for restaurants, retailers, and food manufacturers",
        wholesale_benefits_title: "Why Choose TerraFeed Wholesale?",
        wholesale_benefits_subtitle: "Trusted by businesses worldwide for quality and reliability",
        benefit_delivery_title: "Fast Delivery",
        benefit_delivery_desc: "Reliable supply chain with quick turnaround times to keep your business running smoothly.",
        benefit_pricing_title: "Competitive Pricing",
        benefit_pricing_desc: "Volume discounts and flexible pricing structures to maximize your profit margins.",
        benefit_quality_title: "Quality Assurance",
        benefit_quality_desc: "Rigorous testing and certification processes ensure consistent, premium quality products.",
        benefit_support_title: "Dedicated Support",
        benefit_support_desc: "Personal account managers and 24/7 customer support for all your business needs.",
        
        // Wholesale Categories
        wholesale_categories_title: "Our Wholesale Categories",
        wholesale_categories_subtitle: "Comprehensive spice solutions for every business need",
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
        wholesale_contact_subtitle: "Tell us about your business needs and we'll create a custom solution",
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
        select_volume: "Select Volume"
    },
    
    ar: {
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
        hero_subtitle: "اكتشف أجود مجموعة من التوابل العضوية والمكونات الطبيعية المصدرة مباشرة من المزارعين الموثوقين حول العالم.",
        hero_cta_primary: "استكشف المنتجات",
        hero_cta_secondary: "تواصل معنا",
        
        // Features
        feature_organic_title: "١٠٠٪ عضوي",
        feature_organic_desc: "توابل عضوية معتمدة بدون أي مواد كيميائية ضارة أو مبيدات حشرية.",
        feature_global_title: "مصادر عالمية",
        feature_global_desc: "شراكات مباشرة مع المزارعين من جميع أنحاء العالم للحصول على نكهات أصيلة.",
        feature_quality_title: "جودة فاخرة",
        feature_quality_desc: "مراقبة جودة صارمة تضمن وصول أجود التوابل إلى مطبخك.",
        
        // About Section
        about_title: "قصتنا",
        about_desc1: "وُلدت تيرافيد من شغف بالنكهات الأصيلة والزراعة المستدامة. نحن نؤمن أن أفضل التوابل تأتي من الأرض، مُعتنى بها من قبل مزارعين يفهمون التوازن الدقيق بين التقليد والابتكار.",
        about_desc2: "بدأت رحلتنا بمهمة بسيطة: ربط المطابخ حول العالم بأجود التوابل مع دعم المجتمعات الزراعية التي تحافظ على طرق الزراعة القديمة.",
        stat_countries: "دولة مصدرة",
        stat_experience: "سنة خبرة",
        
        // Products Section
        products_title: "مجموعتنا الفاخرة",
        products_subtitle: "اكتشف مجموعتنا المختارة بعناية من التوابل الفاخرة",
        product_exotic_title: "توابل غريبة",
        product_exotic_desc: "توابل نادرة وغريبة من مناطق نائية، مثالية للطبخ المغامر.",
        product_mediterranean_title: "أعشاب البحر الأبيض المتوسط",
        product_mediterranean_desc: "أعشاب مجففة بالشمس من ساحل البحر الأبيض المتوسط، تجلب النكهات الأصيلة لأطباقك.",
        product_asian_title: "خلطات التوابل الآسيوية",
        product_asian_desc: "خلطات توابل تقليدية من جميع أنحاء آسيا، مصنوعة باستخدام وصفات قديمة.",
        product_cta: "اعرف المزيد",
        
        // Contact Section
        contact_title: "تواصل معنا",
        contact_subtitle: "هل أنت مستعد لرفع مستوى تجربتك في الطهي؟",
        contact_address_title: "موقعنا",
        contact_address: "١٢٣ شارع التوابل<br>منطقة النكهات، ن ن ١٢٣٤٥",
        contact_phone_title: "اتصل بنا",
        contact_email_title: "راسلنا",
        
        // Form
        form_name: "الاسم",
        form_email: "البريد الإلكتروني",
        form_subject: "الموضوع",
        form_message: "الرسالة",
        form_submit: "إرسال الرسالة",
        
        // Footer
        footer_copyright: "© ٢٠٢٥ تيرافيد. جميع الحقوق محفوظة.",
        
        // Google Maps
        view_map: "عرض على الخريطة",
        find_us: "اعثر علينا",
        
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
        spice_cardamom_desc: "يُعرف باسم \"ملكة التوابل\"، يقدم الهيل رائحة حلوة وزهرية مع لمحات من الحمضيات والنعناع.",
        spice_uses: "الاستخدامات:",
        spice_benefits: "الفوائد الصحية:",
        spice_ingredients: "المكونات:",
        learn_more: "اعرف المزيد",
        
        // Spice Care Tips
        spice_care_title: "نصائح العناية بالتوابل والتخزين",
        spice_care_subtitle: "حافظ على توابلك طازجة ولذيذة",
        tip_temperature_title: "التحكم في درجة الحرارة",
        tip_temperature_desc: "احفظ التوابل في مكان بارد وجاف بعيداً عن مصادر الحرارة مثل المواقد وأشعة الشمس المباشرة.",
        tip_container_title: "الحاويات المناسبة",
        tip_container_desc: "استخدم حاويات محكمة الإغلاق لمنع الرطوبة والحفاظ على النضارة. البرطمانات الزجاجية هي الأفضل.",
        tip_freshness_title: "فحص النضارة",
        tip_freshness_desc: "استبدل التوابل المطحونة كل ٢-٣ سنوات والتوابل الكاملة كل ٣-٤ سنوات للحصول على أفضل نكهة.",
        
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
        newsletter_desc: "اشترك في نشرتنا الإخبارية للحصول على أحدث نصائح التوابل والوصفات ورؤى الصناعة.",
        newsletter_placeholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشترك",
        
        // Wholesale Page
        wholesale_page_title: "حلول الجملة",
        wholesale_page_subtitle: "توابل فاخرة للمطاعم وتجار التجزئة ومصنعي الأغذية",
        wholesale_benefits_title: "لماذا تختار جملة تيرافيد؟",
        wholesale_benefits_subtitle: "موثوق به من قبل الشركات في جميع أنحاء العالم للجودة والموثوقية",
        benefit_delivery_title: "التسليم السريع",
        benefit_delivery_desc: "سلسلة توريد موثوقة مع أوقات تسليم سريعة للحفاظ على سير عملك بسلاسة.",
        benefit_pricing_title: "أسعار تنافسية",
        benefit_pricing_desc: "خصومات الكمية وهياكل التسعير المرنة لزيادة هوامش ربحك.",
        benefit_quality_title: "ضمان الجودة",
        benefit_quality_desc: "عمليات اختبار وشهادات صارمة تضمن منتجات عالية الجودة ومتسقة.",
        benefit_support_title: "دعم مخصص",
        benefit_support_desc: "مديرو حسابات شخصيون ودعم عملاء على مدار الساعة لجميع احتياجات عملك.",
        
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
        select_volume: "اختر الحجم"
    }
};

// Function to change language
function changeLanguage(lang) {
    // Store selected language
    localStorage.setItem('selectedLanguage', lang);
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.language-switcher .btn').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
    });
    
    event.target.classList.remove('btn-outline-primary');
    event.target.classList.add('btn-primary');
    
    // Update form placeholders if needed
    updateFormPlaceholders(lang);
}

function updateFormPlaceholders(lang) {
    const placeholders = {
        en: {
            name: "Your Name",
            email: "your.email@example.com",
            subject: "Subject",
            message: "Your message here..."
        },
        ar: {
            name: "اسمك",
            email: "your.email@example.com",
            subject: "الموضوع",
            message: "رسالتك هنا..."
        }
    };
    
    if (placeholders[lang]) {
        Object.keys(placeholders[lang]).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.placeholder = placeholders[lang][key];
            }
        });
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    
    // Set initial language without triggering event
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // Update content
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[savedLanguage] && translations[savedLanguage][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[savedLanguage][key];
            } else {
                element.innerHTML = translations[savedLanguage][key];
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.language-switcher .btn').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-primary');
        
        if ((savedLanguage === 'en' && btn.textContent === 'EN') || 
            (savedLanguage === 'ar' && btn.textContent === 'العربية')) {
            btn.classList.remove('btn-outline-primary');
            btn.classList.add('btn-primary');
        }
    });
    
    updateFormPlaceholders(savedLanguage);
});