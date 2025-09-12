import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;
    
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    window.open(`https://wa.me/2349029278707?text=${whatsappMessage}`, '_blank');
    e.target.reset();
    alert('Thank you for your message! You will be redirected to WhatsApp to complete the conversation.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-primary">Let's work together</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-8 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-primary" />
                <p>shawolhorizon@gmail.com</p>
              </div>
              
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-primary" />
                <p>Nigeria</p>
              </div>
            </div>
            
            <div className="flex gap-5 mt-10">
              <a 
                href="https://github.com/Nouth-Ayinla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/oluwaferanmi-ayinla-435773277" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://wa.me/2349029278707" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                  required 
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                  required 
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;