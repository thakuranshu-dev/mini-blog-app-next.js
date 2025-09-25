// Blog index page (list the links of blogs) | Page router
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return{
    props: {posts},
  };
}

export default function Blog ({posts}: {posts: any[]})  {
  return(
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id}
          className="">
            <Link href={`/blog/${post.id}`} 
            className="">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

