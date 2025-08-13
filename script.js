const toggle = document.getElementById('billing-toggle');
const monthlyLabel = document.getElementById('monthly-label');
const yearlyLabel = document.getElementById('yearly-label');

const arcadeDetail = document.getElementById('arcade-price');
const advancedDetail = document.getElementById('advanced-price');
const proDetail = document.getElementById('pro-price');
const twoMonths =  document.querySelectorAll(".two-months");

const selectedAddOns = document.querySelectorAll('input[name="addon"]');

const nextButton = document.querySelectorAll('#next');
const backButton = document.querySelectorAll('#back');
const changeButton = document.getElementById('change-button');
const confirmButton = document.getElementById('confirm');

const nameInput = document.getElementById('name');
const mailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');


let payPeriod = 1; // 1 for monthly, 2 for yearly
let plan = 0; // 0 for Arcade, 1 for Advanced, 2 for pro

let onlineAddOn = 0;
let storageAddOn = 0;
let profileAddOn = 0;

let totalPrice = 9;

nextButton.forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = document.querySelector('.section.active');
        let currentPageIndex = Number(currentPage.id.slice(-1));

        if(currentPageIndex === 2){
            setAddOns();
            setPlan();
        } else if(currentPageIndex === 3) {
            calculateTotal();
            setSummaryPage();
        }

        

        currentPageIndex += 1;
        setSideNumber(currentPageIndex); 
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
        setSideNumber(currentPageIndex);
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

selectedAddOns.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if(checkbox.value === "online-service"){
            const pOnline = document.getElementById('p-online');
            if(checkbox.checked){
                onlineAddOn = 1;
                pOnline.classList.add('active');
            }
            else {
                onlineAddOn = 0;
                pOnline.classList.remove('active');
            }

        } else if(checkbox.value === "larger-storage"){
            const pStorage = document.getElementById('p-storage');
            if(checkbox.checked){
                storageAddOn = 1;
                pStorage.classList.add('active');
            }
            else{
                storageAddOn = 0;
                pStorage.classList.remove('active');
            }

        } else if(checkbox.value === "customizable") {
            const pProfile = document.getElementById('p-profile');
            if(checkbox.checked) {
                profileAddOn = 1;
                pProfile.classList.add('active');
            }
            else {
                profileAddOn = 0;
                pProfile.classList.remove('active');
            }
        }

    });
});

changeButton.addEventListener('click', () => {
    const step4 = document.getElementById('step-4');
    const step2 = document.getElementById('step-2');

    step4.classList.remove('active');
    step2.classList.add('active');
    setSideNumber(2); 
});

confirmButton.addEventListener('click', () => {
    if(validateInput()) {
        const step5 = document.getElementById('step-5');
        const step4 = document.getElementById('step-4');
        const form = document.getElementById('form-container');

        step4.classList.remove('active');
        step5.classList.add('active');
        form.classList.add('finished');
    } else {
        alert("Please fill all the fields.");
    }

});

function setPlan() {
    const selectedPlan = document.querySelector('input[name="plan"]:checked');

    if(selectedPlan)
    {
        if(selectedPlan.value === "arcade")
        {
            plan = 0;
        } else if(selectedPlan.value === "advanced") {
            plan = 1;
        } else if(selectedPlan.value === "pro"){
            plan = 2;
        }
    }else
        return -1;
}

function setAddOns() {
    const yearlyAddOn1 = document.querySelectorAll('#add-1');
    const yearlyAddOn2 = document.querySelectorAll('#add-2');
    
    if(payPeriod === 2){    
        yearlyAddOn1.forEach(e => {
            e.textContent = "+$10/yr";
        });

        yearlyAddOn2.forEach(element => {
            element.textContent = "+$20/yr";
        });
    } else if(payPeriod === 1) {
        yearlyAddOn1.forEach(e => {
            e.textContent = "+$1/mo";
        });
        yearlyAddOn2.forEach(element => {
            element.textContent = "+$2/mo";
        });
    }
}

function calculateTotal() {
    if(payPeriod === 1) //Monthly pay
    {
        totalPrice = 9 + plan*3;
        if(onlineAddOn === 1) totalPrice += 1;
        if(storageAddOn === 1) totalPrice += 2;
        if(profileAddOn === 1) totalPrice += 2;

    } else if(payPeriod === 2) {
        totalPrice = 90 + plan*30;
        if(onlineAddOn === 1) totalPrice += 10;
        if(storageAddOn === 1) totalPrice += 20;
        if(profileAddOn === 1) totalPrice += 20;
    }
}

function setSummaryPage() {
    const planName = document.getElementById('summary-plan-name');
    const summaryPeriod = document.getElementById('summary-period');
    const planPrice = document.getElementById('summary-plan-price');
    const totalSumPrice = document.getElementById('summary-price');


    if(payPeriod === 1) //Monthly pay
    {
        totalSumPrice.textContent = "$" + totalPrice + "/mo";
        if(plan === 0)
            planPrice.textContent = "$9/mo";
        else if(plan === 1)
            planPrice.textContent = "$12/mo";
        else if(plan === 2)
            planPrice.textContent = "$15/mo";

    } else if(payPeriod === 2) {
        totalSumPrice.textContent = "$" + totalPrice + "/yr";

        if(plan === 0)
            planPrice.textContent = "$90/yr";
        else if(plan === 1)
            planPrice.textContent = "$120/yr";
        else if(plan === 2)
            planPrice.textContent = "$150/yr";
    }

    if(payPeriod === 1)
        summaryPeriod.textContent = "Monthly";
    else if(payPeriod === 2) 
        summaryPeriod.textContent = "Yearly";

    if(plan === 0)
        planName.textContent = "Arcade";
    else if(plan === 1)
        planName.textContent = "Advanced";
    else if(plan === 2)
        planName.textContent = "Pro";
}

function setSideNumber(pageIndex) {
    const sidePage = document.getElementById('side-' + pageIndex);
    const sideNums = document.querySelectorAll('.step-num');

    sideNums.forEach(e => {
        e.classList.remove('active');
    })
    sidePage.classList.add('active');
}

function validateInput() {
    const nameValue = nameInput.value.trim();
    const mailValue = mailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    if(nameValue === '' || mailValue === '' || phoneValue === '')
    {
        return false;
    }

    return true;
}