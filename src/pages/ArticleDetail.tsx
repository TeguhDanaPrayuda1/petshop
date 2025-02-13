
import { useParams, useNavigate } from 'react-router-dom'
import { articles } from '../data/articles'
import Footer from '../components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Breadcrumb from '../components/BreadCrumb'


const ArticleDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = articles.find(a => a.id === id)

  if (!article) {
    return <div className="pt-32 text-center">Article not found</div>
  }

  return (
    <div className="pt-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: 'Artikel', path: '/articles' },
              { label: article.title }
            ]}
          />
        </div>

        <button
          onClick={() => navigate('/articles')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Kembali ke Artikel
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  )
}

export default ArticleDetail
