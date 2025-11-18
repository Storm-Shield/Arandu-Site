import Header from "../components/Header"

const Home = () => {
    return(
        <>
            
            <section className="flex justify-center items-center bg-light-bg dark:bg-dark-bg h-screen">
                <div className="rounded-3xl bg-light-bg2 dark:bg-dark-bg2 border border-light-border dark:border-dark-border text-center p-16 pb-20 shadow-lg relative">
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

                    <h1 className="text-4xl font-extrabold text-light-text dark:text-dark-text1 mb-8">
                        Busque novas áreas e pessoas <br /> Traduza suas habilidades para o novo mercado
                    </h1>

                    <div className="space-x-4 mb-12">
                        <button className="p-5 px-12 rounded-xl font-medium text-white bg-light-bg3 hover:bg-light-accent transition-colors duration-300 shadow-md w-48">
                            Sign in 
                        </button>
                        <button className="p-5 px-12 rounded-xl font-medium border border-light-bg3 text-light-bg3 dark:text-dark-text2 dark:border-dark-text2 bg-transparent hover:bg-light-bg3 hover:text-white dark:hover:bg-dark-text2 dark:hover:text-dark-bg2 transition-colors duration-300 w-48">
                            Get start
                        </button>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0">
                        <p className="text-xs text-light-text dark:text-dark-text1 opacity-70">
                            Desenvolvido por [Carlos Sanches - Vitor Ramos]
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home