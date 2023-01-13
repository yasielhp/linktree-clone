import Image from 'next/image'
import { ArrowIcon } from './index'

export const LinkCard = ({
	href,
	title,
	image,
}: {
	href: string
	title: string
	image?: string
}) => {
	return (
		<a
			href={href}
			className="flex items-center p-1 w-full rounded-md group hover:scale-95 transition-all bg-gray-100 mb-3 max-w-3xl">
			<div className="flex text-center w-full items-center justify-between">
				<div className="w-10 h-10">
					{image && (
						<Image
							className="rounded-sm"
							alt={title}
							src={image}
							width={40}
							height={40}
						/>
					)}
				</div>
				<h2 className="font-semibold text-center text-gray-700">{title}</h2>
				<div className="w-10 h-10 flex justify-center items-center">
					<ArrowIcon />
				</div>
			</div>
		</a>
	)
}
