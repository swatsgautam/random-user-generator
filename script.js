document.addEventListener('DOMContentLoaded', function() {
    const userContainer = document.getElementById('user');
  
    function generateUser() {
      fetch('https://randomuser.me/api/')
        .then(function(response) {
          if (!response.ok) {
            throw new Error('Network error');
          }
          return response.json();
        })
        .then(function(data) {
          const user = data.results[0];
  
          const userCard = `
            <div class="user-card" style="background-color: ${
              user.gender === 'male' ? 'steelblue' : 'rebeccapurple'
            }; color: white;">
              <div class="flex items-center user-details">
                <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" class="image-style">
                <div class="ml-4">
                  <h2 class="text-xl">${user.name.first} ${user.name.last}</h2>
                  <p>${user.email}</p>
                  <p>${user.location.city}, ${user.location.country}</p>
                  <p>${user.dob.age} years old</p>
                  <p>Gender: ${user.gender}</p>
                </div>
              </div>
              
            </div>
          `;
  
          userContainer.innerHTML = userCard;
        })
        .catch(function(error) {
          console.error('Error fetching data:', error);
          userContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
    }

    generateUser();
});
