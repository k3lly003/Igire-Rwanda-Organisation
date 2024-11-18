import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const articles = [
  {
    id: 1,
    slug: "transform-your-career",
    image: {
      source: "https://shecancode-website-dev.vercel.app/blog-sm.jpg",
      alt: "Graduate"
    },
    title: "We're here to help you transform your career",
    description: "Our mission is to empower women in technology by providing them with the tools and resources they need to succeed. Research on Bruce H. Lipton, Ph.D. an Epigeneticist. Bruce Lipton is an American developmental biologist known for promoting the idea that genes and DNA can be manipulated by a person's beliefs. He is also known for his work on epigenetics.",
  },
  {
    id: 2,
    slug: "empowering-women-in-tech",
    image: {
      source: "/placeholder.svg?height=200&width=400",
      alt: "Placeholder image"
    },
    title: "Empowering women in tech",
    description: "Discover how our programs are breaking barriers and creating opportunities for women in the technology sector.",
  },
  {
    id: 3,
    slug: "success-stories",
    image: {
      source: "/placeholder.svg?height=200&width=400",
      alt: "Placeholder image"
    },
    title: "Success stories: From bootcamp to tech leader",
    description: "Read inspiring stories of women who have transformed their careers through our programs and are now leading in the tech industry.",
  }
]

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return <div className="container mx-auto px-4 py-8">Article not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 font-ibm">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300 mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>
      <article className="max-w-screen-xl mx-auto">
        <Image
          src={article.image.source}
          alt={article.image.alt}
          width={800}
          height={450}
          className="rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600">{article.description}</p>
      </article>
    </div>
  )
}