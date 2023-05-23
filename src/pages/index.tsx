import useCounter from '@/hooks/useCounter'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

interface Target {
  id: string
  value: string
  past: string
  text: string
}

const TARGETS: Target[] = [
  {
    id: '1',
    value: '11:55',
    past: 'Lụm',
    text: 'Chừng nào nghỉ trưa dẫy 🥲'
  },
  {
    id: '2',
    value: '17:30',
    past: 'Hết giờ rầu, lượn thôi 🚀',
    text: 'Sắp tới giờ về rồi!'
  }
]

export default function Home() {
  const [target, setTarget] = useState<Target>(TARGETS[0])
  const { count, past } = useCounter({ target: target.value })

  const handleChange = (evt: any) => {
    const muc = TARGETS.find(target => target.value === evt.target.value)
    if (!muc) return
    setTarget(muc)
  }

  return (
    <>
      <Head>
        <title>{past ? 'Lượn thôi 🚀' : count}</title>
      </Head>
      <main className={`flex min-h-screen flex-col items-center p-10 ${inter.className}`}>
        <select
          id="countries"
          value={target.value}
          onChange={handleChange}
          className="absolute left-5 top-0 mt-4 cursor-pointer rounded-lg border border-cyan-950 px-8 py-1 ">
          {TARGETS.map(target => (
            <option key={target.id} value={target.value}>
              {target.value}
            </option>
          ))}
        </select>
        <img src="https://github.githubassets.com/images/mona-loading-default.gif" alt="logo" className="w-96" />
        <div className="my-4 text-center font-mono text-2xl font-black text-cyan-700 md:my-12 md:text-6xl">
          {target.text}
        </div>
        <div className="text-center font-mono text-xl font-semibold text-green-900 md:text-4xl">
          {past ? (
            <span>{target.past}</span>
          ) : (
            <span>
              Còn <strong>{count} </strong> phút nữa
            </span>
          )}
        </div>
      </main>
    </>
  )
}
