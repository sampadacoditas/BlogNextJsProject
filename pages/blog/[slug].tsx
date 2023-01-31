import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
const PostPage = ({
  content,
  frontMatter: { title, date, cover_image },
  content: any,
}: any) => {
  // console.log(paths)
  return <div>
    <Link href="/" className="btn btn-back">
        Go Back
    </Link>
    <div className="card card-page">
        <h1 className="post-title">
            {title}
        </h1>
    </div>
    <div className="post-date">
        posted On {date}
    </div>
    <img src={cover_image} alt="" />
    <div className="post-body">
    <div>{content}</div>
    </div>
   
    </div>;
};
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName: any) => {
    return {
      params: { slug: fileName.replace(`.md`, "") },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }: any) {
  // console.log(slug)
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  console.log(markdownWithMeta);
  const { data: frontMatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontMatter,
      content,
      slug,
    },
  };
}

export default PostPage;
