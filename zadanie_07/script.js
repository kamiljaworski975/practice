
// 1. Pobierz dane z endpointu: https://jsonplaceholder.typicode.com/posts na kliknięcie przycisku #button.

// 2. Wyświetl dane w postaci listy w HTMLu wg. schematu:
// * title
//
//   description
//
// * title
//
//   description

// 3. Jeżeli pobieranie danych się powiedzie wyświetl informację w #message ile postów zostało pobrane.

// 4. Jeżeli pobieranie danych się nie powiedzie wyświetl informację w #message, że nastąpił błąd podczas pobierania.

// 5. Podczas pobierania danych zablokuj button i zmień jego tekst na "Loading...",
// a po udanym pobranu lub błędzie odblokuj go i zmień tekst ponowanie na "Pobierz albumy".

// 6 (*). Jeżeli zostanie wpisana nazwa użytkownika do #user-name-input
// to pobieranie danyh powinno pobierać tylko posty tego użytkownika / jeżeli input będzie pusty ma pobierać wszytskich,
// jeżeli taki użytkownik nie istnieje to powinnien się pokazać stosowny komunikat w #message
// Wykorzystaj endpoint do pobrania postów użytkownika i listy tych użytkowników:
// https://jsonplaceholder.typicode.com/posts?userId={id}
// https://jsonplaceholder.typicode.com/users


const list = document.getElementById('list');
const message = document.getElementById('message');
const button = document.getElementById('button');
const userNameInput = document.getElementById('user-name-input');




const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
};

const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
};
    
    button.addEventListener('click', async (event) => {
    event.preventDefault();
    const userName = userNameInput.value.toLowerCase();

    try {
        button.disabled = true;
        const data = await Promise.all([fetchPosts(),fetchUsers()]);
        button.disabled = false;
        const posts = data[0];
        const users = data[1];

        const searchedUser = users.find(user => {
            return user.name.toLowerCase().includes(userName)
        });

        const filteredPosts = posts.filter(post => {
            return searchedUser.id === post.userId
        });

        if ((searchedUser) && (userName != '')){
            list.innerHTML = filteredPosts.map(post => `<li><h3>${post.title}</h3><p>${post.body}</p></li>`).join('');
            message.innerText = `pobrano ${filteredPosts.length} postow uzytkownika ${searchedUser.name}`;
        } else if (userName === '') {
          list.innerHTML = posts.map(post => `<li><h3>${post.title}</h3><p>${post.body}</p></li>`).join('');
          message.innerText = `pobrano ${posts.length} postow`;
        } 
          
        

        console.log(searchedUser,posts)
    } catch(err) {
        button.disabled = false;
        console.error(err)
        message.innerText = 'nie ma takiego uzytkownika';
        list.innerHTML = '';
    }
});





