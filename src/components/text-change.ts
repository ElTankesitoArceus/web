export {};
const words = ['Test1', 'Test2', 'Test3'];
const element: HTMLElement | null = document.getElementById('changing-hero');
var wordIndex = 0;

while (true) {
    await animate();
}

async function animate() {
    await delay(500);
    await writeIn(words[wordIndex], element);
    await delay(2500);
    await writeOut(words[wordIndex], element);
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
}

async function writeIn(word: string, element: HTMLElement | null ) {
    element!.style.opacity = '1'
    if (element === null) {
        console.error("Element null!!")
        return;
    } 
    let buffer = "";
    for (let i = 0; i < word.length; i++) {
        buffer = buffer + word.charAt(i);
        element!.innerText = buffer;
        await delay(100);
    }
}
async function writeOut(word: string, element: HTMLElement | null) {
    if (element === null) {
        console.log("Element null!!")
        return;
    } 
    let buffer = word;
    for (let i = buffer.length; i > 0; i--) {
        buffer = buffer.substring(0, i);
        element!.innerText = buffer;
        await delay(100);
    }
    element.style.opacity = '0'
    element!.innerText = word;
}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
