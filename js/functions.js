
// <!-- -----------tabs under about------------- -->


function opentab(tabname){
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// <!-- --------------Side menu-------------- -->


function openmenu(){
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}
function closemenu(){
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}



// <!-- --------------navbar------------------- -->

const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// <!-- ------------Google forms-------------- -->
// <!-- source: https://github.com/jamiewilson/form-to-google-sheets -->
window.onload = function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzrlvUR74oCH2LBkKjJSo6v5EAFf-xAlb5soLCPtu-sDy2hfGh-_xXYPqAiCIJiajpo/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent!"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
}

