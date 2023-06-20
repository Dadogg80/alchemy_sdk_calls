import Image from 'next/image'
import { NftSalesCard } from './components/cards/NftSalesCard'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-bold text-center">
          Welcome to ALchemy SDK Calls App
        </h1>
        <NftSalesCard />
      </div>
    </main>
  )
}
