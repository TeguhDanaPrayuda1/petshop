import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import Breadcrumb from '../components/BreadCrumb'

const ArticlesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Artikel' }
          ]}
        />

        <div className="text-center mt-12 mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artikel Kesehatan Hewan
          </h1>
          <p className="text-xl text-gray-600">
            Informasi dan tips seputar perawatan hewan kesayangan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ArticlesPage
