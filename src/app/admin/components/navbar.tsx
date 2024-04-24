"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/agencies', label: 'Agencies' },
]

export default function Navbar() {
    return (
        <nav className="bg-slate-100 flex justify-between items-center py-4 px-20">
            <div>
                <span className="font-semibold text-xl">Way2Go admin</span>
            </div>
            <div>
                {links.map(link => (
                    <NavbarLink key={link.href} href={link.href}>
                        {link.label}
                    </NavbarLink>
                ))}
            </div>
        </nav>
    )
}

function NavbarLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mx-4">
            <Link href={href} passHref className="text-slate-700 hover:text-slate-900" prefetch={true}>
                {children}
            </Link>
        </motion.div>
    )
}