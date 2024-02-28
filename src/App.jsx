import { useState } from 'react'
import './App.css'
import FoodServices from './assets/Components/FOOD/FoodServices'
import FlightBooking from './assets/Components/FlightBooking/FlightBooking'
import Hotel from './assets/Components/Hotel/Hotel'
import TransPortation from './assets/Components/Transportation/TransPortation'
import TravelSettings from './assets/Components/TravelSetting/TravelSettings'
import RoutePlan from './assets/Components/routePlan/RoutePlan'

function App() {
  const [numberOfDays, setNumberOfDays] = useState(1); // Default to 1 day car rent
  const [transportation, setTransportation] = useState(0); //  car rent total
  // hotel
  // const [numberOfStays, setNumberOfStays] = useState(1); // Default to 1 day
  // const [madinaStays, setMadinaStays] = useState(1); // Default to 1 day
  const [livingCost, setLivingCost] = useState(0);
  const [perNightInMakkah, setPerNightInMakkah] = useState(50)
  const [perNightInMadina, setPerNightInMadina] = useState(30)
  // const [hotelPerNightMakkah, setHotelPerNightMakkah] = useState(50)
  // const [hotelPerNightMadina, setHotelPerNightMadina] = useState(20)

  // food
  const [howManyDays, setHowManyDays] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState('');
  const [foodPrice, setFoodPrice] = useState(0);
  const [foodExpenses, setFoodExpenses] = useState(0)

  // total umrah cost 
  const [TotalUmrahCost, setTotalUmrahCost] = useState(0)

  const [submittedLiving, setSubmittedLiving]= useState(false)
  const [submittedFood, setSubmittedFood]= useState(false)
  const [submittedRental, setSubmittedRental]= useState(false)

  // car rent
  const handleNumberOfDaysChange = (event) => {
    setNumberOfDays(parseInt(event.target.value));
  };

  const calculateTotalCost = () => {
    // Assume $10 per day as the rental rate
    const dailyRate = 10;
    const totalCost = numberOfDays * dailyRate;
    setTransportation(totalCost);
    setSubmittedRental(!submittedRental)
  };

  // hotel

  const calculateLivingCost = () => {
    const totalInMakkah = perNightInMakkah * 2;
    const totalInMadina = perNightInMadina * 2;

    const livingExpenses = totalInMakkah + totalInMadina;
    setLivingCost(livingExpenses);
    setSubmittedLiving(!submittedLiving)
  };
  console.log(submittedLiving)

  // food 
  const handleFoodCategory = (e) => {
    setSelectedOptions(e.target.value);
    if (e.target.value === "kangal voj") setFoodPrice(50)
    else if (e.target.value === "Shahi voj") setFoodPrice(100)
  }
  const handleNumOfDays = e => {
    setHowManyDays(e.target.value)
  }

  const calculateFoodExpenses = () => {
    let total = foodPrice * howManyDays;
    setFoodExpenses(total)
    setSubmittedFood(!submittedFood)
  }

  const handleTotalUmrahCost = () => {
    let sum = transportation + livingCost + foodExpenses;
    setTotalUmrahCost(sum);

  }


  return (
    <div className='max-w-7xl mx-auto p-5 lg:p-10 bg-slate-100 space-y-5'>
      <h1 className='text-3xl lg:text-5xl font-semibold my-4'>Calculate your Umrah Cost</h1>

      <section className='border p-4 rounded-md'>
        <input type="checkbox" defaultChecked className="checkbox mr-4" />
        <label htmlFor="travel" className='font-semibold'>Visa (Umrah visa 90 days)</label>
        <p className='mx-5 lg:text-lg'>umrah visa bio metric and others</p>
      </section>
      {/*  */}
      <TravelSettings></TravelSettings>

      {/*flight booking  */}
      <FlightBooking></FlightBooking>

      {/* route plan */}
      <RoutePlan></RoutePlan>

      {/*hotel services  */}
      <Hotel
        perNightInMakkah={perNightInMakkah}
        perNightInMadina={perNightInMadina}
        calculateLivingCost={calculateLivingCost}
        livingCost={livingCost}
        setPerNightInMakkah={setPerNightInMakkah}
        setPerNightInMadina={setPerNightInMadina}
        submitted={submittedLiving}
      ></Hotel>

      {/* Transport */}
      <TransPortation
        handleNumberOfDaysChange={handleNumberOfDaysChange}
        numberOfDays={numberOfDays}
        totalCost={transportation}
        calculateTotalCost={calculateTotalCost}
        submittedRental={submittedRental}
      ></TransPortation>
      {/*food  */}
      <FoodServices
        handleFoodCategory={handleFoodCategory}
        handleNumOfDays={handleNumOfDays}
        calculateFoodExpenses={calculateFoodExpenses}
        foodPrice={foodPrice}
        selectedOptions={selectedOptions}
        howManyDays={howManyDays}
        foodExpenses={foodExpenses}
        submittedFood={submittedFood}
      ></FoodServices>

      <button onClick={handleTotalUmrahCost} className="py-1 px-2 text-lg rounded-lg font-medium bg-slate-300 text-gray-600 mb-2">Calculate total cost</button>

      <div className='p-1 bg-white rounded w-[200px]'>
        <p> Total Cost :{TotalUmrahCost}$</p>
      </div>

    </div >
  )
}

export default App
