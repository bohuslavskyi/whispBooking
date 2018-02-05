import React, {Component} from 'react'; // const Component = React.Component
import  HotelEventsItem from '../hotelEventsItem/hotelEventsItem'
import {connect} from 'react-redux'
import {getHotelEvents} from '../../actions'

class HotelEvents extends Component {

    componentWillMount(){
        this.props.getHotelEvents();
    }
    componentDidMount() {
        setInterval(() => {
            this.props.getHotelEvents();
        }, 30000);
    }
    render() {
        console.log("this.props", this.props);
        if(this.props.events.isLoading)
            return <div>
                        <p>Recent activity</p>
                        <div className="loading">Loading...</div>
                        <div className="line marg"></div>
                    </div>

        return  <div>
                    <p>Recent activity</p>
                    <ul>
            {this.props.events.data ?
                this.props.events.data.map((el, i) => {
                if (i < 4) return (<HotelEventsItem key={el.id} data={el}/>)
            }) : null}
                    </ul>
                    <div className="line marg"></div>
                </div>

    }
}

function mapStateToProps({ReducerHotelEvents}) {
    // const {ReduserHotelEvents} = state;
    console.log("state: ", ReducerHotelEvents);
    return {
        events: ReducerHotelEvents
    }
}


export default connect(mapStateToProps, {getHotelEvents})(HotelEvents);
