
function showData(productName,productQuantity, productPrice, totalPrice){
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${productName}</td>
    <td>${productQuantity}</td>
    <td>${productPrice}</td>
    <td>${totalPrice}</td>
    <td>
    <button id="remove-btn" class="remove-btn px-5 py-2 rounded bg-red-500 font-medium hover:bg-red-400">Remove</button>
    </td>

    `;
    tableContainer.appendChild(tr);
};

// common function to get data
function getData(pName, pQuantity, pPrice){
    const productName = document.getElementById(pName).innerText;
    const productQuantity = document.getElementById(pQuantity).innerText;
    const productPrice = document.getElementById(pPrice).innerText;

    const pd = {
        
        productName: productName,
        productQuantity: productQuantity,
        productPrice: productPrice
    }

    return pd;
}

document.getElementById('shopping-cart-1').addEventListener('click', function(){
    // product-one

    // get data by using common function
    const pd = getData('p-one-name', 'p-one-quantity','p-one-price' );
    const totalPrice = parseInt(pd.productPrice) * parseInt(pd.productQuantity);

    // show the data
    showData(pd.productName,pd.productQuantity,pd.productPrice,totalPrice);
    console.log();
})
document.getElementById('shopping-cart-2').addEventListener('click', function(){
    // product-two
    // get data by using common function
    const pd = getData('p-two-name', 'p-two-quantity','p-two-price' );
    const totalPrice = parseInt(pd.productPrice) * parseInt(pd.productQuantity);

    // show the data
    showData(pd.productName,pd.productQuantity,pd.productPrice,totalPrice);
})
document.getElementById('shopping-cart-3').addEventListener('click', function(){
    // product-three
    // get data by using common function
    const pd = getData('p-three-name', 'p-three-quantity','p-three-price' );
    const totalPrice = parseInt(pd.productPrice) * parseInt(pd.productQuantity);

    // show the data
    showData(pd.productName,pd.productQuantity,pd.productPrice,totalPrice);
})
document.getElementById('shopping-cart-4').addEventListener('click', function(){
    // product-four
    // get data by using common function
    const pd = getData('p-four-name', 'p-four-quantity','p-four-price' );
    const totalPrice = parseInt(pd.productPrice) * parseInt(pd.productQuantity);

    // show the data
    showData(pd.productName,pd.productQuantity,pd.productPrice,totalPrice);
})
document.getElementById('shopping-cart-5').addEventListener('click', function(){
    // product-five
    // get data by using common function
    const pd = getData('p-five-name', 'p-five-quantity','p-five-price' );
    const totalPrice = parseInt(pd.productPrice) * parseInt(pd.productQuantity);

    // show the data
    showData(pd.productName,pd.productQuantity,pd.productPrice,totalPrice);
});


document.getElementById('table').addEventListener('click' ,function(e){
    const removeBtn = e.target;
    if(removeBtn.className === 'remove-btn px-5 py-2 rounded bg-red-500 font-medium hover:bg-red-400'){
        e.target.parentNode.parentNode.style.display = 'none';

    }
    
})

document.getElementById('view-cart').addEventListener('click', function(){
    window.location.href = 'cart.html';
})