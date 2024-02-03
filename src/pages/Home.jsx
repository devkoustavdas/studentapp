
import heroimage from "../assets/decode-home-image.svg"


const Home = ({uid, displayName}) => {


  return (
    <main className="bg-slate-800 rounded-lg px-4 py-16 text-center">
      <h1 className="font-title text-slate-100 font-bold text-5xl">Student App</h1>
      <h3 className="text-lg text-slate-200 italic">The only app students will ever need</h3>
      <div>
        <img src={heroimage} className="fixed right-2 bottom-2 w-3/5" alt="" />
      </div>
      <p className="mt-5 text-lg text-indigo-500 text-center">{displayName ? `Hello ${displayName}, welcome back. What do you want to explore now?` : "Hello user, please login to track your progress"}</p>
    </main>
  )
}

export default Home
