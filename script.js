const districts = [
{
name:"Baksa",
details:"Baksa district lies in the Bodoland Territorial Region near the Bhutan border. It has forest areas connected to Manas National Park and depends mainly on agriculture. Festivals include Bwisagu and Bihu."
},
{
name:"Bajali",
details:"Bajali is a newly formed district with Pathsala as its cultural center. It is known for education, literature, and traditional Assamese lifestyle. Major festivals are Bihu and Nam-Kirtan."
},
{
name:"Barpeta",
details:"Barpeta is a major religious district famous for Barpeta Satra founded by Srimanta Sankardeva. It is an important center of Vaishnav culture. Raas Mahotsav and Bihu are widely celebrated."
},
{
name:"Bongaigaon",
details:"Bongaigaon is an industrial and commercial district. It has historical rock-cut caves and Bagheswari Temple. The district celebrates Bihu and Durga Puja."
},
{
name:"Chirang",
details:"Chirang district is inhabited by various tribal communities. It has forest land and agricultural areas. Bwisagu and Bihu are major festivals."
},
{
name:"Dhubri",
details:"Dhubri lies on the bank of the Brahmaputra River and is an important river port. It has a diverse population and celebrates Eid and Bihu."
},
{
name:"Goalpara",
details:"Goalpara is historically important with ancient sites like Sri Surya Pahar. The district is known for scenic river views and agriculture. Bihu is widely celebrated."
},
{
name:"Kokrajhar",
details:"Kokrajhar is the administrative headquarters of Bodoland Territorial Region. It has rich tribal culture and wildlife sanctuaries. Festivals include Bwisagu and Bihu."
},
{
name:"Nalbari",
details:"Nalbari is famous for temples and traditional Assamese culture. Agriculture is the main occupation. Raas Mahotsav and Bihu are important festivals."
},
{
name:"South Salmara–Mankachar",
details:"This district is located near the Bangladesh border and is known for riverine geography and farming. Eid and Bihu are celebrated here."
},
{
name:"Hojai",
details:"Hojai is a culturally diverse district and a major religious center for Muslims in Assam. Poa Mecca is a famous shrine. Eid and Bihu are celebrated."
},
{
name:"Morigaon",
details:"Morigaon district is known for Pobitora Wildlife Sanctuary which shelters one-horned rhinoceros. Agriculture and fishing are important. Bihu and Ali-Aye-Ligang are celebrated."
},
{
name:"Nagaon",
details:"Nagaon is associated with Srimanta Sankardeva and has important educational institutions. Bordowa Than is a major attraction. Bihu is the main festival."
},
{
name:"Biswanath",
details:"Biswanath lies on the north bank of the Brahmaputra River. It is known for river ghats and scenic beauty. Bihu is widely celebrated."
},
{
name:"Charaideo",
details:"Charaideo was the first capital of the Ahom Kingdom. The district is famous for Ahom Maidams, now a UNESCO World Heritage Site. Me-Dam-Me-Phi is celebrated."
},
{
name:"Dibrugarh",
details:"Dibrugarh is known as the Tea City of India. It is a major commercial, medical, and educational hub. Bihu is the main festival."
},
{
name:"Golaghat",
details:"Golaghat is an agricultural district and a gateway to Kaziranga National Park. It celebrates Bihu and has rich biodiversity."
},
{
name:"Jorhat",
details:"Jorhat is called the Cultural Capital of Assam. It hosts research institutes and is the gateway to Majuli. Bihu is the main festival."
},
{
name:"Lakhimpur",
details:"Lakhimpur lies along the Subansiri River and is prone to floods. Agriculture dominates the economy. Bihu is celebrated widely."
},
{
name:"Majuli",
details:"Majuli is the world’s largest river island and a center of Vaishnav culture. It is famous for Satras and Raas Mahotsav."
},
{
name:"Sivasagar",
details:"Sivasagar was the capital of the Ahom Kingdom. It has monuments like Rang Ghar and Talatal Ghar. Me-Dam-Me-Phi is celebrated."
},
{
name:"Tinsukia",
details:"Tinsukia is an industrial district with oil fields, tea gardens, and Dibru-Saikhowa National Park. Bihu is the major festival."
},
{
name:"Dhemaji",
details:"Dhemaji is flood-prone but culturally rich with tribal communities. Ali-Aye-Ligang is an important festival."
},
{
name:"Sonitpur",
details:"Sonitpur is famous for Tezpur town and mythological sites like Agnigarh. Bihu is widely celebrated."
},
{
name:"Cachar",
details:"Cachar is the largest district in Barak Valley with Silchar as headquarters. Durga Puja and Bihu are major festivals."
},
{
name:"Hailakandi",
details:"Hailakandi is known for wetlands, agriculture, and tea gardens. Bihu is celebrated by the people."
},
{
name:"Karimganj",
details:"Karimganj shares a border with Bangladesh and has diverse culture. Eid and Bihu are celebrated."
},
{
name:"Dima Hasao",
details:"Dima Hasao is a scenic hill district with Haflong as headquarters. Tribal culture is prominent and Bushu Dima is celebrated."
},
{
name:"Karbi Anglong",
details:"Karbi Anglong is the largest district of Assam by area. It is rich in forests and tribal heritage. Rongker festival is important."
},
{
name:"West Karbi Anglong",
details:"West Karbi Anglong has forest reserves and tribal settlements. Rongker is the major festival."
},
{
name:"Tamulpur",
details:"Tamulpur lies near the Bhutan border and has strong cultural traditions. Bwisagu is widely celebrated."
},
{
name:"Udalguri",
details:"Udalguri is known for Bornadi Wildlife Sanctuary and tribal population. Bwisagu is an important festival."
},
{
name:"Kamrup (Rural)",
details:"Kamrup Rural surrounds Guwahati and has natural sites like Chandubi Lake. Bihu is widely celebrated."
},
{
name:"Kamrup Metropolitan",
details:"Kamrup Metro includes Guwahati city, the gateway to Northeast India. Kamakhya Temple and Ambubachi Mela are famous."
}
];

const container = document.getElementById("cards");

districts.forEach(d=>{
  const card = document.createElement("div");
  card.className="card";
  card.innerHTML=`<h3>${d.name}</h3>
                  <button onclick="openModal('${d.name}','${d.details}')">View Details</button>`;
  container.appendChild(card);
});

function openModal(name,details){
  document.getElementById("dName").innerText=name;
  document.getElementById("dDetails").innerText=details;
  document.getElementById("modal").style.display="block";
}
function closeModal(){
  document.getElementById("modal").style.display="none";
}
