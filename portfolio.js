//sliding the window from the header//
var selectpage=document.querySelectorAll(".list")
var select = Array.from(selectpage)
select.forEach(function(scl){

 scl.addEventListener("click",function(e){
     if(e.target.innerText=="Home")
     {
      window.scrollTo(0,0)
     }
   
     else if(e.target.innerText=="About"){
       window.scrollTo(0,innerHeight+1)
     }

     else if(e.target.innerText=="Service")
     {
        window.scrollTo(innerHeight+1,2*innerHeight+1)
     }

     else if(e.target.innerText=="Portfolio")
     {
      window.scrollTo(2*innerHeight+1,3*innerHeight+1)
     }

     else if(e.target.innerText=="Contact")
     {
      window.scrollTo(3*innerHeight+1,4*innerHeight+1)
     }
 })
})

//changing the style of insta and facebook in javascript//
var selecticon=document.querySelectorAll(".social")
Array.from(selecticon).forEach(function(icon){
  icon.addEventListener("mousemove",function(val){
    
     if(val.target.id=="insta")
     {
      icon.style.width="40px"
      icon.style.boxShadow="0px 0px 14px 7px rgb(255 0 80)"
     }

     if(val.target.id=="fb")
     {
      icon.style.width="40px"
      icon.style.boxShadow="0px 0px 14px 7px  rgb(0 31 255)"
     }
  })

  icon.addEventListener("mouseleave",function(){
    icon.style.width="35px"
    icon.style.boxShadow="0px 0px"

  })
})

//header's more
var temp= 0
var more= document.querySelector("#more")
more.addEventListener("click",function(){

  if(temp==0){
    document.querySelector(".respmore").style.display="flex"
    document.querySelector(".respmore").style.flexDirection="column"
    document.querySelector(".respmore").style.rowGap="10px"
    temp=1
  }
else if(temp==1){
  document.querySelector(".respmore").style.display="none"
  temp=0
}
})

//for responsive view
var respselectpage=document.querySelectorAll(".morelist")
var respselect = Array.from(respselectpage)
respselect.forEach(function(rscl){

 rscl.addEventListener("click",function(e){
     if(e.target.innerText=="Home")
     {
      window.scrollTo(0,0)
     }
   
     else if(e.target.innerText=="About"){
       window.scrollTo(0,innerHeight+1)
     }

     else if(e.target.innerText=="Service")
     {
        window.scrollTo(innerHeight+1,2*innerHeight+1)
     }

     else if(e.target.innerText=="Portfolio")
     {
      window.scrollTo(2*innerHeight+1,3*innerHeight+1)
     }

     else if(e.target.innerText=="Contact")
     {
      window.scrollTo(3*innerHeight+1,4*innerHeight+1)
     }
 })
})

// var string="prajwal"
// var submit=document.getElementsByClassName("button-click")
// var contacttext=document.querySelectorAll(".contact-TEXT")
// var arr=Array.from(contacttext)
// arr.forEach(function(click){
//  click.addEventListener("",function(clk){
  
  
//  })
// })

// submit.addEventListener("click",function(){
//   if(clk.input.value=="prajwal")
//   {
//     console.log("hello")
//   }
  
// })




