import useWindowDimensions from "../components/useWindowDimensions";
import PostBar from "../components/PostBar";
import {PostLayout} from "../components/PostLayout";
import Menu from "../components/Menu";

export default function About() {
    const { height, width } = useWindowDimensions()

    return (
        <PostLayout title={'About'}>
            <Menu/>
            <PostBar color={'#000000'}/>
            <section className="about">
                <div>
                    <div className="about-block">
                        Oleś Gergun is a digital designer and developer based in Kyiv. He gained a degree of Master of Arts in Cultural Studies at Kyiv-Mohyla Academy. Subsequently, he became a designer through an autodidact’s will, not least because of his interest in visual culture and creative coding.
                        <br/><br/>
                        In his practice, he applies both design and code for commercial and non-commercial projects. Being a critical mind and a dedicated practitioner, he applies analytical and strategic approach.
                        <br/><br/>
                        He has expertise in a wide range of practices with horizontal deepening into digital products сreation:
                        <br/><br/>
                        (1) User experience design
                        Big fan of strategy, creating user flows, algorithms, inventing new UI patterns as well as replicating conventional ones, generating tone of voice and design language.
                        <br/><br/>
                        (2) Web development
                        HTML, CSS (incl. preprocessors Sass, Less), advanced JavaScript (ES5, ES6+), RestAPI, GraphQL, ReactJS (Context API, React hooks), NextJS, Node.js (basics, incl. Express.js)
                        <br/><br/>
                        (3) Type design
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
                <div>
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
                </div>
                <div>
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
                        <h3>Services</h3>
                        <p>
                            <img src="/bullet.svg"/>2019 “Marrying the Impossible”, experimental lettering workshop<br/>
                            <img src="/bullet.svg"/>2019 “Atelier” («Ательє»), movie about visual culture, interview<br/>
                            <img src="/bullet.svg"/>2018 Telegraf.live with Maria Leonenko, interview
                        </p>
                    </div>
                    <div className="about-block">
                        <h3>Worked with</h3>
                        <p>
                            Misha Smetana (Tsentsiper, Moscow, Russia art director) on selected projects in Method Bureau, Jevhen Anfalov (ECAL graduate, independent designer, Hannover, Germany) on creating type foundry, Barnbrook (London, UK) on implementing Arsenale 2012 visual identity
                        </p>
                    </div>
                    <div className="about-block">
                        <h3>Networks</h3>
                        <p>
                            <img src="/bullet.svg"/>GitHub, a repository for selected code projects <br/>
                            <img src="/bullet.svg"/>Kyiv Type Digest, a blog on vernacular typography<br/>
                            <img src="/bullet.svg"/>Kyiv Type Foundry, foundry’s Instagram account<br/>
                            <img src="/bullet.svg"/>Facebook, daily life, jokes & virtue signalling<br/>
                            <img src="/bullet.svg"/>Instagram, reflecting work-life balance
                        </p>
                    </div>
                </div>
            </section>
        </PostLayout>
    )
}
