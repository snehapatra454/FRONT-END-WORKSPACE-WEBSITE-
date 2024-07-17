let originalValues = {
    name: 'John Doe',
    email: 'example@gmail.com',
    phone: '9134837948',
    dob: '1999-07-16'
};

function editField(fieldId) {
    document.getElementById(fieldId).removeAttribute('readonly');
    document.getElementById(fieldId).focus();
}

function editImage() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('profile-image').src = event.target.result;
        }
        reader.readAsDataURL(file);
    };
    input.click();
}

function triggerImageInput() {
    document.getElementById('image-input').click();
}

function saveForm() {
    let form = document.getElementById('profile-form');
    originalValues.name = form.name.value;
    originalValues.email = form.email.value;
    originalValues.phone = form.phone.value;
    originalValues.dob = form.dob.value;

    form.name.setAttribute('readonly', 'readonly');
    form.email.setAttribute('readonly', 'readonly');
    form.phone.setAttribute('readonly', 'readonly');
    form.dob.setAttribute('readonly', 'readonly');
}

function cancelForm() {
    let form = document.getElementById('profile-form');
    form.name.value = originalValues.name;
    form.email.value = originalValues.email;
    form.phone.value = originalValues.phone;
    form.dob.value = originalValues.dob;

    form.name.setAttribute('readonly', 'readonly');
    form.email.setAttribute('readonly', 'readonly');
    form.phone.setAttribute('readonly', 'readonly');
    form.dob.setAttribute('readonly', 'readonly');
}

function loadImage(event) {
    let reader = new FileReader();
    reader.onload = function() {
        document.getElementById('profile-image').src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}