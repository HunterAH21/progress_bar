const progressBar = document.getElementById('progress-bar');
const nextButton = document.getElementById('next-button');
const steps = document.querySelectorAll('.progress-step');
let currentStep = 0;

nextButton.addEventListener('click', () => {
    steps[currentStep].classList.remove('active');
    currentStep = (currentStep + 1) % steps.length;
    steps[currentStep].classList.add('active');
    progressBar.style.width = ((currentStep) / (steps.length - 1)) * 100 + '%';
});
