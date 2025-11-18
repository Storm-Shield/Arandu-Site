import { useEffect } from "react"
import { CandidatesService } from "../service/CandidatesService"
import { useState } from "react"
import SimpleCandidatesCard from "../components/SimpleCandidatesCard"
const Feed = () => {
    const [candidates, setCandidates] = useState([])

    useEffect(()=> {
        const fetchCandidates = async () => {
            const data = await CandidatesService.getAll()
            setCandidates(data)
        } 

        fetchCandidates()
    }, [])


    return(
        <>
            <main className="flex flex-col items-center p-8">
                <div className="w-full max-w-4xl">
                    <h1 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text1 text-left w-full">
                        Encontre Pessoas
                    </h1>
                    <div className="rounded-2xl border border-light-border dark:border-dark-border overflow-hidden">
                        {candidates.map(c => (
                            <SimpleCandidatesCard key={c.id} {...c}/>
                        ))}
                    </div>
                </div>
            </main>
        </>
        
       
    )
}

export default Feed