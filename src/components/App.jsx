import React, { Component } from "react";
import styles from './App.module.scss';
import Header from './header/header';
import GeneralReports from './generalReports/generalReports';
import ArrivedGuestsTable from './arrivedGuestsTable/arrivedGuestsTable';
import HotelEvents from './hotelEvents/hotelEvents';
import EmployeeCompetition from './employeeCompetition/employeeCompetition';

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                    <div className="page-content ">
                        <Header/>
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <GeneralReports/>
                            <ArrivedGuestsTable />
                        </div>
                        <div className="col-sm-3">
                            <HotelEvents />
                            <EmployeeCompetition/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
