import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import InlineLink from '../components/InlineLink'
import Section from '../components/Section'

const Home = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://tutoringforall.org/"></link>
            </Head>
            <Banner className="before:bg-[url('../public/images/banners/home.jpg')]">
                <Banner.Title>
                    <mark className="rounded-lg px-3">Free&nbsp;tutoring</mark>{' '}
                    for <span className="hidden sm:inline">K-12th grade</span>{' '}
                    students across{' '}
                    <mark className="rounded-lg px-3">16&nbsp;subjects</mark>
                </Banner.Title>
                <Banner.Content className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
                    <h2 className="font-bold text-white leading-loose md:leading-relaxed tracking-wide">
                        We believe every student deserves quality tutoring to
                        forge their academic success.
                    </h2>
                    <div className="flex items-center md:justify-center">
                        <Link href="/enroll">
                            <a className="inline-block uppercase font-bold py-3 px-4 rounded-md bg-amber-400 transition-transform duration-300 hover:scale-105 ease-in-out tracking-wider">
                                <div className="flex items-center gap-2">
                                    <div>Enroll</div>
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
                        </Link>
                    </div>
                </Banner.Content>
            </Banner>
            <Section className="bg-primary-100">
                <Section.Title>Who we are.</Section.Title>
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
                </Section.Content>
            </Section>
            <Section className="bg-primary-300">
                <Section.Title>What we do.</Section.Title>
                <Section.Content>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-primary-100 shadow flex flex-col justify-center text-center gap-6 rounded-md py-10">
                            <div className="font-serif text-4xl md:text-5xl lg:text-6xl">
                                17
                            </div>
                            <div className="text-xl md:text-2xl lg:text-3xl">
                                Active Tutors
                            </div>
                        </div>
                        <div className="bg-primary-100 shadow flex flex-col justify-center text-center gap-6 rounded-md py-10">
                            <div className="font-serif text-4xl md:text-5xl lg:text-6xl">
                                1053
                            </div>
                            <div className="text-xl md:text-2xl lg:text-3xl">
                                Tutoring Sessions
                            </div>
                        </div>
                        <div className="bg-primary-100 shadow flex flex-col justify-center text-center gap-6 rounded-md py-10">
                            <div className="font-serif text-4xl md:text-5xl lg:text-6xl">
                                65
                            </div>
                            <div className="text-xl md:text-2xl lg:text-3xl">
                                Student Users
                            </div>
                        </div>
                    </div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-100">
                <Section.Title>Why choose us.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        <b className="font-serif">Equity.</b> Our service is
                        completely free to bridge the educational opportunity
                        gap between students. Tutoring service is free for both
                        partnering schools as well as individuals seeking for
                        tutoring.
                    </Section.Div>
                    <Section.Div>
                        <b className="font-serif">Quality.</b> We carefully
                        select our tutors to ensure our tutoring quality. Most
                        of our tutors are upperclassman in high school or
                        college, and every tutor achieved more than <b>80%</b>{' '}
                        on our admission test. We accepted approximately{' '}
                        <b>50%</b> of the applicants who made it to the
                        interview round. Additionally, all volunteers over the
                        age of 18 must pass a detailed background check run by
                        our contractor{' '}
                        <InlineLink href="https://www.sterlingvolunteers.com/">
                            Sterling Volunteers
                        </InlineLink>
                        .
                    </Section.Div>
                    <Section.Div>
                        <b className="font-serif">Accessibility.</b> Through our
                        online scheduling system, it is easy to schedule a
                        session with us anywhere. All you need is to create an
                        account with a name and password. Learn how to schedule
                        a session{' '}
                        <InlineLink href="/enroll" internal>
                            here
                        </InlineLink>
                        .
                    </Section.Div>
                </Section.Content>
            </Section>
        </>
    )
}

export default Home
