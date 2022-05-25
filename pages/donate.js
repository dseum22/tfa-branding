import Link from 'next/link'
import Banner from '../components/Banner'
import InlineLink from '../components/InlineLink'
import Section from '../components/Section'

const Donate = () => {
    return (
        <>
            <Banner className="before:bg-[url('../public/images/banners/donate.jpg')]">
                <Banner.Title className="tall-underline">Donate</Banner.Title>
                <Banner.Content>
                    <h2 className="font-bold text-white leading-loose md:leading-relaxed tracking-wide">
                        Our tutoring service is completely free. Your support
                        will help us go a long way and bring equitable education
                        to more students.
                    </h2>
                </Banner.Content>
            </Banner>
            <Section className="bg-primary-300">
                <Section.Title>Why donate.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        Your support to Tutoring for All to help us fulfill our
                        mission of equalizing education opportunities. Note that
                        this link will take you to our parent company{' '}
                        <InlineLink href="https://roboticsforall.net">
                            Robotics for All
                        </InlineLink>
                        , a 501(c)(3) non-profit organization, meaning that your
                        donation is fully tax-deductible. The Tax ID is
                        83-2012119.
                    </Section.Div>
                    <Section.Div>
                        Your donation to Tutoring for All will be help us with
                        recruiting tutors, background checks for our adult
                        volunteers, costs associated with content creation, as
                        well as needs to support our under-served students.
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-100">
                <Section.Title>How to donate.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        You can click the button below to navigate to PayPal's
                        donation form to Robotics for All.
                    </Section.Div>
                    <Section.Div>
                        <div className="flex justify-center">
                            <a
                                className="inline-block uppercase font-bold py-3 px-4 rounded-md bg-amber-400 transition-transform duration-300 hover:scale-105 ease-in-out tracking-wider"
                                href="https://www.paypal.com/donate?hosted_button_id=9TFKKWS9M78ZS"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex items-center gap-2">
                                    <div>Go to form</div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </Section.Div>
                </Section.Content>
            </Section>
        </>
    )
}

export default Donate
