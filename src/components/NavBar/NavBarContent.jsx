import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'

// import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const NavBarContent = (props) => {
    const location = useLocation().pathname.substring(1)
    return(
        <>
            {props.nav.map((item) => !!!item.items ? (

                <Disclosure.Button 
                    key={item.name}
                    as="span"
                    
                    aria-current={item.current ? 'page' : undefined}
                >
                    <Link to={item.href} className={classNames(
                        item.href === location ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                    )}>
                        {item.name}
                    </Link>
                    
                </Disclosure.Button>
            ) : (
                <Menu as="div" className=" relative" key={item.name}>
                    <div>
                        <Menu.Button
                            as="a"
                            href={item.href}
                            className={classNames(
                                item.href === location ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Menu.Button>
                    </div>
                    
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    > 
                    <Menu.Items className="origin-top-left z-50 absolute sm:left-0 sm:translate-x-0 left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {
                            item.items.map(i => (
                                <Menu.Item key={i.href}>
                                    {({ active }) => (
                                        <Link
                                            to={i.href}
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            {i.name}
                                        </Link>
                                    )}
                                </Menu.Item>
                            ))
                        }
                    </Menu.Items>
                    </Transition>
                </Menu>
            ))}
        </>
    )
}

export default NavBarContent