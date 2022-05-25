import Banner from '../components/Banner'
import Section from '../components/Section'
import InlineLink from '../components/InlineLink'

const Enroll = () => {
    return (
        <>
            <Banner className="before:bg-[url('../public/images/banners/enroll.jpg')]">
                <Banner.Title className="tall-underline">Enroll</Banner.Title>
                <Banner.Content>
                    <h2 className="font-bold text-white leading-loose md:leading-relaxed tracking-wide">
                        Let's forge your academic success together!
                    </h2>
                </Banner.Content>
            </Banner>
            <Section className="bg-primary-300">
                <Section.Title>Free tutoring service.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        We offer tutoring services for K-12 students. Our
                        service focuses on helping students with any academic
                        questions relating to a variety of school subjects.
                    </Section.Div>
                    <Section.Div>
                        This service is offered in a form of one-to-one
                        appointment with a tutor for one hour. Students may
                        deliver their questions at their convenience during the
                        tutoring hour.
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-100">
                <Section.Title>How to schedule.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        You can claim a tutoring session by clicking the button
                        below. You will need to create a student account if you
                        don't have one already.
                    </Section.Div>
                    <Section.Div>
                        All the times you see on the scheduler will be in your
                        local time zone. Once you successfully schedule a
                        session, an email confirmation will be sent to your
                        email address. The email contains the meeting
                        information as well as the meeting link. Please check
                        your spam folder if you can't find the email.
                    </Section.Div>
                    <Section.Div>
                        <div className="flex justify-center">
                            <a
                                className="inline-block uppercase font-bold py-3 px-4 rounded-md bg-amber-400 transition-transform duration-300 hover:scale-105 ease-in-out tracking-wider"
                                href="https://cal.tutoringforall.org"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="flex items-center gap-2">
                                    <div>Schedule</div>
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
            <Section className="bg-primary-300">
                <Section.Title>Long-term policy.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        Tutoring for All offers long-term tutoring services
                        which help students to investigate a topic in depth
                        across the time of several tutoring sessions. Tutors can
                        plan out the lesson plan of each meeting with the
                        students.
                    </Section.Div>
                    <Section.Div>
                        To have a long-term tutoring session with a specific
                        tutor, please negotiate such a need with that tutor
                        during your first tutoring session. Please keep in mind
                        that 1 long-term tutoring service consists of 6
                        individual one-hour sessions maximum.
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-100">
                <Section.Title>Cancellation policy.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        You can cancel your session <b>2 hours</b> in advance
                        without penalty. Any late cancellation/no-show for{' '}
                        <b>3 times</b> will result in the withholding of the
                        tutoring privilege for
                        <b>7 days</b>.
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-300">
                <Section.Title>Frequently asked questions.</Section.Title>
                <Section.Content>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            What does a tutoring session cover?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            Tutoring sessions can be held for any student
                            struggling with a specific topic in class or with
                            homework. Our tutors aim to help students better
                            understand concepts and succeed in their academics.
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            How much does tutoring cost?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            Our tutoring service is completely free currently.
                            Please feel free to{' '}
                            <InlineLink href="/donate" internal>
                                donate
                            </InlineLink>{' '}
                            to Tutoring for All to help us further our mission.
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            What materials are needed for a tutoring session?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            A computer is recommended for the best experience. A
                            smartphone or tablet can be used as well, but the
                            experience may be more difficult on smaller screens.
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            What is the format of tutoring?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            Tutoring will be held virtually through video call
                            software such as Google Meet or Zoom. Each session
                            will be 1-hour maximum.
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            How are tutors selected?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            All volunteers are carefully screened through a
                            comprehensive written application and interview
                            before being accepted. All volunteers over the age
                            of 18 must pass a detailed background check run by
                            our contractor{' '}
                            <InlineLink href="https://www.sterlingvolunteers.com/">
                                Sterling Volunteers
                            </InlineLink>
                            . Before a tutor may host their first session in a
                            particular subject, they must score highly on a
                            comprehensive subject test.
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            Can I have recurring sessions with the same tutor or
                            only questions about specific topics on a one-time
                            basis?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            You may book a session because there is a specific
                            question or topic you would like assistance with, or
                            you can book multiple sessions for long-term
                            tutoring. Tutoring for All offers long-term tutoring
                            services which help students to investigate a topic
                            in depth across the time of several tutoring
                            sessions. Tutors can plan out the lesson plan of
                            each meeting with the students. To have a long-term
                            tutoring session with a specific tutor, please
                            negotiate such a need with that tutor during your
                            first tutoring session. Please keep in mind that 1
                            long-term tutoring service consists of 6 individual
                            one-hour sessions maximum.
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            How does the Tutoring for All scheduler work?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            Reference{' '}
                            <InlineLink href="https://docs.google.com/document/d/17duR42sRf3EkHyR0ttVqc2eMYlDqI2_W9IvbV5EFrdE/">
                                this document
                            </InlineLink>{' '}
                            to understand how the scheduler works. You can
                            access the scheduling platform{' '}
                            <InlineLink href="https://cal.tutoringforall.org/">
                                here
                            </InlineLink>
                            .
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            What does a tutoring session cover?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            Tutoring sessions can be held for any student
                            struggling with a specific topic in class or with
                            homework. Our tutors aim to help students better
                            understand concepts and succeed in their academics.
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            If something comes up, can I cancel a session?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            You may cancel a session at least two hours in
                            advance without penalty. Cancelling late three times
                            or not attending a booked session will result in a
                            withholding of the tutoring privilege for seven
                            days. To cancel a session, click on it and then
                            click on “unclaim.”
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            How can I contribute to Robotics for All and
                            Tutoring for All?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            For information about how to volunteer with Tutoring
                            for All, click{' '}
                            <InlineLink href="/volunteer" internal>
                                here
                            </InlineLink>
                            , or you can donate{' '}
                            <InlineLink href="/donate" internal>
                                here
                            </InlineLink>
                            . Thank you!
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                    <Section.Disclosure>
                        <Section.Disclosure.Title>
                            Who can I reach out to if I have any questions or
                            concerns?
                        </Section.Disclosure.Title>
                        <Section.Disclosure.Content>
                            You can browse our website, reach out to{' '}
                            <InlineLink href="mailto:info@tutoringforall.org">
                                info@tutoringforall.org
                            </InlineLink>
                            , or call us at{' '}
                            <InlineLink href="tel:855-582-1038">
                                (855) 582-1038
                            </InlineLink>
                            .
                        </Section.Disclosure.Content>
                    </Section.Disclosure>
                </Section.Content>
            </Section>
        </>
    )
}

export default Enroll
