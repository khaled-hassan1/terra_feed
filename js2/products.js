// Defult description

const description=' is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.';
const descriptionAr=' من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.';

// Products Data with Wholesale/Retail Categories
const products = [
  // Wholesale - Pints (24/carton)
  {
    id: '1',
    name: 'Basil',
    nameAr: 'ريحان',
    description: 'Basil is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: `ريحان${descriptionAr}.`,
    image: '/img/basil.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '2',
    name: 'Cajun Seasoning',
    nameAr: 'كيجين',
    description: 'Cajun Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كيجين من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/cajun.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '3',
    name: 'Chili Powder',
    nameAr: 'شيلي بودرة',
    description: 'Made from ground red peppers, adds vibrant color and gentle, sweet flavor to roasted meats and sauces.',
    descriptionAr: 'مصنوعة من الفلفل الأحمر المطحون، تضيف لوناً نابضاً ونكهة لطيفة وحلوة للحوم المشوية والصلصات.',
    image: '/img/chili.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '4',
    name: 'Cilantro',
    nameAr: 'كزبرة مجففه',
    description: 'Cilantro is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كزبرة مجففه من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/cilantro.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '5',
    name: 'Cinnamon Powder',
    nameAr: 'قرفة مطحونة',
    description: 'Cinnamon Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'قرفة بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/cinnamon.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '6',
    name: 'Complete Seasoning',
    nameAr: 'الخلطة المتكاملة',
    description: 'Complete Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'خلطة متكاملة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/complete-seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '6',
    name: 'Complete Seasoning',
    nameAr: 'الخلطة المتكاملة',
    description: 'Complete Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'خلطة متكاملة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/complete-seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '7',
    name: 'Coriander Ground',
    nameAr: 'كزبرة مطحونة',
    description: 'Coriander Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كزبرة مطحونة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/coriander.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '8',
    name: 'Cumin Seed Ground',
    nameAr: 'كمون مطحون',
    description: 'Cumin Seed Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كمون مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/cumin.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '9',
    name: 'Curry Powder',
    nameAr: 'كاري بودرة',
    description: 'Curry Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كاري بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/curry.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '10',
    name: 'Fajita Seasoning',
    nameAr: 'فاهيتا',
    description: 'FAJITA SEASONING PAIL is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'فاهيتا من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/fajita.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '11',
    name: 'Garlic Powder',
    nameAr: 'ثوم بودرة',
    description: 'Fine Ground Garlic Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'ثوم بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/garlic.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '12',
    name: 'Ginger Ground',
    nameAr: 'زنجبيل مطحون',
    description: 'Ginger Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'زنجبيل مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/giner.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '13',
    name: 'Italian Seasoning',
    nameAr: 'بهار ايطالية',
    description: 'Italian Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بهار ايطالية من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/italian.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '14',
    name: 'Lime pepper',
    nameAr: 'لايم مع فلفل',
    description: 'Lime pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'لايم مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/lime.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '15',
    name: 'Mango Pepper',
    nameAr: 'منجو مع فلفل',
    description: 'Mango Pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'منجو مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/mango.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '16',
    name: 'Nutmeg Ground',
    nameAr: 'جوزة الطيب',
    description: 'Nutmeg Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'جوزة الطيب من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/nutmeg.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '17',
    name: 'Onion Granulated',
    nameAr: 'بصل مطحون',
    description: 'Onion Granulated is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بصل مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/onion.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '18',
    name: 'Onion Powder',
    nameAr: 'بصل بودرة',
    description: 'Onion Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بصل بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/onion-powder.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '19',
    name: 'Orange Pepper',
    nameAr: 'برتقال مع فلفل',
    description: 'Orange Pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'برتقال مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: '/img/Orange-Pepper.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '20',
    name: 'Oregano Whole',
    nameAr: 'اوريغانو',
    description: `Oregano Whole${description}`,
    descriptionAr: `اوريغانو${descriptionAr}`,
    image: '/img/oregano.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '21',
    name: 'Paprika',
    nameAr: 'بابريكا',
    description: `Paprika${description}`,
    descriptionAr: `بابريكا${descriptionAr}`,
    image: '/img/paprika.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '22',
    name: 'Paprika Smoked',
    nameAr: 'بابريكا مدخن',
    description: `Paprika Smoked${description}`,
    descriptionAr: `بابريكا مدخن${descriptionAr}`,
    image: '/img/paprika-smoked.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '23',
    name: 'Parsley Flakes',
    nameAr: 'بقدونس مجففة',
    description: `Parsley Flakes${description}`,
    descriptionAr: `بقدونس مجففة${descriptionAr}`,
    image: '/img/parsley.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '24',
    name: 'Pepper Black Butcher Block',
    nameAr: 'فلفل اسود خشن',
    description: `Pepper Black Butcher Block${description}`,
    descriptionAr: `فلفل اسود خشن${descriptionAr}`,
    image: '/img/pepper-black.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '25',
    name: 'Pepper Black Ground',
    nameAr: 'فلفل اسود مطحون',
    description: `Pepper Black Ground${description}`,
    descriptionAr: `فلفل اسود مطحون${descriptionAr}`,
    image: '/img/pepper-black-ground.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '26',
    name: 'Pepper Black Ground Fine',
    nameAr: 'فلفل اسود ناعم',
    description: `Pepper Black Ground Fine${description}`,
    descriptionAr: `فلفل اسود ناعم${descriptionAr}`,
    image: '/img/Pepper-Black-Ground-Fine.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '27',
    name: 'Pepper Pink Whole',
    nameAr: 'فلفل وردي',
    description: `Pepper Pink Whole${description}`,
    descriptionAr: `فلفل وردي${descriptionAr}`,
    image: '/img/Pepper-Pink-Whole.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '28',
    name: 'Pepper Red - Ground (Cayenne)',
    nameAr: 'كايين',
    description: `Pepper Red - Ground (Cayenne)${description}`,
    descriptionAr: `كايين${descriptionAr}`,
    image: '/img/Pepper-Red.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '29',
    name: 'Pepper Red Crushed',
    nameAr: 'فلفل احمر مبروش',
    description: `Pepper Red Crushed${description}`,
    descriptionAr: `فلفل احمر مبروش${descriptionAr}`,
    image: '/img/Pepper-Red-Crushed.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '30',
    name: 'Pepper White Ground',
    nameAr: 'فلفل ابيض مطحون',
    description: `Pepper White Ground${description}`,
    descriptionAr: `فلفل ابيض مطحون${descriptionAr}`,
    image: '/img/Pepper-White-Ground.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '31',
    name: 'Poultry Seasoning',
    nameAr: 'بهار دجاج',
    description: `Poultry Seasoning${description}`,
    descriptionAr: `بهار دجاج${descriptionAr}`,
    image: '/img/Poultry-Seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '32',
    name: 'Rosemary Leaves',
    nameAr: 'روزماري',
    description: `Rosemary Leaves${description}`,
    descriptionAr: `روزماري${descriptionAr}`,
    image: '/img/Rosemary-Leaves.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '33',
    name: 'Rotisserie Chicken Seasoning',
    nameAr: 'دجاج مشوي',
    description: `Rotisserie Chicken Seasoning${description}`,
    descriptionAr: `دجاج مشوي${descriptionAr}`,
    image: '/img/Rotisserie-Chicken-Seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '34',
    name: 'Sazón Tropical ® w/ Annatto & Coriander',
    nameAr: 'تروبيكال',
    description: `Sazón Tropical ® w/ Annatto & Coriander${description}`,
    descriptionAr: `تروبيكال${descriptionAr}`,
    image: '/img/Sazon-with-Coriander-And-Annatto.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '35',
    name: 'Seafood Seasoning Creole Blend',
    nameAr: 'سمك',
    description: `Seafood Seasoning Creole Blend${description}`,
    descriptionAr: `سمك${descriptionAr}`,
    image: '/img/Seafood-Seasoning-Creole-Blend.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '36',
    name: 'Seasoned Salt',
    nameAr: 'بهار بطاطا',
    description: `Seasoned Salt${description}`,
    descriptionAr: `بهار بطاطا${descriptionAr}`,
    image: '/img/Seasoned-Salt.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '37',
    name: 'Steak Seasoning',
    nameAr: 'ستيك',
    description: `Steak Seasoning${description}`,
    descriptionAr: `ستيك${descriptionAr}`,
    image: '/img/Steak-Seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {
    id: '38',
    name: 'Turmeric Ground',
    nameAr: 'كركم',
    description: `Turmeric Ground${description}`,
    descriptionAr: `كركم${descriptionAr}`,
    image: '/img/Turmeric-Ground.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },

  // // Wholesale - Gallons (6/carton)
  // {
  //   id: '4',
  //   name: 'Garlic Powder',
  //   nameAr: 'بودرة الثوم',
  //   description: 'The dried, ground form of garlic cloves. Offers pungent, savory flavor for seasoning vegetables, sauces and rubs.',
  //   descriptionAr: 'الشكل المجفف والمطحون من فصوص الثوم. يقدم نكهة لاذعة ومالحة لتتبيل الخضار والصلصات والخلطات.',
  //   image: 'https://images.pexels.com/photos/4198934/pexels-photo-4198934.jpeg',
  //   category: 'wholesale',
  //   subcategory: 'gallons',
  //   packaging: 'Gallons (6/carton)',
  //   packagingAr: 'غالون (6/كرتونة)'
  // },
  // {
  //   id: '5',
  //   name: 'Chili Powder',
  //   nameAr: 'بودرة الفلفل الحار',
  //   description: 'Vibrant blend of ground chili peppers with cumin, oregano, and garlic. Key ingredient for chili con carne.',
  //   descriptionAr: 'خليط نابض من الفلفل الحار المطحون مع الكمون والأوريغانو والثوم. المكون الرئيسي للفلفل الحار بالكارني.',
  //   image: 'https://images.pexels.com/photos/4198941/pexels-photo-4198941.jpeg',
  //   category: 'wholesale',
  //   subcategory: 'gallons',
  //   packaging: 'Gallons (6/carton)',
  //   packagingAr: 'غالون (6/كرتونة)'
  // },
  // {
  //   id: '6',
  //   name: 'Cajun Seasoning',
  //   nameAr: 'توابل الكاجن',
  //   description: 'Bold Louisiana blend of paprika, cayenne, garlic, and herbs. Perfect for blackened fish and Creole cooking.',
  //   descriptionAr: 'خليط لويزيانا الجريء من البابريكا والكايين والثوم والأعشاب. مثالي للسمك المحمص وطبخ الكريول.',
  //   image: 'https://images.pexels.com/photos/4198944/pexels-photo-4198944.jpeg',
  //   category: 'wholesale',
  //   subcategory: 'gallons',
  //   packaging: 'Gallons (6/carton)',
  //   packagingAr: 'غالون (6/كرتونة)'
  // },

  // // Wholesale - Buckets (1/carton)
  // {
  //   id: '7',
  //   name: 'Salt',
  //   nameAr: 'الملح',
  //   description: 'Essential mineral used to enhance and balance flavors. Fundamental seasoning in all cuisines worldwide.',
  //   descriptionAr: 'معدن أساسي يستخدم لتعزيز وتوازن النكهات. توابل أساسية في جميع المأكولات في العالم.',
  //   image: 'https://images.pexels.com/photos/4198932/pexels-photo-4198932.jpeg',
  //   category: 'wholesale',
  //   subcategory: 'buckets',
  //   packaging: 'Buckets (1/carton)',
  //   packagingAr: 'دلو (1/كرتونة)'
  // },
  // {
  //   id: '8',
  //   name: 'Onion Powder',
  //   nameAr: 'بودرة البصل',
  //   description: 'Concentrated onion flavor without the tears. Essential for dry rubs and adding savory depth to dishes.',
  //   descriptionAr: 'نكهة البصل المركزة بدون دموع. أساسي للخلطات الجافة وإضافة عمق مالح للأطباق.',
  //   image: 'https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg',
  //   category: 'wholesale',
  //   subcategory: 'buckets',
  //   packaging: 'Buckets (1/carton)',
  //   packagingAr: 'دلو (1/كرتونة)'
  // },

  // // Retail - Standard
  // {
  //   id: '9',
  //   name: 'Cinnamon',
  //   nameAr: 'القرفة',
  //   description: 'Warm, sweet spice with fragrant aroma. Staple in baking and adds depth to savory Moroccan and Middle Eastern dishes.',
  //   descriptionAr: 'توابل دافئة وحلوة ذات رائحة عطرة. أساسي في الخبز ويضيف عمقاً للأطباق المالحة المغربية والشرق أوسطية.',
  //   image: 'https://images.pexels.com/photos/4198949/pexels-photo-4198949.jpeg',
  //   category: 'retail',
  //   subcategory: 'standard'
  // },
  // {
  //   id: '10',
  //   name: 'Oregano',
  //   nameAr: 'الأوريغانو',
  //   description: 'Classic Mediterranean herb with warm, aromatic flavor. Essential for pizza, pasta sauces, and Italian cuisine.',
  //   descriptionAr: 'عشب البحر الأبيض المتوسط الكلاسيكي بنكهة دافئة وعطرة. أساسي للبيتزا وصلصات المعكرونة والمأكولات الإيطالية.',
  //   image: 'https://images.pexels.com/photos/4198947/pexels-photo-4198947.jpeg',
  //   category: 'retail',
  //   subcategory: 'standard'
  // },
  // {
  //   id: '11',
  //   name: 'Rosemary',
  //   nameAr: 'إكليل الجبل',
  //   description: 'Aromatic pine-like herb with robust, earthy flavor. Excellent with roasted meats and Mediterranean dishes.',
  //   descriptionAr: 'عشب عطري يشبه الصنوبر بنكهة قوية وترابية. ممتاز مع اللحوم المشوية وأطباق البحر الأبيض المتوسط.',
  //   image: 'https://images.pexels.com/photos/4198945/pexels-photo-4198945.jpeg',
  //   category: 'retail',
  //   subcategory: 'standard'
  // },
  // {
  //   id: '12',
  //   name: 'Ginger',
  //   nameAr: 'الزنجبيل',
  //   description: 'Ground ginger provides warm, spicy-sweet flavor. Essential for Asian cooking and adding aromatic warmth.',
  //   descriptionAr: 'الزنجبيل المطحون يقدم نكهة دافئة وحارة وحلوة. أساسي للطبخ الآسيوي وإضافة الدفء العطري.',
  //   image: 'https://images.pexels.com/photos/4198946/pexels-photo-4198946.jpeg',
  //   category: 'retail',
  //   subcategory: 'standard'
  // },

  // // Retail - Sauces
  // {
  //   id: '13',
  //   name: 'Seafood Seasoning',
  //   nameAr: 'توابل المأكولات البحرية',
  //   description: 'Zesty, peppery blend with celery seed, paprika, and red pepper. Adds bold flavor to seafood dishes.',
  //   descriptionAr: 'خليط لاذع وحار مع بذور الكرفس والبابريكا والفلفل الأحمر. يضيف نكهة جريئة لأطباق المأكولات البحرية.',
  //   image: 'https://images.pexels.com/photos/4198948/pexels-photo-4198948.jpeg',
  //   category: 'retail',
  //   subcategory: 'sauces'
  // },
  // {
  //   id: '14',
  //   name: 'Basil & Oregano Sauce Blend',
  //   nameAr: 'خليط صلصة الريحان والأوريغانو',
  //   description: 'Mediterranean blend perfect for pasta sauces, pizza, and roasted vegetables with sweet peppery notes.',
  //   descriptionAr: 'خليط البحر الأبيض المتوسط المثالي لصلصات المعكرونة والبيتزا والخضار المشوية مع نكهات حلوة وحارة.',
  //   image: 'https://images.pexels.com/photos/4198950/pexels-photo-4198950.jpeg',
  //   category: 'retail',
  //   subcategory: 'sauces'
  // },

  // // Retail - Special
  // {
  //   id: '15',
  //   name: 'Exotic Spices Collection',
  //   nameAr: 'مجموعة التوابل الغريبة',
  //   description: 'Rare and exotic spices from remote regions, perfect for adventurous cooking and gourmet dishes.',
  //   descriptionAr: 'توابل نادرة وغريبة من مناطق نائية، مثالية للطبخ المغامر والأطباق الفاخرة.',
  //   image: 'https://images.pexels.com/photos/4198951/pexels-photo-4198951.jpeg',
  //   category: 'retail',
  //   subcategory: 'special'
  // },
  // {
  //   id: '16',
  //   name: 'Asian Spice Blends',
  //   nameAr: 'خلطات التوابل الآسيوية',
  //   description: 'Traditional spice blends from across Asia, crafted using ancient recipes and premium ingredients.',
  //   descriptionAr: 'خلطات التوابل التقليدية من جميع أنحاء آسيا، مصنوعة باستخدام وصفات قديمة ومكونات فاخرة.',
  //   image: 'https://images.pexels.com/photos/4198952/pexels-photo-4198952.jpeg',
  //   category: 'retail',
  //   subcategory: 'special'
  // },
  // {
  //   id: '17',
  //   name: 'Orange Pepper Premium',
  //   nameAr: 'الفلفل البرتقالي المميز',
  //   description: 'Tangy and mildly spicy blend with black pepper and orange peel. Provides bright, citrusy zing to dishes.',
  //   descriptionAr: 'خليط لاذع وحار قليلاً مع الفلفل الأسود وقشر البرتقال. يوفر نكهة حمضية مشرقة للأطباق.',
  //   image: 'https://images.pexels.com/photos/4198953/pexels-photo-4198953.jpeg',
  //   category: 'retail',
  //   subcategory: 'special'
  // },

  // // Retail - Economy
  // {
  //   id: '18',
  //   name: 'Cayenne Pepper',
  //   nameAr: 'فلفل الكايين',
  //   description: 'Fine ground powder from dried red chili peppers. Delivers clean, sharp heat to increase spiciness.',
  //   descriptionAr: 'بودرة مطحونة ناعمة من الفلفل الحار الأحمر المجفف. تقدم حرارة نظيفة وحادة لزيادة الحرارة.',
  //   image: 'https://images.pexels.com/photos/4198954/pexels-photo-4198954.jpeg',
  //   category: 'retail',
  //   subcategory: 'economy'
  // },
  // {
  //   id: '19',
  //   name: 'Red Pepper Flakes',
  //   nameAr: 'رقائق الفلفل الأحمر',
  //   description: 'Crushed red pepper flakes add heat and flavor. Perfect for pizza, pasta, and marinades.',
  //   descriptionAr: 'رقائق الفلفل الأحمر المكسر تضيف حرارة ونكهة. مثالية للبيتزا والمعكرونة والمخللات.',
  //   image: 'https://images.pexels.com/photos/4198955/pexels-photo-4198955.jpeg',
  //   category: 'retail',
  //   subcategory: 'economy'
  // },
  // {
  //   id: '20',
  //   name: 'White Pepper',
  //   nameAr: 'الفلفل الأبيض',
  //   description: 'Milder than black pepper with clean, sharp flavor. Ideal for light-colored dishes and cream sauces.',
  //   descriptionAr: 'أخف من الفلفل الأسود مع نكهة نظيفة وحادة. مثالي للأطباق فاتحة اللون والصلصات الكريمية.',
  //   image: 'https://images.pexels.com/photos/4198956/pexels-photo-4198956.jpeg',
  //   category: 'retail',
  //   subcategory: 'economy'
  // },

  // // Retail - Mexican Line
  // {
  //   id: '21',
  //   name: 'Chile and Lime',
  //   nameAr: 'الفلفل الحار والليمون',
  //   description: 'Perfect combination of spicy chile and tangy lime. Great for Mexican cuisine and grilled meats.',
  //   descriptionAr: 'مزيج مثالي من الفلفل الحار الحار والليمون اللاذع. رائع للمأكولات المكسيكية واللحوم المشوية.',
  //   image: 'https://images.pexels.com/photos/4198957/pexels-photo-4198957.jpeg',
  //   category: 'retail',
  //   subcategory: 'mexican'
  // },
  // {
  //   id: '22',
  //   name: 'Fajita Seasoning',
  //   nameAr: 'توابل الفاهيتا',
  //   description: 'Tex-Mex blend of chili peppers, cumin, paprika, and garlic. Perfect for authentic Mexican fajitas.',
  //   descriptionAr: 'خليط تكساس مكسيكي من الفلفل الحار والكمون والبابريكا والثوم. مثالي للفاهيتا المكسيكية الأصيلة.',
  //   image: 'https://images.pexels.com/photos/4198958/pexels-photo-4198958.jpeg',
  //   category: 'retail',
  //   subcategory: 'mexican'
  // },
  // {
  //   id: '23',
  //   name: 'Chipotle',
  //   nameAr: 'الشيبوتلي',
  //   description: 'Smoke-dried jalapeño peppers with rich, smoky flavor. Perfect for BBQ and Mexican dishes.',
  //   descriptionAr: 'فلفل الخالابينو المجفف بالدخان مع نكهة دخانية غنية. مثالي للباربكيو والأطباق المكسيكية.',
  //   image: 'https://images.pexels.com/photos/4198959/pexels-photo-4198959.jpeg',
  //   category: 'retail',
  //   subcategory: 'mexican'
  // },
  // {
  //   id: '24',
  //   name: 'Lime Pepper',
  //   nameAr: 'فلفل الليمون',
  //   description: 'Zesty blend of black pepper and tangy lime. Excellent for seafood, chicken, and vegetables.',
  //   descriptionAr: 'خليط لاذع من الفلفل الأسود والليمون اللاذع. ممتاز للمأكولات البحرية والدجاج والخضار.',
  //   image: 'https://images.pexels.com/photos/4198960/pexels-photo-4198960.jpeg',
  //   category: 'retail',
  //   subcategory: 'mexican'
  // },
  // {
  //   id: '25',
  //   name: 'Sazón',
  //   nameAr: 'السازون',
  //   description: 'Vibrant Latin American seasoning with savory, umami-rich flavor. Gives distinctive taste to rice and stews.',
  //   descriptionAr: 'توابل أمريكا اللاتينية النابضة بالحياة مع نكهة مالحة وغنية بالأومامي. تعطي طعماً مميزاً للأرز والحساء.',
  //   image: 'https://images.pexels.com/photos/4198961/pexels-photo-4198961.jpeg',
  //   category: 'retail',
  //   subcategory: 'mexican'
  // },
  // {
  //   id: '26',
  //   name: 'Mango Pepper',
  //   nameAr: 'فلفل المانجو',
  //   description: 'Unique blend combining sweet mango flavor with spicy pepper heat. Perfect for tropical Mexican dishes.',
  //   descriptionAr: 'خليط فريد يجمع بين نكهة المانجو الحلوة وحرارة الفلفل الحار. مثالي للأطباق المكسيكية الاستوائية.',
  //   image: 'https://images.pexels.com/photos/4198962/pexels-photo-4198962.jpeg',
  //   category: 'retail',
  //   subcategory: 'mexican'
  // },

  // // Additional Standard Products
  // {
  //   id: '27',
  //   name: 'Poultry Seasoning',
  //   nameAr: 'توابل الدواجن',
  //   description: 'Aromatic blend of sage, thyme, rosemary, and marjoram. Enhances chicken and turkey with classic savory notes.',
  //   descriptionAr: 'خليط عطري من الميرمية والزعتر وإكليل الجبل والمردقوش. يعزز الدجاج والديك الرومي بنكهات مالحة كلاسيكية.',
  //   image: 'https://images.pexels.com/photos/4198963/pexels-photo-4198963.jpeg',
  //   category: 'retail',
  //   subcategory: 'standard'
  // },
  // {
  //   id: '28',
  //   name: 'Canadian Steak Seasoning',
  //   nameAr: 'توابل الستيك الكندية',
  //   description: 'Bold blend of coarse spices with black pepper, dill seed, and garlic. Creates savory crust on steaks.',
  //   descriptionAr: 'خليط جريء من التوابل الخشنة مع الفلفل الأسود وبذور الشبت والثوم. ينشئ قشرة مالحة على الستيك.',
  //   image: 'https://images.pexels.com/photos/4198964/pexels-photo-4198964.jpeg',
  //   category: 'retail',
  //   subcategory: 'standard'
  // }
];

// Global variables
let currentLanguage = 'en';
let currentCategory = 'all';
let currentSubcategory = '';
let filteredProducts = [...products];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  renderProducts(products);
  updateProductCount(products.length);
  
  // Setup search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearch);
});

// Filter products by category and subcategory
function filterProducts(category, subcategory = '') {
  currentCategory = category;
  currentSubcategory = subcategory;
  
  // Update button states
  updateButtonStates(category, subcategory);
  
  // Filter products
  let filtered = products;
  
  if (category !== 'all') {
    filtered = products.filter(product => product.category === category);
    
    if (subcategory) {
      filtered = filtered.filter(product => product.subcategory === subcategory);
    }
  }
  
  // Apply search filter if active
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.nameAr.includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.descriptionAr.includes(searchTerm)
    );
  }
  
  filteredProducts = filtered;
  renderProducts(filtered);
  updateProductCount(filtered.length);
}

// Handle search functionality
function handleSearch() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
  let filtered = products;
  
  // Apply category filter first
  if (currentCategory !== 'all') {
    filtered = products.filter(product => product.category === currentCategory);
    
    if (currentSubcategory) {
      filtered = filtered.filter(product => product.subcategory === currentSubcategory);
    }
  }
  
  // Apply search filter
  if (searchTerm) {
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.nameAr.includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.descriptionAr.includes(searchTerm)
    );
  }
  
  filteredProducts = filtered;
  renderProducts(filtered);
  updateProductCount(filtered.length);
}

// Update button states
function updateButtonStates(category, subcategory) {
  // Reset all buttons
  document.querySelectorAll('.category-btn, .subcategory-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Set active category button
  const categoryBtn = document.querySelector(`[data-category="${category}"]`);
  if (categoryBtn && !categoryBtn.hasAttribute('data-subcategory')) {
    categoryBtn.classList.add('active');
  }
  
  // Set active subcategory button
  if (subcategory) {
    const subcategoryBtn = document.querySelector(`[data-category="${category}"][data-subcategory="${subcategory}"]`);
    if (subcategoryBtn) {
      subcategoryBtn.classList.add('active');
    }
  }
}

// Render products to the grid
function renderProducts(productsToRender) {
  const grid = document.getElementById('productsGrid');
  
  if (productsToRender.length === 0) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="empty-state">
          <i class="fas fa-search"></i>
          <h4 class="mt-3" data-translate="no_products">No products found</h4>
          <p data-translate="try_different">Try a different category or search term</p>
        </div>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
}

// Create individual product card HTML
function createProductCard(product) {
  const isArabic = currentLanguage === 'ar';
  const name = isArabic ? product.nameAr : product.name;
  const description = isArabic ? product.descriptionAr : product.description;
  const packaging = product.packaging ? (isArabic ? product.packagingAr : product.packaging) : '';
  
  const categoryColor = product.category === 'wholesale' ? 'primary' : 'success';
  const categoryIcon = product.category === 'wholesale' ? 'boxes' : 'shopping-cart';
  
  const subcategoryIcons = {
    pints: 'box',
    gallons: 'box',
    buckets: 'box',
    standard: 'star',
    sauces: 'flask',
    special: 'gem',
    economy: 'dollar-sign',
    mexican: 'pepper-hot'
  };
  
  return `
    <div class="col-lg-4 col-md-6 product-item" data-category="${product.category}" data-subcategory="${product.subcategory}">
      <div class="card product-card h-100 shadow-sm">
        <div class="position-relative">
          <img src="${product.image}" class="card-img-top" alt="${name}"
               onerror="this.src='https://images.pexels.com/photos/4198943/pexels-photo-4198943.jpeg';" />
          
          <span class="category-badge">
            <i class="fas fa-${categoryIcon} me-1"></i>
            ${isArabic ? (product.category === 'wholesale' ? 'جملة' : 'تجزئة') : product.category}
          </span>
          
          <span class="subcategory-badge">
            <i class="fas fa-${subcategoryIcons[product.subcategory] || 'tag'} me-1"></i>
            ${getSubcategoryLabel(product.subcategory, isArabic)}
          </span>
        </div>
        
        <div class="card-body ${isArabic ? 'text-end' : ''}">
          <h5 class="card-title ${isArabic ? 'font-cairo' : ''}">${name}</h5>
          <p class="card-text ${isArabic ? 'font-cairo' : ''}">${description}</p>
          
          ${packaging ? `
            <div class="packaging-info ${isArabic ? 'text-end' : ''}">
              <i class="fas fa-box me-2"></i>
              <span class="${isArabic ? 'font-cairo' : ''}">${packaging}</span>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// Get subcategory label based on language
function getSubcategoryLabel(subcategory, isArabic) {
  const labels = {
    en: {
      pints: 'Pint',
      gallons: 'Gallons',
      buckets: 'Buckets',
      standard: 'Standard',
      sauces: 'Sauces',
      special: 'Special',
      economy: 'Economy',
      mexican: 'Mexican'
    },
    ar: {
      pints: 'علب',
      gallons: 'غالون',
      buckets: 'دلو',
      standard: 'ستاندر',
      sauces: 'صوصات',
      special: 'سبيشيل',
      economy: 'اقتصادي',
      mexican: 'مكسيكي'
    }
  };
  
  return labels[isArabic ? 'ar' : 'en'][subcategory] || subcategory;
}

// Update product count display
function updateProductCount(count) {
  const countElement = document.getElementById('productCount');
  const isArabic = currentLanguage === 'ar';
  
  if (isArabic) {
    countElement.textContent = `عرض ${count} من ${products.length} منتج`;
  } else {
    countElement.textContent = `Showing ${count} of ${products.length} products`;
  }
}

// Language change functionality
function changeLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update body class for Arabic
  if (lang === 'ar') {
    document.body.classList.add('font-cairo');
  } else {
    document.body.classList.remove('font-cairo');
  }
  
  // Re-render products with new language
  renderProducts(filteredProducts);
  updateProductCount(filteredProducts.length);
  
  // Update all translatable elements
  updateTranslations(lang);
}

// Update translations (basic implementation)
function updateTranslations(lang) {
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_products: 'Products',
      nav_contact: 'Contact',
      spices_page_title: 'Our Premium Spice Collection',
      spices_page_subtitle: 'Discover our complete range of premium spices and seasonings, carefully sourced from the finest farms around the world',
      search_title: 'Search Products',
      search_placeholder: 'Search products...',
      categories_title: 'Product Categories',
      all_products: 'All Products',
      wholesale: 'Wholesale',
      retail: 'Retail',
      pints: 'Pint',
      gallons: 'Gallons (6/carton)',
      buckets: 'Buckets (1/carton)',
      standard: 'Standard',
      sauces: 'Sauces',
      special: 'Special',
      economy: 'Economy',
      mexican: 'Mexican Line',
      our_products: 'Our Products',
      no_products: 'No products found',
      try_different: 'Try a different category or search term',
      footer_copyright: 'All rights reserved.',
      footer_design: 'Design by AAplans'
    },
    ar: {
      nav_home: 'الرئيسية',
      nav_about: 'حول',
      nav_products: 'المنتجات',
      nav_contact: 'اتصل بنا',
      spices_page_title: 'مجموعة التوابل المميزة',
      spices_page_subtitle: 'اكتشف مجموعتنا الكاملة من التوابل والبهارات المميزة، مختارة بعناية من أفضل المزارع حول العالم',
      search_title: 'البحث في المنتجات',
      search_placeholder: 'ابحث عن المنتجات...',
      categories_title: 'فئات المنتجات',
      all_products: 'جميع المنتجات',
      wholesale: 'البيع بالجملة',
      retail: 'البيع بالتجزئة',
      pints: 'علب',
      gallons: 'غالون (6/كرتونة)',
      buckets: 'دلو (1/كرتونة)',
      standard: 'ستاندر',
      sauces: 'صوصات',
      special: 'سبيشيل',
      economy: 'اقتصادي',
      mexican: 'الخط المكسيكي',
      our_products: 'منتجاتنا',
      no_products: 'لم يتم العثور على منتجات',
      try_different: 'جرب فئة أخرى أو مصطلح بحث مختلف',
      footer_copyright: 'جميع الحقوق محفوظة.',
      footer_design: 'تصميم بواسطة AAplans'
    }
  };
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholder text
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });
}