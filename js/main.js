const button = document.getElementsByClassName('dj-set__button');
const audio = document.getElementsByClassName('audio');

for (let i = 0; i <= button.length; i++) {
   button[i].onclick = () => {
      audio[i].play();
   }
}