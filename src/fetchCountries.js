//  ф-ція запросу на ресурс з поверненням промісу масиву країн
export function fetchCountries(name) {
  const options = '?fields=name,capital,flags,languages,population';
  const BASE_URL = 'https://restcountries.com/v2/name/';
  const itemToFind = `${BASE_URL}${name}${options}`;
  return fetch(itemToFind).then(data => {
    console.log(data);
    //
    if (!data.ok) {
      console.log(data.json());
      throw new Error('Oops, there is no country with that name');
    }
    return data.json();
  });
  // .then(response => {
  //   console.log(response);
  // });

  //
  // .then(response => {
  //   if (!response.ok) {
  //     console.log(response.json());
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // })
  // .catch(() => {
  //   Notiflix.Notify.failure('Oops, there is no country with that name');
  // });
}
// fetchCountries('ukraine').then(data => console.log(data));

// function fetchCountries() {
//   const url = 'https://restcountries.com/v2/all?fields=name,';
//   const capital = 'capital,currencies';
//   const response = fetch(`${url}${capital}`);
//   return fetch(response)
//     .then(response => {
//       if (!response.ok) {
//         console.log(response);
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(() => {
//       Notiflix.Notify.failure('Oops, there is no country with that name');
//     });
// }

// export function fetchCountries(name) {
//   return fetch(
//     'https://restcountries.eu/rest/v2/name/ukraine?fields=name;capital;population;flag;languages'
//   )
//     .then(response => response.json())
//     .then(dat => console.log(dat));
// }
//
//
//
// if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
