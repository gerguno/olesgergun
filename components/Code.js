import {useRef} from "react";

export default function Code({ src }) {
    const code = useRef(null)
    console.log(code)

    return (
        <div className="code" ref={code}>
            {/* Tabs */}
            <div className="code-tabs">
                {src.map((c, i) => {
                    return (
                        <>
                            {c.title !== "null" &&
                            <div className={`code-tab${i===0 ? ' __on' : ''}`}>
                                <p>{c.title}</p>
                            </div>
                            }
                        </>
                    )
                })}
            </div>

            {/* Fields */}
            {src.map((c, i) => {
                return (
                    <>
                        {c.title !== "null" &&
                            <div className={`code-field${i===0 ? ' __active' : ''}`}>
                                <p>{c.code}</p>
                            </div>
                        }
                    </>
                )
            })}
        </div>
    )
}