import Link from "next/link"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa";
import { Articles } from "@/fakeDatas/articleData"

export default function BlogPage() {

  return (
    
    <div className="container mx-auto px-4 py-8 font-ibm">
      <div className=" text-4xl text-center pb-6">Featured stories</div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden ">
              <Image
                src={article.image.source}
                alt={article.image.alt}
                width={500}
                height={500}
                
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h2>
              <p className="text-xl text-gray-600 line-clamp-3 mb-4">
                {article.description}
              </p>
              <Link href={article.button.location} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300">
                {article.button.label}
                <FaArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}