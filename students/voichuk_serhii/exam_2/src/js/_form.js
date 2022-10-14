"use strict"

function myForm(){
    document.addEventListener("DOMContentLoaded", function(){
        const form = document.getElementById("form");
        form.addEventListener("submit", formSend);

        async function formSend(e){
            e.preventDefault();

            let error = formValidate(form);

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
            const EMAIL_REQ = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return EMAIL_REQ.test(String(input).toLowerCase());
        }
    } )

}

export default myForm;
 