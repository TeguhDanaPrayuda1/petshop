import { Link } from 'react-router-dom'
import { Calendar, User } from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
}

interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link to={`/articles/${article.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard
