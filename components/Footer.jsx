import React from "react";

const links = [
  { href: "https://github.com/vivekadapa", label: "GitHub" },
  { href: "https://www.linkedin.com/in/vivekadapa", label: "LinkedIn" },
  { href: "https://leetcode.com/u/Vivek_Chaitanya/", label: "LeetCode" },
];

const Footer = () => {
  return (
    <footer className="pb-12">
      <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {links.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-4">
        © {new Date().getFullYear()} Vivek Adapa
      </p>
    </footer>
  );
};

export default Footer;
