import React, { Component } from 'react'; // const Component = React.Component
import Moment from 'react-moment';
import 'moment-timezone';

class ArrivedGuestsItem extends Component {
    render() {
        const data = this.props.data;
        const from = data.checkInDate.split("-").reverse().join("-");
        const to = data.checkOutDate.split("-").reverse().join("-");

        return   <tr>
                    <td className="left ">
                        <div className="oval2"></div>
                    </td>
                    <td className="left">{`${data.firstName}${' '}${data.lastName}`}</td>
                    <td>{`${data.roomType.charAt(0).toUpperCase()}${data.roomType.slice(1).toLowerCase().replace('_', ' ')}`}</td>
                    <td>
                        <Moment diff={from} unit="days">{to}</Moment>{`${' nights'}`}
                    </td>
                    <td className="right">{`${data.checkInDate.replace(/-/g, '.')}${' - '}${data.checkOutDate.replace(/-/g, ".")}`}</td>
                </tr>

    }
}

export default ArrivedGuestsItem;
