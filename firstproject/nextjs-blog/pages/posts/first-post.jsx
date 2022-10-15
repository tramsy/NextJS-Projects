import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout, { siteTitle } from "../../components/Layout";
import { getProducts } from "../../lib/fetch-products";

// import Script from 'next/script';
// import useSWR from 'swr'


export async function getStaticProps(){
  const allProducts = await getProducts();
  return {
    props:{
      allProducts
    }
  }
}

// using the useSwR (This is for client side dynamic data rendering)
// const FirstPost = () => {


//   const {data, error}  = useSWR("fakestoreapi.com/products", getProducts);

//   console.log('data', data);
//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>

//   return (
//     <Layout home={false}>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       {/* <Script 
//             src="https://connect.facebook.net/en_US/sdk.js"
//             strategy="lazyOnload"
//             onLoad={()=>console.log("Facebook SDK is loaded")}
//   /> */}
//     </Layout>
//   );
// };

// export default FirstPost;


const FirstPost = ({ allProducts  }) => {
  console.log('allProducts', allProducts);
  return (
    <Layout home={false}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <Script 
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={()=>console.log("Facebook SDK is loaded")}
  /> */}
    </Layout>
  );
};
export default FirstPost;