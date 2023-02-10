      //set your username in the const gitUserName = "yourusername"; to get your own repos that you have starred
      const gitUserName = "ToJoh123";
      //this code will replace the github link in the footer with your own github link

      const githubLink = document.querySelector(".github-link");
      githubLink.href = `https://github.com/${gitUserName}`;

      //set your linked in profile name, you get it my going to your linked in profile and copy the part after the /in/ in the url
      const linkedInUsername = "tom-johansson-021604198";
      //this code will replace the linkedin link in the footer with your own linkedin link
      const linkedInLink = document.querySelector(".linkedeIn-link");
      linkedInLink.href = `https://www.linkedin.com/in/${linkedInUsername}`;

