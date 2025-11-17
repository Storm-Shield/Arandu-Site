import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return(
        <header className="bg-[var(--bg2-color)] dark:bg-[var(--dark-bg-color)] border-b border-[var(--border-color)] dark:border-[var(--dark-border-color)]">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="flex items-center">
                            {/* Logo para Light Mode */}
                            <img 
                                src="/logo/arandu.jpeg" 
                                alt="aranduLogo" 
                                className="h-17 w-auto block dark:hidden"
                            />
                            {/* Logo para Dark Mode */}
                            <img 
                                src="/logo/arandu-dark.jpeg" 
                                alt="aranduLogo" 
                                className="h-17 w-auto hidden dark:block"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--dark-text2-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300">
                            Feed
                        </Link>
                        <Link to="/about" className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--dark-text2-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300">
                            About
                        </Link>
                        <Link to="/personal" className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--dark-text2-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300">
                            My Account
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
                            className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--dark-text2-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Início
                        </Link>
                        <Link 
                            to="/sobre" 
                            className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--dark-text2-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sobre
                        </Link>
                        <Link 
                            to="/fantasias" 
                            className="text-[var(--text-color)] dark:text-[var(--dark-text1-color)] hover:text-[var(--dark-text2-color)] dark:hover:text-[var(--dark-text2-color)] transition-colors duration-300 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Fantasias
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header