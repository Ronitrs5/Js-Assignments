var totalItems = [];

var ShoppingCart = (
    function(){


        var addItems = (pName, pId, pPrice)=>{
            for(let i in totalItems){
                if(totalItems[i].name == pName){
                    totalItems[i].qty++;
                    itemPresent = true;
                    return;
                }
            }
                
            var obj = {
                name : pName,
                id : pId,
                price : pPrice,
                qty : 1,
            }
            totalItems.push(obj);
        }

        var removeItems = (pId)=>{
            for(let i in totalItems){
                if(totalItems[i].id == pId){
                    totalItems.splice(i, 1);
                    return;
                }
            }

            console.log(`${pId} doesn't exist`);
        }

        var getTotalPrice = ()=>{
            let totalBill = 0;

            for(let i in totalItems){
                let totalqty = totalItems[i].qty;
                let price = totalItems[i].price;

                let totalCost = totalqty * price;
                totalBill += totalCost;
            }
            console.log(`Total bill is Rs.${totalBill}`);
        }

        var getAllProducts = ()=>{
            for(let i in totalItems){
                console.log(`${totalItems[i].name}'s price is: ${totalItems[i].price} and you have ${totalItems[i].qty} in cart\n\n`);
            }
        }

        return {
            addItems: addItems,
            removeItems : removeItems,
            getTotalPrice: getTotalPrice,
            getAllProducts: getAllProducts
        }
    }
)();

ShoppingCart.addItems('SmartPhone', 1, 100);
ShoppingCart.addItems('SmartPhone', 1, 100);
ShoppingCart.addItems('SmartPhone', 1, 100);
ShoppingCart.removeItems(1);
ShoppingCart.addItems('Toothpaste', 2, 50);
ShoppingCart.addItems('Toothpaste', 2, 50);
// ShoppingCart.removeItems(2);
// console.log(totalItems);
ShoppingCart.getAllProducts();
ShoppingCart.getTotalPrice();

