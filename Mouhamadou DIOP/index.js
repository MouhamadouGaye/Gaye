/*const local = JSON.parse(localStorage.getItem("user"));


if (local!= null) {
    formulaire.style.display = "none";
    h1.textContent = `OK ${local.nom}, On reviendra vers vous le plus rapidement vite possible!`
    localStorage.clear();
    
    
}

beuss.onclick = () => {
    const user = {
        nom : nom.value,
        age : age.value
    }

    localStorage.setItem("user", JSON.stringify(user));
    document.location.reload();
} 

clear.onclick = () => {
    localStorage.clear();
    document.location.reload();
}




let messages = [];
const addMessage = (ev) => {
    ev.preventDefault;
    let message = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mes: document.getElementById("text").value
    }
    messages.push(message);
    //document.form[0].reset();
    document.querySelector('form').reset()

    console.warn("added", (messages) );
    let pre = document.getElementById("#msg pre");
    pre.textContent = '\n' + JSON.stringify(movies, '/t', 3);
    
}
document.addEventListerner('DOMContentLoaded', () =>{
    document.getElementById('btn').addEventListerner('click', addMessage);

});


   passvalue = [""]   
function passvalue () {
    var nameEl = document.getElementById("name").value;
    var emailEl = document.getElementById("email").value;
    var textEl = document.getElementById("email").value;
    localStorage.setItem("textvalue", nameEl, emailEl, textEl);
    return false;
}


const posts = [
    {tittle: 'vous avez besoin d aide ?', body: 'this is post one'},
    { tittle: 'post deux', body: 'this is post two' }

]; 
*/



const local = JSON.parse(localStorage.getItem("user"))

if (local != null) {
    
    formulaire.style.display = "none";
    h1.textContent = ` Bonjour ${local.nom} vous avez ${local.age} ans`;
    localStorage.clear();
    h1.style.clear()

}

beuss.onclick = () => {
    const user = {
        nom: nom.value,
        age: age.value
    }

    localStorage.setItem("user", JSON.stringify(user));
    document.location.reload();

}

clear.onclick = () => {
    localStorage.clear()
    document.location.reload()
}

