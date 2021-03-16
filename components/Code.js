import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Code({ src, link }) {
    const codeTabs = useRef(null)
    const [codeLoaded, setCodeLoaded] = useState(false)
    const [codeFields, setCodeFields] = useState([])
    const [active, setActive] = useState(0)

    SyntaxHighlighter.registerLanguage('jsx', jsx);
    SyntaxHighlighter.registerLanguage('js', js);
    SyntaxHighlighter.registerLanguage('html', html);
    SyntaxHighlighter.registerLanguage('css', css);

    useEffect(() => {
        if (!codeLoaded) {
            src.map(s => {
                s.code !== "null" &&
                fetch(s.code)
                    .then(res => res.text())
                    .then(text => {
                        setCodeFields(prev => [...prev, { title: s.title, code: text }])
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            setCodeLoaded(true)
        }
    }, [])

    useEffect(() => {
        for (let i=0; i < codeTabs.current.children.length; i++) {
            codeTabs.current.children[i].onclick = () => {
                setActive(i)
            }
        }
    }, [codeFields])

    return (
        <div className="code">
            <div className="code-container">
                {/* Tabs */}
                <div className="code-tabs" ref={codeTabs}>
                    {codeFields.map((c, i) => {
                        return (
                            <>
                                {c.title !== "null" &&
                                <div className={`code-tab${i===active ? ' __on' : ''}`}>
                                    <a>{c.title}</a>
                                </div>
                                }
                            </>
                        )
                    })}
                </div>
                <div className="code-fields-container">
                    <Link href={link}>
                        <a className="viewGithub" target='_blank'>
                            <img src="/github.png"/>
                            View on GitHub
                        </a>
                    </Link>
                    <div className="code-fields">
                        {/* Fields */}
                        {codeFields.map((c, i) => {
                            return (
                                <>
                                    {c.title !== "null" &&
                                    <div className={`code-field${i===active ? ' __active' : ''}`}>
                                        <SyntaxHighlighter language={c.title.substr(c.title.indexOf('.') + 1)}
                                                           style={atomDark}
                                                           showLineNumbers={true}
                                                           customStyle={{fontFamily: 'inherit', color: 'inherit', lineHeight: '20px', padding: 0, margin: '-2px 0 0 0', overflow: 'inherit', background: '#262626'}}
                                                           codeTagProps={{style: { fontFamily: 'SF Mono', fontSize: '14px', fontWeight: 500, filter: 'contrast(130%)' }}}
                                                           lineNumberStyle={{fontSize: '11px', padding: '0 0 0 9px', marginBottom: -2, textAlign: 'left', background: '#2f2f2f', width: '55px', minWidth: 'auto' }}
                                                           wrapLines={true}
                                        >
                                            {c.code}
                                        </SyntaxHighlighter>
                                    </div>
                                    }
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
