import React, {Component} from 'react'; // const Component = React.Component
import moment from 'moment';
import 'moment-timezone';
import './hotelEventsItem.module.scss';


class HotelEventsItem extends Component {
    pickColor = (val) =>{
        switch (val){
            case 'CHECK_IN' : return 'ovalEvent';
            case 'NEW_EMPLOYEE' : return 'ovalEvent orange';
            case 'MAINTENANCE' : return 'ovalEvent red';
        }
    }
    render() {
        const hotelEvent = this.props.data.activityType;
        const hotelEventTime = moment(this.props.data.occurredAt).fromNow();

        return      <li className="liEvents">
                        <div className="row ">
                            <div className="col-sm-2 custom-sm-2">
                                <div className={`${this.pickColor(hotelEvent)}`}></div>
                            </div>
                            <div className="col-sm-6 custom-sm-6 titleEvents">
                                {`${hotelEvent.charAt(0).toUpperCase()}${hotelEvent.slice(1).toLowerCase().replace("_", " ")}`}
                                </div>
                            <div className="col-sm-4 aline">
                                <span className="badge">
                                    {`${hotelEventTime.replace("minutes ago", " min.") ::
                                        hotelEventTime.replace("a few seconds ago", "30 s.") ::
                                        hotelEventTime.replace("a minute ago", "1 min.")}`}
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="custom-sm-offset-1 col-sm-11 custom-sm-11 eventDescription">{this.props.data.description}
                            </div>
                        </div>
                        <div className="verticalLine"></div>
                    </li>
    }
}

export default HotelEventsItem;
