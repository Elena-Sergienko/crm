import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';


const ModalAddClient = (props) => {
    const {toggle, modal, createNewClient} = props;

    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newDate, setNewDate] = useState("");


    const newClientHandler = () => {
        createNewClient(newName, newAddress, newPhone, newDate);
        toggle();
    }

    useEffect(() => {
        todayDate();
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
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add New Client</ModalHeader>
                <ModalBody>
                    Please enter the data in the input fields
                </ModalBody>

                <InputGroup>
                    <InputGroupText>
                        Name
                    </InputGroupText>
                    <Input placeholder="name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        Address
                    </InputGroupText>
                    <Input placeholder="address" value={newAddress} onChange={(e) => setNewAddress(e.target.value)}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        Phone
                    </InputGroupText>
                    <Input placeholder="phone number" value={newPhone} onChange={(e) => setNewPhone(e.target.value)}/>
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
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalAddClient;