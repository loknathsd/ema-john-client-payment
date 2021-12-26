import React from 'react';
// import fakeData from '../../fakeData'

const Inventory = () => {
    
    const handleAddProduct=()=>{
        const product = {}
        fetch('http://localhost:5000/addProduct',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        })
    }

    return (
        <div>
            <h1>Here you can add product</h1>
            <form action="/products" method="post">
                <p><span> Name : </span> <input type ="text"/> </p>
                <p><span> Price : </span> <input type ="text"/> </p>
                <p><span> Quantity : </span> <input type ="text"/> </p>
                <p><span> Product image : </span> <input type ="file"/> </p>
            <button onClick={handleAddProduct}>Add Product</button>
            </form>
            
        </div>
    );
};

export default Inventory;