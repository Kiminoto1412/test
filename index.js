// const question2 = [
//     {
//       name: 'Win',
//       age: 25,
//     },
//     {
//       name: 'Ton',
//       age: 25,
//     },
//     {
//       name: 'Jeff',
//       age: 33,
//     },
//     {
//       name: 'Boat',
//       age: 35,
//     },
//   ];

// console.log(question2.sort((a,b)=> a.age-b.age)[0].name)

// function MaxAge(array) {
//     let maxPeople = 0;
//     let maxIndex = 0;
//     for(let i=0;i<array.length;i++){
//         if(array[i].age>maxPeople){
//             maxPeople = array[i].age
//             maxIndex = i
//         }
//     }
//     return array[maxIndex].name
// }

// console.log(MaxAge(question2))

// function padTo2Digits(num) {
//     return num.toString().padStart(2, '0');
//   }

//   function formatDate(date) {
//     return [
//       padTo2Digits(date.getDate()),
//       padTo2Digits(date.getMonth() + 1),
//       date.getFullYear(),
//     ].join('/');
//   }

//   // 👇️ 24/10/2021 (mm/dd/yyyy)
//   console.log(formatDate(new Date()));

//   console.log(new Date().getDate())
//   console.log(new Date().getMonth() + 1)
//   console.log(new Date().getFullYear())
// //   console.log(new Date().toString().padStart(2, '0'))

//   //  👇️️ 24/07/2027 (mm/dd/yyyy)
//   console.log(formatDate(new Date(2027, 6, 24)));

// let b=0;
// let c = [1,2,3,4,5,6,7,8,9,0]
// for (let a = 0; a < 10; ++a) {

// }
// console.log(5*25*5)

// let r =0;
// for (let i=1;i<=5;i++){
//   console.log('1')
//   for (let j=1;j<=25;j++){
//     console.log('2')
//     for (let k=1;k<=5;k++){
//       r=r+1
//       console.log(r)
//     }
//   }
// }
// console.log(r)

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let r=0;
// let i=1;
// while (i <=128) {
//   for(let j=1 ; j<128;j++){
//     r= r+1;
//     i= i*2;
//   }
// }
// console.log(r)

// function longestEvenWord(sentence) {
//   let textArray = sentence.split(" ");
//   let textNumberArray = sentence.split(" ");
//   let longestEven = 0;
//   let longestIndex;
//   for (let i = 0; i < textArray.length; i++) {
//     textNumberArray[i] = textNumberArray[i].length;
//     if (textArray[i].length % 2 === 0) {
//       if (textNumberArray[i] > longestEven) {
//         longestIndex = i;
//         longestEven = textNumberArray[i];
//       }
//     }
//   }
//   if(longestIndex === undefined){
//     return "00"
//   }
//   return textArray[longestIndex];
// }

// console.log(longestEvenWord("Time to write great code"))
// console.log(longestEvenWord("It is a pleasant day today"))
// console.log(longestEvenWord("hey"))

// function getSubArrays(arr) {
//   let len = arr.length,
//     subs = Array(Math.pow(2, len)).fill();
//   return subs.map((_, i) => {
//       let j = -1,
//         k = i,
//         res = [];
//       while (++j < len) {
//         k & 1 && res.push(arr[j]);
//         k = k >> 1;
//       }
//       return res;
//     })
//     .slice(1);
// }

// console.log((getSubArrays([1,2,3,4,5])));

//แบบ1
// function maxLength(a, k) {
//   // Write your code here
//     const allSubArrays = [];
// let resultIndex = 0;
// let sumMax =0;
// for (let i = 0; i < a.length; i++) {
//   for (let j = i; j < a.length; j++) {
//     allSubArrays.push(a.slice(i, j + 1));
//   }
// }
// allSubArrays.sort((a, b) => a.length - b.length);
// allSubArrays.forEach((subArray) => {
//   let sum = 0;
//   subArray.forEach((num) => {
//     sum += num;
//     if(sum>sumMax){
//       sumMax = sum;
//     }
//   });
//   if (sum <= k) {
//     resultIndex = subArray.length;
//   }
// });
// return resultIndex;
// }

//แบบ2

// function maxSubArray(a, k) {
//   const allSubArrays = [];
//   let resultIndex = 0;
//   let sumMax =0;
//   let count=0;
// for (let i = 0; i < a.length; i++) {
//   for (let j = i; j < a.length; j++) {
//     allSubArrays.push(a.slice(i, j + 1));
//   }
// }
// console.log(allSubArrays)
//   allSubArrays.sort((a, b) => a.length - b.length);
//   console.log("---------------------")
//   console.log(allSubArrays)
//   console.log("---------------------")

//   allSubArrays.forEach((item, index, array) => {
//     array[index] = [array[index].reduce((a, b) => a + b)];
//     if(array[index])
//   });
// console.log(allSubArrays)

//   return resultIndex;
// }

// let x= maxSubArray([1, 2, 3], 4);
// let x= maxSubArray([1, 2, 3], 4);
// console.log(x)

// function maxLength(a, k) {
//   // Write your code here
//   if (!(a.length >= 1 && a.length <= 10 ** 5)) {
//     return "n is not in range";
//   }
//   if (!(k >= 1 && k <= 10 ** 9)) {
//     return "k is not in range";
//   }
//   if (!(a.every((el) => el >=)) {
//     return "n is not in range";
//   }
//   const allSubArrays = [];
//   let resultIndex = 0;
//   let sumMax = 0;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < a.length; j++) {
//       allSubArrays.push(a.slice(i, j + 1));
//     }
//   }
//   allSubArrays.sort((a, b) => a.length - b.length);
//   allSubArrays.forEach((subArray) => {
//     let sum = 0;
//     subArray.forEach((num) => {
//       sum += num;
//       if (sum > sumMax) {
//         sumMax = sum;
//       }
//     });
//     if (sum <= k) {
//       resultIndex = subArray.length;
//     }
//   });
//   return resultIndex;
// }

// console.log(maxLength([3, 1, 2, 1], 4));

// const string = 'aabbcc';
// const s = 'abab';
// const getMinDeletions = (s) => {
//   const stringLength = s.length;
//   const charMap = {};
//   let distinctSubString = 0;
//   let deleteCount = 0;
//   for (let i = 0; i < stringLength; i++) {
//     const char = s[i];
//     if (charMap[char]) {
//       deleteCount++;
//     } else {
//       charMap[char] = true;
//       distinctSubString++;
//     }
//   }
//   return deleteCount;
// };
// console.log(getMinDeletions(s));

// let numbers = [5, 6, 8, 8, 5];
// let numbers = [6, 7, 9, 8, 6];
// function countMoves(numbers) {
//   let max = Infinity;
//   let count = 0;
//   while (!numbers.every((el) => el === max)) {
//     max = 0;
//     let maxIndex = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       let elNumber = numbers[i];
//       if (elNumber > max) {
//         max = elNumber;
//       } else if (elNumber === max) {
//         maxIndex = i;
//       }
//     }
//     console.log(maxIndex);
//     console.log(max)
//     numbers = numbers.map((el, idx) => {
//       if (idx === maxIndex) {
//         return el;
//       } else {
//         return el + 1;
//       }
//     });
//     //  console.log(numbers)
//     return numbers;
//     count += 1;
//   }
//   return count;
// }

// console.log(countMoves(numbers));

// const arr = [5, 6, 8, 8, 5];

// function countMove(numbers) {
//   let max, isEqual, lastIdx;
//   let count = 0;
//   do {

//     max = Math.max(...numbers);
//     lastIdx = numbers.lastIndexOf(max);
//     isEqual = numbers.every((el) => el === max);

//     if (!isEqual) {
//       numbers = numbers.map((el, idx) => (idx === lastIdx ? el : el + 1));
//       count ++
//     }

//   } while (!isEqual);
//   return count
// }

// countMove(arr);

// let space = 5;
// let string = "";
// for (let i = 1; i <= space; i++) {
//   for (let j = 0; j < space - i; j++) {
//     string += "  ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += " #";
//   }
//   string += "\n";
// }
// console.log(string);

// let space = 5;
// let string = "";
// for (let i = 1; i <= space; i++) {
//   string += "  ".repeat(space - i);
//   string += " #".repeat(i);
//   string += "\n";
// }
// console.log(string);

// function EvenMinusTwo (arr){
//     const evenArr = arr.filter((el,idx)=> {
//         if(el%2 === 0){
//             return el
//         }
//     })
//      const minusTwo = evenArr.map((el,idx)=>el*2)
//      return minusTwo
// }

// console.log(EvenMinusTwo ([1, 2, 3, 4, 5, 6, 7]))

//a
// let q = [
//   {
//     name: "Win",
//     age: 25,
//   },
//   {
//     name: "Ton",
//     age: 25,
//   },
//   {
//     name: "Jeff",
//     age: 33,
//   },
//   {
//     name: "Boat",
//     age: 26,
//   },
// ];

// function MaxAge(arr) {
//   const MaxAgePeople = arr.sort((a, b) => b.age - a.age)[0].name;
//   return MaxAgePeople;
// }

// console.log(MaxAge(q));

// //b
// function getAgeByName(input) {
//   const findInputArray = q.find((el) => {
//     return el.name.toLocaleLowerCase() === input.toLocaleLowerCase();
//   });
//   if (findInputArray) {
//     const findAge = findInputArray.age;
//     return findAge;
//   } else {
//     return null;
//   }
// }

// console.log(getAgeByName("boat2"));

//Fizzbuzz problem
// export function response( input ) {
//     //Insert your code here
//     const response = [];
//    for (var i=1; i <= input; i++){
//        if (i % 15 == 0) response.push("FizzBuzz");
//        else if (i % 3 == 0) response.push("Fizz");
//        else if (i % 5 == 0) response.push("Buzz");
//        else response.push(i);
//    }
//    return response;
// }

// function lucky_33( a, b ) {
//     //Insert your code here
//     if(a === 33 || b === 33 || +a + +b === 33){
//         return true
//     }else {
//         return false
//     }
// }
// console.log(lucky_33(1,23))

// function removeNSmallest(n, arr) {
//   //Insert your code here
//   if (n <= 0) {
//     return arr;
//   } else if (n >= arr.length) {
//     return [];
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] <= +n ) {
//          arr.splice(i, 1);
//          i--
//       }
//     }
//     return arr
//   }
// }
// console.log(removeNSmallest(2, [5, 3, 2, 1, 4]));

// <?php function response( $input ) {
//     //Insert your code here
//     $response = [];
//    for ($i=1; $i<=$input; $i++) {
//      if ($i%3==0 && $i%5==0) {
//          array_push($response, 'FizzBuzz');
//      }else if($i%3==0){
//          array_push($response, 'Fizz');
//      }else if($i%5==0){
//          array_push($response, 'Buzz');
//      }else{
//          array_push($response, $i);
//      }
//    }
//    return $response;
// }
// ?>

// function sum(number) {
//   let sumPrime = 1;
//   if (number < 2) {
//     return 0;
//   } else {
//     for (let i = 2; i <= number; i++) {
//       if (number % i == 0) {
//         sumPrime += number;
//       } else {
//         sumPrime += i;
//       }
//     }
//   }
//   return sumPrime;
// }

// console.log(sum(11));
// console.log(sum(1));
// console.log(sum(10));
// function sum(number) {
//   let sumPrime = 0;
//   if (number === 1) {
//     sumPrime += 1;
//   } else if (number > 1) {
//     for (let i = 0; i < number; i++) {
//         for(let j=2;j<i;j++){
//             if (i % j == 0) {
//                 flag = 1;
//             }
//             console.log(j)
//         }
//     //     console.log(i)
//     //   if (number % i == 0) {
//     //     sumPrime += number;
//     //     break;
//     //   }else{
//     //     sumPrime += i;
//     //     console.log(i)
//     //   }
//     }
//   }
//   return sumPrime
// }

// console.log(sum(66))

// <?php
// function check_prime($num)
// {
//    if ($num == 1)
//    return 0;
//    for ($i = 2; $i <= $num/2; $i++)
//    {
//       if ($num % $i == 0)
//       return 0;
//    }
//    return 1;
// }
// $num = 47;
// $flag_val = check_prime($num);
// if ($flag_val == 1)
//    echo "It is a prime number";
// else
//    echo "It is a non-prime number"
// ?>

// <?php function prime_or_not( $no1 ) {
//   $isPrime = true;

//   if ($no1 < 2) {
//     return 0;
//   } else if ($no1 > 1) {
//     for (let i = 2; i < $no1; i++) {
//       if ($no1 % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       $sum = 0;
//       for (let i = 0; i <= $no1; i++) {
//         sum += i;
//       }
//       return sum
//     } else {
//         return -1
//     }
//   }
// }
// ?>

// function prime(number) {
//   let isPrime = true;

//   if (number < 2) {
//     return 0;
//   } else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       let sum = 0;
//       for (let i = 0; i <= number; i++) {
//         sum += i;
//       }
//       return sum
//     } else {
//         return -1
//     }
//   }
// }

// function solution(N) {
//   // Convert N to binary representation
//   let binary = N.toString(2);
//   console.log(binary)

//   // Initialize variables to keep track of binary gap
//   let currentGap = 0;
//   let maxGap = 0;

//   // Iterate over binary digits
//   for (let i = 0; i < binary.length; i++) {
//       // If we encounter a 1, check if the current gap is longer than the max gap
//       if (binary[i] === '1') {
//           if (currentGap > maxGap) {
//               maxGap = currentGap;
//           }
//           // Reset the current gap
//           currentGap = 0;
//       } else {
//           // If we encounter a 0, increment the current gap
//           currentGap++;
//       }
//   }

//   return maxGap;
// }

// function solution(N) {
//   // Convert N to binary representation
//   let binary = N.toString(2);
//   console.log(binary)
//   // Skip leading zeros
//   let i = 0;
//   while (i < binary.length && binary[i] === '0') {
//       i++;
//   }

//   // Skip trailing zeros
//   let j = binary.length - 1;
//   while (j >= 0 && binary[j] === '0') {
//       j--;
//   }

//   // Initialize variables to keep track of binary gap
//   let currentGap = 0;
//   let maxGap = 0;
//   let lastOneIndex = i - 1;

//   // Iterate over binary digits
//   for (; i <= j; i++) {
//       // If we encounter a 1, calculate the binary gap length
//       if (binary[i] === '1') {
//           currentGap = i - lastOneIndex - 1;
//           lastOneIndex = i;
//           if (currentGap > maxGap) {
//               maxGap = currentGap;
//           }
//       }
//   }

//   return maxGap;
// }
// console.log( solution(1041))

// function solution(A, K) {
//   const N = A.length;
//   if (N === 0) return A;

//   // reduce the number of rotations to be performed
//   const rotations = K % N;
//   if (rotations === 0) return A;

//   // slice the array and join it
//   console.log("A.slice(N - rotations)",A.slice(N - rotations))
//   console.log("A.slice(0, N - rotations)",A.slice(0, N - rotations))
//   const rotatedArray = A.slice(N - rotations).concat(A.slice(0, N - rotations));
//   return rotatedArray;
// }

// console.log(solution([3, 8, 9, 7, 6],3))

// function solution(A) {
//   // Sort the array in ascending order
//   A.sort((a, b) => a - b);
//   console.log(A)

//   // Initialize the result to 1
//   let result = 1;

//   // Iterate through the array
//   for (let i = 0; i < A.length; i++) {
//       // If the current element is less than or equal to 0, skip it
//       if (A[i] <= 0) {
//           continue;
//       }
//       // If the current element is equal to the result, increment the result
//       if (A[i] == result) {
//           result++;
//       }
//       // If the current element is greater than the result, return the result
//       if (A[i] > result) {
//           return result;
//       }
//   }

//   // If we reach the end of the array, return the result
//   return result;
// }

// console.log(solution([1, 3, 6, 4, 1, 2]))
// console.log(solution([-1, -3]))

// function updateTimes(signalOne, signalTwo) {
//   let maxEqual = 0;
//   let times = 0;
//   let i = 0,
//     j = 0;
//   while (i < signalOne.length && j < signalTwo.length) {
//     console.log("signalOne[i]", signalOne[i], signalTwo[i]);
//     // console.log("signalTwo[i]",signalTwo[i])
//     if (signalOne[i] === signalTwo[j]) {
//       if (signalOne[i] > maxEqual) {
//         console.log(maxEqual);
//         maxEqual = signalOne[i];
//         console.log(maxEqual);
//         times++;
//       }
//     }
//     i++;
//     j++;
//   }
//   return times;
// }

// console.log(updateTimes([1, 2, 3, 4, 1], [5, 4, 3, 4, 1]));

function solution(S) {
    let result = '';
    let count = 0;
    
    for (let i = 0; i < S.length; i++) {
        // console.log("S[i]",S[i])
        // console.log("S[i+1]",S[i +1] )
        // console.log("S[i+2]",S[i+2])
      if (S[i] === S[i + 1] && S[i] === S[i + 2]) {
        count++;
        // console.log(count)
      } else {
        result += S[i];
        // console.log(result)
      }
    }
    
    while (count > 0) {
      result = result.replace(/(\w)\1\1/, '$1$1');
      count--;
    }
    
    return result;
  }
  console.log(solution("eedaaad"))
  console.log(solution("xxxtxxx"))
  console.log(solution("uuuuxaaaax"))

// function solution(A) {
//     let shiningBulbs = 0;
//     let maxReached = 0;
//     for (let i = 0; i < A.length; i++) {
//         maxReached = Math.max(maxReached, A[i]);
//         console.log("maxReached",maxReached ,"i+1",i+1)
//         if (maxReached == i + 1) {
//             shiningBulbs++;
//             console.log("shiningBulbs",shiningBulbs)
//         }
//     }
//     return shiningBulbs;
// }
// console.log(solution([2,3,4,1,5]))
// console.log(solution([1,3,4,2,5]))

// console.log("foo".replace(/(f)/, "$1"))