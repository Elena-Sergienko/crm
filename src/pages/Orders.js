import React, {useState} from 'react';
import {Button} from "reactstrap";
import ModalAddService from "./ModalAddService";
import ModalAddOrder from "./ModalAddOrder";

const Orders = (props) => {
    const {orders, createNewOrder, clients, services} = props;
    const headers = ["#", "Name", "Service", "Price", "Payments", "Debt", "Create at", "Statuses", "Dates", "Actions"];
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div className="m-3">
            <h2>Orders</h2>

            <div align="right" className="mb-3">
                <Button color="secondary" outline onClick={toggle}>
                    Create New Order
                </Button>
            </div>

            {modal && <ModalAddOrder toggle={toggle} modal={modal} createNewOrder={createNewOrder} clients={clients}
                                     services={services}/>}

            <table className="table table-light table-striped">
                <thead>
                <tr>
                    {headers.map((el, i) => (
                        <th key={i} scope="col">{el}</th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {orders.map((order, i) => (
                    <tr key={order.id}>
                        <th scope="row">{i + 1}</th>
                        <td>{order.name}</td>
                        <td>{order.service}</td>
                        <td>{order.price}</td>
                        <td>{order.payments}</td>
                        <td>{order.debt}</td>
                        <td>{order.create}</td>
                        <td>{Object.keys(order.statuses).map((el, i) => (
                            <div key={i}>{el}</div>
                        ))}</td>
                        <td>{order.dates}</td>

                    </tr>
                ))}

                </tbody>
            </table>
        </div>

    );
};

export default Orders;