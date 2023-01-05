import React, {useState} from 'react';
import DropdownClients from "./DropdownClients";
import DropdownServices from "./DropdownServices";
import {Button} from "reactstrap";
import ModalAddClient from "./ModalAddClient";
import ModalAddService from "./ModalAddService";

const Services = (props) => {
    const {services, deleteService, editService, createNewService} = props;
    const headers = ["Name of job", "Price", "Employee", "Prime cost", "Actions"];
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className="m-3">
            <h2>Services</h2>

            <div align="right" className="mb-3">
                <Button color="secondary" outline onClick={toggle}>
                    Add New Service
                </Button>
            </div>

            {modal && <ModalAddService toggle={toggle} modal={modal} editService={editService} createNewService={createNewService}/>}


            <table className="table table-light table-striped">
                <thead>
                <tr>
                    {headers.map((el, i) => (
                        <th key={i} scope="col">{el}</th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {services.map((service) => (
                    <tr key={service.id}>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                        <td>{service.employee}</td>
                        <td>{service.primeCost}</td>
                        <td>
                            <DropdownServices service={service} deleteService={deleteService} editService={editService}/>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
};

export default Services;