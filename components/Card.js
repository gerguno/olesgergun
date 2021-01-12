export default function Card({device, media}) {
    return (
        <div className={`card-${device}`}>
            <img src={media}/>
        </div>
    )
}

