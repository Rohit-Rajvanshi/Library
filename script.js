const showDialog=document.querySelector(".showdlg")
const bookDialog=document.getElementById("book-dialog")
const confirmBtn=document.getElementById("confirmBtn")
const cancelBtn=document.querySelector(".cancel-Btn")
const contentSec=document.querySelector(".content")


showDialog.addEventListener("click",()=>{
    bookDialog.showModal()
});

cancelBtn.addEventListener("click",(event)=>{
    document.querySelector(".form").reset()
    bookDialog.close();
    event.preventDefault(); 
})


const myLibrary = [];


function Book(title,author,pages,status) {
    this.title=title;
    this.author="~~"+author+"~~";
    this.pages=pages+"pages";
    this.status=status;
}

function addBookToLibrary() {  
    confirmBtn.addEventListener("click", () => {
        const fTitle= document.querySelector(".f-text").value
        const fAuthor=document.querySelector(".f-author").value
        const fPage=document.querySelector(".f-page").value;
        const fCheck=document.getElementById("checkbox").checked
        console.log(fCheck)
        let  fStatus=""
       if(fCheck===true){
        fStatus="Completed"
       }
       else{
        fStatus="Pending"
       }
        const newBook = new Book(fTitle,fAuthor,fPage,fStatus);
        
        myLibrary.push(newBook)

        if(fTitle==="" || fAuthor==="" || fPage===""){
            return;
        }
        else{
        const bookTile= document.createElement("div")
        bookTile.classList.add("book-tile")
        contentSec.appendChild(bookTile)
        
        titleElement=document.createElement("h1");
        authorElement=document.createElement("h2"); 
        pagesElement=document.createElement("h2");
        statusElement=document.createElement("button");
        removeElement=document.createElement("button");
       
       
        titleElement.textContent = (myLibrary[myLibrary.length-1].title)
        authorElement.textContent = (myLibrary[myLibrary.length-1].author)
        pagesElement.textContent = (myLibrary[myLibrary.length-1].pages)
        statusElement.textContent=(myLibrary[myLibrary.length-1].status)
        removeElement.textContent="Remove";
        
        
        bookTile.appendChild(titleElement);
        bookTile.appendChild(authorElement);
        bookTile.appendChild(pagesElement);
        bookTile.appendChild(statusElement);
        bookTile.appendChild(removeElement);

        bookDialog.close();
        }
    });
}

showDialog.addEventListener("click",()=>{
    document.querySelector(".form").reset()
})


addBookToLibrary();


