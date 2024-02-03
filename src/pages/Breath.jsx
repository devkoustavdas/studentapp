import { Link } from "react-router-dom";

const Breath = () => {
    return (
        <main>
            <div className="blob">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="currentColor" d="M815.5 612q-7.5 112-89 223.5t-211.5 65Q385 854 270.5 802t-170-177q-55.5-125 34-225t160-208Q365 84 485 130.5t261.5 67Q888 218 855.5 359t-40 253Z" /></clipPath></defs><g clip-path="url(#a)"><path fill="#0891b2" d="M815.5 612q-7.5 112-89 223.5t-211.5 65Q385 854 270.5 802t-170-177q-55.5-125 34-225t160-208Q365 84 485 130.5t261.5 67Q888 218 855.5 359t-40 253Z" /></g></svg>
            </div>
            <div className="text-3xl font-cursive font-bold text-bl text-center mt-5">What do you want to reduce?</div>
            <div className='flex flex-wrap justify-center gap-4 lg:gap-10 mt-10 select-none'>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/mentalhealth/anger'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Anger</span><br /><span className="text-slate-400">2 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/mentalhealth/anxiety'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Anxiety</span><br /><span className="text-slate-400">3 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/mentalhealth/irritation'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Irritation</span><br /><span className="text-slate-400">3 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/mentalhealth/sadness'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Sadness</span><br /><span className="text-slate-400">3 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/mentalhealth/fear'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Fear</span><br /><span className="text-slate-400">3 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/mentalhealth/worry'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Worry</span><br /><span className="text-slate-400">4 minute</span></Link></div>
                <div className="flex-grow duration-200 hover:scale-105"><Link to={'/mentalhealth/envy'} className="flex-grow r-grad-slate text-shadow text-center py-10 rounded block min-w-40 max-w-40"><span className="text-xl font-bold text-slate-300">Envy</span><br /><span className="text-slate-400">3 minute</span></Link></div>
            </div>

        </main>
    )
}

export default Breath;
