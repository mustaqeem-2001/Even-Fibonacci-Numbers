function fibonacci (max_num) {
    let left = 1;
    let right = 2;
    let holder = 0;
    let total = 0;
    while (left < max_num) {
        holder = left;
        left = right;
        if (right % 2 === 0) {
            total += right;
        }
        right += holder;
    }  
    return total;
}

console.log(fibonacci(4000000));