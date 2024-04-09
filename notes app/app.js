const addBtn = document.querySelector("#btn");
const main = document.querySelector("section");
addBtn.addEventListener("click", () =>{
    addNote();
})

const saveNote = () =>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach((note) =>{
        data.push(note.value);
    })
    console.log(data);
    localStorage.setItem("notes", JSON.stringify(data));
}



const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="card">
        <header>
            <img src="diskette.png" class="save" alt="" height="20px">
            <img src="trash.png" class="delete" alt="" height="20px">
        </header>
        <textarea style="height:90%";width:cover>${text}</textarea>
    </div>`;
    note.querySelector(".delete").addEventListener("click", ()=>{
        note.remove();
        saveNote();
    })
    note.querySelector(".save").addEventListener("click", () =>{
        saveNote();
    })
    main.appendChild(note);
    saveNote();
}
(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        console.log(lsNotes)
        lsNotes.forEach((lsNote) =>{
            addNote(lsNote);
        })
        console.log(lsNotes.length)
        if(lsNotes.length === 0){
            localStorage.removeItem("notes")
        }else{
            addNote();
        }
    }
)()