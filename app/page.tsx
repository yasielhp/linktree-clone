import Image from 'next/image'
import data from '../data.json'
import { LinkCard, GithubIcon, TwitterIcon } from '../components/index'

export default function Home() {
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
			{data.links.map(link => (
				<LinkCard key={link.href} {...link} />
			))}
			<div className="flex items-center gap-4 mt-8">
				{data.socials.map(link => {
					if (link.href.includes('github')) {
						return <GithubIcon key={link.href} {...link} />
					}
					if (link.href.includes('twitter')) {
						return <TwitterIcon key={link.href} {...link} />
					}
				})}
			</div>
		</div>
	)
}
