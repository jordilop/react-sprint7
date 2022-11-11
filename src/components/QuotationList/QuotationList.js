import { useEffect } from "react";
import "./styles.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";


function QuotationList({ list }) {

    const [newList, setNewList] = useLocalStorage("QuotationList", []);

    const searchByName = (e) => {
        if (e.target.value.length > 0) {
            const result = list.filter(element => element.name.includes(e.target.value));
            setNewList(result);
        } else {
            setNewList(list);
        }
    }

    const orderByName = () => {
        const result = [...list].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)));
        setNewList(result);
    }

    const orderByDate = () => {
        const result = [...list].sort((a, b) => a.date - b.date);
        setNewList(result);
    }

    const resetOrder = () => setNewList(list);

    useEffect(() => {
        setNewList(list);
    }, [list, setNewList]);

    return (
        <div>
            <button onClick={orderByName}>Ordenar alfabèticament</button>
            <button onClick={orderByDate}>Ordenar per data</button>
            <button onClick={resetOrder}>Reset ordre</button>
            <p>
                <input type="text" name="name" placeholder="Cerca nom pressupost" onChange={searchByName} />
            </p>
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
                        newList.map((element, index) => {
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