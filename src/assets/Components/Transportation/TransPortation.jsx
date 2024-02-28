import { useState } from "react";
import PropTypes from 'prop-types';


const TransPortation = ({handleNumberOfDaysChange, calculateTotalCost, numberOfDays, submittedRental }) => {
    const [showAdditionalInfo, setAdditionalInfo] = useState(false)
    
    const handleCheckBox = () => {
        setAdditionalInfo(!showAdditionalInfo)
    }
    return (
        <section className='border p-4 rounded-md space-y-3 min-h-44'>
            <input type="checkbox" checked={showAdditionalInfo} onChange={handleCheckBox} className="checkbox mr-4" />
            <label htmlFor="travel" className='text-xl font-semibold border-b-2 border-black inline-block'>Transportation</label>

            {
                showAdditionalInfo ?
                    <div>
                        <div>
                            <h3 className='text-xl font-semibold'>Car type</h3>
                            <select className="select select-ghost w-full max-w-xs p-2 bg-gray-300">
                                <option defaultValue={true}>sedan</option>
                                <option>micro bus</option>
                                <option>van</option>

                            </select>
                        </div>

                        <div className="space-y-2 mt-3">
                            <div>
                                <label className="label-text mx-2 font-medium">
                                    Number of Days:
                                    <input type="number" value={numberOfDays} onChange={handleNumberOfDaysChange} />
                                </label>
                            </div>
                            <button className="label-text font-medium px-3 py-1 border rounded-2xl" onClick={calculateTotalCost}>{
                            submittedRental ? 'Submitted' : 'Submit'
                        }</button>
                        </div>

                    </div> : ''
            }
        </section>
    );
};
TransPortation.propTypes={
    handleNumberOfDaysChange: PropTypes.func,
    calculateTotalCost: PropTypes.func,
    numberOfDays: PropTypes.number,
    totalCost: PropTypes.number,
    submittedRental: PropTypes.any
}

export default TransPortation;