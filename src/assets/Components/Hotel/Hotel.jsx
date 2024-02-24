import { useState } from "react";
import PropTypes from 'prop-types';


const Hotel = ({ handleNumberOfDaysMakkah, handleNumberOfDaysMadina, calculateLivingCost, numberOfStays, madinaStays, livingCost, perNightInMakkah, perNightInMadina, setPerNightInMakkah, setPerNightInMadina }) => {
    const [showAdditionalInfo, setAdditionalInfo] = useState(false)

    const handleCheckBox = () => {
        setAdditionalInfo(!showAdditionalInfo)
    }

    const handleHotelMakkah = (e) => {
        const hotelMakkah = e.target.value;
        if (hotelMakkah === "bin laden 5 star") setPerNightInMakkah(50);
        else if (hotelMakkah === "hotel saudi") setPerNightInMakkah(40);
        else setPerNightInMakkah(30);
    }

    const handleHotelInMadina = (e) => {
        const hotel = e.target.value
        if (hotel === 'green tara 5 star') {
            setPerNightInMadina(30)
        }
        else if (hotel === 'iftar hotel') {
            setPerNightInMadina(25)
        }
        else if (hotel === 'al shamran palace') {
            setPerNightInMadina(40)
        }
    }

    return (
        <section className='border p-4 rounded-md space-y-3 min-h-44'>
            <input type="checkbox" checked={showAdditionalInfo} onChange={handleCheckBox} className="checkbox mr-4" />
            <label htmlFor="travel" className='text-xl font-semibold border-b-2 border-black inline-block'>Hotel</label>
            {
                showAdditionalInfo ?
                    <>
                        <div>
                            <h3 className='text-xl font-semibold'>select hotel in makkah</h3>
                            <div className="mb-3">
                                <select onChange={handleHotelMakkah} className="select select-ghost w-full max-w-xs p-2 bg-gray-300">
                                    <option>bin laden 5 star </option>
                                    <option>hotel saudi</option>
                                    <option>hotel makkah</option>

                                </select>
                                <p>per night {perNightInMakkah} $</p>
                            </div>
                            <label className="label-text mx-2 font-medium">
                                stay:
                                <input className="py-1 px-4 rounded-lg" type="number" value={numberOfStays} onChange={handleNumberOfDaysMakkah} />
                            </label>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold'>select hotel in madina</h3>
                            <div className="mb-3">
                                <select onChange={handleHotelInMadina} className="select select-ghost w-full max-w-xs p-2 bg-gray-300">
                                    <option>al shamran palace</option>
                                    <option>green tara 5 star </option>
                                    <option>iftar hotel</option>

                                </select>
                                <p>per night {perNightInMadina} $</p>
                            </div>
                            <label className="label-text mx-2 font-medium">
                                stay :
                                <input className="py-1 px-4 rounded-lg" type="number" value={madinaStays} onChange={handleNumberOfDaysMadina} />
                            </label>
                        </div>
                        <div className="p-1 bg-white rounded w-[200px]">
                            <div>
                                <button className="label-text mx-2 font-medium p-1" onClick={calculateLivingCost}>Calculate Total Cost</button>
                            </div>
                            {livingCost > 0 && (
                                <div>
                                    <h3>Total Cost: ${livingCost}</h3>
                                </div>
                            )}
                        </div>
                    </> : ''
            }
        </section>
    );
};
Hotel.propTypes = {
    handleNumberOfDaysMakkah: PropTypes.func,
    handleNumberOfDaysMadina: PropTypes.func,
    calculateLivingCost: PropTypes.func,
    numberOfStays: PropTypes.number,
    madinaStays: PropTypes.number,
    livingCost: PropTypes.number,
    perNightInMakkah: PropTypes.number,
    perNightInMadina: PropTypes.number,
    setPerNightInMakkah: PropTypes.func,
    setPerNightInMadina: PropTypes.func
}

export default Hotel;