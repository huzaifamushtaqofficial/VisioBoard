export default function Footer() {
    return (
      <footer className="bg-gray-300 text-gray-800 py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding Section */}
            <div>
              <h2  className="text-2xl font-bold text-gray-900 ">VisioBoard</h2>
              <p className="mt-2 text-gray-600 ">Documents & diagrams for engineering teams</p>
              <p className="mt-4 text-gray-500 ">© 2025 VisioBoard</p>
            </div>
  
            {/* Use Cases */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Use Cases</h3>
              <ul className="mt-2 space-y-2 text-gray-600 ">
                <li>Architecture Diagrams</li>
                <li>Design Docs</li>
                <li>Documentation</li>
                <li>Brainstorming</li>
                <li>Wireframes</li>
                <li>Whiteboard Interview</li>
              </ul>
            </div>
  
            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>Eraser Examples</li>
                <li>Decision Node</li>
                <li>DiagramGPT</li>
                <li>Docs →</li>
                <li>DesignDocs.dev →</li>
              </ul>
            </div>
          </div>
  
          {/* Social & Additional Links */}
          <div className="mt-8 flex justify-between items-center">
            <div className="flex space-x-4 text-gray-600 cursor-pointer" >
              <a href="#" className="hover:text-gray-900">Pricing</a>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
            </div>
            <div className="flex space-x-4 cursor-pointer">
              <a href="#" className="text-gray-600 hover:text-gray-900"></a>{/*socail*/}
              <a href="#" className="text-gray-600 hover:text-gray-900"></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  