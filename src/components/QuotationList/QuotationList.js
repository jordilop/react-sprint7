import "./styles.css";

function QuotationList({ list }) {

    return (
        <div>
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
                        list.map((element, index) => {
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