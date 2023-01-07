import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import "bootstrap/dist/css/bootstrap.css";
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import Results from "./pages/Results";
import Navbar from "./Navbar";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';



const initialOrders = [
    {
        id: uuidv4(),
        name: "Bill Brown",
        service: "Translation",
        price: 100,
        payments: 50,
        debt: 50,
        create: "15.01.2021",
        statuses:
            {
                "In progress": true,
                "Job completed": true,
                "Say to client": false,
                "Client received": false,
                "Paid": false
            },
        dates: []
    },
    {
        id: uuidv4(),
        name: "Alice Smith",
        service: "Consultation",
        price: 200,
        payments: 170,
        debt: 30,
        create: "20.01.2021",
        statuses:
            {
                "In progress": true,
                "Job completed": false,
                "Say to client": false,
                "Client received": false,
                "Paid": false
            },
        dates: []
    }
]

const initialServices = [
    {
        id: uuidv4(),
        name: "Translation",
        price: 100,
        employee: "Greg",
        primeCost: 20
    },
    {
        id: uuidv4(),
        name: "Consultation",
        price: 200,
        employee: "Bob",
        primeCost: 50
    },
    {
        id: uuidv4(),
        name: "Printout documents",
        price: 50,
        employee: "Rachel",
        primeCost: 5
    }
]

const initialEmployees = [
    {
        id: uuidv4(),
        name: "Greg"
    },
    {
        id: uuidv4(),
        name: "Bob"
    },
    {
        id: uuidv4(),
        name: "Rachel"
    }
]

const initialClients = [
    {
        id: uuidv4(),
        name: "Bill Brown",
        address: "New York",
        phone: "+198376565674",
        create: "15.01.2021"
    },
    {
        id: uuidv4(),
        name: "Bob Smith",
        address: "Chicago",
        phone: "+1987654321",
        create: "20.01.2021"
    }
]


function App() {

    const [services, setServices] = useState(initialServices);
    const [clients, setClients] = useState(initialClients);
    const [employees, setEmployees] = useState(initialEmployees);
    const [orders, setOrders] = useState(initialOrders);


    const createNewOrder = (newName, newService, newPrice, newPayments, newDebts, newDate) => {
        const newOrder = {
            id: uuidv4(),
            name: newName,
            service: newService,
            price: newPrice,
            payments: newPayments,
            debt: newDebts,
            create: newDate,
            statuses:
            {
                "In progress": false,
                "Job completed": false,
                "Say to client": false,
                "Client received": false,
                "Paid": false
            },
            dates: []
        }

        setOrders([...orders, newOrder]);
    }

    const createNewClient = (newName, newAddress, newPhone, newDate) => {
        const newClient = {
            name: newName,
            address: newAddress,
            phone: newPhone,
            create: newDate,
            id: uuidv4(),
        }
        setClients([...clients, newClient]);
    }

    const deleteClient = (id) => {
        const newClients = clients.filter(client => client.id !== id);
        setClients(newClients);
    }

    const editClient = (newName, newAddress, newPhone, newDate, id) => {
        const updClient = {
            name: newName,
            address: newAddress,
            phone: newPhone,
            create: newDate,
            id,
        }
        const newClients = clients.map(client => client.id !== updClient.id ? client : updClient);
        setClients(newClients);
    }

    const createNewService = (newName, newPrice, newEmployee, newPrimeCost) => {
        const newService = {
            id: uuidv4(),
            name: newName,
            price: +newPrice,
            employee: newEmployee,
            primeCost: +newPrimeCost
        }
        setServices([...services, newService]);
    }

    const deleteService = (id) => {
        const newService = services.filter(service => service.id !== id);
        setServices(newService);
    }

    const editService = (newName, newPrice, newEmployee, newPrimeCost, id) => {
        const updService = {
            name: newName,
            price: +newPrice,
            employee: newEmployee,
            primeCost: +newPrimeCost,
            id,
        }
        const newServices = services.map(service => service.id !== updService.id ? service : updService);
        setServices(newServices);
    }

    return (
        <>
          <Navbar/>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="orders" element={<Orders orders={orders} createNewOrder={createNewOrder} clients={clients} services={services}/>}/>
                <Route path="clients" element={<Clients clients={clients} createNewClient={createNewClient} deleteClient={deleteClient} editClient={editClient}/>}/>
                <Route path="services" element={<Services services={services} createNewService={createNewService} deleteService={deleteService} editService={editService} employees={employees}/>}/>
                <Route path="results" element={<Results/>}/>
                {/*<Route path="product/:id" element={<Product/>}/>*/}
            </Routes>

        </>
    );
}

export default App;
