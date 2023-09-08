function bg(){
    let dombody= document.getElementById("body")
    dombody.classList.toggle("bg-dark");
}
addEventListener("DOMContentLoaded", function(){
    const usertype =""
    const userid = localStorage.getItem("userid")
    const domdiv = document.getElementById('') 
    $.ajax({
        type: "GET",
        url: "",
        data:{
            usertype:usertype
        },
        success: function($data){
            switch ($data){
            case $data == 'admin':
                domdiv.innerHTML=""
        }}

            

    })
    if(usertype == "admin"){}
})
