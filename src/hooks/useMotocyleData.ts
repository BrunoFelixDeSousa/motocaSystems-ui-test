import { useQuery } from '@tanstack/react-query'
import { api } from '../service/api'

interface QueryKeyType {
    queryKey: [string, string];
}

const fetchMotorcycleData = async ({ queryKey }: QueryKeyType) => {
    const motorcycle_id = queryKey[1]
    const response = await api.get(`/motorcycle/${motorcycle_id}`)
    console.log(response.data)
        return response.data
}

export function useMotocycleData(id: string) {
    const query = useQuery({
        queryKey: ['motocycleData', id],
        queryFn: fetchMotorcycleData,
        enabled: !!id,
    })

    return query
}