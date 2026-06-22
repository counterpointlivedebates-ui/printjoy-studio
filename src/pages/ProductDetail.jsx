import { useParams, Link } from 'react-router-dom';
import { products } from '../lib/products';
import { ArrowLeft, Check, Download, FileText, Smartphone } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-navy mb-4">Product Not Found</h2>
          <Link to="/" className="text-sage hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream/20 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-8">
          <ArrowLeft size={18} />
          Back to Shop
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-cream-dark">
          {/* Image Gallery */}
          <div className="p-4 lg:p-8">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-cream-dark shadow-inner">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="aspect-square rounded-xl bg-cream border border-cream-dark overflow-hidden opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                 <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-xl bg-cream border border-cream-dark overflow-hidden opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                 <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-xl bg-cream border border-cream-dark overflow-hidden opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                 <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="p-8 lg:p-12 lg:pl-0 flex flex-col">
            <div className="mb-2 uppercase tracking-widest text-[10px] font-bold text-sage">
              {product.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-navy mb-6">
              {product.name}
            </h1>
            <p className="text-4xl font-bold text-navy mb-8">${product.price.toFixed(2)}</p>
            
            <div className="prose prose-navy max-w-none mb-10">
              <p className="text-navy/80 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-navy/70">
                <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center shrink-0">
                  <Download size={20} />
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">Instant Download</p>
                  <p className="text-xs">No physical item will be shipped</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-navy/70">
                <div className="w-10 h-10 rounded-full bg-blush/20 text-terracotta flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">High Resolution</p>
                  <p className="text-xs">300 DPI PNG & PDF files included</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-navy/70">
                <div className="w-10 h-10 rounded-full bg-navy/5 text-navy flex items-center justify-center shrink-0">
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">Digital Friendly</p>
                  <p className="text-xs">Perfect for tablets or physical printing</p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-cream-dark">
              <a 
                href={product.lemonSqueezyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-sage hover:bg-sage-dark text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-lg shadow-sage/20 flex items-center justify-center gap-3"
              >
                Get it Now
                <Check size={24} />
              </a>
              <p className="text-center text-navy/50 text-xs mt-4">
                Secure checkout powered by Lemon Squeezy
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-6">What's Included</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-sage text-white">
                  <Check size={12} />
                </div>
                <span className="text-navy/80">Digital Download File (no physical product)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-sage text-white">
                  <Check size={12} />
                </div>
                <span className="text-navy/80">High-resolution PDF file</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-sage text-white">
                  <Check size={12} />
                </div>
                <span className="text-navy/80">Multiple size options (US Letter, A4, 8x10")</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-sage text-white">
                  <Check size={12} />
                </div>
                <span className="text-navy/80">Print instructions and license details</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-6">Important Details</h3>
            <p className="text-navy/80 mb-4 italic">
              Please note: This is a digital product. No physical item will be shipped to you. Colors may vary slightly due to monitor and printer differences.
            </p>
            <p className="text-navy/80">
              For best results, we recommend printing on high-quality cardstock or heavy paper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
