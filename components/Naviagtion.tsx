import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  
];

export default function Navigation() {
  return (
    <div className="flex justify-center mb-5">
      <div>
        {navItems.map((item) => (
          <Link key={item.href} 
          href={item.href} 
          className={`mx-9 hover:underline hover:text-blue-600 ,
          Active:text-red-600`}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
