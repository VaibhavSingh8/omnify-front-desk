import Sidebar from '../components/Sidebar'
import Waitlist from '../components/Waitlist'
export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row lg:h-screen overflow-hidden bg-gray-50">
      <Sidebar/>
      <div className="bg-white w-full lg:flex-1 shadow-md rounded-lg m-2 overflow-hidden">
        <Waitlist />
      </div>
      
    </main>
    
  );
}
