import React, {Component} from 'react'; // const Component = React.Component
import EmployeeCompetitionItem from '../employeeCompetitionItem/employeeCompetitionItem';
import {connect} from 'react-redux';
import moment from 'moment';
import Moment from 'react-moment';
import {getErrivedThisWeek} from '../../actions';

import './employeeCompetition.module.scss';

class EmployeeCompetition extends Component {

    render() {
        let arr,
            result = [];
        if (this.props.arrived.data) {
            arr = this.props.arrived.data.slice();
            let from = '';
            let to = '';
            for (let key in arr) {
                from = arr[key]['checkInDate'].split("-").reverse().join("-")
                to = arr[key]['checkOutDate'].split("-").reverse().join("-")

                arr[key]['val'] = moment(from, 'YYYY-MM-DD').diff(moment(to, 'YYYY-MM-DD'), 'days')
                arr[key]['val'] = arr[key]['val'] * -1;
            }
            arr.forEach(function (el) {
                if (el.employee) {
                    if (!this[el.employee.id]) {
                        this[el.employee.id] = {
                            name: el.employee.firstName + ' ' + el.employee.lastName.charAt(0),
                            profileImageUrl: el.employee.profileImageUrl,
                            contributions: 0
                        };
                        result.push(this[el.employee.id]);
                    }
                }
                if (el.employee)
                    this[el.employee.id].contributions += parseInt(el.val);
            }, Object.create(null));
            console.log('result', result);

            result.sort(function(a, b) {
                return parseFloat(a.contributions) - parseFloat(b.contributions);
            });
            result.reverse();
            return <div>
                <p>Recent activity</p>
                <ul>
                    {
                        result.map((el, i) => {
                            if (i < 3)return (<EmployeeCompetitionItem key={el.i} data={el}/>)
                        })
                    }
                </ul>

            </div>
        }

        return <div>Loading...</div>
    }
}

function mapStateToProps({ReducerArrivedThisWeek}) {
    return {
        arrived: ReducerArrivedThisWeek
    }
}

export default connect(mapStateToProps, {getErrivedThisWeek})(EmployeeCompetition);