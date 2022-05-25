import { classNames } from 'impulse-utils'
import Link from 'next/link'

const InlineLink = props => {
    if (props.internal) {
        return (
            <Link href={props.href}>
                <a
                    className={classNames(
                        props.className,
                        'border-b border-amber-800 text-amber-800 hover:border-amber-600 hover:text-amber-600 transition-colors duration-200'
                    )}
                >
                    {props.children}
                </a>
            </Link>
        )
    }
    return (
        <a
            className={classNames(
                props.className,
                'border-b border-amber-800 text-amber-800 hover:border-amber-600 hover:text-amber-600 transition-colors duration-200'
            )}
            href={props.href}
            target="_blank"
            rel="noreferrer"
        >
            {props.children}
        </a>
    )
}

export default InlineLink
