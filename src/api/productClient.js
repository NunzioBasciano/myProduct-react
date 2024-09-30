export const getProductList = async () => {
    try {
        const data = await fetch("http://localhost:3000/products");
        return data.json();

    } catch (error) {
        throw Error(error.message);
    }
}

export const getProductDetail = async (id) => {

    try {
        const data = await fetch(`http://localhost:3000/products-detail/${id}`);
        return data.json();

    } catch (error) {
        throw Error(error.message);
    }
}

export const addProduct = async (body) => {

    const id = self.crypto.randomUUID();
    const productNoDetail = {
        id,
        name: body.name,
        brand: body.brand,
        barcode: body.barcode,
        cost: body.cost,
        quantity: body.quantity,
        price: body.price
    }

    try {
        await fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productNoDetail)
        });

        const data = await fetch(`http://localhost:3000/products-detail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, ...body })
        });
        return data.json();

    } catch (error) {
        throw Error(error.message);
    }
}

export const editProduct = async (body, id) => {


    const productNoDetail = {
        id,
        name: body.name,
        brand: body.brand,
        barcode: body.barcode,
        cost: body.cost,
        quantity: body.quantity,
        price: body.price
    }

    try {

        await fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productNoDetail)
        });

        const data = await fetch(`http://localhost:3000/products-detail/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return data.json();

    } catch (error) {
        throw Error(error.message);
    }
}

export const deleteProduct = async (id) => {
    try {
        await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        });
        const data = await fetch(`http://localhost:3000/products-detail/${id}`, {
            method: 'DELETE',
        });
        return data.json();

    } catch (error) {
        throw Error(error.message);
    }
}

