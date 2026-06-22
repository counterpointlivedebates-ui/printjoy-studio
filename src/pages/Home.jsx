import { products } from '../lib/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Leaf, Printer, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cream py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-navy leading-tight mb-6">
              Beautifully Designed <span className="text-sage">Printables</span> for an Intentional Life
            </h1>
            <p className="text-lg text-navy/80 mb-10 max-w-lg mx-auto lg:mx-0">
              Transform your space and routine with our curated collection of wall art, planners, and organizational tools. Instant download, re-print anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#products" className="bg-navy text-cream px-8 py-4 rounded-full font-medium hover:bg-navy-light transition-all flex items-center justify-center gap-2 group">
                Shop Collection
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/about" className="border-2 border-navy text-navy px-8 py-4 rounded-full font-medium hover:bg-navy hover:text-cream transition-all">
                Our Story
              </a>
            </div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-terracotta/5 rounded-full blur-2xl"></div>
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
           <img 
            src="/src/assets/products/wall-art-botanical-background.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover rounded-l-[100px] opacity-60"
           />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-sage/10 text-sage rounded-2xl flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Instant Delivery</h3>
              <p className="text-navy/70">Get your files immediately after purchase. No waiting for shipping.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blush/20 text-terracotta rounded-2xl flex items-center justify-center mb-6">
                <Printer size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Infinite Prints</h3>
              <p className="text-navy/70">Print at home or your favorite shop as many times as you need.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-cream-dark text-navy rounded-2xl flex items-center justify-center mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Mindful Design</h3>
              <p className="text-navy/70">Thoughtfully created layouts that promote peace and organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Our Best Sellers</h2>
              <p className="text-navy/70 max-w-md">Our most-loved templates to help you stay organized and inspired.</p>
            </div>
            <div className="flex gap-4">
              <button className="text-navy font-medium border-b-2 border-sage pb-1">All</button>
              <button className="text-navy/50 font-medium hover:text-navy transition-colors pb-1">Wall Art</button>
              <button className="text-navy/50 font-medium hover:text-navy transition-colors pb-1">Planners</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to bring some Joy to your space?</h2>
          <p className="text-xl mb-12 opacity-90">Join our newsletter for 15% off your first order and exclusive design tips.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-4 rounded-full text-navy w-full sm:w-96 focus:outline-none"
            />
            <button className="bg-navy text-cream px-10 py-4 rounded-full font-bold hover:bg-navy-light transition-all whitespace-nowrap">
              Get Discount
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
