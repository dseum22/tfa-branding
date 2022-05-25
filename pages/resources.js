import Banner from '../components/Banner'
import InlineLink from '../components/InlineLink'
import Section from '../components/Section'
import ResourceForm from '../components/forms/ResourceForm'

const Resources = () => {
    return (
        <>
            <Banner className="before:bg-[url('../public/images/banners/resources.jpg')]">
                <Banner.Title className="tall-underline">
                    Resources
                </Banner.Title>
                <Banner.Content>
                    <h2 className="font-bold text-white leading-loose md:leading-relaxed tracking-wide">
                        This page features study guides, videos, and other
                        resources created by our very own tutors. Scroll down to
                        access resources from other educational non-profits with
                        the same goal of academically supporting and inspiring
                        students.
                    </h2>
                </Banner.Content>
            </Banner>
            <Section className="bg-primary-300">
                <Section.Title>General.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        Click{' '}
                        <InlineLink href="https://docs.google.com/document/d/1ufldmXZwUMUE6dsB4R9qEeA3nCiu3y6DRkCHQqo4wfA/">
                            here
                        </InlineLink>{' '}
                        for additional resources compiled by our tutors.
                    </Section.Div>
                    <Section.Div>
                        Click{' '}
                        <InlineLink href="https://drive.google.com/drive/u/1/folders/1zkVJ1m8apt81kADUV2xIPpqGV7jFbaNF/">
                            here
                        </InlineLink>{' '}
                        for in-depth study guides created by our tutors in a
                        variety of subject areas.
                    </Section.Div>
                </Section.Content>
            </Section>
            <Section className="bg-primary-100">
                <Section.Title>Subjects.</Section.Title>
                <Section.Content>
                    <Section.Div>
                        <ResourceForm />
                    </Section.Div>
                </Section.Content>
            </Section>
        </>
    )
}

export default Resources
