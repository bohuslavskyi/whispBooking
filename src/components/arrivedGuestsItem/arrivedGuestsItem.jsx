import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

const ArrivedGuestsItem = (props) => {
        const from = props.data.checkInDate.split("-").reverse().join("-");
        const to = props.data.checkOutDate.split("-").reverse().join("-");

        return   <tr>
                    <td className="left ">
                        <div className="oval2"></div>
                    </td>
                    <td className="left">{`${props.data.firstName}${' '}${props.data.lastName}`}</td>
                    <td>{`${props.data.roomType.charAt(0).toUpperCase()}${props.data.roomType.slice(1).toLowerCase().replace('_', ' ')}`}</td>
                    <td>
                        <Moment diff={from} unit="days">{to}</Moment>{`${' nights'}`}
                    </td>
                    <td className="right">{`${props.data.checkInDate.replace(/-/g, '.')}${' - '}${props.data.checkOutDate.replace(/-/g, ".")}`}</td>
                </tr>
};

export default ArrivedGuestsItem;
