export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  source?: string;
  featured?: boolean;
  status: "active" | "archived" | "experiment";
  date?: string;
}

export const projects: Project[] = [
  {
    name: "Chacla.pe",
    description: "Digital hub for the district of Chaclacayo featuring a business directory, news, and community services.",
    tech: ["SvelteKit", "TypeScript", "Hono", "Supabase", "Cloudflare"],
    url: "https://chacla.pe",
    featured: true,
    status: "active",
  },
  {
    name: "Luda Pages",
    description: "Personal showcase with 2D and 3D explorations, including galleries and interactive demos.",
    tech: ["Svelte", "Three.js", "WebGL", "TypeScript"],
    url: "https://luda.pages.dev",
    featured: true,
    status: "active",
  },
  {
    name: "luisdavidgd.github.io",
    description: "This site. A personal developer digital garden built with Astro.",
    tech: ["Astro", "TypeScript", "Alpine.js"],
    source: "https://github.com/luisdavidgd/luisdavidgd.github.io",
    featured: false,
    status: "active",
  },
  {
    name: "Cheat Sheets",
    description: "A growing collection of quick reference notes and examples for different tools and frameworks.",
    tech: ["Markdown", "Astro"],
    url: "/cheatsheets",
    featured: false,
    status: "active",
  },
];
