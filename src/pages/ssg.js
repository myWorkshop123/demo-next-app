// pages/ssg-example.js

import { URL } from "@/constant";

const SSGExample = ({ product }) => {
  return (
    <div>
      <h1>Static Site Generation Example</h1>
      <h2>Name: {product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(URL);
    const productData = await response.json();

    return {
      props: {
        product: productData,
      },
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      props: {
        product: null,
      },
    };
  }
}

export default SSGExample;
