titleRef = document.getElementById("title_input");
h1Ref = document.getElementById("main_title");
nounRef = document.getElementById("noun");
verbRef = document.getElementById("verb");
adjRef = document.getElementById("adjective");
formRef = document.querySelector(".form_container");

titleRef.addEventListener("change", event =>{
    event.preventDefault();
    titleText = titleRef.value;
    h1Ref.innerHTML = titleText;
});

subButton = document.getElementById("submit_button");

subButton.addEventListener("click", event =>{
    event.preventDefault();
    if (nounRef.value == "" || verbRef.value == "" || adjRef.value == ""){
        alert("Please fill in all fields")
    }
    else{
        let story = "Last night I ate a " + nounRef.value + ", and today I just had to " + verbRef.value + ". What a " + adjRef.value + " day!";
        formRef.style.visibility = "hidden";
        document.getElementById("story_result").innerHTML = story;
    }
})