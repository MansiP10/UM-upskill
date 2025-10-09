async function searchUser() {
    const username = document.getElementById('username').value;
    const userDetails = document.getElementById('user-details');
    const reposContainer = document.getElementById('repos');
    const reposCount = document.getElementById('repo-count');
    const gitInfoElement = document.querySelector('.git-info');

    userDetails.innerHTML = '';
    reposContainer.innerHTML = '';
    reposCount.innerHTML = '';

    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('User not found');
      }
      const userData = await userResponse.json();
      userDetails.innerHTML = `
        <div class="user-info">
          <img src="${userData.avatar_url}" alt="${userData.login}" />
            <h2>${userData.name || userData.login}</h2>
            <p>${userData.bio || 'No bio available'}</p>
            <p class="follow-info"><span>${userData.followers}</span><span> ${userData.following}</span></p>
            <p class="follow-info"><span>Followers</span> <span>Following</span></p>`;
            if(userData.location){
                userDetails.innerHTML += `<p>${userData.location}</p>`;
            }
          userDetails.innerHTML += `</div>`;

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await reposResponse.json();
      if(reposData.length){
        reposCount.innerHTML = `Repositories<span> ${reposData.length} </span>`;
        gitInfoElement.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.6)';
      }
       
      reposData.forEach(repo => {
        reposContainer.innerHTML += `
          <div class="repo">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
        `;
      });
    } catch (error) {
      userDetails.innerHTML = `<p class="error">${error.message}</p>`;
    }
  }