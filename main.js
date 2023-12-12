class AlgorithmClass {
    findMinPositiveElement(array) {
        const positiveNumbers = array.filter(num => num > 0);
        if (positiveNumbers.length === 0) {
            throw new Error("No positive numbers in the array");
        }
        return Math.min(...positiveNumbers);
    }

    calculateSumOfNegativeNumbers(array) {
        const negativeNumbers = array.filter(num => num < 0);
        if (negativeNumbers.length === 0) {
            throw new Error("No negative numbers in the array");
        }
        return negativeNumbers.reduce((sum, num) => sum + num, 0);
    }

    calculateNthFibonacciElement(n) {
        if (n <= 0) {
            throw new Error("Invalid input. N should be a positive integer.");
        }
        if (n === 1 || n === 2) {
            return 1;
        }
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
            const c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    calculateCurrentStrength(voltage, resistance) {
        if (resistance <= 0) {
            throw new Error("Invalid input. Resistance should be a positive value.");
        }
        return voltage / resistance;
    }
}

function runTests() {
    const algorithmInstance = new AlgorithmClass();

    // Тест 1: Пошук мінімального позитивного елемента
    try {
        const result = algorithmInstance.findMinPositiveElement([2, -5, 7, 1, -8]);
        console.log(result === 1 ? "Test 1 Passed" : "Test 1 Failed");
    } catch (error) {
        console.error("Test 1 Failed -", error.message);
    }

    // Тест 2: Розрахунок суми від'ємних чисел
    try {
        const result = algorithmInstance.calculateSumOfNegativeNumbers([-2, -5, -7, -1, -8]);
        console.log(result === -23 ? "Test 2 Passed" : "Test 2 Failed");
    } catch (error) {
        console.error("Test 2 Failed -", error.message);
    }

    // Тест 3: Розрахунок N-го елементу послідовності Фібоначчі
    try {
        const result = algorithmInstance.calculateNthFibonacciElement(5);
        console.log(result === 5 ? "Test 3 Passed" : "Test 3 Failed");
    } catch (error) {
        console.error("Test 3 Failed -", error.message);
    }

    // Тест 4: Розрахунок сили струму на ділянці кола
    try {
        const result = algorithmInstance.calculateCurrentStrength(12, 4);
        console.log(result === 3 ? "Test 4 Passed" : "Test 4 Failed");
    } catch (error) {
        console.error("Test 4 Failed -", error.message);
    }
    // Тест 1: Пошук мінімального позитивного елемента
    try {
        const result = algorithmInstance.findMinPositiveElement([-2, -2, -7, -1, -8]);
        console.log(result >= 1 ? "Test 1 Passed" : "Test 1 Failed");
    } catch (error) {
        console.error("Negative Test 1 Failed");
    }

    // Негативний тест: Розрахунок суми від'ємних чисел (без від'ємних чисел)
    try {
        algorithmInstance.calculateSumOfNegativeNumbers([1, 2, 3, 4, 5]);
        console.error("Negative Test 2 Failed");
    } catch (error) {
        console.log(error.message === "No negative numbers in the array" ? "Negative Test 1 Passed" : "Negative Test 1 Failed");
    }

    // Негативний тест: Розрахунок N-го елементу послідовності Фібоначчі (невірний вхід)
    try {
        algorithmInstance.calculateNthFibonacciElement(0);
        console.error("Negative Test 3 Failed");
    } catch (error) {
        console.log(error.message === "Invalid input. N should be a positive integer." ? "Negative Test 2 Passed" : "Negative Test 2 Failed");
    }

    // Негативний тест: Розрахунок сили струму на ділянці кола (невірний вхід)
    try {
        algorithmInstance.calculateCurrentStrength(12, 0);
        console.error("Negative Test 4 Failed");
    } catch (error) {
        console.log(error.message === "Invalid input. Resistance should be a positive value." ? "Negative Test 3 Passed" : "Negative Test 3 Failed");
    }
}

// Запуск тестів
runTests();