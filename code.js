function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let map;

let sections = new Array();

sections.push(
    {
        name: "Some name",
        text: "Some text",
        image: "someImage.jpeg"
    },
    {
        name: "Turkey - Thousand and one nights:",
        text: "The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.",
        image: "img/turkey-photo.jpg"
    },
    {
        name: "Some other name",
        text: "Some text",
        image: "someImage.jpeg"
    },
);

let newSectionTemplate = "<section><h2 class='sectionTitle'></h2><div class='picturesDiv'><img class='pictures' src='' alt='/blank'></div><p class='sectionText'></p></section>";

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

function initSections() {
    for(let i = 0; i < sections.length; i++) {
        let newSection = $(newSectionTemplate);

        newSection.find(".sectionTitle").html(sections[i].name);
        newSection.find(".sectionText").html(sections[i].text);
        newSection.find(".pictures").attr("src", sections[i].image)

        $(".destinations").append(newSection);
    }
}

