import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';


const ModalClients = (props) => {
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

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum
                </ModalBody>

                <InputGroup value={newName} onChange={(e) => setNewName(e.target.value)}>
                    <InputGroupText>
                        Name
                    </InputGroupText>
                    <Input placeholder="name"/>
                </InputGroup>
                <br/>
                <InputGroup value={newAddress} onChange={(e) => setNewAddress(e.target.value)}>
                    <InputGroupText>
                        Address
                    </InputGroupText>
                    <Input placeholder="address"/>
                </InputGroup>
                <br/>
                <InputGroup value={newPhone} onChange={(e) => setNewPhone(e.target.value)}>
                    <InputGroupText>
                        Phone
                    </InputGroupText>
                    <Input placeholder="phone number"/>
                </InputGroup>

                {newDate}

                <br/>
                <ModalFooter>
                    <Button color="primary" onClick={newClientHandler} >
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

export default ModalClients;