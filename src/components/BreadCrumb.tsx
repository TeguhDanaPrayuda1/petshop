import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }: { items: Array<{ label: string; path?: string }> }) => {
    return (
      <nav className="flex items-center space-x-2 text-gray-500 text-sm">
        <Link to="/#home" className="flex items-center hover:text-blue-600 transition-colors">
          <Home className="w-4 h-4" />
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            {index === items.length - 1 ? (
              <span className="text-slate-500">{item.label}</span>
            ) : (
              <Link
                to={item.path || ''}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    )
  }

  export default Breadcrumb
