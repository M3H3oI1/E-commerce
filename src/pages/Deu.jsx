import Navbar from "../components/Navbar";

function Deu() {
    return (

        <div>
            <Navbar></Navbar>


            <div className="bg-white rounded-lg shadow-lg p-6">
    
    <img src="/logo/fevicon.png" alt="Contact Image" className=" mx-auto rounded-lg mb-4"/>

   
    <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Contact Details</h2>
       
        <p className="text-gray-700 mb-2">123 Main Street, City, Country</p>
       
        <p className="text-gray-700 mb-2">Phone: 123-456-7890</p>
        <p className="text-gray-700 mb-2">Email: example@example.com</p>
    </div>


    <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Product Information</h2>
        
        <p className="text-gray-700 mb-2">Size: Large</p>
        
        <p className="text-gray-700 mb-2">Price: $99.99</p>
        
        <p className="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    
    <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Contact</button>
    </div>
</div>

        </div>
    );
}

export default Deu;