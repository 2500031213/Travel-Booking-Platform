/* =========================
   SHOW / HIDE PASSWORD
========================= */

function togglePassword() {

    const password =
        document.getElementById("password");

    const button =
        document.querySelector(".show-password");


    if (password.type === "password") {

        password.type = "text";

        button.textContent = "Hide";

    } else {

        password.type = "password";

        button.textContent = "Show";
    }
}


/* =========================
   LOGIN
========================= */

document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("email")
                .value
                .trim()
                .toLowerCase();

        const password =
            document.getElementById("password")
                .value;

        const remember =
            document.getElementById("remember").checked;

        const message =
            document.getElementById("message");


        /* =========================
           GET REGISTERED USER
        ========================= */

        const savedUser =
            localStorage.getItem("wayfareUser");


        if (!savedUser) {

            showMessage(
                "No account found. Please create an account first.",
                "error"
            );

            return;
        }


        const user =
            JSON.parse(savedUser);


        /* =========================
           CHECK LOGIN
        ========================= */

        if (
            email === user.email &&
            password === user.password
        ) {


            /* Save logged-in state */

            localStorage.setItem(
                "wayfareLoggedIn",
                "true"
            );


            if (remember) {

                localStorage.setItem(
                    "wayfareRemember",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "wayfareRemember"
                );
            }


            showMessage(
                "Login successful! Welcome to Wayfare.",
                "success"
            );


            /* =========================
               OPEN WAYFARE HOME
            ========================= */

            setTimeout(function() {

                window.location.href =
                    "../index.html";

            }, 1000);


        } else {

            showMessage(
                "Invalid email or password.",
                "error"
            );
        }

    });


/* =========================
   FORGOT PASSWORD
========================= */

function forgotPassword() {

    alert(
        "Password reset feature will be available soon."
    );
}


/* =========================
   MESSAGE
========================= */

function showMessage(text, type) {

    const message =
        document.getElementById("message");

    message.textContent = text;

    message.className =
        "message " + type;

    message.style.display = "block";
}