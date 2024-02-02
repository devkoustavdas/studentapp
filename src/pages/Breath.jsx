import { Link } from "react-router-dom";

const Breath = () => {
    return (
        <main>
            <div className="text-3xl font-cursive font-bold text-bl text-center mt-5">What do you want to reduce?</div>
            <div className='flex flex-wrap justify-center gap-4 lg:gap-10 mt-10 select-none'>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/anger'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Anger</span><br /><span className="text-slate-400">2 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/anxiety'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Anxiety</span><br /><span className="text-slate-400">3 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/irritation'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Irritation</span><br /><span className="text-slate-400">3 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/sadness'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Sadness</span><br /><span className="text-slate-400">3 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/fear'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Fear</span><br /><span className="text-slate-400">3 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/worry'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Worry</span><br /><span className="text-slate-400">4 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/envy'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Envy</span><br /><span className="text-slate-400">3 minute</span></Link></div>
            </div>
        </main>
    )
}

export default Breath;
