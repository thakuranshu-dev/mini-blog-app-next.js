import Link from 'next/link';

export default async function BlogPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 mt-5">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li 
          key={post.id} 
          title={`Blog post ${post.id}`}
          className="border border-blue-500 p-4 rounded visited:text-purple-600 hover:bg-gray-100 ">
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
