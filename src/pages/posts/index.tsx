import Link from 'next/link'
import { FC } from 'react'

const PostList: FC = () => {
  return (
    <>
      <div>PostList</div>
      <ul>
        <Link href="/posts/1">Topic 1</Link>
        <Link href="/posts/2">Topic 2</Link>
        <Link href="/posts/3">Topic 3</Link>
      </ul>
    </>
  )
}

export default PostList
