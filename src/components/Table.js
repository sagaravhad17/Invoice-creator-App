import React from "react";

const Table = ({ list, total }) => {
  return (
    <>
      <table width="100%">
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
                <td>{amount}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div>
        <h2 className="mt-5 flex items-end justify-end text-gray-400 text-4xl font-bold">
          Total: {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
};

export default Table;
