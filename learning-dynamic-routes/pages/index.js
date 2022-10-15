import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogTitle";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};


const  filterPosts = (data, limit) =>{
  const filteredArr =  data.filter((item, indx) => {
    if (indx < limit) {
      return item;
    }
  })
  return filteredArr
}

export default function Home({ data }) {
  const [numberOfPosts, setNumberOfPosts] = useState(5)
  const [activeData, setActiveData] = useState([]);

  

  const onLoadMore = ()=>{
    setNumberOfPosts(numberOfPosts + 5)
  }

  useEffect(()=>{
    setActiveData(filterPosts(data, numberOfPosts));
  }, [numberOfPosts, data])


  return (
    <Layout pageTitle={"Next Blogs"}>
      <section className="blogs">
          {activeData?.map((item) => (
          <BlogPost key={item.id} {...item} />
        ))}
        <button className="btn" onClick={onLoadMore}> load more... </button>
      </section>
    </Layout>
  );
}
