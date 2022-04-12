let dataa = [
  {
    "Type" :"production",
    "Image" : "IMG/imagea1.jpg",
    "Link" : "IMG/imagea1.jpg",
    "Name": "Farmland",
    "Location" : ["Yingtian", "Hangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea2.jpg",
    "Link" : "IMG/imagea2.jpg",
    "Name" : "Water Chestnut Pond",
    "Location" : ["Suzhou", "Yangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea3.jpg",
    "Link" : "IMG/imagea3.jpg",
    "Name" : "Forest",
    "Location" : ["Yingtian", "Suzhou", "Songjiang", "Yangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea4.jpg",
    "Link" : "IMG/imagea4.jpg",
    "Name" : "Fish Pond",
    "Location" : ["Yingtian", "Hangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea5.jpg",
    "Link" : "IMG/imagea5.jpg",
    "Name" : "Sawmill",
    "Location" : ["Yingtian", "Suzhou", "Songjiang", "Yangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea6.jpg",
    "Link" : "IMG/imagea6.jpg",
    "Name" : "Paper Mill",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang", "Huizhou", "Yangzhou"]
  },
  {
    "Type" : "production",
    "Image" : "IMG/imagea7.jpg",
    "Link" : "IMG/imagea7.jpg",
    "Name" : "Weaving Mill",
    "Location" : ["Yingtian"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea8.jpg",
    "Link" : "IMG/imagea8.jpg",
    "Name" : "Tailor Shop",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea9.jpg",
    "Link" : "IMG/imagea9.jpg",
    "Name" : "House",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang", "Huizhou", "Jimingshan", "Yangzhou"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea10.jpg",
    "Link" : "IMG/imagea10.jpg",
    "Name" : "Storehouse",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang", "Huizhou", "Jimingshan", "Yangzhou"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea11.jpg",
    "Link" : "IMG/imagea11.jpg",
    "Name" : "Well",
    "Location" : ["Yingtian", "Suzhou", "Songjiang"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea12.jpg",
    "Link" : "IMG/imagea12.jpg",
    "Name" : "Store",
    "Location" : ["Hangzhou"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea13.jpg",
    "Link" : "IMG/imagea13.jpg",
    "Name" : "Painting Shop",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang", "Huizhou"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea14.jpg",
    "Link" : "IMG/imagea14.jpg",
    "Name" : "Fishing Tackle Shop",
    "Location" : ["Suzhou", "Hangzhou"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea15.jpg",
    "Link" : "IMG/imagea15.jpg",
    "Name" : "Lanturn Shop",
    "Location" : ["Suzhou", "Hangzhou"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea16.jpg",
    "Link" : "IMG/imagea16.jpg",
    "Name" : "Medicine Shop",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang", "Huizhou", "Yangzhou"]
  },
  {
    "Type" :"entertainment",
    "Image" : "IMG/imagea17.jpg",
    "Link" : "IMG/imagea17.jpg",
    "Name" : "Fire Lookout",
    "Location" : ["Yingtian", "Suzhou", "Songjiang"]
  },
  {
    "Type" :"entertainment",
    "Image" : "IMG/imagea18.jpg",
    "Link" : "IMG/imagea18.jpg",
    "Name" : "Wooden Memorial Archway",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang", "Huizhou"]
  },
  {
    "Type" :"entertainment",
    "Image" : "IMG/imagea19.jpg",
    "Link" : "IMG/imagea19.jpg",
    "Name" : "School",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang", "Huizhou"]
  },
  {
    "Type" :"entertainment",
    "Image" : "IMG/imagea20.jpg",
    "Link" : "IMG/imagea20.jpg",
    "Name" : "Bonsai Garden",
    "Location" : ["Yingtian", "Suzhou", "Hangzhou", "Songjiang","Yangzhou"]
  },
  {
    "Type" :"entertainment",
    "Image" : "IMG/imagea21.jpg",
    "Link" : "IMG/imagea21.jpg",
    "Name" : "Market",
    "Location" : ["Yingtian", "Suzhou","Songjiang"]
  },
  {
    "Type" :"entertainment",
    "Image" : "IMG/imagea22.jpg",
    "Link" : "IMG/imagea22.jpg",
    "Name" : "Fishing Platform",
    "Location" : ["Suzhou", "Hangzhou"]
  },
  {
    "Type" :"entertainment",
    "Image" : "IMG/imagea23.jpg",
    "Link" : "IMG/imagea23.jpg",
    "Name" : "Lantern Stand",
    "Location" : ["Suzhou", "Hangzhou", "Songjiang", "Yangzhou"]
  },
  {
    "Type" :"entertainment",
    "Image" : "IMG/imagea24.jpg",
    "Link" : "IMG/imagea24.jpg",
    "Name" : "Prayer Tree",
    "Location" : ["Suzhou", "Hangzhou"]
  }
]

let productionContainer = document.getElementById("productionn");
let residenceContainer = document.getElementById("residencee");
let entertainmentContainer = document.getElementById("entertainmentt");

for (var i=0; i<dataa.length; i++) {
  createe(dataa[i]);
}

function createe(incomingJSON) {

  let newDIV = document.createElement("DIV");
  newDIV.classList.add("classs");

  if (incomingJSON["Type"] == "production") {
    productionContainer.appendChild(newDIV);
  }
  else if (incomingJSON["Type"] == "residence") {
    residenceContainer.appendChild(newDIV);
  }
  else if (incomingJSON["Type"] == "entertainment") {
    entertainmentContainer.appendChild(newDIV);
  }

  let newLink = document.createElement("A");
  newLink.classList.add("linkk");
  newLink.href = incomingJSON['Link'];
  newLink.target = "_blank";
  newDIV.appendChild(newLink);
  let newImage = document.createElement("IMG");
  newImage.classList.add("imagee");
  newImage.src = incomingJSON['Image'];
  newLink.appendChild(newImage);

  let newName = document.createElement("P");
  newName.classList.add("namee");
  newName.innerText = incomingJSON['Name'];
  newDIV.appendChild(newName);

  let newLocation = document.createElement("P");
  newLocation.classList.add("locationn");
  newLocation.innerText = "Locations: ";
  newDIV.appendChild(newLocation);
  let newArray = document.createElement("UL");
  newDIV.appendChild(newArray);
  for (var i=0; i<incomingJSON['Location'].length; i++) {
    let newHead = incomingJSON['Location'][i];
    let newTail = document.createElement("LI");
    newTail.innerText = newHead;
    newArray.appendChild(newTail);
  }
}
