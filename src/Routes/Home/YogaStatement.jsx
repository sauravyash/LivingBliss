import { Link } from "react-router-dom"

const YogaStatement = () => (
    <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center justify-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Yoga and Our Society</h1>
                <p className="leading-relaxed text-base">“Yoga” is an often misunderstood word in the West, where it has been largely reduced to a form of physical exercise. The word “yoga” is a Sanskrit word meaning “union”. It is the process of the union or joining of two things. These two things are our inner nature and our universal nature.</p>
                <Link className="text-indigo-500 inline-flex items-center mt-4" to="/yoga">
                    <span>Learn More</span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12">
                <h2 className="title-font font-semibold text-gray-800 tracking-wider text-lg mb-3">CATEGORIES</h2>
                <nav className="flex flex-wrap list-none -mb-1 ">
                    <li className=" mb-1 w-1/2">
                        <Link to="eight-linbs" className="text-gray-600 hover:text-gray-800">Eight Limbs</Link>
                    </li>
                    <li className=" mb-1 w-1/2">
                        <Link to="four-stages" className="text-gray-600 hover:text-gray-800">Four Stages</Link>
                    </li>
                    <li className="mb-1 w-1/2">
                        <Link to="darshana" className="text-gray-600 hover:text-gray-800">Darshana</Link>
                    </li>
                    <li className=" mb-1 w-1/2">
                        <Link to="devotion" className="text-gray-600 hover:text-gray-800">Devotion</Link>
                    </li>
                </nav>
            </div>
        </div>
    </section>
)

export default YogaStatement