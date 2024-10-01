import { useState, useEffect } from 'react'
import React from 'react'
import { addProduct } from '../api/productClient'
import { useNavigate } from 'react-router-dom'
import FormProduct from '../components/formProduct/FormProduct'
import { labels } from '../assets/data/labels'
import { toast } from "react-toastify";


function Create() {

    const navigate = useNavigate();

    const [isError, setIsError] = useState({ message: "", isError: false });

    const handleCreate = async (body) => {
        try {
            const res = await addProduct(body);
            console.log(res);
            toast.success(`The product ${body.name} was created`, {
                position: "top-right"
            });
            navigate('/')

        } catch (error) {
            toast.error(`Something get wrong!`, {
                position: "top-right"
            });
            setIsError({ message: error.message, isError: true })
        }
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">{labels.productTableCreate}</h1>
                <FormProduct
                    onSubmit={handleCreate}
                    isError={isError}
                />
            </div>
        </div>
    )
}

export default Create