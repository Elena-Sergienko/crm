import React, {useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    InputGroupText,
    Input,
    Label,
    FormGroup
} from 'reactstrap';


const ModalAddService = (props) => {
    const {toggle, modal, createNewService, employees} = props;

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
                <div className="m-3">
                    <ModalHeader toggle={toggle}>Add New Service</ModalHeader>
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
                            Price
                        </InputGroupText>
                        <Input placeholder="price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
                    </InputGroup>
                    <br/>

                    <FormGroup>
                        <Label for="exampleSelect">
                            Select Employee:
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            onChange={(e) => setNewEmployee(e.target.value)}
                        >
                            {employees.map(employee => (
                                <option key={employee.id}>
                                    {employee.name}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>

                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Prime Cost
                        </InputGroupText>
                        <Input placeholder="prime cost" value={newPrimeCost}
                               onChange={(e) => setNewPrimeCost(e.target.value)}/>
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
                </div>
            </Modal>
        </div>
    );
};

export default ModalAddService;