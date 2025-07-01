const Footer = () => {
  return (
    <footer className="bg-slate-800 p-4 text-center text-sm text-slate-400">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Madhur N Patel. All rights reserved.</p>
        {/* Optional: Add links to GitHub/LinkedIn here as well */}
      </div>
    </footer>
  );
};

export default Footer;
