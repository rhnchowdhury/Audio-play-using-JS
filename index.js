for (var i = 0; i < 4; i++) {
    document.querySelectorAll('.btn')[i].addEventListener('click', function () {
        var text = this.innerHTML;
        // display(text)
        // addAnimation(text)

        // Audio play
        switch (text) {
            case 'A':
                var audio = new Audio('/audios/A.wav');
                audio.play();
                break;
            case 'B':
                var audio = new Audio('/audios/B.wav');
                audio.play();
                break;
            case 'C':
                var audio = new Audio('/audios/c.mp3');
                audio.play();
                break;
            case 'D':
                var audio = new Audio('/audios/d.mp3');
                audio.play();
                break;
        };

        // Animation
        var selectedButton = document.querySelector("." + text);
        console.log(selectedButton)
        selectedButton.classList.add("anim");

        setTimeout(function () {
            selectedButton.classList.remove("anim");
            heading.classList.remove('text-style');
        }, 500);

        // Text color
        var heading = document.querySelector('h1');
        heading.classList.add('text-style');
    });
};

// using function

// function display(text) {
//     switch (text) {
//         case 'A':
//             var audio = new Audio('/audios/a.mp3');
//             audio.play();
//             break;
//         case 'B':
//             var audio = new Audio('/audios/b.mp3');
//             audio.play();
//             break;
//         case 'C':
//             var audio = new Audio('/audios/c.mp3');
//             audio.play();
//             break;
//         case 'D':
//             var audio = new Audio('/audios/d.mp3');
//             audio.play();
//             break;
//     };
// }

// function addAnimation(text) {
//     var selectedButton = document.querySelector("." + text);
//     console.log(selectedButton)
//     selectedButton.classList.add("anim");
// };
