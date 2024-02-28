import Count from "../Count/Count";


const TravelSettings = () => {
    return (
        <section className='border p-4 rounded-md space-y-3'>
            <h3 className='text-xl font-semibold border-b-2 border-black inline-block'>Travel settings</h3> <br />
            <input type="checkbox" defaultChecked className="checkbox mr-4" />
            <label htmlFor="travel" className='font-semibold'>Umrah muallim (Travel assistant)</label>
            <div>
                <h3 className='text-xl font-semibold'>Traveler quantity:</h3>
                <div className='lg:flex items-center gap-2'>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2">Single</span>
                            <input type="radio" name="radio-10" className="radio" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2">with  family/group</span>
                            <input type="radio" name="radio-10" className="radi" />
                        </label>
                    </div>
                    <Count></Count>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-xl font-semibold'>Journey date:</h3>
                    <div className="">
                        <label className="label cursor-pointer mr-4">
                            <span className="label-text mx-2">From</span>
                            <input type="date" name="" className="mb-2 p-2" />
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text mx-2">To</span>
                            <input type="date" name="" className="p-2" />
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelSettings;