var btn = document.getElementById('save');
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var text = document.getElementById('text').value;

btn.addEventListener('click', () => {
     try{
        if(name.length > 15){ throw "is too long" };
        if(name.length < 3){ throw "is too short" };
        if(name.includes('@')){ throw "can not contain an At(@) sign "};
     }catch (err){
        document.getElementById('dem').innerHTML = "The user name " + err;
     }
})