"use strict";
const largeImg = document.getElementById("largeImg");
const thumbs = document.getElementById("thumbs");
thumbs.addEventListener("click", (ev)=>{
    ev.preventDefault();
    const target = ev.target;
    if (target.tagName === "IMG") {
        const link = target.closest("a");
        largeImg.src = link.href;
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
