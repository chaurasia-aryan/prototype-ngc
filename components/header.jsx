import React from "react";

const Header = () => {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="NGC Logo" width={34} height={34} />
          <span className="text-2xl font-bold">NGC</span>
        </a>
        <nav className="flex space-x-4">
          <a href="/ai-listings" className="hover:text-primary">AI Listings</a>
          <a href="/dashboard" className="hover:text-primary">Dashboard</a>
        </nav>
        <button className="px-4 py-2 bg-blue-900 text-white rounded">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
