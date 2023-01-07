import React, {useEffect, useState} from 'react';
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


const ModalAddOrder = (props) => {
    const {toggle, modal, createNewOrder, clients, services} = props;

    const [newName, setNewName] = useState("");
    const [newService, setNewService] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newPayments, setNewPayments] = useState("");
    const [newDebts, setNewDebts] = useState("");
    const [newDate, setNewDate] = useState("");


    const newClientHandler = () => {
        createNewOrder(newName, newService, newPrice, newPayments, newDebts, newDate);
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
                    <ModalHeader toggle={toggle}>Create New Order</ModalHeader>
                    <ModalBody>
                        Please enter the data in the input fields
                    </ModalBody>
                <div className="m-3">

                    <FormGroup>
                        <Label for="exampleSelect">
                            Select Client:
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            onChange={(e) => setNewService(e.target.value)}
                        >
                            {clients.map(client => (
                                <option key={client.id}>
                                    {client.name}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                    <br/>

                    <FormGroup>
                        <Label for="exampleSelect">
                            Select Service:
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            onChange={(e) => setNewService(e.target.value)}
                        >
                            {services.map(service => (
                                <option key={service.id}>
                                    {service.name}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>

                    <InputGroup>
                        <InputGroupText>
                            Price
                        </InputGroupText>
                        <Input placeholder="service" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Payments
                        </InputGroupText>
                        <Input placeholder="payments" value={newPayments}
                               onChange={(e) => setNewPayments(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Debt
                        </InputGroupText>
                        <Input placeholder="debt" value={newDebts} onChange={(e) => setNewDebts(e.target.value)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Date
                        </InputGroupText>
                        <Input value={newDate}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Statuses
                        </InputGroupText>
                        <Input value="In progress
                    Job completed
                    Say to client
                    Client received
                    Paid"/>
                    </InputGroup>
                    <br/>
                    <br/>
                    <InputGroup>
                        <InputGroupText>
                            Date
                        </InputGroupText>
                        <Input value={newDate}/>
                    </InputGroup>

                    <ModalFooter>
                        <Button color="primary" onClick={newClientHandler}>
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

export default ModalAddOrder;