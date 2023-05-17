import useCounter from '@/hooks/useCounter'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { count, past } = useCounter()
  return (
    <>
      <Head>
        <title>{past ? 'Lượn thôi 🚀' : count}</title>
      </Head>
      <main className={`flex min-h-screen flex-col items-center p-10 ${inter.className}`}>
        <img src="https://github.githubassets.com/images/mona-loading-default.gif" alt="logo" className="w-96" />
        <div className="my-4 text-center font-mono text-2xl font-black text-cyan-700 md:my-12 md:text-6xl">
          Sắp tới giờ về rồi!
        </div>
        <div className="text-center font-mono text-xl font-semibold text-green-900 md:text-4xl">
          {past ? (
            <span>Hết giờ rùi, lượn thôi 🚀</span>
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
