import Head from 'next/head';
import React from 'react'
import Layout from '../../components/Layout';
import { getAllPostIds, getPostDataById } from '../../lib/read-posts';
import utilStyles from '../../styles/utils.module.css';


export const getStaticPaths = async ()=>{
    const paths = getAllPostIds();
    return {
        paths, 
        fallback: false,
    }
}

export const getStaticProps = async ({ params })=>{
   const postData = await getPostDataById(params.id);
   return {
    props: {
        postData,
    }
   }
}



const Post = ({ postData }) => {
  return (
    <Layout home={false}>
        <Head>
            <title>{ postData.title }</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export default Post