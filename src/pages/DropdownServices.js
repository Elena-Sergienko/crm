import React , {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import ModalEditService from "./ModalEditService";



const DropdownServices = (props) => {
    const { direction, service, deleteService, editService, employees } = props;

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

    const [modalEditService, setModalEditService] = useState(false);
    const toggleEditService = () => setModalEditService(!modalEditService);



    return (
        <>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} direction={direction}>
            <DropdownToggle size="sm">▼</DropdownToggle>

            <DropdownMenu>
                <DropdownItem onClick={toggleEditService}>
                    Edit
                    <ModalEditService service={service} toggleEditService={toggleEditService} modalEditService={modalEditService} editService={editService} employees={employees}/>
                </DropdownItem>
                <DropdownItem onClick={() => deleteService(service.id)}>Delete</DropdownItem>
            </DropdownMenu>

            </Dropdown>
        </>

    );
};

export default DropdownServices;