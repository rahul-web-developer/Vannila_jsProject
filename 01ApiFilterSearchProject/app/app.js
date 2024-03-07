

(async()=>{




  const containerdata = document.getElementById("product-items");
  const titledata = document.getElementById("title");

  const inputvalue = document.getElementById("inputvalue");

  // console.log(containerdata)


  const fetchproductapi = async()=>{
  
  try {
    const res = await fetch('https://fakestoreapi.com/products')
  
    return await res.json()
  
  
  } catch (error) {
    return error
  }
  
  
  }
  
  let fetchp = await fetchproductapi()
  
  
  const productshow = (product)=>{

// console.log(product.title.toLowerCase())

  return `
   <div class="product-card">

  <div class="image-container">
    <img src="${product.image}" alt="image">
   </div>
  <div class="product-content">
    <h2>${product.title}</h2>
   <p>${product.description.split(" ").slice(0,20).join(" ")}</p>

    <button>$ ${product.price}</button>
  
   </div>


 </div>
  
  `

  }


  const renderdata = (api)=>{
    containerdata.innerHTML = "some";

    api.forEach(element => {
      
      containerdata.innerHTML += productshow(element)

    });

  }

const chechcontent = (text,searchtext)=>{
return text.toString().toLowerCase().includes(searchtext)


  
}


const filterfun = (e)=>{
  const searchtext = e.target.value.toLowerCase();


  

  
   if(searchtext.trim() == ''){
   
titledata.innerHTML = "Please enter something";
titledata.style.color = "red"

   }else{
    titledata.innerHTML = ""

    const filtereddata =  fetchp.filter((pro)=>{
      return chechcontent(pro.title,searchtext) || chechcontent(pro.description,searchtext)||
      chechcontent(pro.price,searchtext)
     });
   
     console.log(filtereddata)


     renderdata(filtereddata)
   
   }




 
};



  
inputvalue.addEventListener("keyup",filterfun);



  renderdata(fetchp);


})()