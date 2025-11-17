import Header from "../components/Header"

const Home = () => {
    return(
        <>
            <Header/>
            <section className="flex justify-center items-center bg-[var(--bg-color)] dark:bg-[var(--dark-bg-color)] h-screen">
                <div className="rounded-3xl bg-[var(--bg2-color)] dark:bg-[var(--dark-bg2-color)] border border-[var(--border-color)] dark:border-0 text-center p-16 pb-20 shadow-lg relative">
                    <div className="flex justify-center mb-8">
                        <img 
                            src="/logo/arandu.jpeg" 
                            alt="Logo" 
                            className="h-20 w-auto block dark:hidden"
                        />
                        <img 
                            src="/logo/arandu-dark.jpeg" 
                            alt="Logo" 
                            className="h-20 w-auto hidden dark:block"
                        />
                    </div>

                    <h1 className="text-4xl font-extrabold text-[var(--text-color)] dark:text-[var(--dark-text1-color)] mb-8">
                        Busque novas áreas e pessoas <br /> Traduza suas habilidades para o novo mercado
                    </h1>

                    <div className="space-x-4 mb-12">
                        <button className="p-5 px-12 rounded-xl font-medium text-[var(--bg2-color)] bg-[var(--bg3-color)] hover:bg-[var(--accent-color)] transition-colors duration-300 shadow-md w-48">
                            Sign in 
                        </button>
                        <button className="p-5 px-12 rounded-xl font-medium border border-[var(--bg3-color)] text-[var(--bg3-color)] dark:text-[var(--dark-text2-color)] dark:border-[var(--dark-text2-color)] bg-transparent hover:bg-[var(--bg3-color)] hover:text-[var(--bg2-color)] dark:hover:bg-[var(--dark-text2-color)] dark:hover:text-[var(--dark-bg2-color)] transition-colors duration-300 w-48">
                            Get start
                        </button>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0">
                        <p className="text-xs text-[var(--text-color)] dark:text-[var(--dark-text1-color)] opacity-70">
                            Desenvolvido por [Carlos Sanches - Vitor Ramos]
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home