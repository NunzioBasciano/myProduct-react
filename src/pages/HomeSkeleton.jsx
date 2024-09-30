import React from 'react'

function HomeSkeleton() {
    return (
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-left">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Brand</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Barcode</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cost</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Quantity</th>
                    <th className="px-4 py-2"></th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {[...Array(10)].map((_, index) => (
                    <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-2">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <div className="h-8 bg-gray-200 rounded w-full"></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default HomeSkeleton