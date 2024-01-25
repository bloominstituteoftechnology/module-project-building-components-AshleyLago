function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    // Task 1
    let vari = document.createElement("nav");
    links.forEach(i => {
      let a = document.createElement("a");
      a.href = i.href;
      a.title = i.title;
      a.textContent = i.textContent;
      vari.appendChild(a);
    });
    return vari;
    // Task 1
    //return document.createElement('nav')
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {

    // Task 2
    let vari = document.createElement("div");
    vari.classList.add("learner-card");
    let nameE = document.createElement("p");
    nameE.textContent = learner.fullName;
    let idE = document.createElement("p");
    idE.textContent = "Learner ID: "+(learner.id);
    let date = document.createElement("p");
    date.textContent = "Date of Birth: "+(learner.dateOfBirth);
    let favLang = document.createElement("p");
    let favLanguage = languages.find(i => i.id === learner.favLanguage);
    favLang.textContent = "Favorite Language: "+(favLanguage.name);

    [nameE, idE, date, favLang].forEach(i => {
      vari.appendChild(i);
    });

    vari.addEventListener("click", x => {
      document.querySelectorAll(".learner-card").forEach(i => {
        i.classList.remove("active");
      });
      vari.classList.add("active");
    });

    return vari;
    // Task 2

  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    
    // Task 2
    learners.forEach(learner => {
      let learnCard = buildLearnerCard(learner, languages);
      document.querySelector("section").appendChild(learnCard);
    });
    // Task 2

  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    
    // Task 3
    let footer = document.createElement("footer");

    let compInfo = document.createElement("div");
    compInfo.classList.add("company-info");

    let compName = document.createElement("p");
    compName.classList.add("company-name");
    compName.textContent = footerData.companyName;

    let compAddress = document.createElement("p");
    compAddress.classList.add("address");
    compAddress.textContent = footerData.address;

    let contactEmail = document.createElement("p");
    contactEmail.classList.add("contact-email");
    contactEmail.innerHTML = `Email: <a href="mailto${footerData.contactEmail}"> ${footerData.contactEmail}</a>`;

    compInfo.appendChild(compName);
    compInfo.appendChild(compAddress);
    compInfo.appendChild(contactEmail);

    let socialMed = document.createElement("div");
    socialMed.classList.add("social-media");

    for (let i in footerData.socialMedia) {
      let socialMedLink = document.createElement("a");
      socialMedLink.href = footerData.socialMedia[i];
      socialMedLink.textContent = i.charAt(0).toUpperCase() + i.slice(1);
      socialMed.appendChild(socialMedLink);
    }

    let currentYear = new Date().getFullYear();
    let copyright = document.createElement("div");
    copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`;

    footer.appendChild(compInfo);
    footer.appendChild(socialMed);
    footer.appendChild(copyright);
    return footer;
    // Task 3

    //return document.createElement('footer')
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  // Task 4
  document.addEventListener("click", i => {
    if (i.target === document.querySelector("section")) {
      let lrns = document.querySelectorAll(".learner-card");
      lrns.forEach(crd => crd.classList.remove("active"));
    }
  });
  // Task 4

}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
