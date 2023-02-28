import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal
}) => {
  const[isEdit, setIsEdit] = useState(false)

  useEffect(()=>{
    let rows = document.querySelectorAll(".amount")
    console.log(rows)
    let sum = 0;
    
    for(let i=0; i<rows.length;i++){
      if(rows[i].className === "amount"){
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        console.log(sum)
        setTotal(sum)
      }
    }
  },[amount,])

  const handleEdit = (id)=>{
     const editRow = list.find((row)=> row.id === id)
     setList(list.filter((row)=> row.id !== id))
     setIsEdit(true)
     setDescription(editRow.description)
     setQuantity(editRow.quantity)
     setPrice(editRow.price)
     setAmount(editRow.amount)
  }

  const handleDelete = (id) => setList(list.filter((item) => item.id !== id));
  
  const handleSubmit = (e) => {
    e.preventDefault();

 
    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount,
    };
    setDescription("");
    setQuantity("");
    setPrice("");
    setAmount("");
    setList([...list, newItems]);
    setIsEdit(false)
  
}
  useEffect(() => {
    const handleAmount = () => {
      setAmount(quantity * price);
    };
    handleAmount();
  }, [quantity, price]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="decription"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Item description"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white font-bold mb-5 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          type="submit"
        >
          {isEdit ? "Edit row item" : "Add item"}
        </button>
      </form>

      <table className="mb-5" width="100%">
        <thead>
          <tr className="bg-gray-200">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>

        {list.map(({ id, description, quantity, price, amount }) => {
          return (
            <tbody key={id}>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={()=> handleEdit(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div>
        <h2 className=" flex items-end justify-end text-gray-400 text-4xl font-bold">
          Total: {total}
        </h2>
      </div>
    </>
  );
};

export default TableForm;
