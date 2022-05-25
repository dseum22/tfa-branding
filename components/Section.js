import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { subComponent, classNames } from 'impulse-utils'

const Section = props => {
    const _template = {
        title: subComponent.select(props.children, 'Title'),
        content: subComponent.select(props.children, 'Content'),
    }
    return (
        <div
            className={classNames(
                props.className,
                'p-dynamic md:px-[calc(100vw/6)] space-y-4 sm:space-y-6 md:space-y-10'
            )}
        >
            <h2 className="font-bold font-serif text-4xl md:text-5xl lg:text-6xl">
                {_template.title}
            </h2>
            {_template.content}
        </div>
    )
}

Section.Title = subComponent.create('Title')
Section.Content = subComponent.create('Content')
Section.Div = props => {
    return (
        <div className="text-xl md:text-2xl lg:text-3xl">
            <div className="leading-relaxed">{props.children}</div>
        </div>
    )
}
Section.Disclosure = props => {
    const _template = {
        title: subComponent.select(props.children, 'Title'),
        content: subComponent.select(props.children, 'Content'),
    }
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex items-center gap-2 w-full justify-between rounded-md bg-amber-100 px-4 py-2 font-bold hover:bg-amber-200 focus:outline-none text-left">
                            <span className="text-xl md:text-2xl lg:text-3xl">
                                {_template.title}
                            </span>
                            <ChevronUpIcon
                                className={classNames(
                                    open && 'rotate-180 transform',
                                    'h-10 w-10 shrink-0'
                                )}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl md:text-2xl lg:text-3xl">
                            {_template.content}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
Section.Disclosure.Title = subComponent.create('Title')
Section.Disclosure.Content = subComponent.create('Content')

export default Section
