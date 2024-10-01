import { useEffect, useState } from "react";
import { editProduct, getProductDetail } from "../api/productClient";
import FormProduct from "../components/formProduct/FormProduct";
import { useParams, useNavigate } from "react-router-dom";
import { labels } from "../assets/data/labels";
import { toast } from "react-toastify";

function Edit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [isError, setIsError] = useState({ message: "", isError: false });
    const [isLoading, setIsLoading] = useState(true);

    /**
    * Fetches the product details by ID.
    * @param {string} id - The ID of the product to fetch.
    * @returns {Promise<void>} A promise that resolves when the product details are fetched.
    */
    const getProduct = async (id) => {
        try {
            const data = await getProductDetail(id);
            setProduct(data);
        } catch (error) {
            setIsError({ message: error.message, isError: true });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProduct(id);
    }, []);

    /**
   * Handles the editing of the product by calling the editProduct function.
   * @param {Object} body - The updated product data.
   * @returns {Promise<void>} A promise that resolves when the product is edited.
   */
    const handleEdit = async (body) => {
        try {
            setIsLoading(true);
            const res = await editProduct(body, id);
            toast.success(`The product ${body.name} was edited`, {
                position: "top-right"
            });
            navigate(`/products/${id}`);
        } catch (error) {
            toast.error(`It was not possible to edit the product ${body.name}`, {
                position: "top-right"
            });
            setIsError({ message: error.message, isError: true });
        } finally {
            setIsLoading(false);
        }
    };


    if (isLoading) return <p>is loading...</p>;

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">{labels.productTableEdit}</h1>
                <FormProduct
                    value={product}
                    onSubmit={handleEdit}
                    isError={isError}
                />
            </div>
        </div>
    )
}

export default Edit