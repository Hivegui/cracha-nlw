const LinksSocialMedia = {
  github: "hivegui",
  linkedin: "guilhermefariasgomes",
  facebook: "hivegui",
  instagram: "hivegui",
  twitter: "hiveguii",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    if (social === "linkedin") {
      li.children[0].href = `https://www.linkedin.com/in/${LinksSocialMedia[social]}`;
    } else {
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
    }
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      UserImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
