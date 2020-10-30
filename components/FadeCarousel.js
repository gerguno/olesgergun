import React, {Component} from 'react'
import Card from './Card'

export default class FadeCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_card: 0
        }
    }

    componentDidMount() {
        //clone first
        let first_card_clone = this.card_container.children[this.card_container.children.length-1].cloneNode(true)
        this.card_container.insertBefore(first_card_clone, this.card_container.children[0])

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
                this.card_container.children[(this.card_container.children.length)-this.state.current_card].style.transitionDuration = "0.5s"
                this.card_container.children[(this.card_container.children.length)-this.state.current_card].style.opacity = `0`

                if (this.state.current_card === this.card_container.children.length-1) {
                    setTimeout(() => {
                        for (let i=this.card_container.children.length-1; i > 0; i-- ) {
                            this.card_container.children[i].style.transitionDuration = "0s"
                            this.card_container.children[i].style.opacity = `1`
                        }
                        this.setState({current_card: 0})
                    }, 500)
                }
            })
        } else {
            return
        }
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.handle_next}>Next</button>*/}
                <div className="view_port" style={styles.view_port}>
                    <div ref={ref_id => this.card_container = ref_id} className="card_container" style={styles.card_containter}>
                        {this.props.media.slice(0).reverse().map((medium) => (
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
        position: 'relative',
        width: '846px',
        height: '592px',
        backgroundColor: 'red'
        // ,overflow: 'hidden'
    },
    card_containter: {
        position: 'relative',
        width: 'fit-content'
    }
}