// Blog page (content fo blog) | PAge router
import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post: any)=>(
    {
      params: {id: post.id.toString()},
    }
  ));

  return {paths, fallback: false};
}

export async function getStaticProps({params}:{params: {id: string}}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {props: {post},};
}

export default function BlogPost({post}: {post: any}){
  return(
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4">{post.body}</p>

      <Link href="/blog" className="text-blue-600 hover:underline mt-4 block">
        ← Back to Blog
      </Link>
    </div>
  )
}