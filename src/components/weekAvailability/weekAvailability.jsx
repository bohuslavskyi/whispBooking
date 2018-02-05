import React, {Component} from 'react'; // const Component = React.Component
import {connect} from 'react-redux'
import {getDashboardTotals} from '../../actions'
import './weekAvailability.module.scss';


class WeekAvailability extends Component {

    ovalColor = (val) => {
        switch (val) {
            case val: if(val <= 40) return 'Oval-5 redOval';
            case val: if(val > 40 && val <=85) return 'Oval-5 yellowOval';
            case val: if(val > 85) return 'Oval-5 greenOval';
        }
}

    render() {
        if (this.props.dashboard.data)
        return <div className="col-sm-3 weekAvailability">
                    <p className="Week-availability">Week availability</p>
                    {/*<div className="Oval-5">*/}
                    <div className={`${this.ovalColor(this.props.dashboard.data.weekAvailabilityPercent)}`}>
                        <p className="persentValue">{`${this.props.dashboard.data.weekAvailabilityPercent}${'%'}`}</p>
                    </div>
                </div>
        return <div>Loading</div>
    }
}

function mapStateToProps({ReducerDashboard}) {
    console.log('ReducerDashboard', ReducerDashboard)
    return{
        dashboard:ReducerDashboard
    }
}

export default connect(mapStateToProps, {getDashboardTotals})(WeekAvailability);