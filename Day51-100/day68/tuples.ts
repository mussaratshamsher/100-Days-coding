
// Tuple: typed Array

//Defining a tuple type
let article: [number , string, boolean] = [11, "Play 1", true];

//Assiging new value
article = [12, "Play Again", false];

//Pushing new element
article.push("Turn Again");
console.log(article);

//Using readonly property with Tuple
let newArticle: readonly[number, string, boolean] = [20, "Play2", true];

//Pushing new element into the array
//newArticle.push(80) throws error due to readonly poperty


//Destructuring the tuple into individual variables
const [id, title, published] = article;

console.log(id);
console.log(title);
console.log(published);


