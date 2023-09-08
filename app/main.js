document.addEventListener("DOMContentLoaded", function(){
	var atemps=0;
		window.addEventListener('scroll', function() {
			if (window.scrollY > 150) {
				document.getElementById('navbar-top').classList.add('fixed-top');
				document.getElementById('navbar-top').classList.add('nav-style');
				navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
			} else {
			 	document.getElementById('navbar-top').classList.remove('fixed-top');
			 	document.getElementById('navbar-top').classList.remove('nav-style');
				document.body.style.paddingTop = '0';
			} 
		});
        window.addEventListener('scroll', function() {
            let dataview = 0
			if (window.scrollY > 200) {
				document.getElementById('gallery').classList.add('div-in');
				navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
               dataview = +1
			} else if (dataview=0) {
			 	return
			} 
		});
$(document).ready(function(){
	$('#loginForm').submit(function(e){
		e.preventDefault();
		dombody= document.getElementById('mainbody')
		
		var username = $('#userinput').val();
		var secure = $('#passwordinput').val();
		var password = $.md5(secure);
		$.ajax({
			type:'POST',
			url: "app/backend.php",
			data:{
				username: username,
				password: password
			},
			success: function($data){
				switch($data){
				case  "success":
					localStorage.setItem("userid",username)
					sessionStorage.setItem("validate","success")
					window.location.href=("/app/system.html")
					break
				default :
					atemps=atemps + 1
					localStorage.clear();
					sessionStorage.setItem("validate","error")
					if (atemps==3){
						disable()
					}
					break
				}
			}
			
		});	
	})
	
	function disable(){
		dom_loginbtn= document.getElementById('loginbtn')
		
			dom_loginbtn.classList.add('disabled')
			var dom_infodev= document.getElementById('dominfo')
			textinfo=document.createElement("h5")
			textinfo.classList.add("lead")
			textinfo.setAttribute("id","loginotice")
			textinfo.classList.add("div-in")
			textinfo.innerHTML="Credenciales incorrectas, Espere un momento!"
			dom_infodev.appendChild(textinfo)
			setTimeout(function() {
				atemps=0
				textnotice = document.createElement("h5")	
				textnotice.classList.add("lead")
				textnotice.classList.add("div-in")
				textnotice.setAttribute("id","loginagain")
				textnotice.innerHTML="Intente nuevamente"
				dom_infodev.removeChild(textinfo)
				dom_infodev.appendChild(textnotice)
				dom_loginbtn.classList.remove('disabled')
			}, 8000);
			setTimeout(function(){
				domtextnotice= document.getElementById("#loginagain")
				dom_infodev.removeChild(textnotice)
			} ,11000);
		
	} 
})
}); 


