import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';


const ModalEditClient = (props) => {
    const {client, toggleEditClient, modalEditClient, editClient} = props;

    const [newName, setNewName] = useState(client.name);
    const [newAddress, setNewAddress] = useState(client.address);
    const [newPhone, setNewPhone] = useState(client.phone);
    const [newDate, setNewDate] = useState("");


    const newClientHandler = () => {
        editClient(newName, newAddress, newPhone, newDate, client.id);
        toggleEditClient();
    }

    useEffect(() => {
        todayDate()
    }, [])

    const todayDate = () => {
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        today = mm + '.' + dd + '.' + yyyy;
        setNewDate(today)
    }

    return (
        <div>

            <Modal isOpen={modalEditClient} toggle={toggleEditClient}>
                <ModalHeader toggle={toggleEditClient}>Edit</ModalHeader>
                <ModalBody>
                    Edit data
                </ModalBody>
                <div className="m-3">

                    <InputGroup>
                        <InputGroupText>
                            Edit Name
                        </InputGroupText>
                        <Input placeholder="name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Edit Address
                        </InputGroupText>
                        <Input value={newAddress} onChange={(e) => setNewAddress(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Edit Phone
                        </InputGroupText>
                        <Input value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Date
                        </InputGroupText>
                        <Input value={newDate}/>
                    </InputGroup>

                    <br/>
                    <ModalFooter>
                        <Button color="primary" onClick={newClientHandler}>
                            Submit
                        </Button>{' '}
                        <Button color="secondary" onClick={toggleEditClient}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </div>
            </Modal>
        </div>
    );
};

export default ModalEditClient;