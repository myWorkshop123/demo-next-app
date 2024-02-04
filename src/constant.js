import getRandomInt from "@/util";

// export const URL = `http://0.0.0.0:1234/products/1`;
// export const URL = `https://dummyjson.com/products/${getRandomInt(1, 100)}`;
export const BASE = `https://kartikkumar.pythonanywhere.com/products`
export const URL = `${BASE}/${getRandomInt(1, 10)}`