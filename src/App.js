import {
    Routes,
    Route
} from "react-router-dom"

import NavBar from './components/NavBar'

import { Home, Yoga, About, EightLimbs, FourStages, Events, Programs, Videos, Gallery
    // , Members 
} from './Routes'

import { NotFound } from './Routes/Error'
import Footer from './components/Footer' 

import './App.css';
import './styles/output.css'

const navigation = [
    { name: 'Home', href: '/', current: true },
    {
        name: 'Yoga', href: '/yoga', current: false, items: [
            { name: "About", href: "/yoga/about", current: false },
            { name: "The Eight Limbs Of Yoga", href: "/yoga/eight-limbs", current: false },
            { name: "The Four Stages", href: "/yoga/four-stages", current: false },
            { name: 'Darshana', href: '/yoga/darshana', current: false },
            { name: 'Devotion', href: '/yoga/devotion', current: false },
        ]
    },

    { name: 'Events', href: '/events', current: false },
    { name: 'Programs', href: '/programs', current: false },
    { name: 'Videos', href: '/videos', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    // { name: 'Members', href: 'members', current: false },
]

function App() {
    return (
        <>
            <div className="App">
                <NavBar nav={navigation} />
                <Routes>
                    <Route path="yoga/about" element={<About />} />
                    <Route path="yoga/eight-limbs" element={<EightLimbs />} />
                    <Route path="yoga/four-stages" element={<FourStages />} />
                    <Route path="yoga" element={<Yoga />} />
                    <Route path="events" element={<Events />} />
                    <Route path="programs" element={<Programs />} />
                    <Route path="videos" element={<Videos />} />
                    <Route path="gallery" element={<Gallery />} />
                    {/* <Route path="members" element={<Members />} /> */}
                    <Route index path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

            </div>
            <Footer />
        </>

    );
}

export default App;
