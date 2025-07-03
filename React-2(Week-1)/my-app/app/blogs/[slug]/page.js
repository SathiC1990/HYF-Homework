"use client";
import { usePathname } from "next/navigation";

export default function BlogPage() {
  const pathName = usePathname();
  const slug = pathName.split("/").pop();
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div>
      <h1>{title}</h1>
      <p>This is the content of the blog post with slug: {slug}</p>
    </div>
  );
}
