import React, {Component} from 'react'; // const Component = React.Component
import './employeeCompetitionItem.module.scss';

class EmployeeCompetitionItem extends Component {

    render() {

        return  <li className="employeeItemMarg ">
                <div className="row width">
                    <div className="col-sm-3 employeeImgPadd">
                        <img src={this.props.data.profileImageUrl}
                             alt=""
                             className="employeeImg"/>
                    </div>
                    <div className="col-sm-9 employeeStatsBlock">
                        <div className="row">
                            <p className="col-sm-6 employeeName">
                                {this.props.data.name}{`${'.'}`}
                            </p>
                            <p className="col-sm-6 aline employeeHours">
                                {this.props.data.contributions*24}{`${' hours'}`}
                            </p>
                        </div>
                        <div className="">
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" style={{"width": "40%"}}  role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                                    <span className="sr-only">40% Complete (success)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </li>

    }
}


export default EmployeeCompetitionItem;
