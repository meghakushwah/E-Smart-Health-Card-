// CONTACTFORM DATABASE STARTS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAfWsWeztlkKDkL3jaX_0-Gk6bVGr0qMsc",
    authDomain: "healthapp-c3716.firebaseapp.com",
    databaseURL: "https://healthapp-c3716-default-rtdb.firebaseio.com",
    projectId: "healthapp-c3716",
    storageBucket: "healthapp-c3716.appspot.com",
    messagingSenderId: "600575873151",
    appId: "1:600575873151:web:00433074d72bb10c8d6f4a"
};

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e){

    var name = getElementVal('contact-name');
    var phone = getElementVal('contact-phone');
    var message = getElementVal('contact-message');

    console.log(name, phone, message);

    saveMessages(name, phone, message);

    document.getElementById('success').style.display = 'block';

    setTimeout(() =>{
        document.getElementById('success').style.display = 'none';
    },3000);

    document.getElementById('contact-form').reset();
    e.preventDefault();

}

const saveMessages = (name, phone, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        phone: phone,
        message: message
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value ;
}
// CONTACT-FORM DATABASE ENDS HERE 

const user = [
    {
        name:'Sanjana',
        age:'19',
        gender:'female',
        DOB: '1/1/2002',
        BG: 'O+',
        email: "sanjana@gmail.com", 
        pass: "123",
        image:'https://randomuser.me/api/portraits/women/82.jpg'
    }, 
    {
        name:'Saiswari',
        age:'25',
        gender:'female',
        DOB:'1/1/1997',
        BG:'AB+',
        email: "saiswari@gmail.com", 
        pass: "456",
        image:'https://randomuser.me/api/portraits/women/85.jpg'
    },
    {
        name:"Dinesh",
        age:"15",
        gender:"male",
        DOB:"6/7/2007",
        BG:"B+",
        email:"dinesh@gmail.com",
        pass:"789",
        image:'https://randomuser.me/api/portraits/women/85.jpg'
    }
]
const email = document.getElementById('email')
const password = document.getElementById('password')
const loginButton = document.getElementById('login')

loginButton.addEventListener("click", login)

function login(e){
    user.map((u) => {
        if(u.email === email.value && u.pass === password.value){
            document.body.innerHTML = `
            <div class="container">
                <h3>Welcome ${u.name},</h3>
                <h4 class="text-secondary">Dashboard</h4>
                <a href="index.html"><button class="btn-outline-warning">Logout</button><br><br></a>
             </div>
            <div class="container" style="background-color: rgb(245, 245, 242);"><br>
            
                <div class="inner6">
    
                    <h2 class="text-center mt-4 p-2 bg-primary" style="color: white; font-family: 'Poppins';">Health Card</h2>
                    <div class="inner5 float-left" style="width:50%">
                        <h4 class="text-secondary ml-4">Name: &nbsp; &nbsp; <span class="text-primary">${u.name}</span></h4>
                        <h4 class="text-secondary ml-4">Age: &nbsp; &nbsp; <span class="text-primary">${u.age}</span> </h4>
                        <h4 class="text-secondary ml-4">Gender: &nbsp; &nbsp; <span class="text-primary">${u.gender}</span></h4>
                        <h4 class="text-secondary ml-4">Date of Birth: <span class="text-primary">${u.DOB}</span></h4>
                        <h4 class="text-secondary ml-4">Blood Group: &nbsp; <span class="text-primary">${u.BG}</span></h4>
                    </div><br>
                <div class="float-right mr-5" style = "width:50%">
                    <img style="height: 180px;" src="${u.image}" alt="">
                </div><br><br><hr><br>
                <div class="container">
                    <h2 class="btn btn-outline-primary" style="color: black; font-size:21px;">Diagnostic History</h2><br>
                    <ol>
                        <li>Typhoid - 20 September 2022</li>
                        <li>Throat Infection - 26 August 2022</li>
                        <li>Common Cold - 16 July 2022</li>
                    </ol>
                    
                </div><br>
                <hr>
    
                </div>
            </div>
            `;
            document.getElementById('user-login').reset();
            return ;

        }else{
            document.getElementById('login-alert').style.display = 'block';
        }
    })

    

    e.preventDefault();
}

