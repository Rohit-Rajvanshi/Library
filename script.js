const showDialog=document.querySelector(".showdlg")
const bookDialog=document.getElementById("book-dialog")
const confirmBtn=document.getElementById("confirmBtn")
showDialog.addEventListener("click",()=>{
    bookDialog.showModal()
});


confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    bookDialog.close()
});
