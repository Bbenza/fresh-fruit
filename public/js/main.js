//GLOBAL
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');
 //DIVS
 var fruitDIV=document.getElementById("fruitDIV");
 //INFORMATION
 var FRUIT=[
     {name: 'Acerola',price:12},
     {name: 'Apricots',price:13},
     {name: 'Durian',price:1},
     {name: 'Lychee',price:1},
     {name: 'Blackcurrant',price:1},
     {name: 'Breadfruit',price:1},
     {name: 'Olives',price:1},
     {name: 'Cantaloupe',price:1},
     {name: 'Carambola',price:1},
     {name: 'Cherimoya',price:1},
     {name: 'Custard-Apple',price:1},
     {name: 'Feijoa',price:1},
     {name: 'Sugar-Apple',price:1},
     {name: 'Tamarind',price:1},
     {name: 'Soursop',price:1},
     {name: 'Sapodilla',price:1},
     {name: 'Quince',price:1},
     {name: 'Persimmon',price:1},
    ];
 
 //HTM
 function HTMLfruitProduct(con){
     let URL =`../img/fruits/fruit${con}.jpeg`;
     let btn =`btnFruit${con}`;
     return`
        <div class="col-md4">
          <div class="card mb-4 shadow-sm">
             <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card
             image cap">
             <div class="card-body">
               
                <p class="card-text">${FRUIT[con-1].name}</p>
                <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>
                <div class=d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${FRUIT[con-1].name}',
                        '${FRUIT[con-1].price}','${URL}','${con}','${btn}')"
                        class="btn btn-sm btn-outline-secondary" ><a
                        style="color:inherit;" href="/cart">Buy</a></button>
                        <button id=${btn}" type="button" onclick="cart('${FRUIT
                        [con=1].name}','${FRUIT[con-1].price}','${URL}','${con}','$
                        {btn}')" class="btn btn-sm btn-outline-secondary">Add to 
                        cart</button>
                    </div>
                    <small class="text-muted">Free shipping </small>
                </div>
              </div>
            </div>
          </div>
        `
 }

//ANIMATION
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Added to shopping cart'
    });

}

//CART FUNCTIONS
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart,",JSON.stringify(products));
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();

}
function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }  else {
        products=JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}

(()=>{
    for (let index = 1; index <=18; index++) {
        fruitDIV.innerHTML+=`${HTMLfruitProduct(index)}`;

    }
    for (let index=1; index <=3; index++) {
   
       
    }  
    if (localStorage.getItem("cart")==null) {

    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    
}
})();
      