import Count from "../Count/Count";


const RoutePlan = () => {
    return (
        <section className='border p-4 rounded-md space-y-3'>
            <h3 className='text-xl font-semibold border-b-2 border-black inline-block'>Route plan</h3> <br />
            <div>
                <h3 className='text-xl font-semibold'>Route:</h3>
                <select className="select select-ghost w-full max-w-xs p-2 bg-gray-300">
                    <option disabled selected>Makkah-madina-makkah</option>
                    <option>madina-makkah</option>
                    <option>jeddah-madina</option>
                    <option>tayef-madina</option>
                </select>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Approx nights in:</h3>

                <div className='space-y-2 md:flex lg:flex  items-center gap-8'>
                    <div className="mt-2">
                        <h3 className='lg:text-xl font-semibold'>Makkah</h3>
                        <Count></Count>
                    </div>
                    <div >
                        <h3 className='lg:text-xl font-semibold'>Madina</h3>
                        <Count></Count>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RoutePlan;