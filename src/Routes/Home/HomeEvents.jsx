const events = [
    {
        name: 'Hike around the Mountain',
        description: 'A relaxing walk of reflection',
        imageSrc: 'https://images.pexels.com/photos/7042219/pexels-photo-7042219.jpeg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://images.pexels.com/photos/8263404/pexels-photo-8263404.jpeg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

const HomeEvents = () => (
    <div className="bg-gray-100" id="section-under-home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-4xl font-extrabold text-gray-900">Upcoming Events</h2>

                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    {events.map((callout) => (
                        <div key={callout.name} className="group relative">
                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img
                                    src={callout.imageSrc}
                                    alt={callout.imageAlt}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <h3 className="mt-6 text-xl text-gray-500">
                                <a href={callout.href}>
                                    <span className="absolute inset-0" />
                                    {callout.name}
                                </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
)


export default HomeEvents