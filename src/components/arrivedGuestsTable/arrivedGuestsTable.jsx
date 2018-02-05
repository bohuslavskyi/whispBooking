import React, {Component} from 'react'; // const Component = React.Component
import ArrivedGuestsItem from '../arrivedGuestsItem/arrivedGuestsItem'
import {connect} from 'react-redux'
import {getErrivedThisWeek} from '../../actions'
import WeekAvailability from '../weekAvailability/weekAvailability';

class ArrivedGuestsTable extends Component {
    componentWillMount(){
        this.props.getErrivedThisWeek();
    }
    render() {
        return <div className="row">
                    <div className="col-sm-9 arrivedThisWeek">
                        <p className="Arrived-this-week">Arrived this week</p>
                        <table className="table ">
                            <tbody>
                            {this.props.arrived.data ?
                                this.props.arrived.data.map((el, i)=>{
                                if(i<6)return (<ArrivedGuestsItem key={el.id} data={el}/>)
                            }) : null}
                            </tbody>
                        </table>
                    </div>
                    <WeekAvailability />
                </div>


    }
}
function mapStateToProps({ReducerArrivedThisWeek}) {
    return{
        arrived:ReducerArrivedThisWeek
    }
}

export default connect(mapStateToProps, {getErrivedThisWeek})(ArrivedGuestsTable);
