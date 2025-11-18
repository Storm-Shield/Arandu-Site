const SimpleCandidatesCard = ({name, photo, position, summary, localization, area, interestsArea}) => {
return(
   <>
    <article className="flex flex-col sm:flex-row bg-light-bg2 dark:bg-dark-bg2 p-4 sm:p-7">
    <header className="flex justify-center sm:justify-start sm:mr-4 mb-3 sm:mb-0">
        <img src={photo} alt="profile photo" className="rounded-full h-16 w-16 sm:h-20 sm:w-20 object-cover" />
    </header>
        <div className="flex-1">
            <section className="flex flex-col text-light-text dark:text-dark-text1">
                <h3 className="text-light-accent dark:text-dark-text2 font-medium text-lg">
                    {name} - {position} - {localization}
                </h3>
                <div className="text-justify py-2 text-sm line-clamp-3">
                    {summary}
                </div>
                <div className="text-sm opacity-70 mt-2">
                    <span className="font-medium">Interests:</span> {interestsArea.join(" | ")}
                </div>
            </section>
            <footer className="mt-3">
                <button className="text-light-accent dark:text-dark-text2 hover:underline text-sm font-medium">
                    ver perfil
                </button>
            </footer>
        </div>
    </article>
    <div className="flex flex-col justify-center items-center">
        <hr />
    </div>
   </>
)
}

export default SimpleCandidatesCard