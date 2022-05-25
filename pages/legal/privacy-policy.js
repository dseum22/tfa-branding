import Section from '../../components/Section'
import InlineLink from '../../components/InlineLink'

const PrivacyPolicy = () => {
    return (
        <>
            <Section className="bg-primary-100">
                <Section.Title>Privacy policy.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        <b className="font-serif">Privacy notice.</b> This
                        privacy notice discloses the privacy practices for
                        www.tutoringforall.org. This privacy notice applies
                        solely to information collected by this website. It will
                        notify you of the following:
                        <ol className="list-decimal list-inside p-3">
                            <li>
                                What personally identifiable information is
                                collected from you through the website, how it
                                is used, and with whom it may be shared.
                            </li>
                            <li>
                                What choices are available to you regarding the
                                use of your data.
                            </li>
                            <li>
                                The security procedures in place to protect
                                against the misuse of your information.
                            </li>
                            <li>
                                How you can correct any inaccuracies in the
                                information.
                            </li>
                        </ol>
                    </Section.Div>
                    <Section.Div>
                        <b className="font-serif">
                            Information collection, use, and sharing.
                        </b>{' '}
                        We are the sole owners of the information collected on
                        this site. We only have access to/collect information
                        that you voluntarily give us via email or other direct
                        contact from you. We will not sell or rent this
                        information to anyone. We will use your information to
                        respond to you regarding the reason you contacted us. We
                        will not share your information with any third party
                        outside of our organization, other than as necessary to
                        fulfill your request. Unless you ask us not to, we may
                        contact you via email in the future to tell you about
                        specials, new products or services, or changes to this
                        privacy policy.
                    </Section.Div>
                    <Section.Div>
                        <b className="font-serif">
                            Your access to and control over information.
                        </b>{' '}
                        You may opt out of any future contacts from us at any
                        time. You can do the following at any time by contacting
                        us via the email address or phone number given on our
                        website:
                        <ul className="list-disc list-inside p-3">
                            <li>See what data we have about you, if any.</li>
                            <li>Change/correct any data we have about you.</li>
                            <li>Have us delete any data we have about you.</li>
                            <li>
                                Express any concern you have about our use of
                                your data.
                            </li>
                        </ul>
                    </Section.Div>
                    <Section.Div>
                        <b className="font-serif">Security.</b> We take
                        precautions to protect your information. When you submit
                        sensitive information via the website, your information
                        is protected both online and offline. Wherever we
                        collect sensitive information (such as credit card
                        data), that information is encrypted and transmitted to
                        us in a secure way. You can verify this by looking for a
                        lock icon in the address bar and looking for "https" at
                        the beginning of the address of the Web page. While we
                        use encryption to protect sensitive information
                        transmitted online, we also protect your information
                        offline. Only employees who need the information to
                        perform a specific job (for example, billing or customer
                        service) are granted access to personally identifiable
                        information. The computers/servers in which we store
                        personally identifiable information are kept in a secure
                        environment.
                    </Section.Div>
                    <Section.Div>
                        <b className="font-serif">Links.</b> This website
                        contains links to other sites. Please be aware that we
                        are not responsible for the content or privacy practices
                        of such other sites. We encourage our users to be aware
                        when they leave our site and to read the privacy
                        statements of any other site that collects personally
                        identifiable information.
                    </Section.Div>
                    <Section.Div>
                        <b className="font-serif">Conclusion.</b> If you feel
                        that we are not abiding by this privacy policy, you
                        should contact us immediately via email at{' '}
                        <InlineLink href="mailto:info@tutoringforall.org">
                            info@tutoringforall.org
                        </InlineLink>{' '}
                        or via telephone at{' '}
                        <InlineLink href="tel:855-582-1038">
                            (855) 582-1038
                        </InlineLink>
                        .
                    </Section.Div>
                </Section.Content>
            </Section>
        </>
    )
}

export default PrivacyPolicy
