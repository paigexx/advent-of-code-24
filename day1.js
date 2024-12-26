// location IDs
// 3   4
// 4   3
// 2   5
// 1   3
// 3   9
// 3   3

// Pair up the smallest number in the left list with the smallest number 
// in the right list, then the second-smallest left number with the second-smallest 
// right number, and so on.

// Within each pair, figure out how far apart the two numbers are; 
// you'll need to add up all of those distances. 
// For example, if you pair up a 3 from the left list with a 7 from the right list, 
// the distance apart is 4; if you pair up a 9 with a 3, the distance apart is 6.

const list1 = [3,4,2,1,3,3];
const list2 = [4,3,5,3,9,3];

const distance = (list1, list2) => {
    let distance = 0;
    list1 = list1.sort((a,b) => a-b);
    list2 = list2.sort((a,b) => a-b);
    for (let i = 0; i < list1.length; i++) {
        distance += Math.abs(list1[i] - list2[i]);
    }
    return distance; 
}
