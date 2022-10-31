// synchronous
const processOrder = () => {
    console.log(`processing order for customer 1`);
    const n = new Date().getTime();
    while (n + 3000 >= new Date().getTime()) {
        // console.log(`cooking complete`);
    }
    console.log(`order processed for customer 1`);
}
console.log(`order taking for customer 1`);
processOrder();
console.log(`order complete for customer 1`);

// asynchronous
const processOrder2 = () => {
    console.log(`processing order for customer 1`);
    setTimeout(() => {
        console.log('cooking complete');
    }, 3000);
    console.log(`order processed for customer 1`);
}
console.log(`order taking for customer 1`);
processOrder2();
console.log(`order complete for customer 1`);

// handle asynchronous behavior
const takeOrder = (customer, callback) => {
    console.log(`taking order for ${customer}`)
    callback(customer);
};
const processOrder3 = (customer, callback) => {
    console.log(`processing order for ${customer}`);
    setTimeout(() => {
        console.log('cooking complete');
        console.log(`order processed for ${customer}`);
        callback(customer)
    }, 3000);
};
const completeOrder = (customer) => {
    console.log(`complete order for ${customer}`)
};


takeOrder('Moyenul Islam', (customer) => {
    processOrder3(customer, (customer) => {
        completeOrder(customer)
    })
});
takeOrder('Nayemul Islam', (customer) => {
    processOrder3(customer, (customer) => {
        completeOrder(customer)
    })
});