const btnSearch = document.getElementById('btnSearch');
function searchCountries() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase() === input);

        if (country) {
          const name = country.name;
          const city = country.cities;

          resultDiv.innerHTML += `<h2>${name}</h2>`;
          resultDiv.innerHTML += `<img src="${country.imageurl}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>city:</strong> ${city.name}</p>`;
          resultDiv.innerHTML += `<p><strong>description:</strong> ${city.description}</p>`;
          
        } else {
          resultDiv.innerHTML = 'country not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCountries);
    