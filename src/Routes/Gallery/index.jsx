const Gallery = () => {
    const albums = [
        {
            'title': 'Mountains',
            'desc': "Mountains were big and tall and stuff",
            'src': 'https://dummyimage.com/1400x900',
            'author': 'Soeon Sjorks',
            'authorSrc': 'https://dummyimage.com/100x100',
            'date': 'Aug 18'
        },
        {
            'title': 'Mountains',
            'desc': "Mountains were big and tall and stuff",
            'src': 'https://dummyimage.com/1400x900',
            'author': 'Soeon Sjorks',
            'authorSrc': 'https://dummyimage.com/100x100',
            'date': 'Aug 18'
        },
        {
            'title': 'Mountains',
            'desc': "Mountains were big and tall and stuff",
            'src': 'https://dummyimage.com/1400x900',
            'author': 'Soeon Sjorks',
            'authorSrc': 'https://dummyimage.com/100x100',
            'date': 'Aug 18'
        }
    ]
    return (
        <section>
            <h1 className="sm:text-3xl text-2xl font-medium title-font my-4 pt-8">The Gallery</h1>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    albums.map(album => (
                        <div className=" w-full lg:max-w-full lg:flex">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ 'backgroundImage': `url('${album.src}')`, 'backgroundPosition': 'center' }} title="Mountain">
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-gray-900 font-bold text-xl mb-2">{album.title}</div>
                                    <p className="text-gray-700 text-base">{album.desc}</p>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full mr-4" src={album.authorSrc} alt="Avatar of Writer" />
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">{album.author}</p>
                                        <p className="text-gray-600">{album.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Gallery