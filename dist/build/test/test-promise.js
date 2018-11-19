const log = (a) => {
    console.log(a);
    return a;
};
const test_promise = () => {
    log("=========================");
    log("test_promise  ========= ");
    const a = new Promise((resolve) => {
        resolve(2);
    });
    const aa = new Promise((resolve) => {
        resolve(a);
    });
    aa
        .then((a) => a
        .then(log));
};
export { test_promise };
