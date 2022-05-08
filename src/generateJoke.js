import axios from "axios";

function generateJoke () {
    //return "I don't like stairs. They're always up to something."

    const config = {
        headers : {
            Accept : 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(res =>{
        document.getElementById('joke').innerHTML = res.data.joke;
    })
};

export default generateJoke;