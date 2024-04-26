'use client'
import React, { useEffect, useState } from "react";
import { cartState } from "../components/Context/context";
import { MdDelete } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CartPage() {
    const { state: { cart, products }, dispatch } = cartState();
    const [counts, setCounts] = useState({});

    useEffect(() => {
        const initialCounts = {};
        cart.slice(1).forEach(item => {
            initialCounts[item.id] = item.qty;
        });
        setCounts(initialCounts);
    }, [cart]);

    const handleIncrement = (itemId) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [itemId]: prevCounts[itemId] + 1
        }));
        dispatch({
            type: 'Change_Cart_QTY',
            payLoad: { id: itemId, qty: counts[itemId] + 1 }
        });
    };
    const handleDecrement = (itemId) => {
        if (counts[itemId] > 1) {
            setCounts(prevCounts => ({
                ...prevCounts,
                [itemId]: prevCounts[itemId] - 1
            }));
            dispatch({
                type: 'Change_Cart_QTY',
                payLoad: { id: itemId, qty: counts[itemId] - 1 }
            });
        }
    };

    

    const handleRemoveFromCart = (itemId) => {
        dispatch({
            type: 'Remove_From_Cart',
            payLoad: itemId
        });
    };

    const calculateTotal = () => {
        return cart.slice(1).reduce((acc, curr) => acc + Number(curr.newPrice) * counts[curr.id], 0);
    };

    return (
        <div className="flex flex-col justify-center items-center p-8">
            {cart.length <= 1 ? (
                <div className="text-6xl h-[33rem] flex flex-row justify-center items-center text-red-500">CART IS EMPTY!</div>
            ) : (
                <>
                    <div className="flex flex-col gap-y-4">
                        <hr className="h-0.25 bg-slate-600" />
                        {cart.slice(1).map((item) => (
                            <div key={item.id} className="w-screen flex flex-row items-center justify-around">
                                <img src={item.image} className="w-32 h-32" alt={item.desc} />
                                <span className="font-bold flex flex-row justify-start">{item.desc}</span>
                                <h6>₹{item.newPrice}</h6>
                                <div className="flex flex-row gap-x-1 w-20 border justify-around bg-slate-200 h-7 outline-none rounded-sm">
                                    <button className="text-xs font-bold" onClick={() => handleDecrement(item.id)}><FaMinus /></button>
                                    <span className="font-bold">{counts[item.id]}</span>
                                    <button className="text-xs font-bold" onClick={() => handleIncrement(item.id)}><FaPlus /></button>
                                </div>
                                <button className="text-xl" onClick={() => handleRemoveFromCart(item.id)}><MdDelete /></button>
                            </div>
                        ))}
                        <hr className="h-0.25 bg-slate-600" />
                    </div>
                    <div className="flex flex-col justify-center w-3/5 p-4 border-1 border-slate-500 mt-8 items-center gap-y-3">
                        <span className="font-bold text-3xl text-black">Subtotal ({cart.length - 1}) Items</span>
                        <span className="text-2xl font-bold">
                            Total: <span className="font-bold text-red-600">₹{calculateTotal()}</span>
                        </span>
                        <Button color="success" className="w-min font-bold text-white" disabled={cart.length === 1}>
                            {cart.length === 1 ? "isDisabled" : "Proceed To Checkout"}
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
}
