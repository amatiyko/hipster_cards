var buttons = document.getElementsByClassName('filter-btn');
var cards = document.getElementsByClassName('card-box');

for ( var b =0; b < buttons.length; b++) {
        buttons[b].addEventListener("click", function () {
            var currentActive = document.querySelector('.active');
            currentActive.classList.remove('active');
            this.classList.toggle('active');

            if (this.id == 'all') {
                for (var c=0; c < cards.length; c++) {
                    cards[c].style.display = 'block';
                }
            } else {
                var elements = document.getElementsByClassName(this.id);
                console.log(elements);
                for (var c=0; c < cards.length; c++) {
                   cards[c].style.display = 'none';
                }
                for (var e=0; e < elements.length; e++) {
                    elements[e].style.display = 'block'
                }
            }
        }, false);
}



