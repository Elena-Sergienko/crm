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

const initialClients = [
    {
        id: uuidv4(),
        name: "Bill Brown",
        address: "New York",
        phone: "+198376565674",
        create: "15.01.21"
    },
    {
        id: uuidv4(),
        name: "Bob Smith",
        address: "Chicago",
        phone: "+1987654321",
        create: "20.01.21"
    }
]


function App() {

    const [services, setServices] = useState(initialServices);
    const [clients, setClients] = useState(initialClients);
    const [orders, setOrders] = useState(initialOrders);


    const createNewClient = (newName, newAddress, newPhone, newDate) => {
        const newClient = {
            name: newName,
            address: newAddress,
            phone: newPhone,
            create: newDate,
            id: uuidv4(),
        }
        console.log("newClient-------", newClient)

        setClients([...clients, newClient]);
    }

    return (
        <>
          <Navbar/>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="orders" element={<Orders orders={orders}/>}/>
                <Route path="clients" element={<Clients clients={clients} createNewClient={createNewClient}/>}/>
                <Route path="services" element={<Services services={services}/>}/>
                <Route path="results" element={<Results/>}/>
                {/*<Route path="product/:id" element={<Product/>}/>*/}
            </Routes>

        </>
    );
}

export default App;
