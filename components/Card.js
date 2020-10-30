function Card({media}) {
    return (
        <div style={styles.card}>
            <img src={media}/>
        </div>
    )
}

const styles = {
    card: {
        width: '846px',
        height: '592px',
        backgroundColor: 'white',
        position: 'absolute'
    },
    img: {
        width: 'inherit',
        display: 'block'
    }
}

export default React.memo(Card)