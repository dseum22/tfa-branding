import Banner from '../components/Banner'
import InlineLink from '../components/InlineLink'
import Section from '../components/Section'
import SubjectForm from '../components/forms/SubjectForm'
import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <link
                    rel="canonical"
                    href="https://tutoringforall.org/about"
                ></link>
            </Head>
            <Banner className="before:bg-[url('../public/images/banners/about.jpg')]">
                <Banner.Title className="tall-underline">About</Banner.Title>
                <Banner.Content>
                    <h2 className="font-bold text-white leading-loose md:leading-relaxed tracking-wide">
                        At Tutoring for All, we provide an engaging environment
                        for students to ask questions and receive academic
                        support.
                    </h2>
                </Banner.Content>
            </Banner>
            <Section className="bg-primary-300">
                <Section.Title>Mission and process.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        Tutoring for All is a student-run non-profit that
                        provides FREE tutoring to K-12th grade students across
                        16 subjects. Our goal is to help students achieve
                        academic success by helping them with specific academic
                        questions. View a full list of subjects we tutor{' '}
                        <InlineLink href="/enroll" internal>
                            here
                        </InlineLink>
                        .
                    </Section.Div>
                    <Section.Div>
                        We are a branch of a student-run 501 (c)(3) non-profit
                        organization{' '}
                        <InlineLink href="https://roboticsforall.net">
                            Robotics for All
                        </InlineLink>
                        , which provides STEM education to students of all
                        backgrounds across the nation, particularly students
                        from underserved communities.
                    </Section.Div>
                    <Section.Div>
                        All volunteers are carefully screened through a
                        comprehensive written application and interview before
                        being accepted. All volunteers over the age of 18 must
                        pass a detailed background check run by our contractor{' '}
                        <InlineLink href="https://www.sterlingvolunteers.com/">
                            Sterling Volunteers
                        </InlineLink>
                        . Click{' '}
                        <InlineLink href="/donate" internal>
                            here
                        </InlineLink>{' '}
                        if you would like to donate.
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-100">
                <Section.Title>All our subjects.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        <SubjectForm />
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-300">
                <Section.Title>Non-discrimination policy.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        Tutoring for All has and will never discriminate against
                        a student or a volunteer on any basis, including gender
                        (Tutoring for All accepts volunteers and students of all
                        gender, including non-binary), race, sexual orientation,
                        or any other factor that can be discriminated against.
                    </Section.Div>
                </Section.Content>
            </Section>
        </>
    )
}

export default About
