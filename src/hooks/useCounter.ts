import moment from 'moment'
import { useEffect, useState } from 'react'

const targetTime = '17:30'

export default function useCounter() {
  const [count, setCount] = useState('00:00:00')
  const [past, setPast] = useState(false)
  useEffect(() => {
    const tarTime = moment(targetTime, 'HH:mm')
    const intervalId = setInterval(() => {
      const diff = tarTime.diff(moment(), 'milliseconds')
      if (diff <= 0) {
        setPast(true)
        return
      }
      const duration = moment.duration(diff)
      const hours = duration.hours().toString().padStart(2, '0')
      const minutes = duration.minutes().toString().padStart(2, '0')
      const seconds = duration.seconds().toString().padStart(2, '0')
      setCount(`${hours}:${minutes}:${seconds}`)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetTime])

  return { count, past }
}
