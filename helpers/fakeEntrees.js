
export default fakeEntrees = num => Array(num).fill().map((n , i)=> ({
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
