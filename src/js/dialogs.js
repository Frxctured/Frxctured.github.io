// * Dialog manager

function createDialog(title, content, buttons) {

    const template = 
`<dialog open id="dia-scanline">
    <div id="dia-box">
        <div>
            <h1>${title}</h1>
            <p>${content}</p>
        </div>
        <div id="dia-buttons">
        </div>
    </div>
</dialog>`;

    document.body.insertAdjacentHTML("beforeend", template);
    const dialogWindow = document.getElementById("dia-scanline");
    const buttonContainer = dialogWindow.querySelector("#dia-buttons");

    buttons.forEach(({ text, polarity = "positive", buttonFunction }) => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.classList.add(`btn-${polarity}`);

        btn.addEventListener("click", () => {
            if (buttonFunction) buttonFunction();
            dialogWindow.close();
            dialogWindow.remove();
        });

        buttonContainer.appendChild(btn);
    });

    dialogWindow.showModal();
}

export { createDialog };
