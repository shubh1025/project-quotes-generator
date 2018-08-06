var quotes =
    [
        'When people start to reflect on decisions they\'re trying to make, they usually change their mind - it requires a lot of courage to take certain steps. - ',
        'Everything a person felt, experienced, and saw dies with them, like tears in rain.',
        'Life sometimes separates people so that they can realize how much they mean to each other.',
        'You suffer from the youthful vice of thinking that you\'re cleverer than everyone else.',
        'They have the power. And the power doesn\'t negotiate with anyone, only with itself.',
        'The legend, however, is more important than reality.',
        'I shall be telling this with a sigh, Somewhere ages and ages hence : two roads diverged in a wood, and I, took the one less travelled by, and that has made all the difference. ',
        'The celebrity syndrome. When people forget who they are and start to believe what other people say about them.',
        'People are never satisfied. If they have a little, they want more. Once they have more, they wish they could be happy with little, but are incapable of making the slightest effort in that direction.' ,
        'The name or names. He had killed before -- with weapons and the blessing of his country. He didn\'t know how many people he had killed, but he had rarely seen their faces and certainly never asked their names. Knowing someone\'s name meant knowing that the other person was a human being and not "the enemy". Knowing someone\'s name transformed him into a unique and special individual, with a past and a future, with ancestors and possibly descendants, a person who has known triumphs and failures.'

    ]


var b = document.getElementById('quotes_button');
b.addEventListener('click', show);

function show() {
    var x = Math.floor(Math.random() * (quotes.length));
    var elem = document.getElementById('quote_text_area');
    if(quotes[x].length >= 50) {
        // elem.style.height = "auto";
        elem.style.fontSize = "180%";

    } else {
        elem.style.height = "200px";

    }

    elem.textContent = quotes[x];
};

