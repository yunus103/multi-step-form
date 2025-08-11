const toggle = document.getElementById('billing-toggle');
const monthlyLabel = document.getElementById('monthly-label');
const yearlyLabel = document.getElementById('yearly-label');

const arcadeDetail = document.getElementById('arcade-price');
const advancedDetail = document.getElementById('advanced-price');
const proDetail = document.getElementById('pro-price');
const twoMonths =  document.querySelectorAll(".two-months");

const nextButton = document.querySelectorAll('#next');
const backButton = document.querySelectorAll('#back');

nextButton.forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = document.querySelector('.section.active');
        let currentPageIndex = Number(currentPage.id.slice(-1));
        currentPageIndex += 1;

        currentPage.classList.remove('active');
        const nextPage = document.getElementById('step-' + currentPageIndex);
        nextPage.classList.add('active');
    });
});

backButton.forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = document.querySelector('.section.active');
        let currentPageIndex = Number(currentPage.id.slice(-1));
        currentPageIndex -= 1;

        currentPage.classList.remove('active');
        const nextPage = document.getElementById('step-' + currentPageIndex);
        nextPage.classList.add('active');
    });
});


toggle.addEventListener('change', () => {
    if(toggle.checked) {
        yearlyLabel.classList.add('active');
        monthlyLabel.classList.remove('active');

        arcadeDetail.textContent = "90/yr";
        advancedDetail.textContent = "120/yr";
        proDetail.textContent = "150/yr";

        twoMonths.forEach(element => {
            element.classList.add("active");
        });    
    } else {
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');

        arcadeDetail.textContent = "9/mo";
        advancedDetail.textContent = "12/mo";
        proDetail.textContent = "15/mo";

        twoMonths.forEach(element => {
            element.classList.remove("active");
        });  
    }
});
