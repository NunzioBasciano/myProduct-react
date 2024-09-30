import { useEffect, useState } from 'react'

// The FormProduct component receives three props: 
// 'value' for initial form values, 'onSubmit' for handling form submission, and 'isError' to display errors.
function FormProduct({ value, onSubmit, isError }) {
    const initialState = {
        name: value?.name || '',
        brand: value?.brand || '',
        barcode: value?.barcode || '',
        image: value?.image || '',
        description: value?.description || '',
        cost: value?.cost || '',
        price: value?.price || '',
        quantity: value?.quantity || ''
    }

    const [form, setForm] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false);

    const nameValidation = form.name.length > 0;
    const brandValidation = form.brand.length > 0;
    const barcodeValidation = form.barcode.toString().length > 0;
    const imageValidation = form.image.length > 0;
    const descriptionValidation = form.description.length > 0;
    const costValidation = form.cost.toString().length > 0;
    const priceValidation = form.price.toString().length > 0;
    const quantityValidation = form.quantity.toString().length > 0;

    const formValidation = nameValidation && brandValidation && barcodeValidation && imageValidation && descriptionValidation && costValidation && priceValidation && quantityValidation;

    useEffect(() => {

    }, [form])

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setForm(prevState => { return { ...prevState, [name]: value } })
    }

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            setIsLoading(true);
            await onSubmit(form);
            setIsLoading(false);
        }

        } action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
            <div>
                <label className="sr-only">name</label>
                <div className="relative">
                    <input
                        name='name'
                        onChange={handleChange}
                        value={form.name}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter name"
                    />
                </div>
            </div>
            <div>
                <label className="sr-only">brand</label>
                <div className="relative">
                    <input
                        name='brand'
                        onChange={handleChange}
                        value={form.brand}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter brand"
                    />
                </div>
            </div>
            <div>
                <label className="sr-only">barcode</label>
                <div className="relative">
                    <input
                        name='barcode'
                        onChange={handleChange}
                        value={form.barcode}
                        type="number"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm "
                        placeholder="Enter barcode"
                    />
                </div>
            </div>
            <div>
                <label className="sr-only">image</label>
                <div className="relative">
                    <input
                        name='image'
                        onChange={handleChange}
                        value={form.image}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter image"
                    />
                </div>
            </div>
            <div>
                <label className="sr-only">description</label>
                <div className="relative">
                    <input
                        name='description'
                        onChange={handleChange}
                        value={form.description}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter description"
                    />
                </div>
            </div>
            <div>
                <label className="sr-only">cost</label>
                <div className="relative">
                    <input
                        name='cost'
                        onChange={handleChange}
                        value={form.cost}
                        type="number"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter cost"
                    />
                </div>
            </div>
            <div>
                <label className="sr-only">price</label>
                <div className="relative">
                    <input
                        name='price'
                        onChange={handleChange}
                        value={form.price}
                        type="number"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter price"
                    />
                </div>
            </div>
            <div>
                <label className="sr-only">quantity</label>
                <div className="relative">
                    <input
                        name='quantity'
                        onChange={handleChange}
                        value={form.quantity}
                        type="number"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter quantity"
                    />
                </div>
            </div>

            {
                isError.isError && <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4">
                    <strong className="block font-medium text-red-800"> Something went wrong </strong>

                    <p className="mt-2 text-sm text-red-700">
                        {isError.message}
                    </p>
                </div>
            }
            {!isLoading ?
                <button
                    disabled={!formValidation}
                    type="submit"
                    className={`block w-full rounded-lg bg-indigo-600 
                                ${!formValidation ? "bg-slate-400" : ''}
                                px-5 py-3 text-sm font-medium text-white`}
                >
                    Submit
                </button> : <button disabled>Is Loading...</button>}
        </form>
    )
}

export default FormProduct