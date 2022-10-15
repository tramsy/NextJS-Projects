import Link from "next/link";
import React from "react";

const index = ({ id, title }) => {
  return (
    <>
      <div className="blog-name">
        <span className="blog-number">{id}</span>
        <Link href={`/blogs/${id}`}>
          <h5 className="blog-title">{title}</h5>
        </Link>
      </div>
      <style jsx>
        {`
          .blog-name {
            width: 90%;
            margin: 1em auto;
            display: flex;
            justify-content: space-around;
            align-items: center;

            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;
          }
          .blog-number {
            padding: 0.5em 1em;
            border-radius: 50%;
            background: cornflowerblue;
          }
          .blog-title {
            width: 70%;
            font-size: 20px;
            color: #121212;
            cursor: pointer;
          }
          .blog-title:hover {
            color: cornflowerblue;
          }
        `}
      </style>
    </>
  );
};

export default index;
