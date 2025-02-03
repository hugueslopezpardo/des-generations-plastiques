'use client'

import { Fragment, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {Button} from "@/components/ui/button";
import { useEffect } from 'react'
import {Link, usePage} from "@inertiajs/react";
import {useToast} from "@/hooks/use-toast";

const navigation = {
    categories: [
        {
            name: 'Les ressources',
            featured: [
                {
                    name: 'Médiathèque',
                    href: '/resources',
                    imageSrc: '/assets/images/pages/welcome/media-resources.png',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
                {
                    name: 'Recherche et science participatives',
                    href: '#',
                    imageSrc: '/assets/images/pages/welcome/media-mspr.png',
                    imageAlt: 'Recherche et science participatives',
                },
                {
                    name: 'Carte des participants',
                    href: '#',
                    imageSrc: '/assets/images/pages/welcome/media-map.png',
                    imageAlt: 'Carte des participants du programme',
                },

                {
                    name: 'La maison DGP',
                    href: '#',
                    imageSrc: '/assets/images/pages/welcome/media-house.png',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
            ],
        },
    ],
    pages: [
        { name: 'Accueil', href: '/' },
        { name: 'Le programme', href: '/program' },
        { name: 'Participer', href: '/participate' },
        { name: 'Qui sommes-nous ?', href: '/about' },
    ],
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(window.location.pathname)
    }, [])

    /**
     * Get the authenticated user.
     */
    const user = usePage().props.auth.user;

    const { toast } = useToast();

    const logout = () => {
        toast({
            title: 'Déconnexion',
            description: 'Vous avez été déconnecté avec succès.',
        })
    }

    return (
        <div className="absolute mt-4 w-full">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Logo (lg-) */}
                        <a href="#" className="lg:hidden">
                            <img
                                alt=""
                                src='assets/images/shared/logo-navbar.png'
                                className="h-8 w-auto mx-auto"
                            />
                        </a>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <Link href={page.href} className={`-m-2 block p-2 font-medium ${currentPath === page.href ? 'text-green-600' : 'text-gray-900'}`} onClick={() => setCurrentPath(page.href)}>
                                        {page.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">

                            <>

                            {user && (
                                <>
                                    <div className="flow-root">
                                        <a href={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900">
                                            Mon compte
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <Link href={route('logout')} method={'post'} onClick={logout} className="-m-2 block p-2 font-medium text-gray-900">
                                            Déconnexion
                                        </Link>
                                    </div>
                                </>
                            )}

                            {!user && (
                                <>
                                    <div className="flow-root">
                                        <a href={'/auth/login'} className="-m-2 block p-2 font-medium text-gray-900">
                                            Connexion
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a href={'/auth/register'} className="-m-2 block p-2 font-medium text-gray-900">
                                            Inscription
                                        </a>
                                    </div>
                                </>
                            )}

                            </>


                        </div>

                        {/* Links */}
                        <TabGroup className="mt-2">
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation.categories.map((category) => (
                                        <Tab
                                            key={category.name}
                                            className={`flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-green-600 data-[selected]:text-green-600`}
                                        >
                                            {category.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                {navigation.categories.map((category) => (
                                    <TabPanel key={category.name} className="space-y-12 px-4 py-6">
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                            {category.featured.map((item, index) => (
                                                <div key={item.name} className="group relative">
                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                        <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                                                    </div>
                                                    <Link href={item.href} className="mt-6 block text-sm font-medium text-gray-900" onClick={() => setCurrentPath('/media')}>
                                                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                        {item.name}
                                                    </Link>
                                                    <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                                        {index <= 0 ? 'Disponible' : 'En cours de construction'}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="relative md:bg-white md:shadow-2xl z-30">
                <nav aria-label="Top">
                    {/* Secondary navigation */}
                    <div className="bg-transparent">
                        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                            <div className="">
                                <div className="flex h-16 items-center justify-between">
                                    {/* Logo (lg+) */}
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                        <a href="#">
                                            <span className="sr-only">Your Company</span>
                                            <img
                                                alt=""
                                                src='assets/images/shared/logo-navbar.png'
                                                className="h-8 w-auto"
                                            />
                                        </a>
                                    </div>

                                    <div className="hidden h-full lg:flex">
                                        {/* Flyout menus */}
                                        <PopoverGroup className="inset-x-0 bottom-0 px-4">
                                            <div className="flex h-full justify-center space-x-16">

                                                <a href={'/'} onClick={() => setCurrentPath('/')}
                                                   className={`flex items-center text-sm font-bold hover:cursor-pointer ${currentPath === '/' ? 'text-green-600' : 'text-gray-900 hover:text-gray-500'}`}>
                                                    Accueil
                                                </a>

                                                <a href={'/program'} onClick={() => setCurrentPath('/program')}
                                                   className={`flex items-center text-sm font-bold hover:cursor-pointer ${currentPath === '/program' ? 'text-green-600' : 'text-gray-900 hover:text-gray-500'}`}>
                                                    Le programme
                                                </a>

                                                <a href={'/participate'} onClick={() => setCurrentPath('/participate')}
                                                   className={`flex items-center text-sm font-bold hover:cursor-pointer ${currentPath === '/participate' ? 'text-green-600' : 'text-gray-900 hover:text-gray-500 '}`}>
                                                    Participer
                                                </a>

                                                {navigation.categories.map((category) => (
                                                    <Popover key={category.name} className="flex">
                                                        <div className="relative flex">
                                                            <PopoverButton
                                                                className={`relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-bold text-gray-700 transition-colors duration-200 ease-out hover:text-gray-500 data-[open]:border-green-600 data-[open]:text-green-600 ${currentPath === '/media' ? 'text-green-600' : 'text-gray-900 hover:text-gray-500'}`}>
                                                                {category.name} {' '} <ChevronDownIcon className="h-5 w-5 ml-1 -mr-1" />
                                                            </PopoverButton>
                                                        </div>

                                                        <PopoverPanel
                                                            transition
                                                            className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                                        >
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div aria-hidden="true"
                                                                 className="absolute inset-0 top-1/2 bg-white shadow"/>

                                                            <div className="relative bg-white">
                                                                <div className="mx-auto max-w-7xl px-8">
                                                                    <div
                                                                        className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                                                        {category.featured.map((item, index) => (
                                                                            <div key={item.name} className={`group relative ${index <= 0 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}>
                                                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                                                    <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center"
                                                                                    />
                                                                                </div>
                                                                                <a href={item.href}
                                                                                onClick={() => setCurrentPath('/media')}
                                                                                   className="mt-4 block font-medium text-gray-900">
                                                                                    <span aria-hidden="true"
                                                                                          className="absolute inset-0 z-10"/>
                                                                                    {item.name}
                                                                                </a>
                                                                                <p aria-hidden="true" className="mt-1">
                                                                                    {index <= 0 ? 'Disponible' : 'En cours de construction'}
                                                                                </p>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </PopoverPanel>
                                                    </Popover>
                                                ))}

                                                <a href={'/about'}
                                                    onClick={() => setCurrentPath('/about')}
                                                   className={`flex items-center text-sm font-bold hover:cursor-pointer ${currentPath === '/about' ? 'text-green-600' : 'text-gray-900 hover:text-gray-500'}`}>
                                                    Qui sommes-nous ?
                                                </a>

                                            </div>
                                        </PopoverGroup>
                                    </div>

                                    {/* Mobile menu and search (lg-) */}
                                    <div className="flex flex-1 items-center lg:hidden">
                                    <button
                                            type="button"
                                            onClick={() => setOpen(true)}
                                            className={`-ml-2 rounded-md bg-white p-2 text-gray-400 ${open ? 'hidden' : 'block'}`}
                                        >
                                            <span className="sr-only">Open menu</span>
                                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                                        </button>
                                    </div>

                                    <div className="flex flex-1 items-center justify-end gap-2">
                                        {user && (
                                            <>
                                                <Link href={'/dashboard'}
                                                      className="hidden text-sm font-bold text-gray-700 hover:text-gray-500 lg:block">
                                                    <Button variant={'secondary'}>
                                                        Mon compte
                                                    </Button>
                                                </Link>
                                                <Link href={route('logout')} method={'post'} onClick={logout}>
                                                    <Button variant={'secondary'}>
                                                        Déconnexion
                                                    </Button>
                                                </Link>
                                            </>
                                        )}

                                        {!user && (
                                            <>
                                                <a href={'/auth/login'}
                                                   className="hidden text-sm font-bold text-gray-700 hover:text-gray-500 lg:block">
                                                    <Button variant={'secondary'}>
                                                        Connexion
                                                    </Button>
                                                </a>
                                                <a href={'/auth/register'}
                                                   className="hidden text-sm font-bold text-gray-700 hover:text-gray-500 lg:block">
                                                    <Button variant={'secondary'}>
                                                        Inscription
                                                    </Button>
                                                </a>
                                            </>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
