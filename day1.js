const data = require('./day1data');


//Format data into two arrays for easier manipulation.
const getLocations = (data) => {
    const lines = data.trim().split('\n');
    let list1 = [];
    let list2 = [];

    lines.forEach(line => {
        const [num1, num2] = line.trim().split(/\s+/).map(Number);
        list1.push(num1);
        list2.push(num2);
    });
    return [list1, list2];
}


//PART ONE - DISTANCE

// Within each pair, figure out how far apart the two numbers are; 
// you'll need to add up all of those distances. 
// For example, if you pair up a 3 from the left list with a 7 from the right list, 
// the distance apart is 4; if you pair up a 9 with a 3, the distance apart is 6.
const distance = (data) => {
    let [list1, list2] = getLocations(data)
    list1 = list1.sort((a,b) => a-b);
    list2 = list2.sort((a,b) => a-b);

    let distance = 0;
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] > list2[i]) {
            [list1[i], list2[i]] = [list2[i], list1[i]];
        }
        distance += Math.abs(list1[i] - list2[i]);
    }
    console.log("Distance: " + distance)
    return distance; 
}

//PART TWO - SIMILARITY

// This time, you'll need to figure out exactly how often each number 
// from the left list appears in the right list. Calculate a total similarity score by
// adding up each number in the left list after multiplying it by the number of times 
// that number appears in the right list.

// O(n²) time complexity
const similarity0n2 = (data) => {
    const [list1, list2] = getLocations(data)
    let similarity = 0;
    for (let i = 0; i < list1.length; i++) {
        let target = list1[i]
        let numberOfTargets = 0;
        for(let i = 0; i < list2.length; i++){
            if(target === list2[i] ){
                numberOfTargets ++
            }
        }
        const similiarityToAdd = target * numberOfTargets
        similarity += similiarityToAdd
        numberOfTargets = 0
    }
    console.log("Similarity Score: " +  similarity)
    return similarity
}

//O(n) time complexity
const similarity0n = (data) => {
    const [list1, list2] = getLocations(data);
    const frequencyMap = list2.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const similarityScore = list1.reduce((total, num) => {
        return total + (num * (frequencyMap[num] || 0));
    }, 0);

    console.log("Similarity Score: " + similarityScore);
    return similarityScore;
}


distance(data);
similarity0n(data);