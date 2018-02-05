import React, {Component} from 'react'; // const Component = React.Component
import {connect} from 'react-redux'
import {getDashboardTotals} from '../../actions'
import './generalReports.module.scss';


class GeneralReports extends Component {

    componentWillMount(){
        this.props.getDashboardTotals()
    }

    render() {
        if (this.props.dashboard.data)
            return <div>

                <div className="row reportsPadding">
                    <div className="col-sm-4">
                        <div className="reportValue">{this.props.dashboard.data.availableRooms}</div>
                        <p className="reportDescription">Rooms available</p>
                    </div>
                    <div className="col-sm-4">
                        <div className="reportValue">{this.props.dashboard.data.reservedRooms}</div>
                        <p className="reportDescription">Reserved rooms</p>
                    </div>
                    <div className="col-sm-4">
                        <div className="reportValue">{this.props.dashboard.data.checkedIn}</div>
                        <p className="reportDescription">Checked in</p>
                    </div>
                </div>

                <div className="line"></div>
            </div>
        return <div>Loading...</div>
    }
}
function mapStateToProps({ReducerDashboard}) {
    console.log('ReducerDashboard', ReducerDashboard)
    return{
        dashboard:ReducerDashboard
    }
}

export default connect(mapStateToProps, {getDashboardTotals})(GeneralReports);
