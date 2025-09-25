'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const routes = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Blogs', href: '/blog'},
  ]

  return (
    <nav className="fixed w-full h-8 inline-flex gap-6 p-1 pl-8 bg-gray-100">
      {routes.map(route=>(
        <Link 
        key={route.href}
        href={route.href}
        className={`text-lg hover:text-blue-600 ${pathname === route.href?
          'underline font-semibold text-blue-600' :
          'text-blue-500'
        }`}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  )
}
