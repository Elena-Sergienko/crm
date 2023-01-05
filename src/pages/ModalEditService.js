import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, Input} from 'reactstrap';


const ModalEditService = (props) => {
    const {service, toggleEditService, modalEditService, editService} = props;

    const [newName, setNewName] = useState(service.name);
    const [newPrice, setNewPrice] = useState(service.price);
    const [newEmployee, setNewEmployee] = useState(service.employee);
    const [newPrimeCost, setNewPrimeCost] = useState(service.primeCost);


    const newServiceHandler = () => {
        editService(newName, newPrice, newEmployee, newPrimeCost, service.id);
        toggleEditService();
    }

    return (
        <div>

            <Modal isOpen={modalEditService} toggle={toggleEditService}>
                <ModalHeader toggle={toggleEditService}>Edit</ModalHeader>
                <ModalBody>
                    Edit data
                </ModalBody>

                <InputGroup>
                    <InputGroupText>
                        Edit Name
                    </InputGroupText>
                    <Input value={newName} onChange={(e) => setNewName(e.target.value)}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        Edit Price
                    </InputGroupText>
                    <Input value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        Edit Employee
                    </InputGroupText>
                    <Input value={newEmployee} onChange={(e) => setNewEmployee(e.target.value)}/>
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroupText>
                        Edit Prime Cost
                    </InputGroupText>
                    <Input value={newPrimeCost} onChange={(e) => setNewPrimeCost(e.target.value)}/>
                </InputGroup>

                <br/>
                <ModalFooter>
                    <Button color="primary" onClick={newServiceHandler}>
                        Submit
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleEditService}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalEditService;