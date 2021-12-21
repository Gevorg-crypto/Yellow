import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center' >
      <div className="pt-10">
          <img src="/images/bearFace.png" alt=""/>
      </div>
      <div className="pt-10">
          <button className="px-10 py-3 rounded-full border-4  border-pink-800 text-pink-800">Let me in</button>
      </div>
    </div>
  )
}

export default Home
