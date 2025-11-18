import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return(
        <header className="bg-light-bg2 dark:bg-dark-bg2 border-b border-light-border dark:border-dark-border">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="flex items-center">
                            <img 
                                src="/logo/arandu.jpeg" 
                                alt="logo" 
                                className="h-17 w-auto block dark:hidden"
                            />
                            <img 
                                src="/logo/arandu-dark.jpeg" 
                                alt="logo" 
                                className="h-17 w-auto hidden dark:block"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/feed" className="text-light-text dark:text-dark-text1 hover:text-light-accent dark:hover:text-dark-text2 transition-colors duration-300 relative group">
                            Feed
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-accent dark:bg-dark-text2 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/about" className="text-light-text dark:text-dark-text1 hover:text-light-accent dark:hover:text-dark-text2 transition-colors duration-300 relative group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-accent dark:bg-dark-text2 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/personal" className="text-light-text dark:text-dark-text1 hover:text-light-accent dark:hover:text-dark-text2 transition-colors duration-300 relative group">
                            My Account
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-accent dark:bg-dark-text2 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                    
                    <button 
                        className="md:hidden text-light-text dark:text-dark-text1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div className={`md:hidden mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col space-y-4">
                        <Link 
                            to="/feed" 
                            className="text-light-text dark:text-dark-text1 hover:text-light-accent dark:hover:text-dark-text2 transition-colors duration-300 py-2 relative group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Feed
                            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-light-accent dark:bg-dark-text2 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-light-text dark:text-dark-text1 hover:text-light-accent dark:hover:text-dark-text2 transition-colors duration-300 py-2 relative group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-light-accent dark:bg-dark-text2 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            to="/personal" 
                            className="text-light-text dark:text-dark-text1 hover:text-light-accent dark:hover:text-dark-text2 transition-colors duration-300 py-2 relative group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            My Account
                            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-light-accent dark:bg-dark-text2 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header