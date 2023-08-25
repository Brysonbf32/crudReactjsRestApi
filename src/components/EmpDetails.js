import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link,useNavigate} from 'react-router-dom'

const EmpDetails = () => {
    const { empid }=useParams();
    const [empdata,empdataChange]=useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdataChange(resp);
        }).catch((err) =>{
            console.log(err.message);
        })
    },[])
    return ( 
        <div>
            <div className="row py-5">
                <div className="col-12 col-lg-3"></div>
                <div className="offset col-lg-6">
                    <div className="container">
                        <div className="card">
                            <div className="card-title">
                                <h2 className='crename py-4'>Create Employees</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    { empdata &&
                                        <div>
                                            <h2>The name : {empdata.name}</h2>
                                            <h3>Contact Details</h3>   
                                            <h5>Email: { empdata.email}</h5> 
                                            <h5>Phone: { empdata.phone} </h5>                               
                                                &nbsp;
                                                <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3"></div>
            </div>




        </div>
      
     );
}
 
export default EmpDetails;