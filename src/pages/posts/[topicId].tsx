import { useRouter } from 'next/router'
import { FC } from 'react'

const TopicDetail: FC = () => {
  const router = useRouter()
  const { topicId } = router.query
  return (
    <>
      <div className="text-3xl">TopicDetail</div>
      <div className="font-mono text-xl text-red-500">{topicId}</div>
    </>
  )
}

export default TopicDetail
