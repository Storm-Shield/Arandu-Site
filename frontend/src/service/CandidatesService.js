import { api } from "./api";

export const CandidatesService = {
    getAll: () => api.request('/'),
    getTopics: () => api.request('/topics'),
    getByTopic: (city, area) => api.request(`/filter?city=${city}&area=${area}`)
}