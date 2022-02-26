let ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4}, 
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
];

//a  average Rating for all restaurants
// Set unique values from a given list 

var averageArr = [];
Array.from(new Set(ratingData.map(({restaurant}) => restaurant))).map(restaurantName => {
    const filteredratingData = ratingData.filter(obj => obj.restaurant == restaurantName);
   
    let requiredObj = {
        restaurant: restaurantName,
        averageRating: filteredratingData.reduce((prev,next) => prev + next.rating,0)/ filteredratingData.length
    }
    averageArr.push(requiredObj);
});

console.log(averageArr);

//b all restaurants with average rating greater than 4.

const avg4 = averageArr.filter(item => item.averageRating >= 4);
console.log(avg4);