import { useEffect, useState } from "react";
import "./styles.css";

function QuotationList({ list }) {

    const [orderList, setOrderList] = useState([]);

    const orderByName = () => {
        const result = [...list].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)));
        setOrderList(result);
    }

    const orderByDate = () => {
        const result = [...list].sort((a, b) => a.date - b.date);
        setOrderList(result);
    }

    const resetOrder = () => setOrderList(list);

    useEffect(() => {
        setOrderList(list)
    }, [list]);

    return (
        <div>
            <button onClick={orderByName}>Ordenar alfabèticament</button>
            <button onClick={orderByDate}>Ordenar per data</button>
            <button onClick={resetOrder}>Reset ordre</button>
            <h3>Llistat de pressupostos</h3>
            <table id="list">
                <thead>
                    <tr key="head">
                        <th>Date</th>
                        <th>Name</th>
                        <th>Customer</th>
                        <th>Services</th>
                        <th>Total</th>
                    </tr>
                </thead >
                <tbody>
                    {
                        orderList.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.date}</td>
                                    <td>{element.name}</td>
                                    <td>{element.customer}</td>
                                    <td>{element.services}</td>
                                    <td>{element.total}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table >
        </div >
    );
}

export default QuotationList;