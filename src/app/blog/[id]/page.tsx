import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post: any) => (
    {
      id: post.id.toString(),
    }
  ));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!res.ok) 
    return notFound();

  const post = await res.json();

  return (
    <div className="p-6 h-screen flex flex-col justify-center items-center">
      <div className="p-4 rounded border border-blue-500">
        <h1 className="text-3xl text-left font-bold mb-4">{post.title}</h1>
        <div title={`Blog post ${post.id}`}
        className="bg-gray-100 p-4 rounded text-gray-900">
          <p className="mb-4 text-justify">{post.body}</p>
        </div>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 block text-left">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
