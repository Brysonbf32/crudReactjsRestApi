import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
function Home(){
    return (
        <Fragment>
        <div style={{ margin:"10%" }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length >0
                        ?
                        Employees.map((item) =>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        <Button onClick={() => alert(item.Id)} style={{ backgroundColor:"brown"}}>Edit</Button>
                                        &nbsp;
                                        <Button onClick={() => alert(item.Id)} style={{ backgroundColor:"brown" }}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data Avaialable" 
                    }
                </tbody>
            </Table>
        </div>
        </Fragment>
    )
}
export default Home;