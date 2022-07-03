//Su dung promise
// const getInfomation = async () => {
//   const userName = document.querySelector("#userName").value;

//   fetch(`https://api.github.com/users/${userName}`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.message) {
//         alert(data.message);
//       } else {
//         document.querySelector("#userInfo").innerHTML = `
//             <li>Name : ${data.name || data.login}</li>
//             <li>
//                Avatar : <img src=${data.avatar_url} alt="" width="50px">
//             </li>
//             <li>
//                 Email : ${data.email}
//             </li>
//             <li>
//                 Company : ${data.company}
//             </li>
//             <li>
//                 Followers : ${data.followers}
//             </li>
//             `;
//       }
//     });
// };

//Su dung asyn await
const getInfomation = async () => {
  const userName = document.querySelector("#userName").value;

  const response = await fetch(`https://api.github.com/users/${userName}`);
  const data = await response.json();

  if (data.message) {
    alert(data.message);
  } else {
    document.querySelector("#userInfo").innerHTML = `
            <li>Name : ${data.name || data.login}</li>
            <li>
               Avatar : <img src=${data.avatar_url} alt="" width="50px">
            </li>
            <li>
                Email : ${data.email}
            </li>
            <li>
                Company : ${data.company}
            </li>
            <li>
                Followers : ${data.followers}
            </li>
            `;
  }
};
