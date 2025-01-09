const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.querySelectorAll(".like").forEach(likeButton => {
  likeButton.addEventListener("click", () => {
    const heartGlyph = likeButton.querySelector(".like-glyph");
    if(heartGlyph.innerHTML=== EMPTY_HEART){
      mimicServerCall()
      .then(()=>{
        heartGlyph.innerHTML = FULL_HEART;
        likeButton.classList.add("activated-heart");
      })
      .catch((error) => {
        const modal =document.getElementById("modal");
        const modalMessage = document.getElementById("modal-message");
        modalMessage.innerHTML = error;
        modal.classList.remove("hidden");

        setTimeout(()=>{
          modal.classList.add("hidden");
          }, 3000);
          });
          } else {
            heartGlyph.innerHTML = EMPTY_HEART;
            likeButton.classList.remove("activated-heart");
          }
        });
      });
        
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
mimicServerCall()

