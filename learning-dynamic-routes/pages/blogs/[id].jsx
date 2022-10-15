import React from 'react'
import Layout from '../../components/Layout'
import { getBlogPostIds } from '../../lib/helper'

export const getStaticPaths = async ()=>{
  const paths  = await getBlogPostIds();

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async ({params}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};


const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <section>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </section>
    </Layout>
  )
}

export default BlogPost