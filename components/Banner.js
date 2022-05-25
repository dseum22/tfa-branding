import { classNames, subComponent } from 'impulse-utils'
import { Children, cloneElement } from 'react'

const Banner = props => {
    const _template = {
        title: subComponent.select(props.children, 'Title'),
        content: subComponent.select(props.children, 'Content'),
    }
    return (
        <div className="relative">
            <div
                className={classNames(
                    props.className,
                    'bg-image bg-shadow w-full flex justify-center'
                )}
            >
                <div className="px-dynamic md:px-0 md:w-2/3 z-10 py-dynamic sm:py-10 md:py-20">
                    <div className="text-4xl md:text-5xl lg:text-6xl">
                        {_template.title}
                    </div>
                    {_template.content}
                </div>
            </div>
        </div>
    )
}

Banner.Title = props => {
    return (
        <h1
            className={classNames(
                props.className,
                'font-bold font-serif text-white leading-relaxed tracking-wider'
            )}
        >
            {props.children}
        </h1>
    )
}
Banner.Title.displayName = 'Title'
Banner.Content = props => {
    return (
        <div
            className={classNames(
                props.className,
                'mt-4 md:mt-10 w-full text-xl md:text-2xl lg:text-3xl'
            )}
        >
            {props.children}
        </div>
    )
}
Banner.Content.displayName = 'Content'

export default Banner
