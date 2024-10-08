import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductSkeleton from '../pages/ProductSkeleton';
import ErrorComponent from "../components/errorComponent/ErrorComponent";
import { getProductDetail } from "../api/productClient";
import { Link } from "react-router-dom";

function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ message: "", isError: false });

    /**
    * Fetches the product details based on the provided ID.
    * @param {string} id - The ID of the product to fetch.
    */
    const getProduct = async (id) => {
        try {
            const data = await getProductDetail(id);
            if (Object.keys(data).length === 0) {
                throw new Error('Product not found');
            }
            setProduct(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError({ message: error.message, isError: true });
        }
    };

    useEffect(() => {
        if (id) {
            getProduct(id);
        }
    }, [id]);

    if (isLoading) return <ProductSkeleton />;
    if (isError.isError) {
        return (
            <ErrorComponent message={isError.message} children={<Link to={'/'}>Go back home</Link>} />
        );
    } else {
        return (
            <>
                <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <svg
                            aria-hidden="true"
                            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        >
                            <defs>
                                <pattern
                                    x="50%"
                                    y={-1}
                                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                    width={200}
                                    height={200}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                                <path
                                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                    strokeWidth={0}
                                />
                            </svg>
                            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                        </svg>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <NavLink
                                        to={`/`}
                                        className="inline-block rounded bg-indigo-600 my-4 px-4 py-2 text-xs font-medium no-underline text-white hover:bg-indigo-700 "
                                    >
                                        {'home'}
                                    </NavLink>
                                    <p className="text-base font-semibold leading-7 text-indigo-600">{product.brand}</p>
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                                    <p className="mt-6 text-xl leading-8 text-gray-700">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                alt=""
                                src={product.image}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductDetailPage;

