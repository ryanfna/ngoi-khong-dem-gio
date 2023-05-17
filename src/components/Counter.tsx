import moment from 'moment'
import { useEffect, useState } from 'react'

const targetTime = '17:30'

const Counter = () => {
  const [count, setCount] = useState('00:00:00')
  useEffect(() => {
    const tarTime = moment(targetTime, 'HH:mm')
    const intervalId = setInterval(() => {
      const diff = tarTime.diff(moment(), 'milliseconds')
      if (diff <= 0) {
        setCount('Past')
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
  return <span>{count}</span>
}

export default Counter
