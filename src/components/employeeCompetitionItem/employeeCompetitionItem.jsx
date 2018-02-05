import React from 'react';
import './employeeCompetitionItem.module.scss';

const EmployeeCompetitionItem = (props) => {

        let progresPersent = {
            width: ((props.data.contributions*24)*100)/1000 + '%'
        };
        return  <li className="employeeItemMarg ">
                    <div className="row width">
                        <div className="col-sm-3 employeeImgPadd">
                            <img src={props.data.profileImageUrl}
                                 alt="employee"
                                 className="employeeImg"/>
                        </div>
                        <div className="col-sm-9 employeeStatsBlock">
                            <div className="row">
                                <p className="col-sm-6 employeeName">
                                    {props.data.name}{`${'.'}`}
                                </p>
                                <p className="col-sm-6 aline employeeHours">
                                    {props.data.contributions*24}{`${' hours'}`}
                                </p>
                            </div>
                            <div className="">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success"
                                         style={progresPersent}
                                         role="progressbar"
                                         aria-valuenow={props.data.contributions*24}
                                         aria-valuemin="0"
                                         aria-valuemax="100" >
                                        <span className="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
};


export default EmployeeCompetitionItem;
