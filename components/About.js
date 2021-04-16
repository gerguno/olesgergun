export default function About() {
    const downloadFile = () => {
        fetch('/lib/fileServer', {
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
        <about className="color">
            <div className="about-container">
                <div className="left">
                    <h1>
                        Oleś Gergun is a digital designer and developer based in Kyiv. He gained a degree of Master of Arts in Cultural Studies at Kyiv-Mohyla Academy. Subsequently, he became a designer through an autodidact’s will, not least because of his interest in visual culture and creative coding.
                        <br/><br/>
                        In his practice, he applies
                        both design and code for commercial and non-commercial projects. Being a critical mind and a dedicated practitioner, he applies analytical and strategic approach.
                        <br/><br/>
                        He has an expertise in a wide range of practises with horizontal deepening into creating digital products:
                        <br/><br/>
                        (1) User experience design<br/>
                        Big fan of UX strategy, user flows, algorhitmics, inventing new UI patterns as well as replicating conventional ones, generating tone of voice and design language.
                        <br/><br/>
                        (2) Type design<br/>
                        Paying attention to type as a fundamental to design. Exploring type forms of the past as well as of today’s street visual culture (predominantly of Eastern Europe origin).
                        <br/><br/>
                        (3) Web development<br/>
                        HTML, CSS (incl. preprocessors Sass, Less), advanced JavaScript (ES5, ES6+), RestAPI, GraphQL, ReactJS (Context API, React hooks), NextJS, Node.js (basics, incl. Express.js)
                    </h1>
                </div>
                <div className="right">
                    <div className="right-block">
                        <div className="right-title">(Work experience)</div>
                        <p>
                            <img src="/bullet.svg"/> 2021–now <br/>
                            Kyiv Type Foundry <br/>
                            Co-founder, Type Designer & JS Developer (part-time) <br/>
                            Shaping strategy, drawing retail typefaces, opening new perspectives on cyrillic-based heritage, developing and supporting online webstore.
                        </p>
                        <p>
                            <img src="/bullet.svg"/> 2016–2020 <br/>
                            Method Bureau <br/>
                            Design Lead (full time) <br/>
                            Leading a team of four designers in creating various client experiences: UI/UX design, branding and communication design. Taking part in creating client strategies and conducting workshops. Coordinating up to 3 projects simultaneously, communicating with clients including business owners.<br/>
                            Clients: Naftogaz of Ukraine, SkyUp Airlines, Kyiv School of Economics, Ukrainian Judiciary, International Renaissance Foundation, Aequo, Ukrainian Fashion Week, One Philosophy Group of Companies, Republic, Passage, Bolshakova Interiors
                        </p>
                        <p>
                            <img src="/bullet.svg"/> 2015–2016 <br/>
                            Trinetix <br/>
                            UI/UX Designer (full time) <br/>
                            Сreating enterprise CRM, HR & Coaching applications for Deloitte designed to automate processes within the company
                        </p>
                        <p>
                            <img src="/bullet.svg"/> 2013 <br/>
                            Havas Worldwide <br/>
                            Graphic Designer (full time) <br/>
                            Сreating communication designs, landings, branding concepts, generating ideas for advertising campaigns <br/>
                            Clients: Ukrsibbank, Forum Bank, Red Bull
                        </p>
                        <p>
                            <img src="/bullet.svg"/> 2012 <br/>
                            Art Arsenal <br/>
                            Graphic Designer (full time) <br/>
                            Implementing and complementing The International Art Biennale Arsenale 2012 visual identity
                        </p>
                    </div>
                    <div className="right-block">
                        <div className="right-title">(Education)</div>
                        <p>
                            <img src="/bullet.svg"/> 2007–2013 <br/>
                            National University of Kyiv-Mohyla Academy • Kyiv, Ukraine <br/>
                            Master of Arts in Cultural Studies <br/>
                            Thesis on “Contemporary Art After Social Media” <br/>
                            Studying cultural phenomena in various societies and historical periods with critical approaches drawn including semiotics, art history/criticism, Marxism, archeology, ethnography, critical race theory, philosophy (predominantly post-structuralism), social theory, political theory, history, literary theory, media theory, film/video studies, communication studies, political economy, translation studies, museum studies
                        </p>
                    </div>
                    <div className="right-block">
                        <div className="right-title">(Activities)</div>
                        <p>
                            <img src="/bullet.svg"/> 2019 <a href="/">“Marrying the Impossible”</a>, experimental lettering workshop <br/>
                            <img src="/bullet.svg"/> 2019 <a href="/">“Atelier”</a> («Ательє»), movie about visual culture, interview <br/>
                            <img src="/bullet.svg"/> 2018 Telegraf.live with Maria Leonenko, interview <br/>
                        </p>
                    </div>
                    <div className="right-block">
                        <div className="right-title">(Worked with)</div>
                        <p>
                            Misha Smetana (<a href="/">Tsentsiper</a>, Moscow, Russia art director) on selected projects in Method Bureau, Jevhen Anfalov (<a href="/">ECAL</a> graduate, independent designer, Hannover, Germany) on creating type foundry, <a href="/">Barnbrook</a> (London, UK) on implementing Arsenale 2012 visual identity
                        </p>
                    </div>
                    <div className="right-block">
                        <div className="right-title">(Services)</div>
                        <p>
                            (1) User experience design <br/>
                            Сreating complex enterprise and market-oriented web services (to a greater extent), mobile applications (to a lesser extent) solely or as a part of a team. Creating websites with experimental user interface. Taking responsibility for certain design development processes.
                        </p>
                        <p>
                            (2) Type design <br/>
                            Making letterings, type and type-containing logotypes, typefaces with close attention to Cyrillic alphabet.
                        </p>
                        <p>
                            (3) Web development <br/>
                            Developing components for large scale projects. Creating corporate websites, experimental websites, small size e-stores, browser extensions, landing pages.
                        </p>
                    </div>
                    <a className="download-pdf" onClick={downloadFile}>
                        <img src="/download.svg"/>Download PDF
                    </a>
                </div>
            </div>
            <div className="black"></div>
        </about>
    )
}