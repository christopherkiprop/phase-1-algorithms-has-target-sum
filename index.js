function hasTargetSum(array, target) {
  // Write your algorithm here
  function hasTargetSum(nums, target) {
    // Use a set to keep track of seen numbers
    let seen = new Set();

    for (let num of nums) {
        let complement = target - num;
        
        // If complement already in set, we found our pair
        if (seen.has(complement)) {
            return true;
        }
        
        // Add current number to set
        seen.add(num);
    }
    
    // If no pairs found
    return false;
}

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/Function hasTargetSum(nums: array of integers, target: integer) -> boolean
Create an empty set called seen
    
For each num in nums do
    Set complement = target - num
    
    If seen contains complement then
        Return true
    End If
    
    Add num to seen
End For

// If no pairs found
Return false
End Function


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
