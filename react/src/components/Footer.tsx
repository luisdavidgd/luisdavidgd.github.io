export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400">
    © {new Date().getFullYear()} — All rights reserved. Built with <a href="https://reactjs.org" className="text-blue-500 hover:underline">React</a> and <a href="https://tailwindcss.com" className="text-blue-500 hover:underline">Tailwind CSS</a>.
  </footer>
  )
}