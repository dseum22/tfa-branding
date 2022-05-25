import Banner from '../components/Banner'
import InlineLink from '../components/InlineLink'
import Section from '../components/Section'

const Partner = () => {
    return (
        <>
            <Banner className="before:bg-[url('../public/images/banners/partner.jpg')]">
                <Banner.Title className="tall-underline">Partner</Banner.Title>
                <Banner.Content>
                    <h2 className="font-bold text-white leading-loose md:leading-relaxed tracking-wide">
                        By working together, we can bring a better future!
                    </h2>
                </Banner.Content>
            </Banner>
            <Section className="bg-primary-300">
                <Section.Title>Contact us.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        If you are a school or agency that wants to partner with
                        us and bring free tutoring opportunities to your
                        students, please leave your information below. We will
                        contact you in 2 to 3 business days.
                    </Section.Div>
                    <Section.Div>
                        You can email us directly at{' '}
                        <InlineLink href="mailto:info@tutoringforall.org">
                            info@tutoringforall.org
                        </InlineLink>
                        .
                    </Section.Div>
                </Section.Content>
            </Section>
        </>
    )
}

export default Partner
