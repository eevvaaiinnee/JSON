let dataa = [
  {
    "Type" :"production",
    "Image" : "IMG/imagea1.jpg",
    "Name": "Farmland",
    "Location" : ["Yingtian ", "Hangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea2.jpg",
    "Name" : "Water Chestnut Pond",
    "Location" : ["Suzhou ", "Yangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea3.jpg",
    "Name" : "Forest",
    "Location" : ["Yingtian ", "Suzhou ", "Songjiang ", "Yangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea4.jpg",
    "Name" : "Fish Pond",
    "Location" : ["Yingtian ", "Hangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea5.jpg",
    "Name" : "Sawmill",
    "Location" : ["Yingtian ", "Suzhou ", "Songjiang ", "Yangzhou"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea6.jpg",
    "Name" : "Paper Mill",
    "Location" : ["Yingtian ", "Suzhou ", "Hangzhou ", "Songjiang ", "Huizhou ", "Yangzhou"]
  },
  {
    "Type" : "production",
    "Image" : "IMG/imagea7.jpg",
    "Name" : "Weaving Mill",
    "Location" : ["Yingtian"]
  },
  {
    "Type" :"production",
    "Image" : "IMG/imagea8.jpg",
    "Name" : "Tailor Shop",
    "Location" : ["Yingtian ", "Suzhou ", "Hangzhou ", "Songjiang"]
  },
  {
    "Type" :"residence",
    "Image" : "IMG/imagea9.jpg",
    "Name" : "House",
    "Location" : ["Yingtian ", "Suzhou ", "Hangzhou ", "Songjiang ", "Huizhou ", "Jimingshan ", "Yangzhou"]
  }
]

let productionContainer = document.getElementById("productionn");
let residenceContainer = document.getElementById("residencee");

for (var i=0; i<dataa.length; i++) {
  createe(dataa[i]);
}

function createe(incomingJSON) {

  let newDIV = document.createElement("ddiivv");
  newDIV.classList.add("classs");

  if (incomingJSON["Type"] == "production") {
    productionContainer.appendChild(newDIV);
  }
  else if (incomingJSON["Type"] == "residence") {
    residenceContainer.appendChild(newDIV);
  }

  let newImage = document.createElement("elementImage");
  newImage.classList.add("imagee");
  newImage.src = incomingJSON['Image'];
  newDIV.appendChild(newImage);

  let newName = document.createElement("elementName");
  newName.classList.add("namee");
  newName.innerText = incomingJSON['Name'];
  newDIV.appendChild(newName);

  let newLocation = document.createElement("elementLocation");
  newLocation.classList.add("locationn");
  newLocation.innerText = "Locations: ";
  newDIV.appendChild(newLocation);
  let newArray = document.createElement("elementArray");
  newDIV.appendChild(newArray);
  for (var i=0; i<incomingJSON['Location'].length; i++) {
    let newHead = incomingJSON['Location'][i];
    let newTail = document.createElement("elementTail");
    newTail.innerText = newHead;
    newArray.appendChild(newTail);
  }
}
