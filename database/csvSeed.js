const fs = require('fs');
const csv = require('fast-csv')
const uuid = require('uuid/v4')
const wstream = fs.createWriteStream('dataUUID.csv');

const someDescriptors = 'Letterpress typewriter leggings you probably haven\'t heard of them selfies glossier blog bushwick air plant occupy farm-to-table. Gluten-free listicle man braid church-key franzen forage heirloom blue bottle four dollar toast gentrify fanny pack meditation. Fingerstache direct trade skateboard occupy lyft vegan iPhone. Raw denim dreamcatcher man braid asymmetrical mixtape art party. Everyday carry cardigan jean shorts coloring selfies glossier asymmetrical cornhole cray vaporware. Cloud bread enamel pin hexagon selvage pop-up kitsch unicorn listicle swag banh mi whatever. Biodiesel copper mug tousled chia put a bird on schlitz hashtag lomo direct trade wayfarers cardigan sartorial waistcoat. Next level hot chicken ennui small batch pok pok narwhal. Brooklyn edison bulb fingerstache unicorn tote bag pop-up ethical. VHS aesthetic synth irony paleo pitchfork bespoke street art deep v succulents green juice fixie selfies. Seitan cronut celiac franzen lyft biodiesel snackwave ethical synth microdosing. Blog snackwave shaman DIY pug vinyl brooklyn stumptown godard. Fingerstache la croix hella jean portland lyft stumptown. Microdosing etsy flexitarian paleo cred pok pok you probably haven\'t heard of them letterpress activated charcoal. Pabst cold-pressed ugh everyday carry cronut trust fund literally microdosing hammock leggings hot chicken. Put a bird on it prism green juice craft beer activated charcoal la croix food truck. Pok pok keffiyeh leggings chia prism man braid put a bird on it hell of. Put a bird on it bushwick fashion axe listicle chartreuse. Kombucha neutra four dollar toast mumblecore yuccie single-origin coffee vice cred jianbing pickled intelligentsia umami squid readymade. Ennui messenger bag tumeric activated charcoal jianbing celiac forage you probably haven\'t heard of them. Dreamcatcher post-ironic before they sold out humblebrag farm-to-table cloud bread pitchfork keytar VHS artisan. Meggings echo park kitsch poutine hashtag mustache kogi wayfarers blue bottle brunch bicycle rights actually. Tumeric keffiyeh single-origin coffee drinking vinegar polaroid semiotics austin activated charcoal vape forage. Hella normcore small 90\'s heirloom chicharrones drinking vinegar. Keffiyeh VHS brunch ugh bushwick street art lumbersexual gastropub typewriter franzen swag offal yuccie cliche meditation. Vexillologist gentrify echo park meditation disrupt taxidermy fashion axe neutra migas coloring book kickstarter art party vinyl pabst. Narwhal helvetica beard shabby chic raclette tumeric pabst semiotics microdosing. Raw denim irony farm-to-table next level unicorn paleo tousled banh mi. Street art crucifix quinoa slow-carb jean shorts subway tile you probably haven\'t heard of them lomo typewriter irony authentic.';

const s3BucketPath ='https://s3.us-east-2.amazonaws.com/data-house-photos/'

const getRandomText = () => {
  const splitText = someDescriptors.split('. ');
  return splitText[Math.floor(Math.random() * splitText.length)];
};

let string = "";
let newHead = "homeId,photoId,url,thumb_url,is_primary,description\n" 
wstream.write(newHead)
   
for(let i = 0; i < 10000001; i++){
  let currentId = i + 1;
  let is_primary = false;

  // random number for amount of pictures btwn 6 and 10
  let numPics = Math.floor(Math.random() * 5) + 6;

  for (let j = 0; j < numPics; j++){
    // primary is true for the first picture in each set
    // random number between 1 and 500 for a picture
    if(j === 0){
      is_primary = true;
    } else {
      is_primary = false;
    }
    let randomPic = Math.floor(Math.random() * 500) + 1;

    string += `${currentId},${uuid()},${randomPic},${randomPic},${is_primary},${getRandomText()}.\n`
  
  }


  if(i % 100000 === 0){
    console.log('hunnid g',i)
    wstream.write(string);
    string = '';
  }
}
