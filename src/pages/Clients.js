import React, {useState} from 'react';
import ModalAddClient from "./ModalAddClient";
import {Button} from "reactstrap";
import DropdownClients from "./DropdownClients";

const Clients = (props) => {
    const {clients, createNewClient, deleteClient, editClient} = props;

    const headers = ["Name", "Address", "Phone number", "Create at", "Actions"]
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div className="m-3">
            <h2>Clients</h2>

            <div align="right" className="mb-3">
                <Button color="secondary" outline onClick={toggle}>
                    Add New Client
                </Button>
            </div>

            {modal && <ModalAddClient toggle={toggle} modal={modal} createNewClient={createNewClient}/>}


            <table className="table table-light table-striped">
                <thead>
                <tr>
                    {headers.map((el, i) => (
                        <th key={i} scope="col">{el}</th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.address}</td>
                        <td>{client.phone}</td>
                        <td>{client.create}</td>
                        <td>
                            <DropdownClients client={client} deleteClient={deleteClient} editClient={editClient}/>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
};

export default Clients;