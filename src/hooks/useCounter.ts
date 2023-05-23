import moment from 'moment'
import { useEffect, useState } from 'react'

interface CounterProps {
  target: string
}

export default function useCounter({ target }: CounterProps) {
  const [count, setCount] = useState(target)
  const [past, setPast] = useState(false)

  useEffect(() => {
    console.log('useEffect: ', target)
    const tarTime = moment(target, 'HH:mm')
    const intervalId = setInterval(() => {
      const diff = tarTime.diff(moment(), 'milliseconds')
      setPast(diff <= 0)
      if (diff <= 0) return
      const duration = moment.duration(diff)
      const hours = duration.hours().toString().padStart(2, '0')
      const minutes = duration.minutes().toString().padStart(2, '0')
      const seconds = duration.seconds().toString().padStart(2, '0')
      setCount(`${hours}:${minutes}:${seconds}`)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [target])

  return { count, past }
}
