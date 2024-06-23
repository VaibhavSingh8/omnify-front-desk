import Sidebar from '../components/Sidebar'
import Waitlist from '../components/Waitlist'
export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row lg:h-screen overflow-hidden">
      <Sidebar className="bg-gray-100 lg:w-64"/>
      <div className="bg-white w-full lg:flex-1 shadow-md rounded-lg m-2 overflow-hidden">
        <Waitlist />
      </div>
      
    </main>
    
  );
}
