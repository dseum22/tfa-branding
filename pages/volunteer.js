import Banner from '../components/Banner'
import Section from '../components/Section'
import Alert from '../components/Alert'

const Volunteer = () => {
    return (
        <>
            <Banner className="before:bg-[url('../public/images/banners/volunteer.jpg')]">
                <Banner.Title className="tall-underline">
                    Volunteer
                </Banner.Title>
                <Banner.Content>
                    <h2 className="font-bold text-white leading-loose md:leading-relaxed tracking-wide">
                        Want to be a part of a meaningful organization serving
                        the community? Together we can build a rewarding future!
                    </h2>
                </Banner.Content>
            </Banner>
            <Section className="bg-primary-300">
                <Section.Title>Why tutor.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Learn how to communicate effectively as an
                                educator.
                            </li>
                            <li>
                                Earn community service hours for time spent
                                tutoring and time responding to student
                                questions.
                            </li>
                            <li>
                                Volunteering at Tutoring for All class will look
                                good on any resume, whether applying for a
                                future internship, job, or college
                            </li>
                            <li>
                                Potential future leadership positions may be
                                offered.
                            </li>
                            <li>
                                Learn valuable leadership, organization, and
                                communication skills.
                            </li>
                        </ul>
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-100">
                <Section.Title>Requirements.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        Note: This may vary greatly depending on the subject.
                        Example: AP Calculus BC is typically taken by
                        juniors/seniors. However, it is still encouraged that
                        tutors apply to any subject they are interested in.
                    </Section.Div>
                    <Section.Div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <b>MUST</b> be at least 14 years of age.
                            </li>
                            <li>
                                Tutors <b>MUST</b> demonstrate mastery in the
                                subject of expertise they are applying for (this
                                will be done through the various phases of the
                                application process).
                            </li>
                            <li>
                                Strong communication skills and the ability to
                                work effectively in a team.
                            </li>
                            <li>
                                Tutors may be asked to provide AP/IB scores or
                                supporting documents for College Level work.
                            </li>
                            <li>
                                Tutors interested in tutoring a subject with an
                                associated AP/IB/College Level course{' '}
                                <b>MUST</b> have completed the AP/IB/College
                                Level (EX: Even if a tutor is interested in
                                tutoring Biology 1 Honors they <b>MUST</b> have
                                completed AP/IB/College Level Biology).
                            </li>
                        </ul>
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-300">
                <Section.Title>Beneficial.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Prior experience working with elementary,
                                middle, or high school-aged students.
                            </li>
                            <li>Past leadership experience.</li>
                            <li>Goal-oriented and patience.</li>
                        </ul>
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-100">
                <Section.Title>Commitment.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                A student tutor is expected to tutor at least
                                one of the listed subjects.
                            </li>
                            <li>
                                If a student tutor applies for more than one
                                subject, they do not necessarily need to be
                                accepted with all that they applied with.
                                Example: A student tutor may be accepted for
                                only AP microeconomics despite having applied
                                for both AP microeconomics and AP
                                macroeconomics.
                            </li>
                            <li>
                                A tutor is expected to put 3 tutoring sessions
                                on our schedular per week. Some of the sessions
                                will not be claimed.
                            </li>
                        </ul>
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-300">
                <Section.Title>Tasks.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Tutoring sessions will be approximately 30
                                minutes to 1 hour long.
                            </li>
                            <li>
                                Answer student's questions in a timely manner
                                and a concise way.
                            </li>
                            <li>
                                Create visual graphics and general outlines for
                                certain topics within each subject area.
                                Example: A tutor who tutors Algebra 1 and below
                                may be required to plan out specific equations
                                and functions in order to explain topics like
                                domain and range.
                            </li>
                            <li>
                                Attend occasional team meetings consisting of
                                other student tutors and the President/Vice
                                President of Tutoring for All.
                            </li>
                        </ul>
                    </Section.Div>
                </Section.Content>
            </Section>
            <Alert>
                All of our tutoring positions are currently closed. Please check
                back later.
            </Alert>
        </>
    )
}

export default Volunteer
