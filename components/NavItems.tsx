'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Companions', href: '/companions' },
  { label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className={cn(pathname === href && 'text-primary font-semibold')}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default NavItems;
