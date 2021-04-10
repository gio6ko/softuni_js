function extractText() {
    const liEl = document.querySelectorAll('#items li');
    const textarea = document.getElementById('result');


    const elementText = Array.from(liEl).map(e => e.textContent);
    textarea.value = elementText.join('\n');
}