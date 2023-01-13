import Image from 'next/image'
import { LinkCard, GithubIcon, TwitterIcon } from '../components/index'
import { get } from '@vercel/edge-config'

export const dynamic = 'force-dynamic',
	runtime = 'edge'
interface Data {
	name: string
	avatar: string
	links: Link[]
	socials: Social[]
}

interface Link {
	href: string
	title: string
}

interface Social {
	href: string
	title: string
	image?: string
}

export default async function HomePage() {
	const data: Data | undefined = await get('linktree')

	if (!data) {
		return (
			<div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
				<h1 className="font-bold mt-4 mb-8 text-xl text-white">
					No data found. Please check your configuration.
				</h1>
			</div>
		)
	}

	return (
		<div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
			<Image
				className="rounded-full"
				alt={data.name}
				src={data.avatar}
				width={96}
				height={96}
			/>
			<h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
			{data.links.map((link: Link) => (
				<LinkCard key={link.href} {...link} />
			))}
			<div className="flex items-center gap-4 mt-8">
				{data.socials.map((social: Social) => {
					if (social.href.includes('github')) {
						return <GithubIcon key={social.href} {...social} />
					}
					if (social.href.includes('twitter')) {
						return <TwitterIcon key={social.href} {...social} />
					}
				})}
			</div>
		</div>
	)
}
