import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';


const ModalAddService = (props) => {
    const {toggle, modal, createNewService} = props;

    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newEmployee, setNewEmployee] = useState("");
    const [newPrimeCost, setNewPrimeCost] = useState("");


    const newServiceHandler = () => {
        createNewService(newName, newPrice, newEmployee, newPrimeCost);
        toggle();
    }


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add New Service</ModalHeader>
                <ModalBody>
                    Please add data
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
                        Price
                    </InputGroupText>
                    <Input placeholder="price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        Employee
                    </InputGroupText>
                    <Input placeholder="employee" value={newEmployee} onChange={(e) => setNewEmployee(e.target.value)}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        Prime Cost
                    </InputGroupText>
                    <Input placeholder="prime cost" value={newPrimeCost} onChange={(e) => setNewPrimeCost(e.target.value)}/>
                </InputGroup>

                <br/>
                <ModalFooter>
                    <Button color="primary" onClick={newServiceHandler}>
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

export default ModalAddService;