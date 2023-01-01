function whatsapp(){
    var text = "This user submitted details from abm website";
    var user = console.log(text);
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var send = "https://wa.me/923121702940?text="+"Details : "+text+"%0a"+"Name : "+name+"%0a"+"Country : "+country+"%0a"+"City : "+city+"%0a"+"Email : "+email+"%0a"+"Message : "+message;
    window.open(send,"_blank").focus();
};
