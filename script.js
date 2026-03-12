function buyProduct(name, price){

var options = {
key: "rzp_test_SQMsgnXc41ElCP",
amount: price * 100,
currency: "INR",
name: "Creator Digital Store",
description: name,

handler: function (response){
alert("Payment Successful");
window.location.href="download.html";
}

};

var rzp = new Razorpay(options);
rzp.open();

}
