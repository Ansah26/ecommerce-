alert("Credits to Ansah26")

let cartCount=0;
const cartNumber= document.querySelector("#cartCount");
const but=document.querySelectorAll(".add");
const paymentModel=document.querySelector("#paymentModel");
const closeModel=document.querySelector("#closeModal");
let IMG =document.querySelector(".IMG");
const paymentForm=document.querySelector("#paymentForm");


but.forEach(function(button){
    button.addEventListener("click",function(){
        cartCount++;
        cartNumber.textContent=cartCount;
        button.textContent="ADD TOCART";
        button.style.backgroundColor="black";
    }) 
    
});

cartNumber.addEventListener("click", function(){
  paymentModel.style.display="flex";
  })
  
paymentForm.addEventListener("submit",  function(event){
    event.preventDefault();
    const name=document.querySelector("#name").value;
    const email=document.querySelector("#email").value;
    const phone=document.querySelector("#PhoneNumber").value;
    const amount=document.querySelector("#amount").value;
    const amountinPess=Number(amount)*100;

    const popup = new PaystackPop();
     popup.checkout({
      key: 'pk_test_6324e11bfc56a43932285919e0f76336fc3d9914',
      email: email,
      amount:amountinPess,
      phone:phone,
      metadata:{
        custom_fields:[
          {
            display_name:"Full Name",
            variable_name:"full_name",
            value:name
          },
          {
            display_name:"Phone Number",
            variable_name:"phone_number",
            value:phone
          }
        ]
      },
      onSuccess: (transaction) => {
        console.log(transaction);
      },
      onLoad: (response) => {
        console.log("onLoad: ", response);
      },
      onCancel: () => {
        console.log("onCancel");
      },
      onError: (error) => {
        console.log("Error: ", error.message);
      }
    })

})
closeModel.addEventListener("click",function(){
    paymentModel.style.display="none";
  })

