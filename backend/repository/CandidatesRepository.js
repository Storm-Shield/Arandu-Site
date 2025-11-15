import fs from "fs/promises"

const DATA_PATH = "./data/Candidates.json"

class CandidatesRepository{
    
    async listAll(){
        try{
            const data = await fs.readFile(DATA_PATH,"utf-8")
            const candidates = JSON.parse(data)
            return candidates
        }catch (error){
            throw new Error("List data: "+ error)
        }
    
    }

    async listTopics(){
        try{
             const candidates = await this.listAll()
            const localization = [...new Set(candidates.map(c => c.localization))]
            const area = [...new Set(candidates.map(c => c.area))]
            return {
                "localizations": localization,
                "areas": area 
        }
        }catch (error){
           throw new Error("List Topics: " + error) 
        }
       
    }

    async filterByTopics(city, workArea){
        try{

            if (!city && !workArea){
                throw new Error("At least one filter must be specified.")
            }

            const candidates = await this.listAll()
            return candidates.filter(c => {
                if (city && workArea){
                    return c.localization.toLowerCase() === city.toLowerCase() && c.area.toLowerCase() === workArea.toLowerCase() 
                }else if (!city && workArea){
                    return c.area.toLowerCase() === workArea.toLowerCase() 
                }else if (city && !workArea){
                    return c.localization.toLowerCase() === city.toLowerCase()
                }
        })
        }catch (error){
            throw new Error("FilterByTopics: " + error)
        }
        
    }
}

export default CandidatesRepository