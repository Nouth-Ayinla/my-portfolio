const Footer = () => {
  return (
    <footer className="py-5 text-center bg-white dark:bg-gray-800">
      <div className="container mx-auto px-5">
        <p>&copy; {new Date().getFullYear()} Oluwaferanmi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;