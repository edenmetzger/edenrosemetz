/* About me message **/
var msg = "\nI'm a first-year Master's student at the University of Maryland studying Human-Computer Interaction, and I graduated from Johns Hopkins University in May of 2020 with a Bachelor's degree in Psychology. \n\nThe ever-growing importance of the intersection between the human psyche and technology is of great interest to me, and thus my professional interests are largely centered around UX/UI research. \n\nIn my free time, I like to play bass in a band with some friends and listen to music. Check out what I've been listening to recently!\n\n\n"
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}
updateMessage();

/* Spotify link **/
var ifrm = document.createElement('iframe');
ifrm.setAttribute('id', 'ifrm');
var el = document.getElementById('resume');
el.parentNode.insertBefore(ifrm, el);
ifrm.setAttribute('src', 'https://open.spotify.com/embed/playlist/2N7l08tsYStsBZifY7yh6M');
ifrm.setAttribute('width', '300');
ifrm.setAttribute('height', '380');
ifrm.setAttribute('frameborder', '0');
ifrm.setAttribute('allowtransparency', 'true');
ifrm.setAttribute('allow', 'encrypted-media');

/* Resume **/
var el = document.getElementById('resume2');
el.setAttribute('href', 'resume.pdf');

/* Photo **/
var el = document.getElementById('photo');