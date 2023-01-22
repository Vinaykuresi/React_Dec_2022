import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const custom_styling = {
    form : {
        border: "2px solid",
        display: "block",
        position: "absolute",
        top: "30%",
        left: "40%",
    }
}

function FunctionComponent() {

    const [username, SetUsername] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:7000/data")
        .then(result => {
            setData(result.data)
        })
        .catch(error => {
            this.setState({
                error : error
            })
        })
    },[])

    const login = () => {
        console.log("Call coming here")
        window.alert(`Login Successful : ${username}`)
    }

    return(
        <div>
             <table className="table table-bordered">
                    <thead style={{ backgroundColor: "black", color: "white" }} className="thead-dark">
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">EDesciption</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length ? data.map(item => {
                                return (
                                    <tr key={item.product_id}>
                                        <td><img width={300} height={100} src={item.img} /></td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            }) : <tr><td rowSpan={3}>Content Not Found</td></tr>
                        }
                    </tbody>
                </table>
        </div>
        // <form style={custom_styling.form}>
        //         <div>
        //             <label for="username">Username</label>
        //             <input name="username" id='username' type={"text"} value={username} onChange={(e) => SetUsername(e.target.value)} />
        //         </div>
        //         <div>
        //             <label for="password">Password</label>
        //             <input name="password" id='password' type={"password"} />
        //         </div>
        //         <div>
        //             <input style={{fontFamily:"cursive", fontStyle:"italic"}} type={"button"} value="Submit" onClick={() => login()}/>
        //         </div>
        //     </form>
    )
}

export default FunctionComponent;