function validate() {

    let input = document.getElementById('email');
    input.addEventListener('change', validateEmail);




    function validateEmail(e){
        let mail = e.target.value;
        let matcher =/^([a-z]+)@([a-z]+)\.([a-z]+)/ ;
        if(matcher.test(mail)){
            e.target.removeAttribute('class');
          e.target.value = mail.match(matcher)[1];
          
        }else {
            e.target.classList.add('error');
        }

    }
}