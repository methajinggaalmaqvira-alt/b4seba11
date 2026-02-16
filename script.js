// LOGIN SYSTEM
function login(){
let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

// ADMIN LOGIN
if(user==="Metha Jingga Almaqvira Wiradimadja"
 && pass==="Methajingga05"){
localStorage.setItem("role","admin");
window.location="admin.html";
return;
}

// VISITOR LOGIN
let saved=JSON.parse(localStorage.getItem("users"))||[];

let found=saved.find(u=>u.nama===user && u.pass===pass);

if(found){
localStorage.setItem("role","visitor");
localStorage.setItem("visitor",user);
window.location="visitor.html";
}else{
alert("Login gagal");
}
}

// REGISTER
function register(){
let nama=document.getElementById("nama").value;
let jk=document.getElementById("jk").value;
let email=document.getElementById("email").value;
let hp=document.getElementById("hp").value;

let users=JSON.parse(localStorage.getItem("users"))||[];

users.push({
nama:nama,
jk:jk,
email:email,
hp:hp,
pass:nama+"2026"
});

localStorage.setItem("users",JSON.stringify(users));

alert("Akun dibuat!\nUsername: "+nama+"\nPassword: "+nama+"2026");
window.location="index.html";
}

// SAVE CONTENT (ADMIN)
function saveContent(){
let isi=document.getElementById("konten").value;
localStorage.setItem("konten",isi);
alert("Disimpan!");
}

// LOAD CONTENT
function loadContent(){
let isi=localStorage.getItem("konten");
if(isi){
document.getElementById("isiWeb").innerHTML=isi;
}
}

// LIKE
function like(){
let l=localStorage.getItem("like")||0;
l++;
localStorage.setItem("like",l);
document.getElementById("likeCount").innerText=l;
}

// COMMENT
function sendComment(){
let c=document.getElementById("comment").value;
let list=localStorage.getItem("comments")||"";
list+= "<p>"+c+"</p>";
localStorage.setItem("comments",list);
document.getElementById("comments").innerHTML=list;
}
