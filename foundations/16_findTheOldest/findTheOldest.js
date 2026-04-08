const findTheOldest = function(peopleList) {
    let newList = peopleList.map(function (person){
        if (!person['yearOfDeath']){
            person['yearOfDeath'] = new Date().getFullYear();
        };
        return person;
    });
    let sortedList = newList.sort((a,b) => ((a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)));
    let oldestPerson = sortedList.pop();
    return(oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
