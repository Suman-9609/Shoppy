const bar = document.getElementById('bar');
const nav = document.getElementById("navbar");
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}



// cart js

function increament(incdec,prc,itm){
    var count = document.getElementById(incdec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);

    var pr_amount = document.getElementById('itemTotal');
    var charge = document.getElementById('chargeAmnt').innerHTML;
    var totalProductAmount = document.getElementById('totAmnt');



    if(count.value>=5){
        alert("Only five products allowed...");
        count.value=5;
    }else{
        count.value++;

        var result = parseInt(price.innerHTML)+parseInt(item.innerHTML);
        item.innerHTML = result;

        // for product amount
        var total_product = parseInt(price.innerHTML) + parseInt(pr_amount.innerHTML);
        pr_amount.innerHTML = total_product;

        // new result
        var newResult = total_product + parseInt(charge);
        totalProductAmount.innerHTML = newResult;
    }

}

function decreament(incdec,prc,itm,itmTot){
    var count = document.getElementById(incdec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);

    var pr_amount = document.getElementById('itemTotal');
    var charge = document.getElementById('chargeAmnt').innerHTML;
    var totalProductAmount = document.getElementById('totAmnt');

    if(count.value<=0){
        alert("Minimum five products allowed...");
        count.value=0;
    }else{
        count.value--;

        var result = parseInt(item.innerHTML) - parseInt(price.innerHTML);
        item.innerHTML = result;

        // for product amount
        var total_product = parseInt(pr_amount.innerHTML) - parseInt(price.innerHTML);
        pr_amount.innerHTML = total_product;

                // new result
                var newResult = total_product + parseInt(charge);
                totalProductAmount.innerHTML = newResult;

    }
}