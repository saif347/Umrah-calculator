import { useState } from "react";
import PropTypes from 'prop-types';



const FoodServices = ({handleNumOgPackage,handleNumOfDays,calculateFoodExpenses, packageCount,howManyDays,foodExpenses }) => {
    const [showAdditionalInfo, setAdditionalInfo] = useState(false)
    
    const handleCheckBox = () => {
        setAdditionalInfo(!showAdditionalInfo)
    }
    return (
        <section className='border p-4 rounded-md space-y-3 min-h-44'>
            <input type="checkbox" checked={showAdditionalInfo} onChange={handleCheckBox} className="checkbox mr-4" />
            <label htmlFor="travel" className='text-xl font-semibold border-b-2 border-black inline-block'>Catering service</label>

            {
                showAdditionalInfo ?
                    <div>
                        <div className="mb-3">
                            <h3 className="text-xl font-semibold"> would you  prefer Catering service</h3>
                            <select className="select select-ghost w-full max-w-xs p-2 bg-gray-300">
                                <option disabled selected>kangal voj</option>
                                <option>vater hotel catering service</option>
                                <option>mayer dowa catering service</option>

                            </select>
                        </div>
                        <div>
                            <p>1 day package 25$</p>
                            <div className="mb-3">
                                <label className="label-text mx-2 font-medium">
                                    how many people / package :
                                    <input className="py-1 px-4 rounded-lg" type="number" value={packageCount} onChange={handleNumOgPackage} />
                                </label>
                            </div>
                            <div>
                                <label className="label-text mx-2 font-medium">
                                    for how many days :
                                    <input className="py-1 px-4 rounded-lg" type="number" value={howManyDays} onChange={handleNumOfDays} />
                                </label>
                            </div>
                            <div className="p-1 bg-white rounded w-[200px] mt-3">
                                <div>
                                    <button className="label-text mx-2 font-medium p-1 " onClick={calculateFoodExpenses}>Calculate Total Cost</button>
                                </div>
                                {foodExpenses > 0 && (
                                    <div>
                                        <h3>Total Cost: ${foodExpenses}</h3>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> : ''
            }
        </section>
    );
};
FoodServices.propTypes={
    handleNumOgPackage: PropTypes.func,
    handleNumOfDays: PropTypes.func,
    calculateFoodExpenses: PropTypes.func,
    packageCount:PropTypes.number,
    howManyDays: PropTypes.number,
    foodExpenses:PropTypes.number
}

export default FoodServices;