import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: any
  slug: string
  client: string
}

export default function ProjectCard({ title, category, image, slug, client }: ProjectCardProps) {
  return (
    <div className="group">
      <div className="overflow-hidden mb-5">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          placeholder="blur"
        />
      </div>
      <div className="space-y-2">
        <h3 className="uppercase text-sm font-medium tracking-wide text-gray-800">{category}</h3>
        <p className="text-xs text-gray-500">{client}</p>
        <div>
          <Link href={`/projects/${slug}`}>
            <Button variant="ghost" className="p-0 h-auto text-green-600 hover:text-green-800 hover:bg-transparent">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
