const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});


var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(form);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.classList.add('success');
        status.innerHTML = "Appreciate your contact!";
        form.reset()
    }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops! There seems to be a problem!"
    });
}
form.addEventListener("submit", handleSubmit)

