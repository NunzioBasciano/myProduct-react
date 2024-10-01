const API_URL = 'https://api-production-1316.up.railway.app/';


/**
 * Fetches a list of products (notes).
 * @returns {Promise<Array>} A promise that resolves to an array of product notes.
 */
export const getProductList = async () => {
    try {
        const response = await fetch(API_URL + 'api/myproduct/GetNotes/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const notes = await response.json();
        return notes;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}

/**
 * Fetches the details of a specific product by its ID.
 * @param {string} id - The ID of the product to fetch.
 * @returns {Promise<Object>} A promise that resolves to the product details.
 */
export const getProductDetail = async (id) => {
    try {
        const response = await fetch(API_URL + `api/myproduct/GetNote/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const notes = await response.json();
        return notes;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}

/**
 * Deletes a specific product by its ID.
 * @param {string} id - The ID of the product to delete.
 * @returns {Promise<Object>} A promise that resolves to the response data.
 * @throws Will throw an error if the delete operation fails.
 */
export const deleteProduct = async (id) => {
    try {
        const response = await fetch(API_URL + `api/myproduct/DeleteNotes/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error deleting product: ${errorData.error || response.statusText}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Delete error:', error.message);
        throw new Error(error.message);
    }
}

/**
 * Adds a new product.
 * @param {Object} body - The product data to add.
 * @param {string} body.name - The name of the product.
 * @param {string} body.brand - The brand of the product.
 * @param {string} body.barcode - The barcode of the product.
 * @param {string} body.image - The image URL of the product.
 * @param {string} body.description - The description of the product.
 * @param {number} body.cost - The cost of the product.
 * @param {number} body.quantity - The quantity of the product.
 * @param {number} body.price - The price of the product.
 * @returns {Promise<Object>} A promise that resolves to the newly added product data.
 * @throws Will throw an error if the add operation fails.
 */
export const addProduct = async (body) => {
    const product = {
        name: body.name,
        brand: body.brand,
        barcode: body.barcode,
        image: body.image,
        description: body.description,
        cost: body.cost,
        quantity: body.quantity,
        price: body.price
    };

    try {
        const response = await fetch(API_URL + `api/myproduct/AddNotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)

        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Something went wrong!');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(error.message);
    }
}

/**
 * Edits an existing product.
 * @param {Object} body - The updated product data.
 * @param {string} id - The ID of the product to edit.
 * @returns {Promise<Object>} A promise that resolves to the updated product data.
 * @throws Will throw an error if the edit operation fails.
 */
export const editProduct = async (body, id) => {
    const response = await fetch(API_URL + `api/myproduct/EditNote/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error('Failed to edit product');
    }

    return await response.json();
};

