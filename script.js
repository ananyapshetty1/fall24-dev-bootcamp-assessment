function showAnswer(answer) {
    let characters;
    let image;

    if (answer === "movie") {
        characters = '10 Things I Hate About You';
        image = './movie.jpg';
    } else if (answer === "icecream") {
        characters = 'mango';
        image = './icecream.jpg';
    } else {
        characters = 'light pink';
        image = './lightpink.jpg';
    }

    const answerBox = document.getElementById('answerBox');
    answerBox.innerHTML = `<h1>${characters}!</h1>
                            <img src="${image}" alt="${characters}" style="width: 200px; height: 200px; border-radius: 20px;">`;
}
