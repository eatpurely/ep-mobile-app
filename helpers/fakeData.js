import moment from 'moment';

export const meals = num => Array(num).fill().map((n , i)=> ({
  id: i,
  imageUrl: 'https://i.imgur.com/q8kBIk0.jpg',
  title: 'Chicken Tikka Masala',
  ingredientsList: 'Coconut Masala Sauce, Roasted Vegetables, White Rice',
  dietaryCategoriesList: 'Dairy free, gluten free, nut free',
  cartOptions: [
    {id:1, schedule: 'Lunch', price: 8.99, calories: 320},
    {id:2, schedule: 'Dinner', price: 12.99, calories: 640},
  ],
  about: "Tender pieces of chicken are slowly simmered in a creamy tomato-coconut milk masala sauce to create our take on an Indian classic.",
  reviews: [
    "Amazing dish! Love the flavors, and the portion size is perfect.",
    "The rice compliments the chicken perfectly and the sauce is seasoned to perfection!",
    "My favorite Eat Purely dish by far!"
  ],
  preparation:{
    oven: [
    "Remove plastic lid.",
    "Cover with aluminum foil and back at 375° for 10 - 12 minutes, or until hot.",
    "Enjoy!"
    ],
    microwave: [
      "Remove plastic lid.",
      "Microwave on high 2 minutes.",
      "Enjoy!"
    ]
  },
  nutrition: {
    lunch: {
      calories: '560g',
      carbohydrarts: '29g',
      protien: '32g',
      sugar: '10g',
      sodium: '560g',
      fiber: '24g',
      fat: '18g'
    },
    dinner: {
      calories: '860g',
      carbohydrarts: '39g',
      protien: '42g',
      sugar: '20g',
      sodium: '660g',
      fiber: '74g',
      fat: '38g'    
    }
  }
}));

export const days = () => Array(6).fill().map((d,i) => moment().add(i,'days')
  .calendar(null, {
    sameDay: '[Today], MMMM D',
    nextDay: '[Tomorrow], MMMM D',
    nextWeek: 'dddd, MMMM D',
    sameElse: 'dddd, MMMM D'
}));

export const addresses = ['2413 Lee St.', '1709 W. Washington']
