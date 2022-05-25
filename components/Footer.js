import { subComponent } from 'impulse-utils'
import InlineLink from './InlineLink'

const contactInfo = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
            </svg>
        ),
        href: 'tel:855-582-1038',
        text: '(855) 582-1038',
    },

    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
        href: 'mailto:info@tutoringforall.org',
        text: 'info@tutoringforall.org',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
        href: undefined,
        text: 'P.O. Box 56, Palo Alto, CA 94302',
    },
]

const socialInfo = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
        ),
        href: 'https://www.facebook.com/tutoringforall.org',
        text: 'Facebook',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ),
        href: 'https://www.instagram.com/tutoringforall_official/',
        text: 'Instagram',
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
        ),
        href: 'https://mobile.twitter.com/tutoringfor_all',
        text: 'Twitter',
    },
]

const legalInfo = [
    {
        href: '/legal/privacy-policy',
        text: 'Privacy Policy',
    },
    {
        href: '/legal/terms-of-use',
        text: 'Terms of Use',
    },
]

const organizationInfo = [
    {
        href: 'https://roboticsforall.net',
        text: 'Robotics for All',
    },
    {
        href: 'https://tutoringforall.org',
        text: 'Tutoring for All',
    },
    {
        href: 'https://www.mentoringforall.org/',
        text: 'Mentoring for All',
    },
]

const FooterSection = props => {
    const _template = {
        title: subComponent.select(props.children, 'Title'),
        content: subComponent.select(props.children, 'Content'),
    }
    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl font-serif">{_template.title}</h3>
            <div className="flex flex-col gap-2">{_template.content}</div>
        </div>
    )
}

FooterSection.Title = subComponent.create('Title')
FooterSection.Content = subComponent.create('Content')
FooterSection.Item = props => {
    return <div className="flex items-center gap-2">{props.children}</div>
}

const Footer = () => {
    const _template = {
        contactInfo: contactInfo.map(contact => (
            <FooterSection.Item key={contact.text}>
                {contact.icon}
                {contact.href ? (
                    <InlineLink href={contact.href}>{contact.text}</InlineLink>
                ) : (
                    contact.text
                )}
            </FooterSection.Item>
        )),
        socialInfo: socialInfo.map(social => (
            <FooterSection.Item key={social.text}>
                {social.icon}
                <InlineLink href={social.href}>{social.text}</InlineLink>
            </FooterSection.Item>
        )),
        legalInfo: legalInfo.map(legal => (
            <FooterSection.Item key={legal.text}>
                <InlineLink href={legal.href} internal>
                    {legal.text}
                </InlineLink>
            </FooterSection.Item>
        )),
        organizationInfo: organizationInfo.map(organization => (
            <FooterSection.Item key={organization.text}>
                <InlineLink href={organization.href}>
                    {organization.text}
                </InlineLink>
            </FooterSection.Item>
        )),
    }
    return (
        <footer className="bg-primary-400 px-dynamic py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <FooterSection>
                    <FooterSection.Title>Contact</FooterSection.Title>
                    <FooterSection.Content>
                        {_template.contactInfo}
                    </FooterSection.Content>
                </FooterSection>
                <FooterSection>
                    <FooterSection.Title>Social</FooterSection.Title>
                    <FooterSection.Content>
                        {_template.socialInfo}
                    </FooterSection.Content>
                </FooterSection>
                <FooterSection>
                    <FooterSection.Title>Legal</FooterSection.Title>
                    <FooterSection.Content>
                        {_template.legalInfo}
                    </FooterSection.Content>
                </FooterSection>
                <FooterSection>
                    <FooterSection.Title>Organization</FooterSection.Title>
                    <FooterSection.Content>
                        {_template.organizationInfo}
                    </FooterSection.Content>
                </FooterSection>
            </div>
            <div className="flex justify-center mt-10">
                &copy; {new Date().getFullYear()} Tutoring for All
            </div>
        </footer>
    )
}

export default Footer
