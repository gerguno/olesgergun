export function Fullpage({src, cut, color}) {
    return (
        <>
            <div className="fullpage" style={color && {backgroundColor: color}}>
                <div className={cut ? "__cut" : "__more-padding"}>
                    <img src={src}/>
                </div>
            </div>
        </>
    )
}