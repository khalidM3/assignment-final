var exoticImages = [];

function ExcoticImage(name, id, description, img) {
  this.name = name;
  this.id = id;
  this.description = description;
  this.img = img;
  exoticImages.push(this);
}

var shootingStars = new ExcoticImage('SHOOTING STARS', 'shootingStars', 'Illustrated by Freddrick Loftman , it symbolizes wish and dreams as he tried to capture shooting stars in his own way', 'image/1_miVo3wJfHxh-m5DZi147Sg.jpeg')
var bloomingFlower = new ExcoticImage(' BLOOMING FLOWER', 'bloomingFlower', 'Illustrated by Kevin Choo , it symbolizes the spring and the warmth and joy it gives ', 'image/creative-graphic-design_192880.jpg')
var vacation = new ExcoticImage('VACATION', 'vacation', 'Illustrated by Key Michael, it symbolizes the kinds of vacations we dream of', 'image/creative-graphic-design-ideas_192886.jpg')
var mail = new ExcoticImage('MAIL', 'mail', 'Illustrated by freddrick Loftman, it symbolizes the different ways we communicated as human beings', 'image/creative-unique-graphic-design-by-rik-oostenbroek (11).jpg')
var narasimha = new ExcoticImage('NARASIMHA', 'narasimha', 'Illustrated by Brandom Jim , it a depiction of what underworld beasts look like', 'image/915a1169405467.5b7fe033d526e.jpg')
var dreams = new ExcoticImage(' DREAMS AND SPIRITS', 'dreams', 'Illustrated by Jim Jones , it symbolizes the wild dreams and imaginations we have', 'image/download (1).jpeg')
var infinteMind = new ExcoticImage('THE INFINITE MIND', 'infinteMind', 'Illustrated by Jim Jones , it symbolizes the thought process in humans and the complexity of the human brain', 'image/download.jpeg')
var newAge = new ExcoticImage('NEW AGE', 'newAge', 'Illustrated by Michael Johnson , it symbolizes the break of a new age in the history of mankind', 'image/download (2).jpeg')


ExcoticImage.prototype.render = function () {
  let template = $('#template').html();
  let $section = $(`<div class="images"></div>`);

  $section.html(template);
  $section.find('h3').text(this.name);
  $section.find('img').attr('src', this.img);
  $section.find('img').attr('id', this.id);
  $section.find('p').text(this.description);
  $section.find('p').attr('id', this.id);
  $('p').hide()
  $('body').append($section);
};


exoticImages.forEach( exoticImage => exoticImage.render())

exoticImages.forEach(image => {
  $(`img[id=${image.id}]`).on('click', () => {
    $(`p[id=${image.id}]`).show();
    $(`.images`).css('margin-bottom', '30px');
  })
  $('p').on('click', () => {
    $('p').hide()
    $(`.images`).css('margin-bottom', '0px');
  })
})


$('#template').hide();