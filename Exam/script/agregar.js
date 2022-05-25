
  const sku = document.getElementById('skud')
  const name = document.getElementById('named')
  const quantity = document.getElementById('quantityd')
  const price = document.getElementById('priced')


//funcion para enviar los datos
function sendData(sku,name,quantity,price){



    const heads = new Headers({
        'Authorization': 'Bearer  eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
        });

    const myInitP = { 
        method: 'POST',
        headers: {
            heads,
            "Content-Type": "application/json"
        },
        mode:'cors',
        body: JSON.stringify({sku:sku, name:name, quantity:quantity, price:price})
    };

    const myrequest1 = new Request('https://eshop-deve.herokuapp.com/api/v2/orders',myInit);

    fetch(myrequest1)
    .then(response => response.json()
    .then(json => json.orders.forEach(function(parametro){
        console.log(parametro)
    })));
}
