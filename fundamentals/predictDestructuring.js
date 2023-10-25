
// ! Problem 1
    // const cars = ['Tesla', 'Mercedes', 'Honda']
    // const [ randomCar ] = cars
    // const [ ,otherRandomCar ] = cars
    // // Predict the output
    // console.log(randomCar)
    // console.log(otherRandomCar)

// ? Answer
    // ? Tesla
    // ? Mercedes

// ! Problem 2
    // const employee = {
    //     name: 'Elon',
    //     age: 47,
    //     company: 'Tesla'
    // }
    // const { name: otherName } = employee;
    // // Predict the output
    // console.log(name);
    // console.log(otherName);

// ? Answer
    // ? ERROR: name undefinded
    // ? Elon

// ! Problem 3
    // const person = {
    //     name: 'Phil Smith',
    //     age: 47,
    //     height: '6 feet'
    // }
    // const password = '12345';
    // const { password: hashedPassword } = person;  
    // //Predict the output
    // console.log(password);
    // console.log(hashedPassword);

// ? Answer
    // ? '12345'
    // ? ERROR Key 'password' not found in Person. Therefore HashedPassword is undefined


// ! Problem 4
    // const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
    // const [,first] = numbers;
    // const [,,,second] = numbers;
    // const [,,,,,,,,third] = numbers;
    // //Predict the output
    // console.log(first == second);
    // console.log(first == third);

// ? Answer
    // ? False (first = numbers[1] = 2 and second = numbers[3] = 5 )
    // ? True (first = numbers[1] = 2 and third = numbers[8] = 2 )

// ! Problem 5
    // const lastTest = {
    //     key: 'value',
    //     secondKey: [1, 5, 1, 8, 3, 3]
    // }
    // const { key } = lastTest;
    // const { secondKey } = lastTest;
    // const [ ,willThisWork] = secondKey;
    // //Predict the output
    // console.log(key);
    // console.log(secondKey);
    // console.log(secondKey[0]);
    // console.log(willThisWork);

// ? Answer
    // ? "value"
    // ? [1, 5, 1, 8, 3, 3]
    // ? 1
    // ? 5

