import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return(
        <header className="bg-[var(--bg2-color)] dark:bg-[var(--dark-bg2-color)] border-b border-[var(--border-color)] dark:border-0">
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
                        <Link to="/feed" className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--bg3-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 relative group">
                            Feed
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--bg3-color)] dark:bg-[var(--dark-text2-color)] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/about" className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--bg3-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 relative group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--bg3-color)] dark:bg-[var(--dark-text2-color)] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link to="/personal" className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--bg3-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 relative group">
                            My Account
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--bg3-color)] dark:bg-[var(--dark-text2-color)] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                    
                    <button 
                        className="md:hidden text-[var(--text-color)] dark:text-[var(--dark-text1-color)]"
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
                            to="/" 
                            className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--bg3-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 py-2 relative group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Feed
                            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[var(--bg3-color)] dark:bg-[var(--dark-text2-color)] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--bg3-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 py-2 relative group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[var(--bg3-color)] dark:bg-[var(--dark-text2-color)] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link 
                            to="/personal" 
                            className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--bg3-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 py-2 relative group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            My Account
                            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[var(--bg3-color)] dark:bg-[var(--dark-text2-color)] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header