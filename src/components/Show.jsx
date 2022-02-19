

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
// import "./Pdetails.css"
// import { Link } from "react-router-dom";

export const ProductsDetails = () => {

    const { id } = useParams()
    // console.log('userid:', id)
    const [details, setDetails] = useState({})
    const [pdetails, setPdetails] = useState([])


    useEffect(() => {
        fetch(`http://localhost:2345/cityp/${id}`)
            .then(d => d.json())
            .then((res) => {
                // console.log('resss:', res.polling_id)
                setPdetails(res.polling_id)
                setDetails(res)

            })
    }, [])

    // console.log("details", details)
    // console.log("polling", pdetails)

    return <div>
        <h1>cityName: {details.cityName}</h1>
        <p>district: {details.cityType}</p>
        <p>population: {details.population}</p>
        <p>cityType: {details.cityType}</p>


        <h4>Total Polling :{pdetails.length}</h4>

        <table>
            <tr>
                <th>index</th>
                <th>Name</th>
                <th>Address</th>
                <th>Pincode</th>
            </tr>


            {pdetails.map((el, i) =>
                <tr>
                    <td>{i}</td>
                    <td>{el.name}</td>
                    <td>{el.address}</td>
                    <td>{el.pincode}</td>
                </tr>
            )}
        </table>

    </div>

}
