import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <section className="text-gray-600 body-font lg:py-28">
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center  justify-center">
                <div className="md:text-right text-center w-full md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <span className="md:text-8xl text-6xl">404</span>
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12 w-full">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 md:text-left text-center">Page Not Found</h1>
                    <p className="leading-relaxed text-base  md:text-left text-center">Please check the URL in the Address Bar.</p>
                    <Link to="/" className="text-indigo-500 inline-flex items-center mt-4 text-center mx-auto md:mx-0 ">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 mr-2 rotate-180" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        <span>Go Home</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound