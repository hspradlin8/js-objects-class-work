/*lightning excises
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log("empireStateBuilding", empireStateBuilding);

console.log(`Dimenstion of the empire state building
    stories ${empireStateBuilding.stories}
    height ${empireStateBuilding.height}
    squareFeet ${empireStateBuilding.squareFeet}
    eatWestLength ${empireStateBuilding.eastWestLength}
    eastWestLength ${empireStateBuilding.northSouthLength}`);

console.log["empireStateBuilding", empireStateBuilding];

console.log(`other properties:
            address: ${empireStateBuilding["address"]}
            constructionDate: ${empireStateBuilding ["constructionDate"]}
            cost: ${empireStateBuilding["cost"]}
            owner: ${empireStateBuilding["owner"]}
            architect: ${empireStateBuilding["architect"]}
            `);



const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
const partTeach = nashvilleSoftwareSchool.instructors.partTime

for (let i = 0; i < partTeach.length; i++) {
    console.log(partTeach[i]);
}
const fullTeach = nashvilleSoftwareSchool.instructors.fullTime

for (let i = 0; i < fullTeach.length; i++) {
    console.log(fullTeach[i]);
}


    console.log(partTeach[0] ,fullTeach[4]);
*/
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

const name = beatles.members[1].name;
const history = beatles.history.formed;
const history2 = beatles.history.disbanded;
const born = beatles.members[1].birth;
const album = beatles.albums[3];

console.log(`${name} was in the Beatles from ${history} ${history2}.He was born in ${born}.
 He contributed heavily to ${album}`);