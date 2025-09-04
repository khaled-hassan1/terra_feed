// Defult description

const description = ' is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.';
const descriptionAr = ' من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.';
// Function to generate unique IDs
function generateUniqueIds(items) {
  let idCounter = 1;
  return items.map(item => ({
    ...item,
    id: `${idCounter++}`
  }));
}

// Products Data with Wholesale/Retail Categories
const rawProducts = [
  // Wholesale - Pints (24/carton)
  {

    name: 'Basil',
    nameAr: 'ريحان',
    description: 'Basil is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: `ريحان${descriptionAr}.`,
    image: 'img/basil.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Cajun Seasoning',
    nameAr: 'كيجين',
    description: 'Cajun Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كيجين من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cajun.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Chili Powder',
    nameAr: 'شيلي بودرة',
    description: 'Made from ground red peppers, adds vibrant color and gentle, sweet flavor to roasted meats and sauces.',
    descriptionAr: 'مصنوعة من الفلفل الأحمر المطحون، تضيف لوناً نابضاً ونكهة لطيفة وحلوة للحوم المشوية والصلصات.',
    image: 'img/chili.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Cilantro',
    nameAr: 'كزبرة مجففه',
    description: 'Cilantro is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كزبرة مجففه من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cilantro.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Cinnamon Powder',
    nameAr: 'قرفة مطحونة',
    description: 'Cinnamon Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'قرفة بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cinnamon.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Complete Seasoning',
    nameAr: 'الخلطة المتكاملة',
    description: 'Complete Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'خلطة متكاملة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/complete-seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Coriander Ground',
    nameAr: 'كزبرة مطحونة',
    description: 'Coriander Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كزبرة مطحونة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/coriander.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Cumin Seed Ground',
    nameAr: 'كمون مطحون',
    description: 'Cumin Seed Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كمون مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cumin.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Curry Powder',
    nameAr: 'كاري بودرة',
    description: 'Curry Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كاري بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/curry.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Fajita Seasoning',
    nameAr: 'فاهيتا',
    description: 'FAJITA SEASONING PAIL is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'فاهيتا من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/fajita.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Garlic Powder',
    nameAr: 'ثوم بودرة',
    description: 'Fine Ground Garlic Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'ثوم بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/garlic.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Ginger Ground',
    nameAr: 'زنجبيل مطحون',
    description: 'Ginger Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'زنجبيل مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/giner.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Italian Seasoning',
    nameAr: 'بهار ايطالية',
    description: 'Italian Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بهار ايطالية من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/italian.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Lime pepper',
    nameAr: 'لايم مع فلفل',
    description: 'Lime pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'لايم مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/lime.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Mango Pepper',
    nameAr: 'منجو مع فلفل',
    description: 'Mango Pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'منجو مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/mango.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Nutmeg Ground',
    nameAr: 'جوزة الطيب',
    description: 'Nutmeg Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'جوزة الطيب من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/nutmeg.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Onion Granulated',
    nameAr: 'بصل مطحون',
    description: 'Onion Granulated is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بصل مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/onion.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Onion Powder',
    nameAr: 'بصل بودرة',
    description: 'Onion Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بصل بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/onion-powder.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Orange Pepper',
    nameAr: 'برتقال مع فلفل',
    description: 'Orange Pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'برتقال مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Orange-Pepper.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Oregano Whole',
    nameAr: 'اوريغانو',
    description: `Oregano Whole${description}`,
    descriptionAr: `اوريغانو${descriptionAr}`,
    image: 'img/oregano.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Paprika',
    nameAr: 'بابريكا',
    description: `Paprika${description}`,
    descriptionAr: `بابريكا${descriptionAr}`,
    image: 'img/paprika.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Paprika Smoked',
    nameAr: 'بابريكا مدخن',
    description: `Paprika Smoked${description}`,
    descriptionAr: `بابريكا مدخن${descriptionAr}`,
    image: 'img/paprika-smoked.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Parsley Flakes',
    nameAr: 'بقدونس مجففة',
    description: `Parsley Flakes${description}`,
    descriptionAr: `بقدونس مجففة${descriptionAr}`,
    image: 'img/parsley.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Pepper Black Butcher Block',
    nameAr: 'فلفل اسود خشن',
    description: `Pepper Black Butcher Block${description}`,
    descriptionAr: `فلفل اسود خشن${descriptionAr}`,
    image: 'img/pepper-black.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Pepper Black Ground',
    nameAr: 'فلفل اسود مطحون',
    description: `Pepper Black Ground${description}`,
    descriptionAr: `فلفل اسود مطحون${descriptionAr}`,
    image: 'img/pepper-black-ground.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Pepper Black Ground Fine',
    nameAr: 'فلفل اسود ناعم',
    description: `Pepper Black Ground Fine${description}`,
    descriptionAr: `فلفل اسود ناعم${descriptionAr}`,
    image: 'img/Pepper-Black-Ground-Fine.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Pepper Pink Whole',
    nameAr: 'فلفل وردي',
    description: `Pepper Pink Whole${description}`,
    descriptionAr: `فلفل وردي${descriptionAr}`,
    image: 'img/Pepper-Pink-Whole.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Pepper Red - Ground (Cayenne)',
    nameAr: 'كايين',
    description: `Pepper Red - Ground (Cayenne)${description}`,
    descriptionAr: `كايين${descriptionAr}`,
    image: 'img/Pepper-Red.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Pepper Red Crushed',
    nameAr: 'فلفل احمر مبروش',
    description: `Pepper Red Crushed${description}`,
    descriptionAr: `فلفل احمر مبروش${descriptionAr}`,
    image: 'img/Pepper-Red-Crushed.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Pepper White Ground',
    nameAr: 'فلفل ابيض مطحون',
    description: `Pepper White Ground${description}`,
    descriptionAr: `فلفل ابيض مطحون${descriptionAr}`,
    image: 'img/Pepper-White-Ground.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Poultry Seasoning',
    nameAr: 'بهار دجاج',
    description: `Poultry Seasoning${description}`,
    descriptionAr: `بهار دجاج${descriptionAr}`,
    image: 'img/Poultry-Seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Rosemary Leaves',
    nameAr: 'روزماري',
    description: `Rosemary Leaves${description}`,
    descriptionAr: `روزماري${descriptionAr}`,
    image: 'img/Rosemary-Leaves.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Rotisserie Chicken Seasoning',
    nameAr: 'دجاج مشوي',
    description: `Rotisserie Chicken Seasoning${description}`,
    descriptionAr: `دجاج مشوي${descriptionAr}`,
    image: 'img/Rotisserie-Chicken-Seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Sazón Tropical ® w/ Annatto & Coriander',
    nameAr: 'تروبيكال',
    description: `Sazón Tropical ® w/ Annatto & Coriander${description}`,
    descriptionAr: `تروبيكال${descriptionAr}`,
    image: 'img/Sazon-with-Coriander-And-Annatto.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Seafood Seasoning Creole Blend',
    nameAr: 'سمك',
    description: `Seafood Seasoning Creole Blend${description}`,
    descriptionAr: `سمك${descriptionAr}`,
    image: 'img/Seafood-Seasoning-Creole-Blend.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Seasoned Salt',
    nameAr: 'بهار بطاطا',
    description: `Seasoned Salt${description}`,
    descriptionAr: `بهار بطاطا${descriptionAr}`,
    image: 'img/Seasoned-Salt.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Steak Seasoning',
    nameAr: 'ستيك',
    description: `Steak Seasoning${description}`,
    descriptionAr: `ستيك${descriptionAr}`,
    image: 'img/Steak-Seasoning.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },
  {

    name: 'Turmeric Ground',
    nameAr: 'كركم',
    description: `Turmeric Ground${description}`,
    descriptionAr: `كركم${descriptionAr}`,
    image: 'img/Turmeric-Ground.jpg',
    category: 'wholesale',
    subcategory: 'pints',
    packaging: 'Pint',
    packagingAr: 'علب'
  },

  // // Wholesale - Gallons
  {

    name: 'Chili Powder',
    nameAr: 'شيلي بودرة',
    description: 'Made from ground red peppers, adds vibrant color and gentle, sweet flavor to roasted meats and sauces.',
    descriptionAr: 'مصنوعة من الفلفل الأحمر المطحون، تضيف لوناً نابضاً ونكهة لطيفة وحلوة للحوم المشوية والصلصات.',
    image: 'img/chili.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Cumin Seed Ground',
    nameAr: 'كمون مطحون',
    description: 'Cumin Seed Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كمون مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cumin.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Pepper Black Ground',
    nameAr: 'فلفل اسود مطحون',
    description: `Pepper Black Ground${description}`,
    descriptionAr: `فلفل اسود مطحون${descriptionAr}`,
    image: 'img/pepper-black-ground.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Curry Powder',
    nameAr: 'كاري بودرة',
    description: 'Curry Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كاري بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/curry.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Paprika',
    nameAr: 'بابريكا',
    description: `Paprika${description}`,
    descriptionAr: `بابريكا${descriptionAr}`,
    image: 'img/paprika.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Oregano Whole',
    nameAr: 'اوريغانو',
    description: `Oregano Whole${description}`,
    descriptionAr: `اوريغانو${descriptionAr}`,
    image: 'img/oregano.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Fine Ground Garlic Powder',
    nameAr: 'ثوم مطحون بودرة',
    description: `Fine Ground Garlic Powder${description}`,
    descriptionAr: `ثوم مطحون بودرة${descriptionAr}`,
    image: 'img/garlic.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Onion Granulated',
    nameAr: 'بصل مطحون',
    description: 'Onion Granulated is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بصل مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/onion.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Lemon Pepper',
    nameAr: 'ليمون مع فلفل',
    description: `Lemon Pepper${description}`,
    descriptionAr: `ليمون مع فلفل${descriptionAr}`,
    image: 'img/Lemon-Pepper.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Lemon Pepper',
    nameAr: 'ليمون مع فلفل',
    description: `Lemon Pepper${description}`,
    descriptionAr: `ليمون مع فلفل${descriptionAr}`,
    image: 'img/Lemon-Pepper.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'CAJUN SEASONING',
    nameAr: 'كيجن',
    description: `CAJUN SEASONING${description}`,
    descriptionAr: `كيجن${descriptionAr}`,
    image: 'img/cajun.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: ' Pepper Black Ground Fine',
    nameAr: 'فلفل اسود ناعم',
    description: `Pepper Black Ground Fine${description}`,
    descriptionAr: `فلفل اسود ناعم${descriptionAr}`,
    image: 'img/pepper-black-ground.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Pepper Red - Ground (Cayenne)',
    nameAr: 'كايين',
    description: `Pepper Red - Ground (Cayenne)${description}`,
    descriptionAr: `كايين${descriptionAr}`,
    image: 'img/Pepper-Red.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Pepper Red Crushed',
    nameAr: 'فلفل احمر مبروش',
    description: `Pepper Red Crushed${description}`,
    descriptionAr: `فلفل احمر مبروش${descriptionAr}`,
    image: 'img/Pepper-Red-Crushed.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },
  {

    name: 'Pepper Black Butcher Block',
    nameAr: 'فلفل اسود خشن',
    description: `Pepper Black Butcher Block${description}`,
    descriptionAr: `فلفل اسود خشن${descriptionAr}`,
    image: 'img/pepper-black.jpg',
    category: 'wholesale',
    subcategory: 'gallons',
    packaging: 'Gallons',
    packagingAr: 'غالون'
  },


  // Wholesale - Buckets
  {

    name: 'CAJUN SEASONING PAIL',
    nameAr: 'كيجن',
    description: `CAJUN SEASONING PAIL${description}`,
    descriptionAr: `كيجن${descriptionAr}`,
    image: 'img/Badia-Cajun-Seasoning-Pail.jpeg',
    category: 'wholesale',
    subcategory: 'buckets',
    packaging: 'Buckets',
    packagingAr: 'دلو'
  },
  {

    name: 'FAJITA SEASONING PAIL',
    nameAr: 'فاهيتا',
    description: `FAJITA SEASONING PAIL${description}`,
    descriptionAr: `فاهيتا${descriptionAr}`,
    image: 'img/Badia-Fajita-Seasoning-Pail.jpeg',
    category: 'wholesale',
    subcategory: 'buckets',
    packaging: 'Buckets',
    packagingAr: 'دلو'
  },
  {

    name: 'Paprika',
    nameAr: 'بابريكا',
    description: `Paprika${description}`,
    descriptionAr: `بابريكا${descriptionAr}`,
    image: 'img/Badia-Paprika-Pail.jpeg',
    category: 'wholesale',
    subcategory: 'buckets',
    packaging: 'Buckets',
    packagingAr: 'دلو'
  },
  {

    name: 'GRANULATED GARLIC PAIL',
    nameAr: 'ثوم مطحون',
    description: `GRANULATED GARLIC PAIL${description}`,
    descriptionAr: `ثوم مطحون${descriptionAr}`,
    image: 'img/Badia-Granulated-Garlic-Pail.jpeg',
    category: 'wholesale',
    subcategory: 'buckets',
    packaging: 'Buckets',
    packagingAr: 'دلو'
  },
  {

    name: 'Paprika smoked pail',
    nameAr: 'بابريكا مدخن',
    description: `Paprika smoked pail${description}`,
    descriptionAr: `بابريكا مدخن${descriptionAr}`,
    image: 'img/Paprika-smoked-PAIL.jpeg',
    category: 'wholesale',
    subcategory: 'buckets',
    packaging: 'Buckets',
    packagingAr: 'دلو'
  },
  {

    name: 'GROUND BLACK PEPPER PAIL',
    nameAr: 'فلفل اسود مطحون',
    description: `GROUND BLACK PEPPER PAIL${description}`,
    descriptionAr: `فلفل اسود مطحون${descriptionAr}`,
    image: 'img/GROUND-BLACK-PEPPER-PAIL.jpeg',
    category: 'wholesale',
    subcategory: 'buckets',
    packaging: 'Buckets',
    packagingAr: 'دلو'
  },
  {

    name: 'Onion Granulated',
    nameAr: 'بصل مطحون',
    description: `Onion Granulated${description}`,
    descriptionAr: `بصل مطحون${descriptionAr}`,
    image: 'img/Onion-Granulated-pail.jpeg',
    category: 'wholesale',
    subcategory: 'buckets',
    packaging: 'Buckets',
    packagingAr: 'دلو'
  },
  // {
  //
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

  // Retail - Standard
  {

    name: 'Cajun Seasoning',
    nameAr: 'كيجين',
    description: 'Cajun Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كيجين من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cajun.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Chile & Lime',
    nameAr: 'شيلي لايم',
    description: 'Chile & Lime is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'شيلي لايم من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Chile-Lime.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Chili Powder',
    nameAr: 'شيلي بودرة',
    description: 'Made from ground red peppers, adds vibrant color and gentle, sweet flavor to roasted meats and sauces.',
    descriptionAr: 'مصنوعة من الفلفل الأحمر المطحون، تضيف لوناً نابضاً ونكهة لطيفة وحلوة للحوم المشوية والصلصات.',
    image: 'img/chili.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Chipotle Ground',
    nameAr: 'شيلي بودرة',
    description: 'Chipotle Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'شيبوتلي مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Chipotle-Ground.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Cinnamon Powder',
    nameAr: 'قرفة مطحونة',
    description: 'Cinnamon Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'قرفة بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cinnamon.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Cinnamon Sticks',
    nameAr: 'قرفة مطحونة',
    description: 'Cinnamon Sticks is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'قرفة اعواد من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Cinnamon-Sticks.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Complete Seasoning',
    nameAr: 'الخلطة المتكاملة',
    description: 'Complete Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'خلطة متكاملة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/complete-seasoning.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Coriander Ground',
    nameAr: 'كزبرة مطحونة',
    description: 'Coriander Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كزبرة مطحونة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/coriander.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Cumin Seed Ground',
    nameAr: 'كمون مطحون',
    description: 'Cumin Seed Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كمون مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cumin.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Curry Powder',
    nameAr: 'كاري بودرة',
    description: 'Curry Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كاري بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/curry.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Fajita Seasoning',
    nameAr: 'فاهيتا',
    description: 'FAJITA SEASONING PAIL is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'فاهيتا من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/fajita.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Garlic Powder',
    nameAr: 'ثوم بودرة',
    description: 'Fine Ground Garlic Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'ثوم بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/garlic.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {
    id: '1c1',
    name: 'Garlic Salt',
    nameAr: 'ثوم مع ملح ',
    description: 'Garlic Salt is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'ثوم مع ملح من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Garlic-Salt.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Ginger Ground',
    nameAr: 'زنجبيل مطحون',
    description: 'Ginger Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'زنجبيل مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/giner.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Onion Powder',
    nameAr: 'بصل بودرة',
    description: 'Onion Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بصل بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/onion-powder.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Oregano Whole',
    nameAr: 'اوريغانو',
    description: `Oregano Whole${description}`,
    descriptionAr: `اوريغانو${descriptionAr}`,
    image: 'img/oregano.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Paprika',
    nameAr: 'بابريكا',
    description: `Paprika${description}`,
    descriptionAr: `بابريكا${descriptionAr}`,
    image: 'img/paprika.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Paprika Smoked',
    nameAr: 'بابريكا مدخن',
    description: `Paprika Smoked${description}`,
    descriptionAr: `بابريكا مدخن${descriptionAr}`,
    image: 'img/paprika-smoked.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Pepper Black Ground',
    nameAr: 'فلفل اسود مطحون',
    description: `Pepper Black Ground${description}`,
    descriptionAr: `فلفل اسود مطحون${descriptionAr}`,
    image: 'img/pepper-black-ground.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Pepper Ground Cayenne',
    nameAr: 'فلفل كايين',
    description: `Pepper Ground Cayenne${description}`,
    descriptionAr: `فلفل كايين${descriptionAr}`,
    image: 'img/Pepper-Cayenne.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Pepper Ground White',
    nameAr: 'فلفل ابيض مطحون',
    description: `Pepper Ground White${description}`,
    descriptionAr: `فلفل ابيض مطحون${descriptionAr}`,
    image: 'img/Pepper-Ground-White.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Sazón Tropical ® w/ Annatto & Coriander',
    nameAr: 'تروبيكال',
    description: `Sazón Tropical ® w/ Annatto & Coriander${description}`,
    descriptionAr: `تروبيكال${descriptionAr}`,
    image: 'img/Sazon-with-Coriander-And-Annatto.jpg',
    category: 'retail',
    subcategory: 'standard'
  },
  {

    name: 'Seasoned Salt',
    nameAr: 'بهار بطاطا',
    description: `Seasoned Salt${description}`,
    descriptionAr: `بهار بطاطا${descriptionAr}`,
    image: 'img/Seasoned-Salt.jpg',
    category: 'retail',
    subcategory: 'standard'
  },

  // Retail - Sauces
  {

    name: 'CHIPOTLE MILD SAUCE',
    nameAr: 'صلصة شيبوتلي',
    description: 'CHIPOTLE MILD SAUCE is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'صلصة شيبوتلي من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/CHIPOTLE-MILD-SAUCE.jpg',
    category: 'retail',
    subcategory: 'sauces'
  },
  {

    name: 'LOUISIANA CAJUN HOT SAUCE',
    nameAr: 'صلصة كيجن حارة ',
    description: 'LOUISIANA CAJUN HOT SAUCE is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'صلصة كيجن حارة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/LOUISIANA-CAJUN-HOT-SAUCE.jpg',
    category: 'retail',
    subcategory: 'sauces'
  },
  {

    name: 'SRIRACHA CHILI SAUCE',
    nameAr: 'صلصة سيراتشا',
    description: 'SRIRACHA CHILI SAUCE is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'صلصة سيراتشا من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/SRIRACHA-CHILI-SAUCE.jpg',
    category: 'retail',
    subcategory: 'sauces'
  },

  // Retail - Special
  {

    name: '14 Spices/ All Purpose Seasoning',
    nameAr: '14 بهار',
    description: '14 Spices/ All Purpose Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: '14 بهار من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/14-Spices.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Barbecue Spice',
    nameAr: 'بهار مشاوي',
    description: 'Barbecue Spice is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بهار مشاوي من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Barbecue-Spice.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Black Garlic Pink Salt',
    nameAr: 'ثوم اسود مع هيملايا',
    description: 'Black Garlic Pink Salt is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'ثوم اسود مع هيملايا من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Black-Garlic-Pink-Salt.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Black Garlic Seasoning',
    nameAr: 'ثوم اسوم مشكل',
    description: 'Black Garlic Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'ثوم اسوم مشكل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Black-Garlic-Seasoning.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Brisket Rub Seasoning',
    nameAr: 'بهار بريسكيت',
    description: 'Brisket Rub Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بهار بريسكيت من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Brisket-Rub-Seasoning.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Chile & Lime',
    nameAr: 'شيلي لايم',
    description: 'Chile & Lime is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'شيلي لايم من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Chile-Lime.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Cilantro Lime Pepper Salt',
    nameAr: 'خليط لايم مع بقنونس وفلفل',
    description: 'Cilantro Lime Pepper Salt is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'خليط لايم مع بقنونس وفلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Cilantro-Lime-Pepper-Salt.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Complete Seasoning',
    nameAr: 'الخلطة المتكاملة',
    description: 'Complete Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'خلطة متكاملة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/complete-seasoning.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Italian Seasoning',
    nameAr: 'بهار ايطالية',
    description: 'Italian Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'بهار ايطالية من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/italian.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Lemon Pepper',
    nameAr: 'ليمون مع فلفل',
    description: `Lemon Pepper${description}`,
    descriptionAr: `ليمون مع فلفل${descriptionAr}`,
    image: 'img/Lemon-Pepper.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Lime pepper',
    nameAr: 'لايم مع فلفل',
    description: 'Lime pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'لايم مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/lime.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Mango Pepper',
    nameAr: 'منجو مع فلفل',
    description: 'Mango Pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'منجو مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/mango.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Orange Pepper',
    nameAr: 'برتقال مع فلفل',
    description: 'Orange Pepper is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'برتقال مع فلفل من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/Orange-Pepper.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Oregano Whole',
    nameAr: 'اوريغانو',
    description: `Oregano Whole${description}`,
    descriptionAr: `اوريغانو${descriptionAr}`,
    image: 'img/oregano.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Pepper Black Butcher Block',
    nameAr: 'فلفل اسود خشن',
    description: `Pepper Black Butcher Block${description}`,
    descriptionAr: `فلفل اسود خشن${descriptionAr}`,
    image: 'img/pepper-black.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Poultry Seasoning',
    nameAr: 'بهار دجاج',
    description: `Poultry Seasoning${description}`,
    descriptionAr: `بهار دجاج${descriptionAr}`,
    image: 'img/Poultry-Seasoning.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Red Lobster - Seafood Seasoning',
    nameAr: 'بهار دجاج',
    description: `Red Lobster - Seafood Seasoning${description}`,
    descriptionAr: `بهار دجاج${descriptionAr}`,
    image: 'img/Red-Lobster-Seafood-Seasoning.png',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Sazon with Coriander and Annatto',
    nameAr: 'سيزون',
    description: `Sazon with Coriander and Annatto${description}`,
    descriptionAr: `سيزون${descriptionAr}`,
    image: 'img/Sazon.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Seafood Seasoning Creole Blend',
    nameAr: 'سمك',
    description: `Seafood Seasoning Creole Blend${description}`,
    descriptionAr: `سمك${descriptionAr}`,
    image: 'img/Seafood-Seasoning-Creole-Blend.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Steak Seasoning',
    nameAr: 'ستيك',
    description: `Steak Seasoning${description}`,
    descriptionAr: `ستيك${descriptionAr}`,
    image: 'img/Steak-Seasoning.jpg',
    category: 'retail',
    subcategory: 'special'
  },
  {

    name: 'Sumac',
    nameAr: 'سماق',
    description: `Sumac${description}`,
    descriptionAr: `سماق${descriptionAr}`,
    image: 'img/Sumac.jpg',
    category: 'retail',
    subcategory: 'special'
  },

  // // Retail - Economy
  {

    name: 'Chili Powder',
    nameAr: 'شيلي بودرة',
    description: 'Made from ground red peppers, adds vibrant color and gentle, sweet flavor to roasted meats and sauces.',
    descriptionAr: 'مصنوعة من الفلفل الأحمر المطحون، تضيف لوناً نابضاً ونكهة لطيفة وحلوة للحوم المشوية والصلصات.',
    image: 'img/chili.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Complete Seasoning',
    nameAr: 'الخلطة المتكاملة',
    description: 'Complete Seasoning is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'خلطة متكاملة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/complete-seasoning.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Cumin Seed Ground',
    nameAr: 'كمون مطحون',
    description: 'Cumin Seed Ground is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كمون مطحون من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/cumin.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Curry Powder',
    nameAr: 'كاري بودرة',
    description: 'Curry Powder is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'كاري بودرة من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/curry.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Fajita Seasoning',
    nameAr: 'فاهيتا',
    description: 'FAJITA SEASONING PAIL is a premium spice that adds a rich and unique flavor to your dishes. Perfect for various recipes.',
    descriptionAr: 'فاهيتا من أجود أنواع التوابل لإضافة نكهة مميزة وغنية لأطباقك. مثالي للاستخدام مع مختلف الوصفات.',
    image: 'img/fajita.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Oregano Whole',
    nameAr: 'اوريغانو',
    description: `Oregano Whole${description}`,
    descriptionAr: `اوريغانو${descriptionAr}`,
    image: 'img/oregano.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Parsley Flakes',
    nameAr: 'بقدونس مجففة',
    description: `Parsley Flakes${description}`,
    descriptionAr: `بقدونس مجففة${descriptionAr}`,
    image: 'img/parsley.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Pepper Red Crushed',
    nameAr: 'فلفل احمر مبروش',
    description: `Pepper Red Crushed${description}`,
    descriptionAr: `فلفل احمر مبروش${descriptionAr}`,
    image: 'img/Pepper-Red-Crushed.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Pepper Black Ground',
    nameAr: 'فلفل اسود مطحون',
    description: `Pepper Black Ground${description}`,
    descriptionAr: `فلفل اسود مطحون${descriptionAr}`,
    image: 'img/pepper-black-ground.jpg',
    category: 'retail',
    subcategory: 'economy'
  },
  {

    name: 'Rotisserie Chicken Seasoning',
    nameAr: 'دجاج مشوي',
    description: `Rotisserie Chicken Seasoning${description}`,
    descriptionAr: `دجاج مشوي${descriptionAr}`,
    image: 'img/Rotisserie-Chicken-Seasoning.jpg',
    category: 'retail',
    subcategory: 'economy'
  },

  // Retail - Mexican Line
  {

    name: 'Ancho',
    nameAr: 'أنشو',
    description: `Ancho${description}`,
    descriptionAr: `أنشو${descriptionAr}`,
    image: 'img/Ancho.jpg',
    category: 'retail',
    subcategory: 'mexican'
  },
  {

    name: 'Arbol',
    nameAr: 'أربول',
    description: `Arbol${description}`,
    descriptionAr: `أربول${descriptionAr}`,
    image: 'img/Arbol.jpg',
    category: 'retail',
    subcategory: 'mexican'
  },
  {

    name: 'California',
    nameAr: 'كاليفورنيا',
    description: `California${description}`,
    descriptionAr: `كاليفورنيا${descriptionAr}`,
    image: 'img/California.jpg',
    category: 'retail',
    subcategory: 'mexican'
  },
  {

    name: 'Chipotle',
    nameAr: 'كاليفورنيا',
    description: `Chipotle${description}`,
    descriptionAr: `كاليفورنيا${descriptionAr}`,
    image: 'img/Chipotle.jpg',
    category: 'retail',
    subcategory: 'mexican'
  },
  {

    name: 'Guajillo',
    nameAr: 'غواخيلو',
    description: `Guajillo${description}`,
    descriptionAr: `غواخيلو${descriptionAr}`,
    image: 'img/Guajillo.jpg',
    category: 'retail',
    subcategory: 'mexican'
  },
  {

    name: 'Japones (Red Chili Pepper)',
    nameAr: 'الياباني (فلفل أحمر حار)',
    description: `Japones (Red Chili Pepper)${description}`,
    descriptionAr: `الياباني (فلفل أحمر حار)${descriptionAr}`,
    image: 'img/Japones.jpg',
    category: 'retail',
    subcategory: 'mexican'
  },
  {

    name: 'New Mexico',
    nameAr: 'نيو مكسيكو',
    description: `New Mexico${description}`,
    descriptionAr: `نيو مكسيكو${descriptionAr}`,
    image: 'img/New-Mexico.jpg',
    category: 'retail',
    subcategory: 'mexican'
  },
  {

    name: 'Pasilla (Negro Largo)',
    nameAr: 'باسيا (نيغرو لارغو)',
    description: `Pasilla (Negro Largo)${description}`,
    descriptionAr: `باسيا (نيغرو لارغو)${descriptionAr}`,
    image: 'img/Pasilla.jpg',
    category: 'retail',
    subcategory: 'mexican'
  },
  // Additional Standard Products
  // {
  //
  //   name: 'Poultry Seasoning',
  //   nameAr: 'توابل الدواجن',
  //   description: 'Aromatic blend of sage, thyme, rosemary, and marjoram. Enhances chicken and turkey with classic savory notes.',
  //   descriptionAr: 'خليط عطري من الميرمية والزعتر وإكليل الجبل والمردقوش. يعزز الدجاج والديك الرومي بنكهات مالحة كلاسيكية.',
  //   image: 'https://images.pexels.com/photos/4198963/pexels-photo-4198963.jpeg',
  //   category: 'retail',
  //   subcategory: 'standard'
  // },
  // {
  //
  //   name: 'Canadian Steak Seasoning',
  //   nameAr: 'توابل الستيك الكندية',
  //   description: 'Bold blend of coarse spices with black pepper, dill seed, and garlic. Creates savory crust on steaks.',
  //   descriptionAr: 'خليط جريء من التوابل الخشنة مع الفلفل الأسود وبذور الشبت والثوم. ينشئ قشرة مالحة على الستيك.',
  //   image: 'https://images.pexels.com/photos/4198964/pexels-photo-4198964.jpeg',
  //   category: 'retail',
  //   subcategory: 'standard'
  // }
];
const products = generateUniqueIds(rawProducts);

// Global variables
let currentLanguage = 'en';
let currentCategory = 'all';
let currentSubcategory = '';
let filteredProducts = [...products];

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
  renderProducts(products);
  updateProductCount(products.length);

  // Setup search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearch);


  const productsGrid = document.getElementById('productsGrid');

  function renderProducts(filteredProducts) {
    if (productsGrid) {
      productsGrid.innerHTML = ''; // Clear previous products
      if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
          const productCard = generateProductCard(product);
          productsGrid.innerHTML += productCard;
        });
      } else {
        productsGrid.innerHTML = `
                    <div class="col-12 text-center">
                        <p data-translate="no_products">No products found.</p>
                        <p data-translate="try_different">Try a different category or search term.</p>
                    </div>
                `;
      }
    }
  }

  // Call renderProducts with the initial products data
  renderProducts(products);
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

function renderProducts(filteredProducts) {
  if (productsGrid) {
    productsGrid.innerHTML = ''; // Clear previous products
    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        const productCard = generateProductCard(product);
        productsGrid.innerHTML += productCard;
      });
    } else {
      productsGrid.innerHTML = `
            <div class="col-12 text-center">
                <p data-translate="no_products">No products found.</p>
                <p data-translate="try_different">Try a different category or search term.</p>
            </div>
        `;
    }
  }
}

// Initial render
// renderProducts(products);

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
        
        <div class="card-body text-center">
          <h5 class="card-title ${isArabic ? 'font-cairo' : ''}">${name}</h5>
        
          
       <a class="t" href="#" aria-label="5 Oz LEARN MORE" data-uw-rm-vglnk="" uw-rm-vague-link-id="#" data-uw-rm-brl="PR" data-uw-original-href="#">  <span class="component-text">LEARN MORE</span> </a>

        </div>
      </div>
    </div>
  `;
  //?  <p class="card-text ${isArabic ? 'font-cairo' : ''}">${description}</p>
}


function generateProductCard(product) {
  const isArabic = document.documentElement.lang === "ar";
  const learnMore = isArabic ? "شوف أكتر" : "Learn More";
  const name = isArabic ? product.nameAr : product.name;
  const description = isArabic ? product.descriptionAr : product.description;
  const packaging = isArabic ? product.packagingAr : product.packaging;

  return `
      <div class="col-lg-4 col-md-6 mb-4 " id="${product.id}">
        <div class="card h-100 product-card radius">
          <img src="${product.image}" class="card-img-top" alt="${name}" />
            <h5 class="card-title" data-translate="${product.name}">${name}</h5>
          <div class="card-body text-center">
            <a href="detail_product.html?id=${product.id}" class="t">${learnMore}</a>
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

  // if (isArabic) {
  //   countElement.textContent = `عرض ${count} من ${products.length} منتج`;
  // } else {
  //   countElement.textContent = `Showing ${count} of ${products.length} products`;
  // }
}

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


  // Re-render products with new language
  renderProducts(filteredProducts);
  updateProductCount(filteredProducts.length);

  // Update all translatable elements
  updateTranslations(lang);
}



// Initialize language on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

  // Set initial language without triggering event
  changeLanguage(savedLanguage);
});


// Update translations (basic implementation)
function updateTranslations(lang) {
  const translations = {
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_products: 'Products',
      nav_shop: 'Shop',
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
      gallons: 'Gallons',
      buckets: 'Buckets',
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
      nav_shop: 'المتجر',
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
      gallons: 'غالون',
      buckets: 'دلو',
      standard: 'ستاندر',
      sauces: 'صوصات',
      special: 'سبيشيل',
      economy: 'اقتصادي',
      mexican: 'المكسيكي',
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