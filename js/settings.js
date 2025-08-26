function initSettings() {
  //blur background
  const slide = document.getElementById("slide");
  slide.onclick = function () {
    document.getElementById("settings").style.display = "block";
    document.getElementById("settings").classList.add("open");
    document.getElementById("bblur").classList.add("blurred");
  };
  const arrow = document.getElementById("arrow");
  arrow.onclick = function () {
    document.getElementById("settings").style.display = "none";
    document.getElementById("settings").classList.remove("open");
    document.getElementById("bblur").classList.remove("blurred");
  };

  // nav
  const opennav = document.getElementById("sslide");
  opennav.onclick = function () {
    document.getElementById("nav").style.display = "block";
    document.getElementById("nav").classList.add("open");
    document.getElementById("bblur").classList.add("blurred");
  };
  const closenav = document.getElementById("aarrow");
  closenav.onclick = function () {
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav").classList.remove("open");
    document.getElementById("bblur").classList.remove("blurred");
  };

  // close

  const closennav = document.getElementById("dset");
  closennav.onclick = function () {
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav").classList.remove("open");
    document.getElementById("settings").style.display = "block";
    document.getElementById("settings").classList.add("open");
  };
  //JSON data
  const json_data = {
    person: [
      { photo: "https://cdn-icons-png.flaticon.com/512/3093/3093444.png" },
      { head: "PetCo" },
      { text1: "Pet Cleaning Update" },
      { text2: "Your pets are so dirty bro please clean them" },
    ],
    person1: [
      { photo: "https://cdn-icons-png.flaticon.com/128/11498/11498755.png" },
      { head: "Indeed" },
      { text1: "Johnny from Indeed" },
      { text2: "Let's get you started in your role, how will we finish" },
    ],
    person2: [
      { photo: "https://cdn-icons-png.flaticon.com/128/236/236831.png" },
      { head: "Bobby Jones" },
      { text1: "Dinner Tonight?" },
      { text2: "Let's plan some dinner soon, maybe tonight?" },
    ],
    person3: [
      { photo: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png" },
      { head: "Amazon" },
      { text1: "Job Status" },
      {
        text2:
          "We would love to move forward; however, we still need your W2 paperwork.",
      },
    ],
    person4: [
      { photo: "https://cdn-icons-png.flaticon.com/128/17878/17878705.png" },
      { head: "Jason Tatum" },
      { text1: "The Cavs All the Way Baby!!" },
      {
        text2: "The Cavs are too good, I definitely can't beat them for sure.",
      },
    ],
    person5: [
      { photo: "https://cdn-icons-png.flaticon.com/128/3955/3955024.png" },
      { head: "Instagram" },
      { text1: "Verification Code" },
      {
        text2:
          "IMPORTANT: Email Verification Code: 987643; Do not tell anyone this.",
      },
    ],
    person6: [
      { photo: "https://cdn-icons-png.flaticon.com/128/201/201634.png" },
      { head: "Lisa Smith" },
      { text1: "Account Permissions" },
      { text2: "Sadly, we here at Activision cannot unban you at this time" },
    ],
    person7: [
      { photo: "https://cdn-icons-png.flaticon.com/512/3093/3093444.png" },
      { head: "PetCo" },
      { text1: "Pet Cleaning Update" },
      { text2: "Your pets are so dirty bro please clean them" },
    ],
    person8: [
      { photo: "https://cdn-icons-png.flaticon.com/128/727/727399.png" },
      { head: "University Edge" },
      { text1: "Lease Violation" },
      {
        text2:
          "This is Univsersity Edge. The following violations have been reported.",
      },
    ],
    person9: [
      { photo: "https://cdn-icons-png.flaticon.com/128/17878/17878705.png" },
      { head: "Jason Tatum" },
      { text1: "I LOST!!" },
      {
        text2: "The cavs are way better than the Celtics, we can't guard them.",
      },
    ],
  };
  //JSON Html construction
  let data = json_data;
  let text = "";
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let person = data[key];
      if (!person || person.length < 4) continue; // skip invalid items

      const photo = person[0]?.photo || "";
      const head = person[1]?.head || "";
      const text1 = person[2]?.text1 || "";
      const text2 = person[3]?.text2 || "";

      text += '<div class="grid">';
      text += `<img class="petco" src="${photo}" class="image">`;
      text += '<div class="info">';
      text += `<div class="head" id="head">${head}</div>`;
      text += `<div class="email email1" id="pad1">${text1}</div>`;
      text += `<div class="email email2" id="pad2">${text2}</div>`;
      text += "</div></div>";
    }
  }
  document.getElementById("scroll").innerHTML = text;

  // Search Bar
  function searchContent() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const divs = document.querySelectorAll("#scroll .grid");

    divs.forEach((div) => {
      const head = div.querySelector(".head");
      const email1 = div.querySelector(".email1");
      const email2 = div.querySelector(".email2");

      // Remove previous highlights
      head.innerHTML = head.innerHTML.replace(
        /<span class="highlight">|<\/span>/g,
        ""
      );
      email1.innerHTML = email1.innerHTML.replace(
        /<span class="highlight">|<\/span>/g,
        ""
      );
      email2.innerHTML = email2.innerHTML.replace(
        /<span class="highlight">|<\/span>/g,
        ""
      );

      // if query searchiing through all JSON

      if (searchQuery) {
        const sens = new RegExp(searchQuery, "gi");
        let foundMatch = false;

        if (head && head.innerHTML.match(sens)) {
          head.innerHTML = head.innerHTML.replace(
            sens,
            (match) => `<span class="highlight">${match}</span>`
          );
          foundMatch = true;
        }
        if (email1 && email1.innerHTML.match(sens)) {
          email1.innerHTML = email1.innerHTML.replace(
            sens,
            (match) => `<span class="highlight">${match}</span>`
          );
          foundMatch = true;
        }
        if (email2 && email2.innerHTML.match(sens)) {
          email2.innerHTML = email2.innerHTML.replace(
            sens,
            (match) => `<span class="highlight">${match}</span>`
          );
          foundMatch = true;
        }
        if (foundMatch) {
          div.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }
    });
  }
  // search button listener
  document
    .getElementById("searchbutton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      searchContent();
    });
}
