import { PawPrint } from 'lucide-react'

const Logo = () => {
  return (
    <div className="flex items-center space-x-2.5">
      <div className="bg-blue-600 p-1.5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <PawPrint className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span className="text-2xl font-black text-blue-600">W</span>
          <span className="text-xl font-bold text-blue-500 -ml-0.5">Care</span>
          <span className="text-blue-400 text-lg ml-0.5">+</span>
        </div>
        <span className="text-[0.65rem] text-slate-700 font-medium tracking-widest uppercase">
          Pet Care Center
        </span>
      </div>
    </div>
  )
}

export default Logo
