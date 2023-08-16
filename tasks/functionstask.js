// redoing 
function findgross_salary(basic_salary, benefits) {
    let gross_salary = basic_salary+benefits
    return gross_salary;
}

let calcGross = findgross_salary(
    Number(prompt('Enter your basic salary, ')),
    Number(prompt('Enter earned benefit(if any), '))

);


// function for nhif calculations
function findNHIF(gross_salary) {
    if (gross_salary <= 5999) {
        NHIF = 150

    } else if (gross_salary >= 6000 && gross_salary <= 7999) {
        NHIF = 300

    } else if (gross_salary >= 8000 && gross_salary <= 11999) {
        NHIF = 400

    } else if (gross_salary >= 12000 && gross_salary <= 14999) {
        NHIF = 500

    } else if (gross_salary >= 15000 && gross_salary <= 19999) {
        NHIF = 600

    } else if (gross_salary >= 20000 && gross_salary <= 24999) {
        NHIF = 750

    } else if (gross_salary >= 25000 && gross_salary <= 29999) {
        NHIF = 850

    } else if (gross_salary >= 30000 && gross_salary <= 34999) {
        NHIF = 900

    } else if (gross_salary >= 35000 && gross_salary <= 39999) {
        NHIF = 950

    } else if (gross_salary >= 40000 && gross_salary <= 44999) {
        NHIF = 1000

    } else if (gross_salary >= 45000 && gross_salary <= 49999) {
        NHIF = 1100

    } else if (gross_salary >= 50000 && gross_salary <= 59999) {
        NHIF = 1200

    } else if (gross_salary >= 60000 && gross_salary <= 69999) {
        NHIF = 1300

    } else if (gross_salary >= 70000 && gross_salary <= 79999) {
        NHIF = 1400

    } else if (gross_salary >= 80000 && gross_salary <= 89999) {
        NHIF = 1500

    } else if (gross_salary >= 90000 && gross_salary <= 99999) {
        NHIF = 1600

    } else {
        NHIF = 1700
    }
    return NHIF
}

let calcNHIF = findNHIF(calcGross)


// finding NSSF
function findNSSF(gross_salary, rate = 0.06) {
    let NSSF = gross_salary * rate
    if (gross_salary >0 && gross_salary<=18000) {
        NSSF = (gross_salary * rate)
    } else {
        NSSF = 18000 * rate
    }
    return NSSF
}
let calcNSSF = findNSSF(calcGross, rate = 0.06)

// finding NHDF
function findNHDF(gross_salary, amount = 0.015) {
    let NHDF = gross_salary * amount
    return NHDF
}
let calcNHDF = findNHDF(calcGross, amount = 0.015)


function NSSF_NHDFtotal(NSSF, NHDF) {
    let total = NSSF + NHDF
    return total
}
let calcTotal = NSSF_NHDFtotal(calcNSSF, calcNHDF)

// finding taxable_income

function findtaxable_income(gross_salary, total) {
    let taxable_income = gross_salary- total
    return taxable_income
}
let calcTaxable_income = findtaxable_income(calcGross, calcTotal)

// finding payee

function findPAYEE(taxable_income, personal_relief = 2400) {
    if (taxable_income <= 24000) {
        grosspayee = 24000 * 0.1
        netpayee = grosspayee - personal_relief
    } else if (taxable_income > 2400 && taxable_income <= 32, 333) {
        grosspayee = ((taxable_income - 24000) * 0.25) + 2400
        netpayee = grosspayee - personal_relief
    } else if (taxable_income > 32333 && taxable_income <= 500000) {
        grosspayee = ((taxable_income - 32333) * 0.30) + 4483.25
        netpayee = grosspayee - personal_relief
    } else if (taxable_income > 500000 && taxable_income <= 800000) {
        grosspayee = ((taxable_income - 500000) * 0.325) + 144, 783.35
        netpayee = grosspayee - personal_relief
    } else if (taxable_income > 800000) {
        grosspayee = ((taxable_income - 80000) * 0.35) + 144, 783.35
        netpayee = grosspayee - personal_relief
    } else {
        netpayee = 0
    }
    return netpayee
}
// storing the function findPAYEE in a variable
let calcPAYEE = findPAYEE(calcTaxable_income, personal_relief = 2400)


// finding individual's net salary using net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

function findNetsalary(gross_salary,NHIF,NHDF,NSSF,netpayee){
    let net_salary = gross_salary -(NHIF + NHDF + NSSF + netpayee)
    return net_salary
}
let calcNetsalary = findNetsalary(calcGross,calcNHIF,calcNHDF,calcNSSF,calcPAYEE)



