import { FilePen, BookOpen } from 'lucide-react'
import Link from 'next/link'

function Header() {
	return (
		<header className="relative p-16 text-center">
			<Link href="/">
				<h1 className="text-6xl font-black">StoryTeller AI</h1>
				<div className="flex justify-center whitespace-nowrap space-x-5 text-3xl lg:text-5xl mt-2">
					<h2>Bringing your stories</h2>

					<div className="relative">
						<span className="absolute inset-0 bg-purple-500 transform rotate-1"></span>
						<span className="relative text-white">To life!</span>
					</div>
				</div>
			</Link>

			<nav className="absolute -top-5 right-5 flex space-x-2">
				<Link href="/">
					<FilePen className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-500 mt-10 border border-purple-500 p-2 rounded-md hover:opacity-50 cursor-pointer" />
				</Link>

				<Link href="/stories">
					<BookOpen className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-500 mt-10 border border-purple-500 p-2 rounded-md hover:opacity-50 cursor-pointer" />
				</Link>
			</nav>
		</header>
	)
}

export default Header
