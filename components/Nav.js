import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../public/images/logo.png'
import logoLgImage from '../public/images/logo-lg.png'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { classNames } from 'impulse-utils'

const pages = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Enroll',
        href: '/enroll',
    },
    {
        name: 'Partner',
        href: '/partner',
    },
    {
        name: 'Volunteer',
        href: '/volunteer',
    },
    {
        name: 'Resources',
        href: '/resources',
    },
]

const Nav = () => {
    const { pathname } = useRouter()
    const [logo, setLogo] = useState({
        source: logoImage,
        height: 56,
        width: 56,
    })
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
        const widthLg = width > 1024
        setLogo({
            source: widthLg ? logoLgImage : logoImage,
            height: 56,
            width: widthLg ? 224 : 56,
        })
    }, [])
    useEffect(() => {
        const updateLogo = () => {
            const width =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth
            const widthLg = width > 1024
            setLogo({
                source: widthLg ? logoLgImage : logoImage,
                height: 56,
                width: widthLg ? 224 : 56,
            })
        }
        window.addEventListener('resize', updateLogo)
        return () => window.removeEventListener('resize', updateLogo)
    }, [])
    useEffect(() => setOpen(false), [pathname])
    const _template = {
        pages: pages.map(page => (
            <Link key={page.name} href={page.href}>
                <a
                    className={classNames(
                        page.href === pathname
                            ? 'bg-primary-active'
                            : 'hover:bg-primary-hover',
                        'py-2 px-3 rounded-md font-bold'
                    )}
                >
                    {page.name}
                </a>
            </Link>
        )),
    }
    return (
        <nav className="fixed h-20 w-full py-3 px-dynamic bg-primary-200 flex justify-between lg:justify-start z-30 shadow">
            <button
                type="button"
                className="flex lg:hidden items-center justify-center p-2 rounded-md hover:bg-primary-hover focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    className="h-9 w-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                            open
                                ? 'M6 18L18 6M6 6l12 12'
                                : 'M4 6h16M4 12h16M4 18h16'
                        }
                    />
                </svg>
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
                <Link href="/">
                    <a>
                        <Image
                            src={logo.source}
                            alt="Logo"
                            height={logo.height}
                            width={logo.width}
                        />
                    </a>
                </Link>
            </div>
            <div className="lg:grow items-center justify-between hidden lg:flex">
                <div className="ml-6 flex gap-3">{_template.pages}</div>
                <Link href="/donate">
                    <a className="inline-block uppercase font-bold py-3 px-4 rounded-md bg-amber-400 text-lg transition-transform duration-300 hover:scale-105 ease-in-out tracking-wider">
                        Donate
                    </a>
                </Link>
            </div>
            <div
                className={classNames(
                    !open && 'hidden',
                    'lg:hidden absolute top-20 left-0 w-full pt-8 pb-10 px-dynamic bg-primary-200 flex flex-col gap-2'
                )}
            >
                {_template.pages}
                <div className="flex justify-center">
                    <Link href="/donate">
                        <a className="inline-block uppercase font-bold py-3 px-4 rounded-md bg-amber-400 text-lg transition-transform duration-300 hover:scale-105 ease-in-out tracking-wider">
                            Donate
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
