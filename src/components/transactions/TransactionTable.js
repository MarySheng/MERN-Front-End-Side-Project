import React from 'react';
import TableRow from './TableRow';
import TableFooter from './TableFooter'

const TransactionTable = ({ bookings}) => {
    
    let bookingList = bookings.map(booking => {
        return <TableRow key={booking._id} booking={booking} />
    })


    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {/* Name */}
                        <th scope="col">Name</th>
                        {/* price */}
                        <th scope="col">Price</th>
                        {/* quantity */}
                        <th scope="col">Quantiy</th>
                        {/* subtotal */}
                        <th scope="col">Subtotal</th>
                           
                    </tr>
                </thead>
                <tbody>
                    
                    {bookingList}

                </tbody>

                <TableFooter />
                   
            </table>
        </div> 

    );
}

export default TransactionTable;
