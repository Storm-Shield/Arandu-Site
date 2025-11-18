import { useEffect } from "react"
import { CandidatesService } from "../service/CandidatesService"
import { useState } from "react"
import SimpleCandidatesCard from "../components/SimpleCandidatesCard"
const Feed = () => {
    const [candidates, setCandidates] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const candidatesPerPage = 5

    useEffect(()=> {
        const fetchCandidates = async () => {
            const data = await CandidatesService.getAll()
            setCandidates(data)
        } 

        fetchCandidates()
    }, [])


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

                </div>
            </main>
        </>
    )
}

export default Feed