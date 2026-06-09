export function Webp() {
    function testWebp(callback) {
        let webP = new Image();

        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        }

        webP.src = "data/image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiJ";
    }

    testWebp(function support() {
        let className = support === true ? "webp" : "no-webp";
        
        document.documentElement.classList.add(className);
    });
}