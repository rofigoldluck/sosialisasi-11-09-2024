/**
 * untuk membuat link bisa dicopy
 */

const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault(); // ga ngebuka tab baru
        console.log("action : ", action.parentElement);
        const url = action.parentElement.getAttribute("href");
        console.log("url : ", url);
        navigator.clipboard.writeText(url);

        /**
         * untuk memunculkan toast notifikasi link disalin
         */

        document.getElementById("toast").innerHTML = `
            <div class="toast-container">
                <p>✅ Link berhasil disalin!</p>
            </div>
        `;

        /**
         * menghilangkan toast notifikasi
         */

        setTimeout(() => {
            document.querySelector("#toast .toast-container").classList.add(".toast-gone");
        }, 300);

        setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
        }, 2000);
        // alert("link bershasil disalin");
    });
});

/**
 * mengganti icon sosmed saat hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
});

/**
 * Animasi text bergerak saat discroll
 */

document.addEventListener("scroll", (e) => {
    document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY}px)`
})