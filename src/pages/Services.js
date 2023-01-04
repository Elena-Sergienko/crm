import React from 'react';

const Services = (props) => {
    const {services} = props;
    const headers = ["Name of job", "Price", "Employee", "Prime cost", "Actions"];

    return (
        <div>
            <h2>Job</h2>
            <table className="table table-light table-striped">
                <thead>
                <tr>
                    {headers.map((el, i) => (
                        <th key={i} scope="col">{el}</th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {services.map((service) => (
                    <tr key={service.id}>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                        <td>{service.employee}</td>
                        <td>{service.primeCost}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
};

export default Services;