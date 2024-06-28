let bagItems;
onLoad();


function onLoad() {
 let bagItemsSTR= localStorage.getItem('bagItems');
 bagItems = bagItemsSTR ? JSON.parse(bagItemsSTR) : [];
  displayProduct();
  displayBagIcon();
}



function addToBag(itemId){
  // alert("Added to bag");

  bagItems.push(itemId);
  localStorage.setItem("bag",JSON.stringify(bagItems));
  displayBagIcon();

}



function displayBagIcon(){
  let countElements = document.querySelector('.bag-item-count');

  if(bagItems.length>0){
    countElements.style.visibility = 'visible';
    countElements.innerText = bagItems.length; 
  } else{
    countElements.style.visibility = 'hidden';
  }
}



function displayProduct(){
    let productContainerElement = document.querySelector('#product-details');

    let item = {
        id : '001',
        Main_image : 'img/flower product/p8.webp',
        small_img1 : 'img/flower product/p8.webp', 
        small_img2 : 'img/flower product/p8-single1.webp',
        small_img3 : 'img/flower product/p8-single2.webp',
        small_img4 : 'img/flower product/p8-single4.webp',
        link : 'productvideo.html',
        h4_tag : 'The Juliet Liberty Bouquet',
        h6_tag : 'Hand-tied Flowers',
        price : '$27',
        p1 : "Coral-tipped roses. Mini sunflowers. And creamy scented stocks. Our Juliet combines some of the most smile-lifting stems in our collection right now. So it's guaranteed to spark serotonin.",
        p2 : " We designed these blooms in partnership with Liberty. And they arrive wrapped in Dream print. Fancy giving someone a special kind of boost? Send our Juliet. For the final flourish, add on our limited edition Liberty chocolate and greetings card.",
        p3 : "19 stems including sunflowers, stocks, alstroemeria, roses, spray carnations and greenbells."
        
        
        
     }


     productContainerElement.innerHTML = 
`<div class="single-pro-img">
          
     <img src="${item.Main_image}"     width="100%" id="Main-img" alt=""> 
    <a href="${item.link}" id="play">▷Play</a>




   <div class="small-img-grp">
     <div class="small-img-col">
       <img src="${item.small_img1}" width="100%" class="small-img" alt="">
        </div>

     <div class="small-img-col">
      <img src="${item.small_img2}" width="100%" class="small-img" alt="">
    </div>

    <div class="small-img-col">
      <img src="${item.small_img3}" width="100%" class="small-img" alt="">
    </div>

    
    <div class="small-img-col">
      <img src="${item.small_img4}" width="100%" class="small-img" alt="">

    </div>
    
   


     </div>
</div>


<div class="single-product-details">

<h4>${item.h4_tag}</h4>
<h6>${item.h6_tag}</h6>
<h2>${item.price}</h2>
<select>

  <option>Fully Bloomed</option>
  <option>All Buds</option>
  <option>Mixed</option>
  
</select>


<button class="normal" onclick="addToBag(${item.id})">Add To Bag</button>

<p>
  🚚  Free delivery options available</p>

  <div class="about">
    <h2>About</h2>
  

  <span>
    ${item.p1}
  </br>
  </br>

${item.p2}
   
  </br>
  </br>
    
   <strong> What's in the box?
   </strong></br>
    ${item.p3}
  </span>
  </div>

</div>`;

}





ImgSwap();

function ImgSwap(){
  var mainIMG = document.getElementById("Main-img");
var smallIMG = document.getElementsByClassName("small-img");

smallIMG[0].onclick = () => {
    mainIMG.src = smallIMG[0].src;
}

smallIMG[1].onclick = () => {
    mainIMG.src = smallIMG[1].src;
}

smallIMG[2].onclick = () => {
    mainIMG.src = smallIMG[2].src;
}

smallIMG[3].onclick = () => {
    mainIMG.src = smallIMG[3].src;
}
}
