const cardName = document.querySelector('.card-image-front--crd-name')
const cardNmb = document.querySelector('.card-image-front--crd-nmbr')
const cardExpM = document.querySelector('.card-image-front--crd-exp-mm')
const cardExpY = document.querySelector('.card-image-front--crd-exp-yy')
const cardCvc = document.querySelector('.card-image-back--nmbrs')

const inputName = document.querySelector('#card-name')
const inputNmb = document.querySelector('#card-nmb')
const InputExpM = document.querySelector('#card-exp-m')
const InputExpY = document.querySelector('#card-exp-y')
const InputCvc = document.querySelector('#card-cvc')

const completeView = document.querySelector('.complete-form');
const form = document.querySelector('.main-form');

const button = document.querySelector('.bttn')

button.addEventListener('click', completeFormView)

function completeFormView(){
    completeView.classList.toggle('inactive');
    form.classList.add('inactive')
}

inputName.addEventListener('input', () => {
    cardName.innerHTML = inputName.value
})
inputNmb.addEventListener('input', () => {
    cardNmb.innerHTML = inputNmb.value
})
InputExpM.addEventListener('input', () => {
    cardExpM.innerHTML = InputExpM.value
})
InputExpY.addEventListener('input', () => {
    cardExpY.innerHTML = InputExpY.value
})
InputCvc.addEventListener('input', () => {
    cardCvc.innerHTML = InputCvc.value
})

const inputs = document.querySelectorAll('.imput-nmb');

inputs.forEach(input => {
    input.addEventListener('input', e => {
    const value = e.target.value;
    e.target.value = value.replace(/[^0-9]/g, '').slice(0, 20);
    });
});

inputNmb.addEventListener('input', () => {
    let val = inputNmb.value;
    val = val.replace(/\D/g, '').substring(0,16);
    val = val.replace(/(\d{4})(?=\d)/g, '$1 ');
    cardNmb.innerHTML = val;
});


form.addEventListener('submit', (event) => {
    if (inputNmb.value.length < 16) {
        event.preventDefault();
    alert('The "CARD NUMBER" field must have at least 16 characters');
    } else if (InputExpM.value.length < 2) {
        event.preventDefault();
        alert('The "EXP.DATE" field must have at least 2 characters');
    } else if (InputExpY.value.length < 2) {
        event.preventDefault();
        alert('The "EXP.DATE" field must have at least 2 characters');
    }
    else if (InputCvc.value.length < 3) {
        event.preventDefault();
        alert('The "CVC" field must have at least 3 characters');
    } else {
        completeFormView()
    }
});
