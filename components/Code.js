import { useRef, useState, useEffect } from "react";
import beautify from "js-beautify";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function Code({ src }) {
    const codeTabs = useRef(null)
    const [active, setActive] = useState(0)

    useEffect(() => {
        for (let i=0; i < codeTabs.current.children.length; i++) {
            codeTabs.current.children[i].onclick = () => {
                setActive(i)
            }
        }
    }, [])

    return (
        <div className="code">
            <div className="code-container">
                {/* Tabs */}
                <div className="code-tabs" ref={codeTabs}>
                    {src.map((c, i) => {
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
                    <div className="code-fields">
                        {/* Fields */}
                        {src.map((c, i) => {
                            return (
                                <>
                                    {c.title !== "null" &&
                                    <div className={`code-field${i===active ? ' __active' : ''}`}>
                                        <SyntaxHighlighter language="javascript"
                                                           style={darcula}
                                                           showLineNumbers={true}
                                                           customStyle={{fontFamily: 'inherit', color: 'inherit', lineHeight: '20px', padding: 0, margin: '-2px 0 0 0', overflow: 'inherit', background: '#262626'}}
                                                           codeTagProps={{style: { fontFamily: 'SF Mono', fontSize: '14px', fontWeight: 500, filter: 'contrast(125%)' }}}
                                                           lineNumberStyle={{fontSize: '11px', padding: '0 18px 0 9px', marginBottom: -2, textAlign: 'left', background: '#2f2f2f' }}
                                                           wrapLines={true}
                                        >
                                            {beautify(c.code, {indent_size: 2})}
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
