import React from 'react'
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
export default function Post({post}:any){
  return (
    <div className={styles["card"]}>
        <img src={post.frontMatter.cover_image} alt="" />
        <div className={styles["post-date"]}>
            posted on {post.frontMatter.date}
        </div>
        <h3>
            {post.frontMatter.title}
        </h3>
        <p>
            {post.frontMatter.excerpt}
        </p>
       <Link href={`/blog/${post.slug}`}>
        <button className={styles['btn']}>
            Read More
        </button>
       </Link>
    </div>
  )
}
