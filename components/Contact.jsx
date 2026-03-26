"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Code } from "lucide-react";

const links = [
  { href: "mailto:vivekchaitanya1324@gmail.com", label: "vivekchaitanya1324@gmail.com", icon: Mail },
  { href: "tel:+917680808622", label: "+91 7680808622", icon: Phone },
  { href: "https://www.linkedin.com/in/vivekadapa", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/vivekadapa", label: "GitHub", icon: Github },
  { href: "https://leetcode.com/u/Vivek_Chaitanya/", label: "LeetCode", icon: Code },
];

const Contact = () => {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6">
      <h2 className="text-2xl font-semibold mb-2">Get in touch</h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
        Open to roles and collaborations. Reach out via email, phone, or LinkedIn.
      </p>
      <div className="flex flex-wrap gap-4">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-600 px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Icon className="w-4 h-4" />
            {label}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
        <MapPin className="inline w-4 h-4 mr-1 -mt-0.5" />
        Warangal, Telangana, India
      </p>
    </div>
  );
};

export default Contact;
