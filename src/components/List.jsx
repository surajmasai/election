import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './list.css';

export const List = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const [pagee, setPagee] = useState(1);

    const [value, setValue] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:2345/cityp?page=${pagee}&size=2&population=${value}`)
            .then(d => d.json())
            .then((res) => {
                // console.log("res", res)
                setData(res.city)
            })
    }, [data, pagee])
    // console.log(typeof (pagee))
    return <>
        <div className="search">
            <input type="text" placeholder='City Name' />
            <button>search</button>
        </div>
        <div className='listofcity'>
            <table>
                <tr>

                    <th>City</th>
                    <th>District</th>
                    <th>No. of polling</th>
                    <th>population</th>
                    <th>Details</th>
                </tr>


                {data.map((e, i) =>

                    <tr>

                        <td>{e.cityName}</td>
                        <td>{e.district}</td>
                        <td>{e.polling_id.length}</td>
                        <td>{e.population}</td>
                        <td>
                            <button onClick={() => navigate(`/Show/${e._id}`)}>
                                show details
                            </button>
                        </td>
                    </tr>

                )}
            </table>
        </div>
        <div className='pagination'>
            <button className="prev" disabled={pagee === 1} onClick={() => setPagee(pagee - 1)}>prev</button>
            <button className="next" onClick={() => setPagee(pagee + 1)}>next</button>
            <button className="asc" onClick={() => setValue(1)}>Increasing Order By population</button>
            <button className="desc" onClick={() => setValue(-1)}>Decreasing Order By population</button>
        </div>


    </>
}