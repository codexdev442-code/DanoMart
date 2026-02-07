const largeImg = document.querySelector(".large-img");
const subImages = document.querySelectorAll(".sub-img");
const arrow = document.querySelector(".shop-list div");
const ex_links = document.querySelector(".ex-links");
const arrow_down = document.querySelector(".arrow_down");
const desktop_links = document.querySelector(".desktop-links");
const phone_nav = document.querySelector(".phone-nav");
const hamburger_menu = document.querySelector(".hamburger-menu");
const close_menu = document.querySelector(".close-menu");
const men_category = document.querySelector(".men");

  let currentIndex = 0;

  function updateImage(index) {
    
    largeImg.src = subImages[index].src;
    
    subImages.forEach(img => {
      img.classList.remove("active");
    }
    );
    subImages[index].classList.add("active");
    
  }

  // Auto change every 3 seconds (3000ms)
  setInterval(() => {
    currentIndex++;

    if (currentIndex >= subImages.length) {
      currentIndex = 0; // loop infinitely
    }

    updateImage(currentIndex);
  }, 3000);

  // Click to change image manually
  subImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      updateImage(index);
    });
  });
  let clicked = true;
  arrow.addEventListener("click", ()  =>{
    
    if(clicked === true){
     ex_links.style.display = "flex";
     clicked = false;
    }else{
      ex_links.style.display = "none";
      clicked = true;
    }
  })
  arrow_down.addEventListener("click", ()  =>{
    
    if(clicked === true){
     desktop_links.style.display = "block";
     arrow_down.classList.add("arrow-up")
     clicked = false;
    }else{
      desktop_links.style.display = "none";
      arrow_down.classList.remove("arrow-up")
      clicked = true;
    }
  });
  
  hamburger_menu.addEventListener("click", ()=>{
    phone_nav.style.display = "block";
  });
  close_menu.addEventListener("click", () =>{
     phone_nav.style.display = "none";
     phone_nav.classList.add("move-out");
  });
  
  const men_wears = [
    {
      src: "Men_wear(1).jpeg",
      name: "T-shirt",
      price: "$50",
      cart_src: "/shopping-cart (2).png",
    },
    {
      src: "Joggers.jpg",
      name: "Joggers",
      price: "$30",
      cart_src: "/shopping-cart (2).png",
    },
    {
      src: "WhiteHoodie.jpeg",
      name: "White Hoodies",
      price: "$60",
      cart_src: "/shopping-cart (2).png",
    },
  ];
  
  men_wears.forEach(wear =>{
    
    const savedProduct = {
       src: wear.src,
       name: wear.name,
       price: wear.price,
     }
     
    
     const div = document.createElement("div");
     const details = document.createElement("div");
     const prodt_info = document.createElement("div");
     
     const prodt_img = document.createElement("img");
     prodt_img.src = wear.src;
     prodt_img.classList.add("display_img");
     
     const prodt_name = document.createElement("p");
     prodt_name.textContent = wear.name;
     
     const prodt_price = document.createElement("p");
     prodt_price.textContent = wear.price + " - 30% off";
     
     const cart_img = document.createElement("img");
     cart_img.src = wear.cart_src;
     cart_img.addEventListener("click", () =>{
  
        localStorage.setItem("selectedItems", JSON.stringify(savedProduct));
     });
     
     details.appendChild(prodt_info);
     details.appendChild(cart_img);
     details.classList.add("details");
     
     prodt_info.appendChild(prodt_name);
     prodt_info.appendChild(prodt_price);
     
     div.appendChild(prodt_img);
     div.appendChild(details);
     men_category.appendChild(div);
  });