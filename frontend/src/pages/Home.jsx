import Feed from "../components/Feed"
import Header from "../components/Header"

const Home = () => {
    return(
        <>
            <Header />
            <section className="flex justify-center items-center h-screen border-b-8 border-light-border dark:border-dark-border">
                <div className="grid grid-cols-3 w-auto h-screen bg-gradient-to-bl from-[#F0FDF9] to-[#0D9488] dark:bg-gradient-to-bl dark:from-[#0D9488] dark:to-[#061413]">
                    <div className="col-span-2 flex flex-col justify-center items-center text-center p-16 pb-20 relative mt-20">
                        <h1 className="text-5xl font-extrabold text-light-text dark:text-dark-text1 mb-8 text-justify">
                            Busque novas áreas e pessoas. Traduza suas habilidades para o novo mercado
                        </h1>

                        {/* <div className="space-x-4 mb-12">
                            <button className="p-5 px-12 rounded-xl font-medium text-white bg-light-bg3 hover:bg-light-accent transition-colors duration-300 shadow-md w-59">
                                Encontre pessoas
                            </button>
                            <button className="p-5 px-12 rounded-xl font-medium border border-light-bg3 text-light-bg3 dark:text-dark-text2 dark:border-dark-text2 bg-transparent hover:bg-light-bg3 hover:text-white dark:hover:bg-dark-text2 dark:hover:text-dark-bg2 transition-colors duration-300 w-59">
                                Atualize-se
                            </button>
                        </div> */}
                    </div>
                    
                    <div className="flex flex-col justify-center items-center ">
                        <div className="flex justify-center mb-8">
                            <img 
                                src="/logo/arandu-v.png" 
                                alt="Logo" 
                                className="w-auto h-full block dark:hidden"
                            />
                            <img 
                                src="/logo/arandu-v-dark.png" 
                                alt="Logo" 
                                className="w-auto h-full hidden dark:block"
                            />
                        </div>
                        <div className="">
                            <p className="text-xs text-light-text dark:text-dark-text1 opacity-70">
                                Desenvolvido por [Carlos Sanches - Vitor Ramos]
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light-bg2 dark:bg-dark-bg2 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-light text-light-text dark:text-dark-text1 text-center mb-8">
                        Candidatos em Destaque
                    </h2>
                    <Feed/>
                </div>
            </section>
        </>
    )
}

export default Home