import React , {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import ModalEditClient from "./ModalEditClient";



const DropdownClients = (props) => {
    const { direction, client, deleteClient, editClient } = props;

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const [modalEditClient, setModalEditClient] = useState(false);
    const toggleEditClient = () => setModalEditClient(!modalEditClient);



    return (
        <>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} direction={direction}>
            <DropdownToggle caret ></DropdownToggle>

            <DropdownMenu>
                <DropdownItem onClick={toggleEditClient}>
                    Edit
                    <ModalEditClient client={client} toggleEditClient={toggleEditClient} modalEditClient={modalEditClient} editClient={editClient}/>
                </DropdownItem>
                <DropdownItem onClick={() => deleteClient(client.id)}>Delete</DropdownItem>
            </DropdownMenu>

            </Dropdown>
        </>

    );
};

export default DropdownClients;