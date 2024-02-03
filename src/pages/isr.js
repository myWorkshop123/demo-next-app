// pages/isr-example.js

import { URL } from "@/constant";
import getRandomInt from "@/util";

const Comp1 = () => {
    return (
        <h1> Incremental Static Regeneration Example </h1>
    )
}

const Comp2 = ({ product }) => {
    return (
        <div>
          <h2>Name: {product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      );

}
const ISRExample = ({ product }) => {
    return (
        <div>
            <Comp1 /> 
            <Comp2 product={product} />
        </div>
    )
  };
  
  export async function getStaticProps() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    
    try {
    //   const url = `https://dummyjson.com/products/${getRandomInt(1, 100)}`;
    //   const url = `https://dummyjson.com/todos/random`;
    //   const url = `http://localhost:3004/posts/1`;
    //   const url = `h~ttp://0.0.0.0:1234/products/1`;
      const url = `https://kartikkumar.pythonanywhere.com/products/1`;
      const response = await fetch(url, requestOptions);
      const productData = await response.json();
  
      return {
        props: {
          product: productData,
        },
        revalidate: 30, // Re-fetch and re-generate the page every 60 seconds
      };
    } catch (error) {
      console.error('Error fetching product data:', error);
      return {
        props: {
          product: null,
        },
        revalidate: 30, // Retry after 60 seconds even if there's an error
      };
    }
  }
  
  export default ISRExample;
  