
const heads = new Headers({
    'Authorization': 'Bearer  eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
    });

const myInit = { 
    method: 'GET',
    headers: heads
};

const myrequest = new Request('https://eshop-deve.herokuapp.com/api/v2/orders',myInit);

//mostrar
fetch(myrequest)
.then(response =>  response.json())
.then(data => mostrarDataProduct(data) )
.catch(error=> console.log(error)) 


//funcion para mostrar los resultados en el apartado de productos.html
const mostrarDataProduct = (data) => {
    console.log(data.orders[0].items[0]);
    console.log(data);
    let body = '';
    for(let i = 0; i < data.orders[0].items.length; i++){
        body += `<tr>
                    <td>${data.orders[0].items[0].sku}</td>
                    <td>${data.orders[0].items[0].name}</td>
                    <td>${data.orders[0].items[0].quantity}</td>
                    <td>${data.orders[0].items[0].price}</td>
                </tr>`
    }
    //se muestra en el tbody
    document.getElementById('dataProduct').innerHTML = body;
}