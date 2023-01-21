const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('click', function() {
    this.classList.toggle('open');
    const data = JSON.parse(localStorage.getItem('5'));
let text = "<UL class='zxc'>";
for (const key in data) {
    text += `<LI>${key}: ${data[key]}</LI>`;
}
text += `</UL>`;
console.log(text)
this.innerHTML = text;
  });
});