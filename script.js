const message = `It's been a while since we last talked, how are you? I know you are doing great, breakouts will never pull your beautifulness, so don't worry about it, you are still beautiful as like as I first saw you.  I'm sorry for whatever happened between us, I thought forcing myself to erase you will get me peace and will let you choose what you really love without pressure— I can't, I can't see somebody else holding your hand and I hate to think that somebody will get that beautiful smile, get to hear a lot of rants from you, Please, be with me instead, Jona. it made me realize that no matter what I do, there's always you on me, not a part but a dozen parts of me still choosing to love you. I'm sorry, but I think I couldn't erase you from myself.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
