const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li") 

const requirements = [
    {regex: /.{8,}/ , index: 0},// 8  characters long
    {regex: /\d/ , index: 1 }, // contain digits
    {regex: /[a-z]/ , index: 2}, // lowercase
    {regex: /[!@#$%^&*]/ , index: 3 }, // special characters
    {regex: /[A-Z]/ , index: 4} // uppercase
]

eyeIcon.addEventListener("click",()=>{
    // Toggle the password input type between text and password
    passwordInput.type = passwordInput.type === "password"? "text" : "password"

    // update icon based on input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "text"? "-slash": ""}`


})

passwordInput.addEventListener("keyup", (e)=>{
    const inputValue = e.target.value
    console.log(inputValue);
    requirements.forEach(requirement => {
        //check if the password matches the Regex
        const isValid = requirement.regex.test(inputValue)
        const requiredItem = requirementList[requirement.index]

        if (isValid) {
            requiredItem.firstElementChild.className = "fa-solid fa-check"
            requiredItem.classList.add("valid")
        } else{
            requiredItem.firstElementChild.className = "fa-solid fa-circle"
            requiredItem.classList.remove("valid")

        }
    })
})