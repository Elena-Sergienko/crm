import React, {useState} from 'react';
import ModalClients from "./ModalClients";
import {Button} from "reactstrap";

const Clients = (props) => {
    const {clients, createNewClient} = props;

    const headers = ["Name", "Address", "Phone number", "Create at", "Actions"]
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div>
            <h2>Job</h2>

            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            {modal && <ModalClients toggle={toggle} modal={modal} createNewClient={createNewClient}/>}


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
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
};

export default Clients;