import useWindowDimensions from "../components/useWindowDimensions";
import PostBar from "../components/PostBar";
import {PostLayout} from "../components/PostLayout";
import Menu from "../components/Menu";
import Link from 'next/link'

export default function About() {
    const { height, width } = useWindowDimensions()

    const third = (<div className="3rd">
        <div className="about-block">
            <h3>Services</h3>
            <p>
                (1) User experience design <br/>
                Сreating complex enterprise and market-oriented web services (to a greater extent), mobile applications (to a lesser extent) solely or as a part of a team. Creating websites with experimental user interface. Taking responsibility for certain design development processes.
            </p>
            <p>
                (2) Web development<br/>
                Developing components for large scale projects. Creating corporate websites, experimental websites, small size e-stores, browser extensions, landing pages.
            </p>
            <p>
                (3) Type design<br/>
                Making letterings, type and type-containing logotypes, typefaces with close attention to Cyrillic alphabet.
            </p>
        </div>
        <div className="about-block">
            <h3>Activities</h3>
            <p>
                <img src="/bullet.svg"/>2019 “<Link href={'/work/marrying-the-impossible'}><a target="_blank">Marrying the Impossible</a></Link>”, experimental lettering workshop<br/>
                <img src="/bullet.svg"/>2019 “<Link href={'https://www.the-village.com.ua/village/culture/culture-news/288395-minifilm-pro-vizualnu-kulturu-mista-vid-ukrayinskih-dizayneriv'}><a target="_blank">Atelier</a></Link>” («Ательє»), movie about visual culture, interview<br/>
                <img src="/bullet.svg"/>2018 Telegraf.live with Maria Leonenko, interview
            </p>
        </div>
        <div className="about-block">
            <h3>Worked with</h3>
            <p>
                <Link href={'http://www.mishasmetana.com/'}><a target="_blank">Misha Smetana</a></Link> (<Link href={'https://tsentsiper.com/en/'}><a target="_blank">Tsentsiper</a></Link>, Moscow, Russia art director) on selected projects in Method Bureau, <Link href={'http://anfalov.de/'}><a target="_blank">Jevhen Anfalov</a></Link> (<Link href={'https://www.ecal.ch/'}><a target="_blank">ECAL</a></Link> graduate, independent designer, Hannover, Germany) on creating type foundry, <Link href={'https://barnbrook.net/'}><a target="_blank">Barnbrook</a></Link> (London, UK) on implementing Arsenale 2012 visual identity
            </p>
        </div>
        <div className="about-block">
            <h3>Networks</h3>
            <p>
                <img src="/bullet.svg"/><Link href={'http://github.com/gerguno'}><a target="_blank">GitHub</a></Link>, a repository for selected code projects <br/>
                <img src="/bullet.svg"/><a href="https://www.instagram.com/kyiv_type_digest" target="_blank">Kyiv Type Digest</a>, a blog on vernacular typography<br/>
                <img src="/bullet.svg"/><a href="https://www.instagram.com/kyiv_type_foundry" target="_blank">Kyiv Type Foundry</a>, foundry’s Instagram account<br/>
                <img src="/bullet.svg"/><a href="https://www.facebook.com/olesgergun" target="_blank">Facebook</a>, daily life, jokes & virtue signalling<br/>
                <img src="/bullet.svg"/><a href="https://www.instagram.com/olesgergun" target="_blank">Instagram</a>, reflecting work-life balance
            </p>
        </div>
        <div className="about-block">
            <a className="download-pdf" onClick={downloadFile}>
                <img src="/download.svg"/>Download PDF
            </a>
        </div>
    </div>)

    const downloadFile = () => {
        fetch('/api/fileServer', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'Oleś Gergun CV.pdf';
                    a.click();
                })
            })
    }

    return (
        <PostLayout title={'About'}>
            <Menu/>
            <PostBar color={'#000000'}/>
            <section className="about">
                <div className="1st">
                    <div className="about-block">
                        Oleś Gergun is a digital designer and developer based in Kyiv. He gained a degree of Master of Arts in Cultural Studies at Kyiv-Mohyla Academy. Subsequently, he became a designer through an autodidact’s will, not least because of his interest in visual culture and creative coding.
                        <br/><br/>
                        In his practice, he applies both design and code for commercial and non-commercial projects. Being a critical mind and a dedicated practitioner, he applies analytical and strategic approach.
                        <br/><br/>
                        He has expertise in a wide range of practices with horizontal deepening into digital products сreation:
                        <br/><br/>
                        (1) User experience design<br/>
                        Designing strategy- and research-oriented user journeys, applying conventional UI patterns, and inventing experimental ones, creating UI design language and tone of voice.
                        <br/><br/>
                        (2) Web development<br/>
                        HTML, CSS (incl. preprocessors Sass, Less), advanced JavaScript (ES5, ES6+), RestAPI, GraphQL, ReactJS (Context API, React hooks), NextJS, Node.js (basics, incl. Express.js)
                        <br/><br/>
                        (3) Type design<br/>
                        Paying attention to type as a fundamental to design. Exploring type forms of the past as well as of today’s street visual culture (predominantly of Eastern Europe origin).
                    </div>
                    <div className="about-block">
                        <h3>Education & Courses</h3>
                        <p>
                            <img src="/bullet.svg"/>2007–2013<br/>
                            National University of Kyiv-Mohyla Academy<br/>
                            Master of Arts in Cultural Studies<br/>
                            Thesis on “Contemporary Art After Social Media”<br/>
                            Studying cultural phenomena in various societies and historical periods with critical approaches drawn including social theory, semiotics, art history/criticism, Marxism, archeology, ethnography, philosophy, political theory, history, media theory, film/video studies, communication studies, political economy
                        </p>
                        <p>
                            <img src="/bullet.svg"/>2021<br/>
                            Beetroot Academy<br/>
                            Advanced Javascript/React<br/>
                            Function scopes, closures, object oriented programming, prototypes, ES6, asynchronous Javascript, React (Classes and React hooks), Redux
                        </p>
                    </div>
                </div>
                <div className="2nd">
                    <div className="about-block">
                        <h3>Work experience</h3>
                        <p>
                            <img src="/bullet.svg"/>2021–now<br/>
                            Kyiv Type Foundry<br/>
                            Co-founder, Type Designer & JS Developer (part-time)<br/>
                            Shaping strategy, drawing retail typefaces, developing and supporting online webstore, opening new perspectives on cyrillic-based heritage
                        </p>
                        <p>
                            <img src="/bullet.svg"/>2016–2020<br/>
                            Method Bureau<br/>
                            Design Lead (full time)<br/>
                            Leading a team of four designers in creating various client experiences: UI/UX design, branding and communication design. Taking part in creating client strategies and conducting workshops. Coordinating up to 3 projects simultaneously, communicating with clients including business owners.<br/>
                            Clients: Naftogaz of Ukraine, SkyUp Airlines, Kyiv School of Economics, Ukrainian Judiciary, International Renaissance Foundation, Aequo, Ukrainian Fashion Week, One Philosophy Group of Companies, Republic, Passage, Bolshakova Interiors
                        </p>
                        <p>
                            <img src="/bullet.svg"/>2015–2016<br/>
                            Trinetix<br/>
                            UI/UX Designer (full time)<br/>
                            Сreating enterprise CRM, HR & Coaching applications for Deloitte designed to automate processes within the company
                        </p>
                        <p>
                            <img src="/bullet.svg"/>2013<br/>
                            Havas Worldwide<br/>
                            Graphic Designer (full time)<br/>
                            Сreating communication designs, landings, branding concepts, generating ideas for advertising campaigns<br/>
                            Clients: Ukrsibbank, Forum Bank, Red Bull
                        </p>
                        <p>
                            <img src="/bullet.svg"/>2012<br/>
                            Art Arsenal<br/>
                            Graphic Designer (full time)<br/>
                            Implementing and complementing The International Art Biennale Arsenale 2012 visual identity
                        </p>
                    </div>
                    {width < 1366 && third}
                </div>
                {width > 1365 && third}
            </section>
        </PostLayout>
    )
}
