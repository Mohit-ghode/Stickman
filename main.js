https://teachablemachine.withgoogle.com/models/MscDakvnS/

function gotResults(error, results) {
if (error) {
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear -'+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
    (results[0].confidence*100).toFixed(2)+" %"; 
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('s1');
    img = document.getElementById('s2');
    img = document.getElementById('s4');
    img = document.getElementById('s5');

    if(results[0].label == "Clap") {
        img.src = 's1.gif',
        img.src = 's2.png',
        img.src = 's4.png',
        img.src = 's5.png',
} else if (results[0].label == "Bell") {
    img.src = 's1.png',
        img.src = 's2.gif',
        img.src = 's4.png',
        img.src = 's5.png',
} else if (results[0].label == "Bell") {
    img.src = 's1.png',
        img.src = 's2.png',
        img.src = 's4.gif',
        img.src = 's5.png',
} else{ 
    img.src = 's1.png',
    img.src = 's2.png',
    img.src = 's4.png',
    img.src = 's5.gif',

}

