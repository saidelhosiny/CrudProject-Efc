
let nameProduct =  document.getElementById("nameProduct")
let priceProduct = document.getElementById("priceProduct")
let Category = document.getElementById("Category")
let Describtion = document.getElementById("Describtion")

document.getElementById("update").style.display  ="none" 


let productContainer = []




let id = ''




if(localStorage.getItem("product")!=null){
    productContainer  = JSON.parse(localStorage.getItem("product"))

    displayProduct()
} // zboon adeem



function addProduct(){
    
    
    let product = {
        name:nameProduct.value,
        price:priceProduct.value,
        category:Category.value,
        desc:Describtion.value,
    }


    
    productContainer.push(product)

    
    
    localStorage.setItem("product",JSON.stringify(productContainer))
    clearFrom()
    displayProduct()

    
    
    
}

//bos ya3m ana hena  3malt addProduct 

function clearFrom(){
    nameProduct.value = ""
    priceProduct.value = ""
    Category.value = ""
    Describtion.value = ""
}

function displayProduct(){
    
    let data = ''

for(let i = 0; i<productContainer.length;i++){

    data+=`<tr>
                <th scope="row">${i+1}</th>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                
                <td><button onclick = 'deleteData(${i})' class=" btn btn-danger">Delete</button></td>
                <td><button onclick = 'updateProductStepOne(${i})' class=" btn btn-warning">Update</button></td>
              </tr>`

}
document.getElementById("demo").innerHTML = data

}


function deleteData(index){

    

    productContainer.splice(index,1)
    localStorage.setItem("product",JSON.stringify(productContainer))


    displayProduct()

}


function updateProductStepOne(index){


 
    id = index
    
    
    

    // console.log();

    nameProduct.value =productContainer[index].name
    priceProduct.value =productContainer[index].price
    Category.value =productContainer[index].category
    Describtion.value =productContainer[index].desc
    
    document.getElementById("update").style.display  ="block"
    document.getElementById("submit").style.display  ="none"
    
    

}

function finalUpdate(){
   
    productContainer[id].name = nameProduct.value
    productContainer[id].price = priceProduct.value
    productContainer[id].category = Category.value
    productContainer[id].desc = Describtion.value

    localStorage.setItem("product",JSON.stringify(productContainer))

    displayProduct()
    clearFrom()
    
    document.getElementById("submit").style.display  ="block"
    document.getElementById("update").style.display  ="none"
    

    


    
}

