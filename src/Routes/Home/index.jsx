import { ChevronDownIcon } from "@heroicons/react/outline";

import HomeEvents from "./HomeEvents";
import CompanyPurpose from "./CompanyPurpose"
import YogaStatement from './YogaStatement'
import BecomeMember from './BecomeMember'

const Home = () => {
    function scrollDownOnClick() {
        document.querySelector('#section-under-home').scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });
    }

    return (
        <div>
            {/* // screen sized slideshow */}
            <div>
                <div className="mainBGImg relative overflow-hidden z-10 select-none">
                    <noscript><img src="/images/homeSlideshowImage.jpg" alt="A woman standing in a Yoga Position" /></noscript>
                    <img className="object-cover h-full  w-full" alt="A woman standing in a Yoga Position" srcSet="/images/homeSlideshowImage.jpg" />
                    <span className="transform absolute text-align-centre top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">Learning About Yoga Just Got Easier</span>
                    <ChevronDownIcon onClick={scrollDownOnClick} className="h-6 w-6 absolute bottom-8 left-1/2 -translate-x-1/2 " />
                </div>
            </div>

            <HomeEvents />

            <CompanyPurpose />

            {/* // lead to yoga statement and read more */}
            <YogaStatement />

            {/* // become a member banner */}
            <BecomeMember />

        </div>
    )
}

export default Home