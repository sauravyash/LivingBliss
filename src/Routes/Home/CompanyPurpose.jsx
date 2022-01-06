const CompanyPurpose = () => (
    <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center ">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 flex-[3_3_0%]">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block">Our Commitment </span>
            </h2>
            <p className="text-md mt-4 text-gray-400">Our commitment is to serve the world and develop a blissful society, educating the community members to attain a balanced body (physical), mind (mental) and soul (energy). There will be no fear or insecurity among the citizens in a blissful society. We are dedicated to educate and empower everyone, especially the youth and women in the society who are the pillars for a stronger society. Our objective is to educate our citizens to develop righteousness in their hearts, which in turns will build a harmonious society.</p>
            
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24 flex-[2_2_0%] object-cover">
            <img src="https://images.pexels.com/photos/10529582/pexels-photo-10529582.jpeg" 
                className="rounded-lg w-1/2 " alt="Tree" 
            />
            <div className="">
                <img src="https://images.pexels.com/photos/10529582/pexels-photo-10529582.jpeg" 
                    className="rounded-lg mb-8 max-h-32 w-max object-cover" 
                    alt="Tree" 
                />
                <img src="https://images.pexels.com/photos/10529582/pexels-photo-10529582.jpeg" 
                    className="rounded-lg max-h-32 w-max object-cover" 
                    alt="Tree" 
                />
            </div> 
        </div>
        
    </div>
)

export default CompanyPurpose