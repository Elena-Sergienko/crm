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
    FormGroup, Label
} from 'reactstrap';


const ModalEditService = (props) => {
    const {service, toggleEditService, modalEditService, editService, employees} = props;

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
                <ModalHeader toggle={toggleEditService}>Edit Service</ModalHeader>
                <ModalBody>
                    Edit data
                </ModalBody>

                <div className="m-3">
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
                </div>
            </Modal>
        </div>
    );
};

export default ModalEditService;