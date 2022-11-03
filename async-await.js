// handle asynchronous behavior
const takeOrder = (customer) => {
    console.log(`taking order for ${customer}`);
    processOrder3(customer);
};
const processOrder3 = (customer) => {
    console.log(`processing order for ${customer}`);
    setTimeout(() => {
        console.log('cooking complete');
        console.log(`order processed for ${customer}`);
        completeOrder(customer)
    }, 3000);
};
const completeOrder = (customer) => {
    console.log(`complete order for ${customer}`)
};


takeOrder('Moyenul Islam');
takeOrder('Nayemul Islam');