//palindrome

// const isPalindrome= (str)=>{
//   return str===str.split("").reverse().join("");
// }
// console.log(isPalindrome("poo"));

//fibbonacci 

// var fib=(n)=>{
//     const arr=[0,1];
//     for(let i=2;i<=n;i++){
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     console.log(arr);
// }
// fib(3);

//factorial



// const fact=(n)=>{
//     if(n<0)
//     {
//         return -1;
//     }
//     else if(n==0)
//     {
//         return 1;
//     } 
//     else{
//         let res=1;
//         for(let i=n;i>1;i--){
//           res*=i;
//         };
//         return res;
//     }
// }
// const ras=fact(4);
// console.log(ras);

//anagram
// const isAnagram=(a,b)=>{
//     if(a.length!==b.length)return false;
//     let obj1={};
//     let obj2={};
//     for(let i=0;i<a.length;i++){
//         obj1[a[i]]=(obj1[a[i]] || 0) + 1;
//         obj2[b[i]]=(obj2[b[i]] || 0) + 1;
//     }

//     for(const key in obj1){
//         if(obj1[key]!== obj2[key]) return false;
        
//     }
//       return true;
// }

// console.log(isAnagram("car","rat"));

// const isAnagram=(a,b)=>{
//     a=a.split("").sort().join("");
//     b=b.split("").sort().join("");

//     return a===b;
// }
// console.log(isAnagram("tame","rate"));

//two sum

// const twoSum=(nums,target)=>{
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target) return [i,j];
//         }
//     }
// }
// console.log(twoSum([1,2,3,4],5));

// const threeSum=(nums,target)=>{
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             for(let k=j+1;k<nums.length;k++){
//                 if(nums[i]+nums[j]+nums[k]===target) return [i,j,k];
//             }
//         }
//     }
// }
// console.log(threeSum([1,2,3,4],6));