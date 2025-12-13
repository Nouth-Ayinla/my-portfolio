import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const response = await fetch('https://formspree.io/f/mgvnplbg', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        alert('Thank you for your message! I will get back to you soon.');
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-primary">Let's work together</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <FaEnvelope className="text-2xl text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600 text-sm break-all">shawolhorizon@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <FaMapMarkerAlt className="text-2xl text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Nigeria</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <FaWhatsapp className="text-2xl text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-600 text-sm">+234 902 927 8707</p>
                </div>
              </div>
            </div>
            
            {/* Connect with me section - hidden on mobile, shown on desktop */}
            <div className="mb-8 hidden lg:block">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Nouth-Ayinla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/oluwaferanmi-ayinla-435773277" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://wa.me/2349029278707" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="Enter your email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    placeholder="What is this regarding?" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder="Tell me about your project..." 
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:-translate-y-1 hover:shadow-lg transition-all shadow-lg hover:bg-primary-dark"
                >
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700 text-center">
                💡 I'll respond to your message as soon as possible!
              </p>
            </div>
          </div>
        </div>

        {/* Connect with me section - shown only on mobile at the bottom */}
        <div className="mt-12 lg:hidden">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/Nouth-Ayinla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/oluwaferanmi-ayinla-435773277" 
                target="_blank" 
                rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://wa.me/2349029278707" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;