var accountOneUser = "nethan365b";
var accountOnePass = "adminacc";
var loginBlock = document.getElementById("loginBlock");
var body = document.getElementById("body");

// Database starts

var accountTwoUser = "altacc";
var accountTwoPass = "alternate";


function login() {


if (document.getElementById("user").value == accountOneUser &&  document.getElementById("pass").value == accountOnePass){

loginBlock.style.display = "none";
var greetings = document.createElement("h2");
greetings.innerHTML = "Welcome to your Oasis, " + accountOneUser + "!";
greetings.style.color = "white";
greetings.style.marginTop = "100px";

greetings.style.marginLeft= "50px";
greetings.style.fontFamily =  "futura";

body.appendChild(greetings);

var friendsImage = document.createElement("img")
friendsImage.style.width = "300px";
friendsImage.style.height = "300px";
friendsImage.style.borderRadius = "5px";
friendsImage.style.marginTop = "100px";
friendsImage.style.marginLeft = "300px";
friendsImage.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/oasisFriends.png";
friendsImage.className = "friendsImage";

body.appendChild(friendsImage);

var newsImage = document.createElement("img")
newsImage.style.width = "300px";
newsImage.style.height = "300px";
newsImage.style.borderRadius = "5px";
newsImage.style.marginTop = "-400px";
newsImage.style.marginLeft = "900px";
newsImage.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/oasisnewFeed.png";
newsImage.className = "friendsImage";

body.appendChild(newsImage);

var botImage = document.createElement("img")
botImage.style.width = "300px";
botImage.style.height = "300px";
botImage.style.borderRadius = "5px";
botImage.style.marginTop = "10px";
botImage.style.marginLeft = "590px";
botImage.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/oasisBot.jpg";
botImage.className = "friendsImage";

body.appendChild(botImage);

var credits = document.createElement("h5");
credits.style.fontFamily = "futura";
credits.style.color = "white";
credits.marginTop = "100px"
credits.style.innerHTML = "Coded and designed by Nethan Nerella."
body.appendChild(credits);

var copyright = document.createElement("h5");
copyright.innerHTML = "Copyright © The Oasis 2022";
copyright.style.color  = "white";
copyright.style.fontFamily = "futura";
copyright.style.textAlign = "center";
body.appendChild(copyright);

var logout = document.createElement("button");
logout.style.fontSize = "15";
logout.style.padding = "10px";
logout.style.backgroundColor = "white";
logout.style.fontFamily = "futura";
logout.innerHTML = "<< Logout";
logout.style.color = "black";
logout.style.marginLeft = "10px";
logout.style.marginTop = "10px";
logout.style.borderRadius = "5px";
logout.className = "otherProfileBu";
body.appendChild(logout);

logout.onclick = function(e){
  location.reload();
}

friendsImage.onclick = function(e){
  friendsImage.style.display = "none";
  newsImage.style.display = "none";
  botImage.style.display = "none";
  copyright.style.display = "none"

  greetings.style.display = "none";
  logout.style.display = "none";

  var back = document.createElement("button");
  back.style.fontSize = "15";
  back.style.padding = "10px";
  back.style.backgroundColor = "white";
  back.style.fontFamily = "futura";
  back.innerHTML = "<< Go back";
  back.style.color = "black";
  back.style.marginLeft = "10px";
  back.style.marginTop = "10px";
  back.style.borderRadius = "5px";
  back.className = "otherProfileBu";
  body.appendChild(back);


  var people = document.createElement("h1");
  people.innerHTML = "Other people";
  people.style.fontFamily = "futura";
  people.style.textAlign = "center";
  people.style.color = "white";
  body.appendChild(people);

  var searchForUsers = document.createElement("input");
  searchForUsers.type = "text";
  searchForUsers.style.fontSize = "10";
  searchForUsers.style.padding = "15px";
  searchForUsers.style.fontFamily = "futura";
  searchForUsers.className = "searchie";
  searchForUsers.placeholder = "Search for other users";
  searchForUsers.style.border = "white";
  searchForUsers.style.borderRadius = "5px";
  searchForUsers.style.marginLeft = "320px"
  searchForUsers.style.marginTop = "100px";
  searchForUsers.style.width = "800px";
  body.appendChild(searchForUsers);

  var otherProfileBu = document.createElement("button");
  otherProfileBu.style.fontSize = "15";
  otherProfileBu.style.padding = "10px";
  otherProfileBu.style.backgroundColor = "white";
  otherProfileBu.style.fontFamily = "futura";
  otherProfileBu.innerHTML = "Go to other user's profile";
  otherProfileBu.style.color = "black";
  otherProfileBu.style.marginLeft = "620px";
  otherProfileBu.style.marginTop = "30px";
  otherProfileBu.style.borderRadius = "5px";
  otherProfileBu.className = "otherProfileBu";
  body.appendChild(otherProfileBu);

  var profile = document.createElement("h2");
  profile.innerHTML = "Your profile";
  profile.style.fontFamily = "Lucida Grande";
  profile.style.marginTop = "200px";
  profile.style.textAlign = "center";
  profile.style.color = "white";
  body.appendChild(profile);

  var profileImage = document.createElement("img");
  profileImage.style.width = "300px";
  profileImage.style.height = "300px";
  profileImage.style.borderRadius = "5px";
  profileImage.style.marginTop = "50px";
  profileImage.style.marginLeft = "560px";
  profileImage.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/oasisProfilePicture1.png";
  body.appendChild(profileImage);

var userInf = document.createElement("div");
userInf.style.width = "800px"
userInf.style.height = "280px";
userInf.style.backgroundColor = "#ededed";
userInf.style.marginTop = "75px";
userInf.style.marginLeft = "320px";
body.appendChild(userInf);

var usernameInfo = document.createElement("h4");
usernameInfo.innerHTML = "Username: ";
usernameInfo.style.fontFamily = "Lucida Grande";
usernameInfo.style.marginLeft = "10px";
usernameInfo.style.marginTop = "20px";

var bioInfo = document.createElement("h4");
bioInfo.innerHTML = "Bio: ";
bioInfo.style.fontFamily = "Lucida Grande";
bioInfo.style.marginLeft = "10px";
bioInfo.style.marginTop = "10px";

var likesInfo = document.createElement("h4");
likesInfo.innerHTML = "Likes: ";
likesInfo.style.fontFamily = "Lucida Grande";
likesInfo.style.marginLeft = "10px";
likesInfo.style.marginTop = "10px";

var dislikesInfo = document.createElement("h4");
dislikesInfo.innerHTML = "Dislikes: ";
dislikesInfo.style.fontFamily = "Lucida Grande";
dislikesInfo.style.marginLeft = "10px";
dislikesInfo.style.marginTop = "10px";

var subjectInfo = document.createElement("h4");
subjectInfo.innerHTML = "Favourite subject: ";
subjectInfo.style.fontFamily = "Lucida Grande";
subjectInfo.style.marginLeft = "10px";
subjectInfo.style.marginTop = "10px";

var appInfo = document.createElement("h4");
appInfo.innerHTML = "Favourite apps: ";
appInfo.style.fontFamily = "Lucida Grande";
appInfo.style.marginLeft = "10px";
appInfo.style.marginTop = "10px";

userInf.appendChild(usernameInfo);
userInf.appendChild(bioInfo);
userInf.appendChild(likesInfo);
userInf.appendChild(dislikesInfo);
userInf.appendChild(subjectInfo);
userInf.appendChild(appInfo);

usernameInfo.innerHTML = usernameInfo.innerHTML + "nethan365b";
bioInfo.innerHTML = bioInfo.innerHTML + "Hi, I'm nethan! I like coding and designing websites!";
likesInfo.innerHTML = likesInfo.innerHTML + "Computers";
dislikesInfo.innerHTML = dislikesInfo.innerHTML + "Running";
subjectInfo.innerHTML = subjectInfo.innerHTML + "Math";
appInfo.innerHTML = appInfo.innerHTML + "Youtube, Discord, Whatsapp";

var copyrightOne = document.createElement("h5");
copyrightOne.innerHTML = "Copyright © The Oasis 2022";
copyrightOne.style.color  = "white";
copyrightOne.style.fontFamily = "futura";
copyrightOne.style.textAlign = "center";
body.appendChild(copyrightOne);

otherProfileBu.onclick = function(){
if (searchForUsers.value == accountOneUser){
  alert("You are requesting to see your own profile! You can check your own profile below.")
} else if (searchForUsers.value == accountTwoUser){
  alert("You are requesting to see " + accountTwoUser + "'s' profile! Here's their profile information!" + "\n" + "Username: " + accountTwoUser + "\n" + "Bio: Hi, I'm an alternate account! I'm here to help you test our site!" + "\n" + "Likes: Nil" + "\n" + "Dislikes: Nil" + "\n" + "Favourite subject: Nil" + "\n" + "Favourite apps: Nil");

} else if (searchForUsers.value == ""){
  alert("Please type a username to continue!")
}
}
back.onclick = function(e){
  friendsImage.style.display = "block";
  newsImage.style.display = "block";
  botImage.style.display = "block";
  copyright.style.display = "block"
  greetings.style.display = "block";
    logout.style.display = "block";

  back.style.display = "none";
  people.style.display = "none";
  searchForUsers.style.display = "none";
  otherProfileBu.style.display = "none";
  profile.style.display = "none";
  profileImage.style.display = "none";
  userInf.style.display = "none";
  copyrightOne.style.display = "none";

}
}

newsImage.onclick = function(){
  friendsImage.style.display = "none";
  newsImage.style.display = "none";
  botImage.style.display = "none";
  copyright.style.display = "none"
  greetings.style.display = "none";
  logout.style.display = "none";

  var back = document.createElement("button");
  back.style.fontSize = "15";
  back.style.padding = "10px";
  back.style.backgroundColor = "white";
  back.style.fontFamily = "futura";
  back.innerHTML = "<< Go back";

  back.style.color = "black";
  back.style.marginLeft = "10px";
  back.style.marginTop = "10px";
  back.style.borderRadius = "5px";
  back.className = "otherProfileBu";
  body.appendChild(back);

  var feedTitle = document.createElement("h1");

  feedTitle.innerHTML = "The Oasis Feed";
  feedTitle.style.fontFamily = "futura";
  feedTitle.style.color = "white";
  feedTitle.style.textAlign = "center";
  body.appendChild(feedTitle);


  var permFeed = document.createElement("h2");
  permFeed.innerHTML = "Permanent feed";
  permFeed.style.fontFamily = "Lucida Grande";
  permFeed.style.color = "white";
  permFeed.style.textAlign = "center";
  permFeed.style.marginTop = "150px";
  body.appendChild(permFeed);

//One message
  var messOne = document.createElement("div");
  messOne.style.width = "600px"
  messOne.style.height = "120px";
  messOne.style.backgroundColor = "#b59cd6";
  messOne.style.marginLeft = "440px";
  messOne.style.marginTop = "100px";
  messOne.style.border = "solid 4px white";
  messOne.style.borderRadius = "5px";
  body.appendChild(messOne)
  var messOneUser = document.createElement("h4");
  var textOne = "From: nethan365b";
  var printedTextOne = textOne.italics()
  messOneUser.innerHTML = printedTextOne;
  messOneUser.style.fontFamily = "Lucida Grande";
  messOneUser.style.color = "white";
  messOneUser.style.marginLeft = "10px";
  messOne.appendChild(messOneUser);
  var messOneText = document.createElement("h3");
  messOneText .innerHTML= "Message: Hey guys! Important messages by approved users will be shown here! Enjoy!";
  messOneText.style.fontFamily = "Lucida Grande";
  messOneText.style.marginLeft = "10px";
  messOne.appendChild(messOneText);


  var messTwo = document.createElement("div");
  messTwo.style.width = "600px"
  messTwo.style.height = "180px";
  messTwo.style.backgroundColor = "#b59cd6";
  messTwo.style.marginLeft = "440px";
  messTwo.style.marginTop = "50px";
  messTwo.style.border = "solid 4px white";
  messTwo.style.borderRadius = "5px";
  body.appendChild(messTwo)
  var messTwoUser = document.createElement("h4");
  var textTwo = "From: nethan365b";
  var printedTextTwo = textTwo.italics()
  messTwoUser.innerHTML = printedTextTwo;
  messTwoUser.style.fontFamily = "Lucida Grande";
  messTwoUser.style.color = "white";
  messTwoUser.style.marginLeft = "10px";
  messTwo.appendChild(messTwoUser);
  var messTwoText = document.createElement("h3");
  messTwoText .innerHTML= "Message: This website is a small social network project I built in a week. It has 3 main features. You can look at your profile and search for other users. You can read the Permanent feed or create your own! You can also talk to a basic robot I built! Enjoy!";
  messTwoText.style.fontFamily = "Lucida Grande";
  messTwoText.style.marginLeft = "10px";
  messTwo.appendChild(messTwoText);

  var yourFeed = document.createElement("h2");
  yourFeed.innerHTML = "Your feed";
  yourFeed.style.fontFamily = "Lucida Grande";
  yourFeed.style.color = "white";
  yourFeed.style.textAlign = "center";
  yourFeed.style.marginTop = "100px";
  body.appendChild(yourFeed);

  var yourFeedInput = document.createElement("textarea");
  yourFeedInput.style.fontFamily = "futura";
  yourFeedInput.placeholder = "Type your desired message here. (Messages will not save when you logout!)";
  yourFeedInput.style.fontSize = "15";
  yourFeedInput.style.padding = "20px";
  yourFeedInput.style.border = "solid 5px #d39cd6";
  yourFeedInput.style.marginTop = "50px";
  yourFeedInput.style.marginLeft = "400px";
  yourFeedInput.style.width = "600px";
  yourFeedInput.style.height = "100px";
  yourFeedInput.style.borderRadius = "5px";
  yourFeedInput.className = "feedInput";
  body.appendChild(yourFeedInput);

  var feedSubmit = document.createElement("button");
  feedSubmit.style.padding = "5px";
  feedSubmit.style.fontFamily = "Lucida Grande";
  feedSubmit.style.marginLeft = "50px";
  feedSubmit.innerHTML = "Send";
  feedSubmit.style.color = "white";
  feedSubmit.style.backgroundColor = "#4322a8";
  feedSubmit.className = "feedButton";
  feedSubmit.style.width = "100px"
  feedSubmit.style.height = "40px";
  feedSubmit.style.borderRadius = "5px";
  body.appendChild(feedSubmit);

  var copyrightOne = document.createElement("h5");
  copyrightOne.innerHTML = "Copyright © The Oasis 2022"
  copyrightOne.style.color  = "white";
  copyrightOne.style.fontFamily = "futura";
  copyrightOne.style.textAlign = "center";
  body.appendChild(copyrightOne);
 var backie = false;
  back.onclick = function(e){
    friendsImage.style.display = "block";
    newsImage.style.display = "block";
    botImage.style.display = "block";
    copyright.style.display = "block"
    greetings.style.display = "block";
    logout.style.display = "block";

    back.style.display = "none";
    feedTitle.style.display = "none";
    permFeed.style.display = "none";
    messOne.style.display = "none";
    messTwo.style.display = "none";
    yourFeed.style.display = "none";
    yourFeedInput.style.display = "none";
    feedSubmit.style.display = "none";
    copyrightOne.style.display = "none";


  }

  feedSubmit.onclick = function(){
    var food = document.createElement("div");

    if (yourFeedInput.value !== "" && backie == false){

      food.style.width = "600px"
      food.style.height = "180px";
      food.style.backgroundColor = "#d9aae3";
      food.style.marginLeft = "440px";
      food.style.marginTop = "50px";
      food.style.border = "solid 4px white";
      food.style.borderRadius = "5px";
      body.appendChild(food)
      var foodUser = document.createElement("h4");
      var textFood = "From: " + accountOneUser;
      var printedTextFood = textFood.italics()
      foodUser.innerHTML = printedTextFood;
      foodUser.style.fontFamily = "Lucida Grande";
      foodUser.style.color = "white";
      foodUser.style.marginLeft = "10px";
      food.appendChild(foodUser);
      var foodText = document.createElement("h3");
      foodText.innerHTML = "Message: " + yourFeedInput.value;
      foodText.style.fontFamily = "Lucida Grande";
      foodText.style.marginLeft = "10px";
      food.appendChild(foodText);
      yourFeedInput.value = "";
      alert("Successfully added a new message to your feed!")


    } else {
      alert("Please type a message before clicking send!")
    }
    }



  }

botImage.onclick = function(){
    window.open("file:///Users/nethan/Desktop/WebDev/TheOasis/BotFiles/index.html", '_blank');
}

} else if (document.getElementById("user").value == accountTwoUser &&  document.getElementById("pass").value == accountTwoPass){
  loginBlock.style.display = "none";
  var greetings = document.createElement("h2");
  greetings.innerHTML = "Welcome to your Oasis, " + accountTwoUser + "!";
  greetings.style.color = "white";
  greetings.style.marginTop = "100px";

  greetings.style.marginLeft= "50px";
  greetings.style.fontFamily =  "futura";

  body.appendChild(greetings);

  var friendsImage = document.createElement("img")
  friendsImage.style.width = "300px";
  friendsImage.style.height = "300px";
  friendsImage.style.borderRadius = "5px";
  friendsImage.style.marginTop = "100px";
  friendsImage.style.marginLeft = "300px";
  friendsImage.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/oasisFriends.png";
  friendsImage.className = "friendsImage";

  body.appendChild(friendsImage);

  var newsImage = document.createElement("img")
  newsImage.style.width = "300px";
  newsImage.style.height = "300px";
  newsImage.style.borderRadius = "5px";
  newsImage.style.marginTop = "-400px";
  newsImage.style.marginLeft = "900px";
  newsImage.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/oasisnewFeed.png";
  newsImage.className = "friendsImage";

  body.appendChild(newsImage);

  var botImage = document.createElement("img")
  botImage.style.width = "300px";
  botImage.style.height = "300px";
  botImage.style.borderRadius = "5px";
  botImage.style.marginTop = "10px";
  botImage.style.marginLeft = "590px";
  botImage.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/oasisBot.jpg";
  botImage.className = "friendsImage";

  body.appendChild(botImage);

  var credits = document.createElement("h5");
  credits.style.fontFamily = "futura";
  credits.style.color = "white";
  credits.marginTop = "100px"
  credits.style.innerHTML = "Coded and designed by Nethan Nerella."
  body.appendChild(credits);

  var copyright = document.createElement("h5");
  copyright.innerHTML = "Copyright © The Oasis 2022";
  copyright.style.color  = "white";
  copyright.style.fontFamily = "futura";
  copyright.style.textAlign = "center";
  body.appendChild(copyright);

  var logout = document.createElement("button");
  logout.style.fontSize = "15";
  logout.style.padding = "10px";
  logout.style.backgroundColor = "white";
  logout.style.fontFamily = "futura";
  logout.innerHTML = "<< Logout";
  logout.style.color = "black";
  logout.style.marginLeft = "10px";
  logout.style.marginTop = "10px";
  logout.style.borderRadius = "5px";
  logout.className = "otherProfileBu";
  body.appendChild(logout);

  logout.onclick = function(e){
    location.reload();
  }

  friendsImage.onclick = function(e){
    friendsImage.style.display = "none";
    newsImage.style.display = "none";
    botImage.style.display = "none";
    copyright.style.display = "none"

    greetings.style.display = "none";
    logout.style.display = "none";

    var back = document.createElement("button");
    back.style.fontSize = "15";
    back.style.padding = "10px";
    back.style.backgroundColor = "white";
    back.style.fontFamily = "futura";
    back.innerHTML = "<< Go back";
    back.style.color = "black";
    back.style.marginLeft = "10px";
    back.style.marginTop = "10px";
    back.style.borderRadius = "5px";
    back.className = "otherProfileBu";
    body.appendChild(back);


    var people = document.createElement("h1");
    people.innerHTML = "Other people";
    people.style.fontFamily = "futura";
    people.style.textAlign = "center";
    people.style.color = "white";
    body.appendChild(people);

    var searchForUsers = document.createElement("input");
    searchForUsers.type = "text";
    searchForUsers.style.fontSize = "10";
    searchForUsers.style.padding = "15px";
    searchForUsers.style.fontFamily = "futura";
    searchForUsers.className = "searchie";
    searchForUsers.placeholder = "Search for other users";
    searchForUsers.style.border = "white";
    searchForUsers.style.borderRadius = "5px";
    searchForUsers.style.marginLeft = "320px"
    searchForUsers.style.marginTop = "100px";
    searchForUsers.style.width = "800px";
    body.appendChild(searchForUsers);

    var otherProfileBu = document.createElement("button");
    otherProfileBu.style.fontSize = "15";
    otherProfileBu.style.padding = "10px";
    otherProfileBu.style.backgroundColor = "white";
    otherProfileBu.style.fontFamily = "futura";
    otherProfileBu.innerHTML = "Go to other user's profile";
    otherProfileBu.style.color = "black";
    otherProfileBu.style.marginLeft = "620px";
    otherProfileBu.style.marginTop = "30px";
    otherProfileBu.style.borderRadius = "5px";
    otherProfileBu.className = "otherProfileBu";
    body.appendChild(otherProfileBu);

    var profile = document.createElement("h2");
    profile.innerHTML = "Your profile";
    profile.style.fontFamily = "Lucida Grande";
    profile.style.marginTop = "200px";
    profile.style.textAlign = "center";
    profile.style.color = "white";
    body.appendChild(profile);

    var profileImage = document.createElement("img");
    profileImage.style.width = "300px";
    profileImage.style.height = "300px";
    profileImage.style.borderRadius = "5px";
    profileImage.style.marginTop = "50px";
    profileImage.style.marginLeft = "560px";
    profileImage.src = "file:///Users/nethan/Desktop/The%20Oasis%20Pictures/oasisProfilePicture1.png";
    body.appendChild(profileImage);

  var userInf = document.createElement("div");
  userInf.style.width = "800px"
  userInf.style.height = "280px";
  userInf.style.backgroundColor = "#ededed";
  userInf.style.marginTop = "75px";
  userInf.style.marginLeft = "320px";
  body.appendChild(userInf);

  var usernameInfo = document.createElement("h4");
  usernameInfo.innerHTML = "Username: ";
  usernameInfo.style.fontFamily = "Lucida Grande";
  usernameInfo.style.marginLeft = "10px";
  usernameInfo.style.marginTop = "20px";

  var bioInfo = document.createElement("h4");
  bioInfo.innerHTML = "Bio: ";
  bioInfo.style.fontFamily = "Lucida Grande";
  bioInfo.style.marginLeft = "10px";
  bioInfo.style.marginTop = "10px";

  var likesInfo = document.createElement("h4");
  likesInfo.innerHTML = "Likes: ";
  likesInfo.style.fontFamily = "Lucida Grande";
  likesInfo.style.marginLeft = "10px";
  likesInfo.style.marginTop = "10px";

  var dislikesInfo = document.createElement("h4");
  dislikesInfo.innerHTML = "Dislikes: ";
  dislikesInfo.style.fontFamily = "Lucida Grande";
  dislikesInfo.style.marginLeft = "10px";
  dislikesInfo.style.marginTop = "10px";

  var subjectInfo = document.createElement("h4");
  subjectInfo.innerHTML = "Favourite subject: ";
  subjectInfo.style.fontFamily = "Lucida Grande";
  subjectInfo.style.marginLeft = "10px";
  subjectInfo.style.marginTop = "10px";

  var appInfo = document.createElement("h4");
  appInfo.innerHTML = "Favourite apps: ";
  appInfo.style.fontFamily = "Lucida Grande";
  appInfo.style.marginLeft = "10px";
  appInfo.style.marginTop = "10px";

  userInf.appendChild(usernameInfo);
  userInf.appendChild(bioInfo);
  userInf.appendChild(likesInfo);
  userInf.appendChild(dislikesInfo);
  userInf.appendChild(subjectInfo);
  userInf.appendChild(appInfo);

  usernameInfo.innerHTML = usernameInfo.innerHTML + "altacc";
  bioInfo.innerHTML = bioInfo.innerHTML + "Hi, I'm an alternate account! I'm here to help you test our site!";
  likesInfo.innerHTML = likesInfo.innerHTML + "Nil";
  dislikesInfo.innerHTML = dislikesInfo.innerHTML + "Nil";
  subjectInfo.innerHTML = subjectInfo.innerHTML + "Nil";
  appInfo.innerHTML = appInfo.innerHTML + "Nil";

  var copyrightOne = document.createElement("h5");
  copyrightOne.innerHTML = "Copyright © The Oasis 2022";
  copyrightOne.style.color  = "white";
  copyrightOne.style.fontFamily = "futura";
  copyrightOne.style.textAlign = "center";
  body.appendChild(copyrightOne);

  otherProfileBu.onclick = function(){
  if (searchForUsers.value == accountTwoUser){
    alert("You are requesting to see your own profile! You can check your own profile below.")
  } else if (searchForUsers.value == accountOneUser){
    alert("You are requesting to see " + accountOneUser + "'s profile! Here's their profile information!" + "\n" + "Username: " + accountOneUser + "\n" + "Bio: Hi, I'm nethan! I like coding and designing websites!" + "\n" + "Likes: Computers" + "\n" + "Dislikes: Running" + "\n" + "Favourite subject: Math" + "\n" + "Favourite apps: Youtube, Discord, Whatsapp");

  } else if (searchForUsers.value == ""){
    alert("Please type a username to continue!")
  }
  }



  back.onclick = function(e){
    friendsImage.style.display = "block";
    newsImage.style.display = "block";
    botImage.style.display = "block";
    copyright.style.display = "block"
    greetings.style.display = "block";
      logout.style.display = "block";

    back.style.display = "none";
    people.style.display = "none";
    searchForUsers.style.display = "none";
    otherProfileBu.style.display = "none";
    profile.style.display = "none";
    profileImage.style.display = "none";
    userInf.style.display = "none";
    copyrightOne.style.display = "none";

  }


  }

  newsImage.onclick = function(){
    friendsImage.style.display = "none";
    newsImage.style.display = "none";
    botImage.style.display = "none";
    copyright.style.display = "none"
    greetings.style.display = "none";
    logout.style.display = "none";

    var back = document.createElement("button");
    back.style.fontSize = "15";
    back.style.padding = "10px";
    back.style.backgroundColor = "white";
    back.style.fontFamily = "futura";
    back.innerHTML = "<< Go back";

    back.style.color = "black";
    back.style.marginLeft = "10px";
    back.style.marginTop = "10px";
    back.style.borderRadius = "5px";
    back.className = "otherProfileBu";
    body.appendChild(back);

    var feedTitle = document.createElement("h1");

    feedTitle.innerHTML = "The Oasis Feed";
    feedTitle.style.fontFamily = "futura";
    feedTitle.style.color = "white";
    feedTitle.style.textAlign = "center";
    body.appendChild(feedTitle);


    var permFeed = document.createElement("h2");
    permFeed.innerHTML = "Permanent feed";
    permFeed.style.fontFamily = "Lucida Grande";
    permFeed.style.color = "white";
    permFeed.style.textAlign = "center";
    permFeed.style.marginTop = "150px";
    body.appendChild(permFeed);

  //One message
    var messOne = document.createElement("div");
    messOne.style.width = "600px"
    messOne.style.height = "120px";
    messOne.style.backgroundColor = "#b59cd6";
    messOne.style.marginLeft = "440px";
    messOne.style.marginTop = "100px";
    messOne.style.border = "solid 4px white";
    messOne.style.borderRadius = "5px";
    body.appendChild(messOne)
    var messOneUser = document.createElement("h4");
    var textOne = "From: nethan365b";
    var printedTextOne = textOne.italics()
    messOneUser.innerHTML = printedTextOne;
    messOneUser.style.fontFamily = "Lucida Grande";
    messOneUser.style.color = "white";
    messOneUser.style.marginLeft = "10px";
    messOne.appendChild(messOneUser);
    var messOneText = document.createElement("h3");
    messOneText .innerHTML= "Message: Hey guys! Important messages by approved users will be shown here! Enjoy!";
    messOneText.style.fontFamily = "Lucida Grande";
    messOneText.style.marginLeft = "10px";
    messOne.appendChild(messOneText);


    var messTwo = document.createElement("div");
    messTwo.style.width = "600px"
    messTwo.style.height = "180px";
    messTwo.style.backgroundColor = "#b59cd6";
    messTwo.style.marginLeft = "440px";
    messTwo.style.marginTop = "50px";
    messTwo.style.border = "solid 4px white";
    messTwo.style.borderRadius = "5px";
    body.appendChild(messTwo)
    var messTwoUser = document.createElement("h4");
    var textTwo = "From: nethan365b";
    var printedTextTwo = textTwo.italics()
    messTwoUser.innerHTML = printedTextTwo;
    messTwoUser.style.fontFamily = "Lucida Grande";
    messTwoUser.style.color = "white";
    messTwoUser.style.marginLeft = "10px";
    messTwo.appendChild(messTwoUser);
    var messTwoText = document.createElement("h3");
    messTwoText .innerHTML= "Message: This website is a small social network project I built in a week. It has 3 main features. You can look at your profile and search for other users. You can read the Permanent feed or create your own! You can also talk to a basic robot I built! Enjoy!";
    messTwoText.style.fontFamily = "Lucida Grande";
    messTwoText.style.marginLeft = "10px";
    messTwo.appendChild(messTwoText);

    var yourFeed = document.createElement("h2");
    yourFeed.innerHTML = "Your feed";
    yourFeed.style.fontFamily = "Lucida Grande";
    yourFeed.style.color = "white";
    yourFeed.style.textAlign = "center";
    yourFeed.style.marginTop = "100px";
    body.appendChild(yourFeed);

    var yourFeedInput = document.createElement("textarea");
    yourFeedInput.style.fontFamily = "futura";
    yourFeedInput.placeholder = "Type your desired message here. (Messages will not save when you logout!)";
    yourFeedInput.style.fontSize = "15";
    yourFeedInput.style.padding = "20px";
    yourFeedInput.style.border = "solid 5px #d39cd6";
    yourFeedInput.style.marginTop = "50px";
    yourFeedInput.style.marginLeft = "400px";
    yourFeedInput.style.width = "600px";
    yourFeedInput.style.height = "100px";
    yourFeedInput.style.borderRadius = "5px";
    yourFeedInput.className = "feedInput";
    body.appendChild(yourFeedInput);

    var feedSubmit = document.createElement("button");
    feedSubmit.style.padding = "5px";
    feedSubmit.style.fontFamily = "Lucida Grande";
    feedSubmit.style.marginLeft = "50px";
    feedSubmit.innerHTML = "Send";
    feedSubmit.style.color = "white";
    feedSubmit.style.backgroundColor = "#4322a8";
    feedSubmit.className = "feedButton";
    feedSubmit.style.width = "100px"
    feedSubmit.style.height = "40px";
    feedSubmit.style.borderRadius = "5px";
    body.appendChild(feedSubmit);

    var copyrightOne = document.createElement("h5");
    copyrightOne.innerHTML = "Copyright © The Oasis 2022"
    copyrightOne.style.color  = "white";
    copyrightOne.style.fontFamily = "futura";
    copyrightOne.style.textAlign = "center";
    body.appendChild(copyrightOne);
   var backie = false;
    back.onclick = function(e){
      friendsImage.style.display = "block";
      newsImage.style.display = "block";
      botImage.style.display = "block";
      copyright.style.display = "block"
      greetings.style.display = "block";
      logout.style.display = "block";

      back.style.display = "none";
      feedTitle.style.display = "none";
      permFeed.style.display = "none";
      messOne.style.display = "none";
      messTwo.style.display = "none";
      yourFeed.style.display = "none";
      yourFeedInput.style.display = "none";
      feedSubmit.style.display = "none";
      copyrightOne.style.display = "none";


    }

    feedSubmit.onclick = function(){
      var food = document.createElement("div");

      if (yourFeedInput.value !== "" && backie == false){

        food.style.width = "600px"
        food.style.height = "180px";
        food.style.backgroundColor = "#d9aae3";
        food.style.marginLeft = "440px";
        food.style.marginTop = "50px";
        food.style.border = "solid 4px white";
        food.style.borderRadius = "5px";
        body.appendChild(food)
        var foodUser = document.createElement("h4");
        var textFood = "From: " + accountTwoUser;
        var printedTextFood = textFood.italics()
        foodUser.innerHTML = printedTextFood;
        foodUser.style.fontFamily = "Lucida Grande";
        foodUser.style.color = "white";
        foodUser.style.marginLeft = "10px";
        food.appendChild(foodUser);
        var foodText = document.createElement("h3");
        foodText.innerHTML = "Message: " + yourFeedInput.value;
        foodText.style.fontFamily = "Lucida Grande";
        foodText.style.marginLeft = "10px";
        food.appendChild(foodText);
        yourFeedInput.value = "";
        alert("Successfully added a new message to your feed!")


      } else {
        alert("Please type a message before clicking send!")
      }
      }



    }

  botImage.onclick = function(){
  window.open("file:///Users/nethan/Desktop/WebDev/TheOasis/BotFiles/index.html", '_blank');
  }
} else {
    alert("Your username or password is incorrect! Please try again.")
}


}
