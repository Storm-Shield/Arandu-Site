import { useEffect } from "react"
import { CandidatesService } from "../service/CandidatesService"
import { useState } from "react"
import SimpleCandidatesCard from "../components/SimpleCandidatesCard"
const Feed = () => {
    const [candidates, setCandidates] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [areas, setAreas] = useState([])
    const [cities, setCities] = useState([])
    const [selectedArea, setSelectedArea] = useState("")
    const [selectedCity, setSelectedCity] = useState("")
    const candidatesPerPage = 5

    useEffect(()=> {
        const fetchCandidates = async () => {
            
            const data = await CandidatesService.getAll()
            setCandidates(data)
        }
        const fetchTopics = async () => {
            const data = await CandidatesService.getTopics()
            setAreas(data.areas)
            setCities(data.cities)
        }

       
        fetchCandidates()
        fetchTopics()
    }, [])

    useEffect(() => {
        const handleFilter = async () => {
            if (selectedCity === "" && selectedArea === ""){
                const data = await CandidatesService.getAll()
                setCandidates(data)
            }else{

            const data = await CandidatesService.getByTopic(selectedCity,selectedArea)
                setCandidates(data)}
            
        }
        setCurrentPage(1)
 handleFilter()
    }, [selectedCity, selectedArea])

    
    const indexOfLastCandidate = currentPage * candidatesPerPage
    const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage
    const currentCandidates = candidates.slice(indexOfFirstCandidate, indexOfLastCandidate)

    const totalPages = Math.ceil(candidates.length / candidatesPerPage)

    const getVisiblePages = () => {
        if (totalPages <= 3){
            return Array.from({length: totalPages}, (_,i) => i + 1)
        }

        let startPage = Math.max(currentPage - 1, 1)
        let endPage = Math.min(startPage + 2, totalPages)

        if (endPage - startPage < 2){
            startPage = Math.max(endPage - 2, 1)
        }

        return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i)
    }

    const visiblePages = getVisiblePages()
    return(
        <>
            <main className="flex flex-col items-center p-8">
                
                <div className="grid grid-cols-2">
                    
                    <div className="grid grid-cols-1 overflow-hidden gap-3 w-5xl">
                        {currentCandidates.map(c => (
                            <SimpleCandidatesCard key={c.id} {...c}/>
                        ))}
                    </div>
                    
                    <div>
                        
                        <div>
                           <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
                            <option value="" disabled>Filtre por área</option>
                            <option value="">All</option>
                            {
                                areas.map(a => (
                                    <option key={a} value={a}>{a}</option>
                                ))
                            }
                           </select>
                           <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                            <option value="" disabled>Filtre por cidades</option>
                            <option value="">All</option>
                            {
                                cities.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))
                            }
                           </select>
                        </div>

                        <div>
                        
                        {
                        totalPages > 1 && (
                            <div className="flex justify-center items-center mt-6 space-x-2 mb-12">
                                {currentPage > 1 && (
                                    <button 
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text1 hover:bg-light-accent dark:hover:bg-dark-text2 hover:text-white"
                                    >
                                        ←
                                    </button>
                                )}
                                {visiblePages[0] > 1 && (
                                    <span className="px-2 text-light-text dark:text-dark-text1">...</span>
                                )}
                                {visiblePages.map(page => ( 
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                            currentPage === page 
                                                ? 'bg-light-accent dark:bg-dark-text2 text-white' 
                                                : 'bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text1 hover:bg-light-accent dark:hover:bg-dark-text2 hover:text-white'
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                {visiblePages[visiblePages.length - 1] < totalPages && (
                                    <span className="px-2 text-light-text dark:text-dark-text1">...</span>
                                )}
                                {currentPage < totalPages && (
                                    <button 
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text1 hover:bg-light-accent dark:hover:bg-dark-text2 hover:text-white"
                                    >
                                        →
                                    </button>
                                )}
                            </div>
                        )}

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Feed