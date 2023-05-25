const getProductList = async () => {
    try {
    const response = await fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12');
    const data = await response.json();
    const productList = data.products;
    console.log(productList);
    } catch (error) {
    console.log('Error:', error);
    }
};

getProductList();
