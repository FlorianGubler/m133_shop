function expandcart() {
    reloadCart();
    document.getElementById("cart-container").style.display = "block";
}
function closecart() {
    document.getElementById("cart-container").style.display = "none";
}
function reloadCart() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("cart-content-container").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", rootpath + "/assets/widgets/cart.php", true);
    xhttp.send();
}

function addtocart(pkProduct, color) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            reloadCart();
        }
    };
    xhttp.open("POST", rootpath + "/actionmgr.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("action=addtocart&productid=" + pkProduct + "&productcolor=" + color);
}
function deleteItemFromCart(pkProduct, color) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            reloadCart();
        }
    };
    xhttp.open("POST", rootpath + "/actionmgr.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("action=deletefromcart&productid=" + pkProduct + "&productcolor=" + color);
}
function amountMinusCart(pkProduct, color) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            reloadCart();
        }
    };
    xhttp.open("POST", rootpath + "/actionmgr.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("action=cartamountminus&productid=" + pkProduct + "&productcolor=" + color);
}
function amountPlusCart(pkProduct, color) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            reloadCart();
        }
    };
    xhttp.open("POST", rootpath + "/actionmgr.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("action=cartamountplus&productid=" + pkProduct + "&productcolor=" + color);
}