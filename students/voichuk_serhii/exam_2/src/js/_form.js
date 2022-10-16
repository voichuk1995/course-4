"use strict"

function myForm(){
    document.addEventListener("DOMContentLoaded", function(){
        const form = document.getElementById("form");
        form.addEventListener("submit", formSend);

        async function formSend(e){
            e.preventDefault();

            let error = formValidate(form);

            let formData = new FormData(form);
            
            const contactWrapper = document.querySelector(".contact__wraper");

            if(error === 0){
                contactWrapper.classList.add("sending");

                let response = await fatch("sendmale.php", {
                    method: "POST",
                    body: formData
                });
                
                if(response.ok){
                    let result = await response.json();
                    alert(result.message);
                    form.reset();
                    contactWrapper.classList.remove("sending");
                } else {
                    alert("Помилка!");
                    contactWrapper.classList.remove("sending");
                }

            } else {
                const nameError = document.querySelector(".name");
                const emailError = document.querySelector(".email");

                if(nameError.value === ""){
                    nameError.setAttribute("placeholder", "Введіть ваше ім'я");
                };
                
                
                if(emailError.value === ""){
                    emailError.setAttribute("placeholder", "Введіть вашу пошту");
                } else {
                    emailError.value = "";
                    emailError.setAttribute("placeholder", "Ваша пошта невірна");
                }
            }

        }

        function formValidate(form){
            let error = 0;
            let formReq = document.querySelectorAll(".req");

            for(let i = 0; i < formReq.length; i++){
                const input = formReq[i];

                formRemoveError(input);

                if(input.classList.contains("email")){
                    if(validateEmail(input)){
                        formAddError(input);
                        error++;
                    }
                } else {
                    if(input.value === ""){
                        formAddError(input);
                        error++;
                    }

                }
            }
            return error;
        }

        function formAddError(input){
            input.parentElement.classList.add("error");
            input.classList.add("error");
        }

        function formRemoveError(input){
            input.parentElement.classList.remove("error");
            input.classList.remove("error");
        }

        // Validate email
        function validateEmail(input) {
            return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value);
        }
    } )

}

export default myForm;
 