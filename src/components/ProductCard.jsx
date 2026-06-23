import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-cream-dark hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-navy">
          {product.category}
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-serif font-bold text-navy group-hover:text-sage transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-navy/70 text-sm line-clamp-2 mb-4 h-10">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-navy">${product.price.toFixed(2)}</span>
          <a 
            href={product.kofiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-sage hover:bg-sage-dark text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            Buy Now
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
