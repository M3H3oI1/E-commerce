import Navbar from "../components/Navbar";


function Memo() {
    return (
        <div>
            <Navbar></Navbar>

            <div className="py-2">
                <div className="glass">    
                        <th className="px-4 py-2">Name</th>
                        <td className="px-4 py-2">unknown</td>
                </div>
                <div className="mt-4 glass">  
                        <th className="px-4 py-2">Address</th>
                        <td className="px-4 py-2">unknown</td>
                </div>
                <table className="table-auto border-4 border-black-700 rounded-xl divide-y divide-blue-600 mx-auto mt-4">
                    <thead>
                        <tr className="bg-black text-rose-600">
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Product</th>
                            <th className="px-4 py-2">Size</th>
                            <th className="px-4 py-2">QTY</th>
                            <th className="px-4 py-2">Tk</th>
                            <th className="px-4 py-2">Ammount</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">

                        <tr className="text">
                            <td className="px-2 py-2">02-02-24</td>
                            <td className="px-4 py-2">Shirt</td>
                            <td className="px-4 py-2">M/L</td>
                            <td className="px-4 py-2">28</td>
                            <td className="px-4 py-2">350</td>
                            <td className="px-4 py-2">
                                <div className="p-2 bg-gray-100 border-4 border-cyan-400 text-red-500 text-lg rounded-lg">
                            9800.tk
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default Memo;