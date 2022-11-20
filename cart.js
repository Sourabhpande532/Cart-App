
        let card_detail = document.querySelector(".card_detail");
        let resultShow = document.querySelector(".resultShow");
        let currentPrice = document.querySelector(".currentPrice");
        let discountPrice = document.querySelector(".discount");
        let TotalAmount = document.querySelector(".TotalAmount");
        let count = document.querySelector(".count");


        
        let container = [];
        let filterPrice = realPrice = 0;
        function cart() {

            let reFetchCart = localStorage.getItem("cartItem");
            // console.log(reFetchCart);
            if (reFetchCart === null) {
                container = [];
            } else {
                container = JSON.parse(reFetchCart);
                // console.log(container);
            }
            let reUpdate = "";
            container.forEach((value, index) => {
                reUpdate += `
            <div class="main_one">
                <div>
                <div class="itemName">${value.productName}</div>
                <div class="itemDetail">${value.productInfo}</div>
                <div class="price">
                    <p>${value.filterPrice}</p> <del>₹${value.realPrice}</del> <span class="off">${value.offer}</span>
                </div>
                <p class="free">Free delivery</p>
                <a href="#" class="remove" onclick="deletecart(${index})">REMOVE</a>  
            </div>
          </div>
        `
                filterPrice += parseInt(value.filterPrice.slice(1));
                realPrice += parseInt(value.realPrice.slice(1));
            });


            if (container.length === 0) {
                card_detail.textContent = "Your cart is empty"
                card_detail.style.color = "red";
                card_detail.style.position = "relative";
                card_detail.style.top = "12rem"
                card_detail.style.textAlign = "center"
                card_detail.style.fontSize = "3rem"
                count.style.display = "none";
            } else {
                resultShow.innerHTML = reUpdate;
                count.style.display = "block";
            }

            currentPrice.textContent = `${realPrice}`;
            discountPrice.textContent = `${realPrice - filterPrice}`;
            TotalAmount.textContent = `${filterPrice}RS`;
            TotalAmount.style.color = "purple"
            TotalAmount.style.fontWeight = "900"

        }

        cart();

        function cartCounter() {
            let reFetchCart = localStorage.getItem("cartItem");
            if (reFetchCart === null) {
                container = [];
            } else {
                container = JSON.parse(reFetchCart);
                count.textContent = container.length;
            }
        }
        
        cartCounter();


        function deletecart(index) {
            container.splice(index, 1)
            localStorage.setItem("cartItem", JSON.stringify(container));
            filterPrice = realPrice = 0;
            cart();
            cartCounter();
        }

