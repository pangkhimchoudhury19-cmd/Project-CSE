const districts = [
  {name:"Baksa",details:"Baksa lies near the Bhutan border in the Bodoland Territorial Region. Agriculture and forests dominate. Bwisagu and Bihu are major festivals."},
  {name:"Bajali",details:"Bajali is a newly formed district with Pathsala as a cultural center. Education and literature are important here. Bihu and Nam-Kirtan are celebrated."},
  {name:"Barpeta",details:"Barpeta is a major Vaishnav religious center famous for Barpeta Satra founded by Srimanta Sankardeva. Raas Mahotsav and Bihu are celebrated."},
  {name:"Biswanath",details:"Biswanath lies on the north bank of the Brahmaputra River and is known for scenic beauty and river ghats. Bihu is widely celebrated."},
  {name:"Bongaigaon",details:"Bongaigaon is an industrial district known for rock-cut caves and Bagheswari Temple. Bihu and Durga Puja are major festivals."},
  {name:"Cachar",details:"Cachar is the largest district of Barak Valley with Silchar as headquarters. Durga Puja and Bihu are major festivals."},
  {name:"Charaideo",details:"Charaideo was the first capital of the Ahom Kingdom and is famous for Ahom Maidams, a UNESCO World Heritage Site. Me-Dam-Me-Phi is celebrated."},
  {name:"Chirang",details:"Chirang is inhabited by various tribal communities with agriculture and forest resources. Bwisagu and Bihu are important festivals."},
  {name:"Darrang",details:"Darrang is an agricultural district with rich cultural heritage. Bihu is widely celebrated."},
  {name:"Dhemaji",details:"Dhemaji is a flood-prone district with strong tribal culture. Ali-Aye-Ligang is an important festival."},
  {name:"Dhubri",details:"Dhubri lies on the Brahmaputra River and is an important river port. Eid and Bihu are celebrated."},
  {name:"Dibrugarh",details:"Dibrugarh is known as the Tea City of India and is a major commercial, medical, and educational hub. Bihu is the main festival."},
  {name:"Dima Hasao",details:"Dima Hasao is a scenic hill district with Haflong as headquarters. Tribal culture is prominent and Bushu Dima is celebrated."},
  {name:"Goalpara",details:"Goalpara is historically important with sites like Sri Surya Pahar and scenic river views. Bihu is celebrated widely."},
  {name:"Golaghat",details:"Golaghat is an agricultural district and a gateway to Kaziranga National Park. Bihu is widely celebrated."},
  {name:"Hailakandi",details:"Hailakandi is known for wetlands, agriculture, and tea gardens. Bihu is celebrated by the people."},
  {name:"Hojai",details:"Hojai is a culturally diverse district and an important religious center. Eid and Bihu are celebrated."},
  {name:"Jorhat",details:"Jorhat is known as the Cultural Capital of Assam and is the gateway to Majuli. Bihu is widely celebrated."},
  {name:"Kamrup",details:"Kamrup district surrounds Guwahati and is known for sites like Chandubi Lake. Bihu is widely celebrated."},
  {name:"Kamrup Metropolitan",details:"Kamrup Metro includes Guwahati city, the gateway to Northeast India. Kamakhya Temple and Ambubachi Mela are famous."},
  {name:"Karbi Anglong",details:"Karbi Anglong is the largest district of Assam by area with rich forests and tribal heritage. Rongker festival is important."},
  {name:"Karimganj",details:"Karimganj shares a border with Bangladesh and has diverse cultural influences. Eid and Bihu are celebrated."},
  {name:"Kokrajhar",details:"Kokrajhar is the administrative headquarters of Bodoland Territorial Region with rich tribal culture. Bwisagu and Bihu are celebrated."},
  {name:"Lakhimpur",details:"Lakhimpur lies along the Subansiri River and is prone to floods. Agriculture dominates. Bihu is celebrated widely."},
  {name:"Majuli",details:"Majuli is the world’s largest river island and a major center of Vaishnav culture. Raas Mahotsav is famous."},
  {name:"Morigaon",details:"Morigaon is known for Pobitora Wildlife Sanctuary, home to one-horned rhinoceros. Bihu and Ali-Aye-Ligang are celebrated."},
  {name:"Nagaon",details:"Nagaon is associated with Srimanta Sankardeva and has Bordowa Than. Bihu is the major festival."},
  {name:"Nalbari",details:"Nalbari is known for temples and traditional Assamese culture. Raas Mahotsav and Bihu are celebrated."},
  {name:"Sivasagar",details:"Sivasagar was the capital of the Ahom Kingdom with monuments like Rang Ghar and Talatal Ghar. Me-Dam-Me-Phi is celebrated."},
  {name:"Sonitpur",details:"Sonitpur is famous for Tezpur town and mythological sites like Agnigarh. Bihu is widely celebrated."},
  {name:"South Salmara–Mankachar",details:"This district lies near the Bangladesh border and has riverine geography. Eid and Bihu are celebrated."},
  {name:"Tamulpur",details:"Tamulpur lies near the Bhutan border with strong cultural traditions. Bwisagu is widely celebrated."},
  {name:"Tinsukia",details:"Tinsukia is an industrial district with tea gardens, oil fields, and Dibru-Saikhowa National Park. Bihu is the main festival."},
  {name:"Udalguri",details:"Udalguri is known for Bornadi Wildlife Sanctuary and tribal population. Bwisagu is an important festival."},
  {name:"West Karbi Anglong",details:"West Karbi Anglong has forest reserves and tribal settlements. Rongker festival is celebrated."}
];

const container = document.getElementById("cards");
const count = document.getElementById("count");
const searchBox = document.getElementById("searchBox");

count.innerText = `Total Districts: ${districts.length}`;

districts.forEach(d=>{
  const card = document.createElement("div");
  card.className="card";
  card.innerHTML = `
    <h3>${d.name}</h3>
    <button onclick="openModal('${d.name}','${d.details}')">View Details</button>
    <button onclick="toggleFav('${d.name}')">❤️</button>
  `;
  container.appendChild(card);
});

searchBox.addEventListener("input",()=>{
  const value = searchBox.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card=>{
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block" : "none";
  });
});

function openModal(name,details){
  document.getElementById("dName").innerText=name;
  document.getElementById("dDetails").innerText=details;
  document.getElementById("modal").style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

function toggleFav(name){
  let favs = JSON.parse(localStorage.getItem("favs")) || [];
  favs.includes(name) ? favs=favs.filter(f=>f!==name) : favs.push(name);
  localStorage.setItem("favs",JSON.stringify(favs));
  alert(`${name} saved as favorite`);
}

document.getElementById("themeToggle").onclick=()=>{
  document.body.classList.toggle("light");
};

