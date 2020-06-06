var exotic = [];

function ExcoticImages (name, id, description,img) {
  this.name = name;
  this.id = id;
  this.description = description;
  this.img = img;
exotic.push(this);
}

var shootingStars = new ExcoticImages ('SHOOTING STARS','shootingStars', 'Illustrated by Freddrick Loftman , it symbolizes wish and dreams as he tried to capture shooting stars in his own way', 'image/1_miVo3wJfHxh-m5DZi147Sg.jpeg' )

var bloomingFlower = new ExcoticImages (' BLOOMING FLOWER', 'bloomingFlower','Illustrated by Kevin Choo , it symbolizes the spring and the warmth and joy it gives ', 'image/creative-graphic-design_192880.jpg')

var vacation = new ExcoticImages ('VACATION', 'vacation','Illustrated by Key Michael, it symbolizes the kinds of vacations we dream of', 'image/creative-graphic-design-ideas_192886.jpg')

var mail =  new ExcoticImages ('MAIL','mail', 'Illustrated by freddrick Loftman, it symbolizes the different ways we communicated as human beings', 'image/creative-unique-graphic-design-by-rik-oostenbroek (11).jpg')

var narasimha = new ExcoticImages ('NARASIMHA' ,'narasimha', 'Illustrated by Brandom Jim , it a depiction of what underworld beasts look like' , 'image/915a1169405467.5b7fe033d526e.jpg')

var dreams = new ExcoticImages ( ' DREAMS AND SPIRITS' ,'dreams' , 'Illustrated by Jim Jones , it symbolizes the wild dreams and imaginations we have' , 'image/download (1).jpeg')

var infinteMind = new ExcoticImages ('THE INFINITE MIND', 'infinteMind','Illustrated by Jim Jones , it symbolizes the thought process in humans and the complexity of the human brain', 'image/download.jpeg')

var newAge = new ExcoticImages ('NEW AGE' , 'newAge','Illustrated by Michael Johnson , it symbolizes the break of a new age in the history of mankind', 'image/download (2).jpeg')


ExcoticImages.prototype.render = function() { 
  let template = $('.images').html();
  let $section = $(`<div class="images"></div>`);
 
  $section.html(template);
  $section.find('h3').text(this.name);
  $section.find('img').attr('src',this.img);
  $section.find('img').attr('id',this.id);
  $section.find('p').text(this.description);
  $section.find('p').attr('id',this.id);
  $('p').hide()
  $('body').append($section);
};

yes = () => {
  for ( var i = 0 ; i < exotic.length ; i++) {
    exotic[i].render()
   
    }
    
  }
  

yes();


function des () {
 
  exotic.forEach(image => {
    $(`img[id=${image.id}]`).on('click' , () => {
      $(`p[id=${image.id}]`).show();
      $(`.images`).css('margin-bottom' , '20rem');
      $(`.images`).css('margin-top' , '10rem');

    })
    $('p').on('click', () => {
      console.log('why')
    $('p').hide()
    $(`.images`).css('margin-bottom' , '0rem');
    
    })
   
  })
}

des()
$('#h').hide();










$