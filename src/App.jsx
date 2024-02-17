import './App.css'
import FoodServices from './assets/Components/FOOD/FoodServices'
import FlightBooking from './assets/Components/FlightBooking/FlightBooking'
import Hotel from './assets/Components/Hotel/Hotel'
import TransPortation from './assets/Components/Transportation/TransPortation'
import TravelSettings from './assets/Components/TravelSetting/TravelSettings'
import RoutePlan from './assets/Components/routePlan/RoutePlan'

function App() {


  return (
    <div className='max-w-7xl mx-auto p-5 lg:p-10 bg-slate-100 space-y-5'>
      <h1 className='text-3xl lg:text-5xl font-semibold my-4'>Calculate your Umrah Cost</h1>

      <section className='border p-4 rounded-md'>
        <input type="checkbox" className="checkbox mr-4" />
        <label htmlFor="travel" className='font-semibold'>Visa (Umrah visa 90 days)</label>
        <p className='mx-5 lg:text-lg'>umrah visa bio metric and others</p>
      </section>
      {/*  */}
      <TravelSettings></TravelSettings>

      {/*flight booking  */}
      <FlightBooking></FlightBooking>

      {/* route plan */}
      <RoutePlan></RoutePlan>
      {/* Transport */}
      <TransPortation></TransPortation>

      {/*hotel services  */}
      <Hotel></Hotel>

      {/*food  */}
      <FoodServices></FoodServices>

    </div>
  )
}

export default App
