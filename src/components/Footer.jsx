export default function Footer() {
  return (
    <footer className="bg-navy text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">PrintJoy Studio</h3>
            <p className="text-cream-dark text-sm max-w-xs">
              Beautiful, functional printable templates for your home and life. Designed with love and intentionality.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-cream-dark">
              <li><a href="/" className="hover:text-sage transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-sage transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-sage transition-colors">Contact</a></li>
              <li><a href="/terms" className="hover:text-sage transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Stay Connected</h4>
            <p className="text-sm text-cream-dark mb-4">Subscribe to get design tips and new releases.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-navy-light border border-navy-light px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-sage transition-colors"
              />
              <button className="bg-sage px-4 py-2 rounded-r-md hover:bg-sage-dark transition-colors font-medium">Join</button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-navy-light text-center text-xs text-cream-dark">
          &copy; {new Date().getFullYear()} PrintJoy Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
