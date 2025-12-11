let card = document.getElementsByClassName("card");

// edit card with confirmation and the took prompt from the user
let Edit = document.getElementsByClassName("btn1");

for(let i = 0; i< Edit.length; i++) {
    Edit[i].addEventListener('click', () => {
        let v = confirm("Are you sure you want Edit this card")
        if(v) {
            let title = document.getElementsByClassName("title");
            title[i].innerHTML = prompt("You can Edit only title! Enter title").toUpperCase();
            console.log("Edit successfull");
        }
        else{
            console.log("false hai ji")
        }

    })
}

// delete card with confirmation
let del = document.getElementsByClassName("btn2");

for(let i=0; i< del.length; i++) {
    del[i].addEventListener('click', () => {
        let v = confirm("Are you sure you want Delete this card")
        if(v) {
            card[i].classList.add("dis");
            alert("Card Deleted Successfully");
        }
        else{
            console.log("false hai ji")
        }

    })
}



