const API_URL = 'https://api-production-1316.up.railway.app/';


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

export const deleteProduct = async (id) => {
    try {
        // Effettua la richiesta DELETE per il prodotto
        const response = await fetch(API_URL + `api/myproduct/DeleteNotes/${id}`, {
            method: 'DELETE',
        });

        // Verifica se la risposta è ok
        if (!response.ok) {
            const errorData = await response.json(); // Ottieni il messaggio di errore
            throw new Error(`Error deleting product: ${errorData.error || response.statusText}`);
        }

        // Restituisci il risultato come JSON, se necessario
        return await response.json();

    } catch (error) {
        console.error('Delete error:', error.message); // Logga l'errore per la diagnostica
        throw new Error(error.message); // Rilancia l'errore per gestirlo altrove
    }
}

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

        const data = await response.json(); // Modificato per gestire la risposta correttamente
        return data;

    } catch (error) {
        throw new Error(error.message);
    }
}

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







/* export const editProduct = async (body, id) => {


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

 */