function promiseAll(functions) {
    return new Promise((resolve, reject) => {
        let resolvedValues = new Array(functions.length);
        let resolvedCount = 0;
        let rejected = false;

        functions.forEach((fn, index) => {
            fn()
                .then(value => {
                    if (!rejected) {
                        resolvedValues[index] = value;
                        resolvedCount++;
                        if (resolvedCount === functions.length) {
                            resolve(resolvedValues);
                        }
                    }
                })
                .catch(error => {
                    if (!rejected) {
                        rejected = true;
                        reject(error);
                    }
                });
        });
    });
}