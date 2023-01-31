import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import  Post  from "@/components/Header/Post";
import SortByDate from "../utils";

export default function Home({ posts }: any) {
  // console.log(posts)
  return(
  <>
  {
    posts.map((post:any,index:number)=>{
      return(
        <>
        <Post key={index} post={post}/>
        </>
      )
    })
  }
  
  </>);
}



export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const slug = filename.replace(`.md`, "");

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts:posts.sort(SortByDate),
    },
  };
}


