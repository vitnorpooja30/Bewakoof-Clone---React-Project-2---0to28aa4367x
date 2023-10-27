import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectId, ORDER_API } from '../Utils/utils';

const OrderDetails = () => {
    // when u click on any order in order list this page show
    const { resId } = useParams();
    const [myOrder, setMyOrder] = useState(null);
    const [myProduct, setMyProduct] = useState(null);
    const userToken = localStorage.getItem('jwtToken');

    const fetchOrderDetail = async () => {
        const data = await fetch(ORDER_API + resId, {
            headers: {
                projectId: projectId,
                Authorization: `Bearer ${userToken}`,
            },
        });
        const json = await data.json();
        setMyOrder(json.data);
    };

    useEffect(() => {
        fetchOrderDetail();
    }, []); // Only runs on component mount

    useEffect(() => {
        if (myOrder) {
            const { product } = myOrder?.items[0];
            setMyProduct(product);
        }
    }, [myOrder]); // Runs when myOrder changes

    if (!myOrder) return null;

    return (
        <div className="bg-orange-100 w-full p-10 flex justify-center">
            <div className="bg-white p-20 md:mt-12 rounded-xl shadow-md w-6/12">
                <h1 className="text-xl sm:text-2xl ml-56 font-semibold mb-4">
                    status :<span>{myOrder.status}</span>
                </h1>
                <div className="flex">
                    <div>
                        <h1>Price : {myOrder.totalPrice}</h1>
                        <h2>Date : {myOrder.orderDate}</h2>
                        <h2>shipmentDetails</h2>
                        <h3>
                            Address : {myOrder?.shipmentDetails.address?.city},{' '}
                            {myOrder?.shipmentDetails?.address?.state}, Street no:{' '}
                            {myOrder?.shipmentDetails?.address?.street},{' '}
                            {myOrder?.shipmentDetails?.address?.country}
                        </h3>
                        <h3>type : {myProduct?.type}</h3>
                        <h3>color : {myProduct?.color}</h3>
                        <h3>Fabric : {myProduct?.fabric}</h3>
                    </div>
                    <div>
                        <img src={myProduct?.displayImage} className="w-[200px]" />
                    </div>
                </div>
                <div>
                    <h3>Description</h3>
                    <div dangerouslySetInnerHTML={{ __html: myProduct?.description }} />
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
