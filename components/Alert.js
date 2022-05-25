import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'

const Alert = props => {
    const [currentY, setCurrentY] = useState(0)
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const updateVisible = () => {
            const { scrollY } = window
            setVisible(currentY > scrollY)
            setCurrentY(scrollY)
        }
        document.addEventListener('scroll', updateVisible)
        return () => document.removeEventListener('scroll', updateVisible)
    }, [currentY, visible])
    return (
        <Transition
            show={visible}
            as="div"
            className="fixed bottom-0 left-0 w-full flex justify-center"
            enter="transition-opacity"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="w-full md:w-2/3 mx-dynamic my-4 md:my-6 p-6 rounded-md bg-primary-200 text-xl md:text-2xl lg:text-3xl font-bold shadow">
                {props.children}
            </div>
        </Transition>
    )
}

export default Alert
