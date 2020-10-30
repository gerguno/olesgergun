import React, {Component} from 'react'
import Card from './Card'

export default class SlideCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_card: 1
        }
    }

    componentDidMount() {
        //clones
        let first_card_clone = this.card_container.children[0].cloneNode(true)
        let last_card_clone = this.card_container.children[this.card_container.children.length-1].cloneNode(true)
        this.card_container.insertBefore(last_card_clone, this.card_container.children[0])
        this.card_container.append(first_card_clone)

        this.card_container.style.transitionDuration = "0s"
        this.card_container.style.transform = `translate(-${846}px)`

        this.autoplay = setInterval(() => {
            this.handle_next()
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.autoplay)
    }

    handle_next = () => {
        if (this.state.current_card < this.card_container.children.length-1) {
            let new_current_card = this.state.current_card +1

            this.setState({current_card: new_current_card}, () => {
                this.card_container.style.transitionDuration = "0.5s"
                this.card_container.style.transform = `translate(-${846 * this.state.current_card}px)`

                if (this.state.current_card === this.card_container.children.length-1) {
                    setTimeout(() => {
                        this.card_container.style.transitionDuration = "0s"
                        this.card_container.style.transform = `translate(-${846}px)`
                        this.setState({current_card: 1})
                    }, 502)
                }
            })
        } else {
            return
        }
    }

    render() {
        console.log(`Media in carousel ${this.props.media}`)
        return (
            <div>
                {/*<button onClick={this.handle_next}>Next</button>*/}
                <div className="view_port" style={styles.view_port}>
                    <div ref={ref_id => this.card_container = ref_id} className="card_container" style={styles.card_containter}>
                        {this.props.media.map((medium) => (
                            <>
                                <Card media={medium.url}/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    view_port: {
        position: 'absolute',
        transform: 'translate (-50%, -50%)',
        width: '846px',
        height: '592px',
        backgroundColor: 'red'
        ,overflow: 'hidden'
    },
    card_containter: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'
    }
}