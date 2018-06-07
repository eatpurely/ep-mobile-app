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
  ]
}));

export const days = () => Array(6).fill().map((d,i) => moment().add(i,'days')
  .calendar(null, {
    sameDay: '[Today], MMMM D',
    nextDay: '[Tomorrow], MMMM D',
    nextWeek: 'dddd, MMMM D',
    sameElse: 'dddd, MMMM D'
}));

export const addresses = ['2413 Lee St.', '1709 W. Washington']
