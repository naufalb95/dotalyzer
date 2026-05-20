import { DateTime } from 'luxon'
import { MINUTES, HOURS, DAYS, MONTHS } from '@/constants'

export const getEndTime = (endMatchTime: number): string => {
  const diffInMinutes = Math.floor(
    Math.abs(DateTime.fromSeconds(endMatchTime).diffNow('minutes').minutes),
  )

  if (diffInMinutes < 1) {
    return 'Ended just now'
  } else if (diffInMinutes < MINUTES) {
    return `Ended ${Math.floor(diffInMinutes)} minutes ago`
  } else if (diffInMinutes < HOURS) {
    return `Ended ${Math.floor(diffInMinutes / MINUTES)} hours ago`
  } else if (diffInMinutes < DAYS) {
    return `Ended ${Math.floor(diffInMinutes / HOURS)} days ago`
  } else {
    return `Ended ${Math.floor(diffInMinutes / MONTHS)} months ago`
  }
}
