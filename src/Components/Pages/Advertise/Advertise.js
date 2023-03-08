import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../Others/Loading/Loading";
import BookingModal from "../../Products/BookingModal/BookingModal";
import EachItem from "../../Products/EachCategory/EachItem";

const Advertise = () => {
    const [products, setProducts] = useState([]);
    const [productItem, setProductItem] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/advertisements")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    if (!products) {
        return <Loading></Loading>
    }

    return (
        <>
            <h2 className="text-4xl font-semibold font-mono text-center my-8 lg:mt-14">
                Adverstisements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
                {products.map((product) => (
                    <EachItem
                        key={product._id}
                        setProductItem={setProductItem}
                        product={product}
                    ></EachItem>
                ))}
            </div>
            {productItem && (
                <BookingModal
                    productItem={productItem}
                    setProductItem={setProductItem}
                ></BookingModal>
            )}
        </>
    );
};

export default Advertise;