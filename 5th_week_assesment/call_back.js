const updateparents = (message) => {
    console.log(message);
}
const selectfood = (cb = {}) => {
    cb("food selected");
}
selectfood(updateparents);
const placeorder = (cb = {}) => {
    cb("location confirm");
}
placeorder(updateparents);
const orderreceived = (cb = {}) => {
    cb("Food received");
}
orderreceived(updateparents);
const foodready = (cb = {}) => {
    cb("Ready to eat");
}
foodready(updateparents);
 