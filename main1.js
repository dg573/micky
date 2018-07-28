// function Loadjson(file,callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function() {
//     if (xhr.readyState === 4 && xhr.status == "200") {
//       callback (xhr.responseText);
//
//     }
//   };
//   xhr.send(null);
// }
// Loadjson("data.json",function(text){
//   var data = JSON.parse(text);
//   console.log(data);
//     basics(data.details);
//     carrerinfo(data.carrer);
//     education(data.education);
//     skills(data.skills);
//     Achievements(data.Achievements);
//   })
  function Loadjson(file){
    return new Promise((resolve,reject)=>{
      return fetch(file).then(response=>{
        if(response.ok){
          resolve(response.json());
        }
        else{
          reject(new Error('error'));
        }
      })
    })
  }
var newfile=Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
      basics(data.details);
      carrerinfo(data.carrer);
      education(data.education);
       skills(data.skills);
       Achievements(data.Achievements);
        })
  var child1=document.querySelector(".childone");
  function basics(det){
    var image = document.createElement("img");
    image.src=det.image;
    child1.appendChild(image);
    var name=document.createElement("h4");
    name.textContent=det.name;
    child1.appendChild(name);
    var phoneno=document.createElement("h4");
    phoneno.textContent=det.Phoneno;
    child1.appendChild(phoneno);
    var email=document.createElement("a");
    email.href = "mailto:dgchowdary99@gmail.com";
    email.textContent=det.email;
    child1.appendChild(email);
    var add=document.createElement("h2");
    add.textContent="address";
    child1.appendChild(add);
    var hr = document.createElement("hr");
    hr.textContent=det.address;
    child1.appendChild(hr);
    }
    var child2=document.querySelector(".childtwo");
    function carrerinfo(info){
        var c=document.createElement("h2");
      c.textContent = info.info;
      child2.appendChild(c);
    }
      function education(edu){
        var h=document.createElement("h4");

        h.textContent="Education Qualification";
        child2.appendChild(h);
var hr = document.createElement("hr");
child2.appendChild(hr);
var table1 = document.createElement("table");
table1.border="1";
child2.appendChild(table1);
tabledata="";

for(i=0;i<edu.length;i++){
  tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].Year+"</td><td>"+edu[i].percentage+"</td></tr>";
}
 table1.innerHTML=tabledata;
}
function skills(skillinfo){
  var hd = document.createElement("h2");
  hd.textContent ="Technical Skills";
  child2.appendChild(hd);
var hr = document.createElement("hr");
child2.appendChild(hr);
for(i=0;i<skillinfo.length;i++){
var title = document.createElement("h4");
title.textContent = skillinfo[i].title;
child2.appendChild(title);
var eduul =document.createElement("ul");
var eduli =document.createElement("li");
eduli.textContent = skillinfo[i].info;
child2.appendChild(eduli);
child2.appendChild(eduul);
 }
}
function Achievements(ach){
  var hd = document.createElement("h2");
  hd.textContent ="achievements";
  child2.appendChild(hd);
var hr = document.createElement("hr");
child2.appendChild(hr);
for(i=0;i<ach.length;i++){
var title = document.createElement("h4");
title.textContent = ach[i].title;
child2.appendChild(title);
var eduul =document.createElement("ul");
var eduli =document.createElement("li");
eduli.textContent = ach[i].info;
child2.appendChild(eduli);
child2.appendChild(eduul);
 }
}
function openpage(){
  window.open("resumeex.html","_self",true)
}
