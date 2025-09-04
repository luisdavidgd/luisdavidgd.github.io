import PhoenixIcon from '../assets/logos/Phoenix-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PosthogIcon from '../assets/logos/posthog-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';
import { AlpineIcon, SvelteIcon, ReactIcon, VueIcon, LudaIcon, ChaclaIcon } from "./icons";

export const projects = [
	{
		title: "Alpine JS Demo",
		techStack: "Alpine.js • HTML • CSS",
		description: "Basic project showcasing reactivity, directives, and some of Alpine.js’ main features.",
		ctaText: "View Demo →",
		ctaLink: "https://luisdavidgd.github.io/demos/alpinejs",
		icon: AlpineIcon
	},
	{
		title: "Svelte Explorations",
		techStack: "Svelte • JavaScript • Vite",
		description: "Exploring the framework with practical examples of stores, components, and bindings.",
		ctaText: "Explore →",
		ctaLink: "https://luisdavidgd.github.io/demos/svelte",
		icon: SvelteIcon
	},
	{
		title: "React Mini Apps",
		techStack: "React • TypeScript • Vite",
		description: "A collection of mini-apps like Simon Says, Todo App, Hangman, and more — all built with React.",
		ctaText: "Try →",
		ctaLink: "https://luisdavidgd.github.io/demos/react",
		icon: ReactIcon
	},
	{
		title: "Vue Fixture Generator",
		techStack: "Vue 3 • JavaScript • Vite",
		description: "Fixture generator for creating random matchups, useful for TCG tournaments or other games.",
		ctaText: "Generate →",
		ctaLink: "https://luisdavidgd.github.io/demos/vue",
		icon: VueIcon
	},
	{
		title: "Luda Pages",
		techStack: "Astro • Three.js • WebGL • CSS",
		description: "Personal showcase with 2D and 3D explorations, including galleries and interactive demos.",
		ctaText: "Explore →",
		ctaLink: "https://luda.pages.dev",
		icon: LudaIcon
	},
	{
		title: "Chacla.pe",
		techStack: "SvelteKit • Hono • Supabase • Cloudflare",
		description: "Digital hub for the district of Chaclacayo featuring a business directory, news, and community services.",
		ctaText: "Visit →",
		ctaLink: "https://chacla.pe",
		icon: ChaclaIcon
	},
];