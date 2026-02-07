/*
Problem-01: New Price for Eid Sale
⚠️ Function Name Must be newPrice()
আসন্ন ইদ উপলক্ষে তুমি তোমার দোকানের প্রোডাক্টে ডিসকাউণ্ট দিতে চাচ্ছ। কিন্তু প্রতিটা প্রোডাক্টের নতুন দাম আলাদা আলাদা হিসাব করতে গেলে ঝামেলা। তাই তুমি একটা ফাংশন বানাতে চাও, যা মূল দাম এবং ডিসকাউন্ট% নিলে নতুন দাম বের করে দেবে।

Input :  
প্রথম ইনপুট:  একটি সংখ্যা যা মূল দাম। currentPrice  হবে Number 
দ্বিতীয় ইনপুট: একটি সংখ্যা যা ডিসকাউন্ট। discount হবে Number in  %

Output :   ফাংশনটি ডিসকাউন্ট করে নতুন দাম return করবে।  Output দশমিক সংখ্যা ও হতে পারে।  দশমিক এর পর ৩ ঘর  দেখাতে হবে।
*/

function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }

  let discountTaka = (currentPrice * discount) / 100;
  let afterDiscountPrice = currentPrice - discountTaka;
  let newPrice = afterDiscountPrice.toFixed(3);
  return newPrice;
}
let result = newPrice(500, "5");
console.log(result);
