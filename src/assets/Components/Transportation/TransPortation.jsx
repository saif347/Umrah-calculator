import { useState } from "react";
import PropTypes from 'prop-types';


const TransPortation = ({handleNumberOfDaysChange, calculateTotalCost, numberOfDays, totalCost }) => {
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
                                <option disabled selected>sedan</option>
                                <option>micro bus</option>
                                <option>van</option>

                            </select>
                        </div>

                        <div className="space-y-2">
                            <h3 className='text-xl font-semibold'>Price list:</h3>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mx-2 font-medium">per day <span> 15$</span></span>
                                    </label>
                                </div>
                            <div>
                                <label className="label-text mx-2 font-medium">
                                    Number of Days:
                                    <input type="number" value={numberOfDays} onChange={handleNumberOfDaysChange} />
                                </label>
                            </div>
                            <div className="p-1 bg-white rounded w-[200px]">
                                <div>
                                    <button className="label-text mx-2 font-medium p-1" onClick={calculateTotalCost}>Calculate Total Cost</button>
                                </div>
                                {totalCost > 0 && (
                                    <div>
                                        <h3>Total Cost: ${totalCost}</h3>
                                    </div>
                                )}
                            </div>
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
    totalCost: PropTypes.number
}

export default TransPortation;