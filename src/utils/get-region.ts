import type { ResourceRegion } from '@/types/resource'

export const getRegion = (regionId: number, regionData?: ResourceRegion) => {
  if (!regionData) return 'Unknown'

  const regionName = regionData[regionId]

  return regionName || 'Unknown'
}
