import { useState } from "react";
import PropTypes from 'prop-types';


const Hotel = ({ perNightInMakkah, perNightInMadina, setPerNightInMakkah, setPerNightInMadina, calculateLivingCost, submitted }) => {
    const [showAdditionalInfo, setAdditionalInfo] = useState(true)

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
                        </div>
                        <button className="label-text font-medium px-3 py-1 border rounded-2xl" onClick={calculateLivingCost}>{
                            submitted ? 'Submitted' : 'Submit'
                        }</button>
                    </> : ''
            }
        </section>
    );
};
Hotel.propTypes = {
    calculateLivingCost: PropTypes.func,
    perNightInMakkah: PropTypes.number,
    perNightInMadina: PropTypes.number,
    setPerNightInMakkah: PropTypes.func,
    setPerNightInMadina: PropTypes.func,
    submitted: PropTypes.any
}

export default Hotel;