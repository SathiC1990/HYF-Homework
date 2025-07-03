"use client";
import Link from "next/link";
import styles from "./Blogs.module.css";

const blogs = [
  {
    title: "My New Post",
    slug: "my-new-post",
  },
  {
    title: "My Second Post",
    slug: "my-second-post",
  },
  {
    title: "My Third Post",
    slug: "my-third-post",
  },
];
export default function Blogs() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.heading}>Blog Posts</h1>
        <ul className={styles.blogList}>
          {blogs.map((blog) => (
            <li key={blog.slug} className={styles.blogItem}>
              <Link href={`/blogs/${blog.slug}`} className={styles.blogLink}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
