import content from '../data/siteContent.json';

const Footer = () => {
  return (
    <footer className="relative z-10">
      <div className="container mx-auto px-4 border-t border-gray-800 bg-gray-950/50 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className='text-left'>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              <img src="assets/Logo.svg" alt="UzOFin" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">{content.footer.tagline}</p>
            <span className="text-gray-400 text-sm">{content.footer.description}</span>
          </div>

          <div>
            <h3 className="font-semibold mb-4 bg-gradient-to-b from-[#39105E] to-[#37CCF7] 
  bg-clip-text text-transparent">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 bg-gradient-to-b from-[#39105E] to-[#37CCF7] 
  bg-clip-text text-transparent">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 bg-gradient-to-b from-[#39105E] to-[#37CCF7] 
  bg-clip-text text-transparent">Connect</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 UzOFin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;