export interface Worker {
    id: number
    name: string
    role: string
    // optional historical/category fields from older data
    category?: "nanny" | "maid" | "driver" | "caregiver" | "cook"
    nationality?: string
    flag?: string

    // core profile
    rating: number
    reviews: number
    price: number
    image: string
    verified: boolean

    // experience as a freeform string like "8 years"
    experience: string
    location: string
    // availability used by constants dataset; keep flexible
    availability?: "Full-time" | "Part-time" | "Live-in" | "Live-out" | string

    // optional fields present in one of the datasets
    languages?: string[]
    skills?: string[]
    bio?: string
    available?: boolean
}
