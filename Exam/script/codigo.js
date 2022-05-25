
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
.then(data => mostrarData(data) )
.catch(error=> console.log(error)) 


//funcion para mostrar los resultados en el apartado de index.html
const mostrarData = (data) => {
    console.log(data.orders);
    
    let body = '';
    for(let i = 0; i < data.orders.length; i++){
        body += `<tr>
                    <td>${data.orders[i].id}</td>
                    <td>${data.orders[i].name}</td>
                    <td class "text-center"><a class="BtnDetalles btn btn-primary" onclick="javascript:cambiaPantalla();">Detalles</a><a class="BtnPagar btn btn-primary" onclick="javascript:pago();">Pagar</a></td>
                </tr>`

    }
    //se muestra en el tbody
    document.getElementById('data').innerHTML = body;

}


function cambiaPantalla(){
    location.href='file:///C:/Users/manym/OneDrive/Escritorio/Exam/productos.html?'

}

function pago(){
    alert("Pago realizado con exito")
}

