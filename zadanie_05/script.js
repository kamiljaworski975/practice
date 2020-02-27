/* Dla zadań 1-5 musisz skorzystać z danych z pliku data.js
1. Wykonaj funkcje, która zwróci jedynie osoby z podaną rasą w argumencie.
    Input: showOnlyUsersWithRace('Cambodian')
    Output: '5.1: [{id: 8, first_name: "Garvey", last_name: "Islep", email: "gislep7@nps.gov", gender: "Male", …}]'
    Input: showOnlyUsersWithRace(1)
    Output: '5.2: taka rasa nie istnieje'
    Input: showOnlyUsersWithRace('Polish')
    Output: '5.3: []*/

    console.log("Zadanie 1");

    const showOnlyUsersWithRace = function (input) {
        if (typeof input != "string") {
            return "Taka rasa nie istnieje.";
        }
        else if (typeof input == "string") {
            return people.filter((element) => element.race == input);
        }
    };
    
    console.log(showOnlyUsersWithRace("Cambodian"));
    console.log(showOnlyUsersWithRace(1));
    console.log(showOnlyUsersWithRace("Polish"));
    console.log("Zadanie 2");
    /*
    2. Wyświetl każdego z userów w konwencji: title first_name last_name work as job_title in company.
    Output:
    Rev Kaylil Hovey work as Recruiting Manager in Browseblab
    Rev Cesare Caroline work as Computer Systems Analyst II in Wordtune
    Mr Xaviera Danilchenko work as Statistician IV in Rhynyx
    Honorable Shandy Sanford work as Data Coordiator in Topdrive
    Honorable Muire Pothecary work as Executive Secretary in Realbridge
    Ms Mano Gwatkins work as Automation Specialist IV in InnoZ
    Honorable Frederica Shackleton work as Help Desk Operator in Yoveo
    Mr Garvey Islep work as Internal Auditor in Livefish
    Rev Aristotle Gozard work as Software Test Engineer IV in Feedspan
    Honorable Bryon Boulder work as Senior Editor in Kazu */
    
    const inConvention = people.forEach(function (person) {
        console.log(`${person.title} ${person.first_name} ${person.last_name} work as ${person.job_title} in ${person.company}.`)
    });
    
    console.log("Zadanie 3");
    
    /*
    3. Skróć zawartość kolekcji do kluczy id, first_name, last_name i dodaj nowy klucz full_name
    składający się z first_name i last_name.
    Output: [
    {id:1, first_name: "Kaylil", last_name: "Kaylil", full_name: "Kaylil Hovey"}
    {id:2 ,first_name: "Cesare", last_name: "Cesare", full_name: "Cesare Caroline"}
    {id:3 ,first_name: "Xaviera", last_name: "Xaviera", full_name: "Xaviera Danilchenko"}
    {id:4 ,first_name: "Shandy", last_name: "Shandy", full_name: "Shandy Sanford"}
    {id:5 ,first_name: "Muire", last_name: "Muire", full_name: "Muire Pothecary"}
    {id:6 ,first_name: "Mano", last_name: "Mano", full_name: "Mano Gwatkins"}
    {id:7 ,first_name: "Frederica", last_name: "Frederica", full_name: "Frederica Shackleton"}
    {id:8 ,first_name: "Garvey", last_name: "Garvey", full_name: "Garvey Islep"}
    {id:9 ,first_name: "Aristotle", last_name: "Aristotle", full_name: "Aristotle Gozard"}
    {id:10 ,first_name: "Bryon", last_name: "Bryon", full_name: "Bryon Boulder"}*/
    
    const newPeopleList = [];
    
    const reduceList = people.map(function (person) {
        const newPerson = {
            id: person.id,
            first_name: person.first_name,
            last_name: person.last_name,
            full_name: `${person.first_name} ${person.last_name}`,
        }
        newPeopleList.push(newPerson)
    });
    
    console.log(newPeopleList);
    console.log("Zadanie 4");
    
    /*
    4. Wyświetl jedynie osoby, które mają co najmniej 30 lat i są kobietami w konwencji 'imię ma X lat'
    i na koniec wyświetl sumę ich lat.
    Output:
    Kaylil ma 33 lat
    Xaviera ma 55 lat
    Shandy ma 76 lat
    Frederica ma 89 lat
    Razem mają: 253 lat*/
    
    const ladiesOnly = [];
    
    const reduceLadies = people.map(function (person) {
        if (person.gender === "Female" && person.age >= 30) {
            const newLady = {
                first_name: person.first_name,
                age: person.age,
            }
            ladiesOnly.push(newLady);
        }
    });
    
    const oldLadies = ladiesOnly.forEach(function (lady) {
        console.log(`${lady.first_name} ma ${lady.age} lat.`);
    });
    
    // const ageTogether = ladiesOnly.reduce((first, lady) => {
    //     return { age: first.age + lady.age };
    // });
    
    const ageTogetherCheck = ladiesOnly.reduce(function (first, lady) {
        return first + lady.age;
    }, 0)
    
    
    console.log(`Razem mają: ${ageTogetherCheck} lata.`);
    console.log("Zadanie 5");
    /*
    5*.  Dodaj do kolekcji dodatkowe klucze:
    height: wiek + 100
    weight: wiek + 10
    bmi: weight / (height/100) ^ 2
    Następnie zwróc tablie imion tych osób, które mają BMI w zakresie 18,5–24,99.
    Output: ["Kaylil", "Muire", "Aristotle", "Mano", "Bryon"]
    */
    
    people.forEach(function (person) {
        person.heigth = person.age + 100;
        person.weigth = person.age + 10;
        person.bmi = person.weigth / ((person.heigth / 100) ** 2);
    });
    
    const regularWeight = [];
    
    const regularBmi = people.forEach(function (person) {
        if (person.bmi > 18.5 && person.bmi < 24.99) {
            regularWeight.push(person.first_name);
        }
    });
    
    console.log(regularWeight);
    console.log("Zadanie 6");
    
    // Input dla zadań 6-10: 
    
    const numbersList = [11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21];
    
    // 6. Policz sumę wszytskich elementów tablicy
    // Output: '1.1 Suma elementów w tablicy: 215'
    const suma = numbersList.reduce(function (a, b) {
        return a + b;
    })
    console.log(`Suma elementów w tablicy to ${suma}.`);
    
    console.log("Zadanie 7");
    // 7. Policz sumę wartości bezwględnych w tablicy
    // Output: '1.2 Suma wartości bezwględnych z elementów w tablicy: 483'
    const absoluteItems = []
    
    const achangeToAbs = numbersList.forEach((element) => {
        el = Math.abs(element)
        absoluteItems.push(el);
    })
    
    const absoluteSuma = absoluteItems.reduce(function (a, b) {
        return a + b;
    });
    
    console.log(`Suma wartości bezwględnych z elementów w tablicy: ${absoluteSuma}.`);
    console.log("Zadanie 8");
    // 8. Wyświetl tylko elementy większe lub równe od 20:
    // Output: '1.3 Elementy większe lub równe od 20: 50,20,21,100,20,44'
    
    const heighterThanTwenty = numbersList.filter(function (element) {
        if (element >= 20)
            return element;
    })
    
    console.log(`Elementy większe lub równe 20: ${heighterThanTwenty}.`);
    
    console.log("Zadanie 9");
    // 9. Wyświetl sumę elementów tylko ujemnych:
    // Output: '1.4 Sume elementów ujemnych: -134'
    
    const loverThanZero = numbersList.filter(function (element) {
        if (element <= 0)
            return element;
    });
    
    const sumOfnegativeNum = loverThanZero.reduce(function (numA, numB) {
        return numA + numB;
    });
    
    console.log(`Suma elementów ujemnych: ${sumOfnegativeNum}.`);
    
    console.log("Zadanie 10");
    // 10*. Wyświetl sumę elemnetów na pozycjach parzystych:
    // Output: '1.5 Suma elementów parzystych: 193'
    
    const evenIndex = numbersList.filter(function (element, index, array) {
        return (index % 2 === 0);
    });
    
    const sumEvenIndex = evenIndex.reduce(function (numA, numB) {
        return numA + numB;
    });
    
    console.log(`Suma elementów parzystych: ${sumEvenIndex}.`);