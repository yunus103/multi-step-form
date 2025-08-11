const toggle = document.getElementById('billing-toggle');
const monthlyLabel = document.getElementById('monthly-label');
const yearlyLabel = document.getElementById('yearly-label');

const arcadeDetail = document.getElementById('arcade-price');
const advancedDetail = document.getElementById('advanced-price');
const proDetail = document.getElementById('pro-price');
const twoMonths =  document.querySelectorAll(".two-months");

const nextButton = document.querySelectorAll('#next');
const backButton = document.querySelectorAll('#back');

let payPeriod = 1; // 1 for monthly, 2 for yearly
let plan = 1; // 1 for Arcade, 2 for Advanced, 3 for pro

let totalPrice = 9;

nextButton.forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = document.querySelector('.section.active');
        let currentPageIndex = Number(currentPage.id.slice(-1));
        console.log(currentPageIndex);

        if(currentPageIndex === 2){
            setAddOns();
        }

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

        payPeriod = 2;

        twoMonths.forEach(element => {
            element.classList.add("active");
        });    
    } else {
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');

        arcadeDetail.textContent = "9/mo";
        advancedDetail.textContent = "12/mo";
        proDetail.textContent = "15/mo";

        payPeriod = 1;

        twoMonths.forEach(element => {
            element.classList.remove("active");
        });  
    }
});

function getPlan() {
    const selectedPlan = document.querySelector('input[name="plan"]:checked');

    if(selectedPlan)
    {
        if(selectedPlan.value === "arcade")
        {
            plan = 1;
        } else if(selectedPlan.value === "advanced") {
            plan = 2;
        } else if(selectedPlan.value === "pro"){
            plan = 3;
        }
    }else
        return -1;
}

function setAddOns() {
    const yearlyAddOn1 = document.getElementById('add-1');
    const yearlyAddOn2 = document.querySelectorAll('#add-2');
    
    if(payPeriod === 2){    
        yearlyAddOn1.textContent = "+$10/yr";
        yearlyAddOn2.forEach(element => {
            element.textContent = "+$20/yr";
        });
    } else if(payPeriod === 1) {
        yearlyAddOn1.textContent = "+$1/mo";
        yearlyAddOn2.forEach(element => {
            element.textContent = "+$2/mo";
        });
    }
}

function calculateAddOns() {
    const selectedAddOns = document.qu
}

