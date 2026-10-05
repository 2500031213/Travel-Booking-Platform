/* =========================
   SHOW / HIDE PASSWORD
========================= */

function togglePassword(inputId, button) {

    const password =
        document.getElementById(inputId);

    if (password.type === "password") {

        password.type = "text";

        button.textContent = "Hide";

    } else {

        password.type = "password";

        button.textContent = "Show";
    }
}


/* =========================
   REGISTER ACCOUNT
========================= */

document
    .getElementById("registerForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim().toLowerCase();

        const phone =
            document.getElementById("phone").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const terms =
            document.getElementById("terms").checked;

        const message =
            document.getElementById("message");


        /* =========================
           VALIDATION
        ========================= */

        if (password.length < 6) {

            showMessage(
                "Password must contain at least 6 characters.",
                "error"
            );

            return;
        }


        if (password !== confirmPassword) {

            showMessage(
                "Passwords do not match.",
                "error"
            );

            return;
        }


        if (!terms) {

            showMessage(
                "Please accept the Terms & Conditions.",
                "error"
            );

            return;
        }


        /* =========================
           CHECK EXISTING USER
        ========================= */

        const existingUser =
            localStorage.getItem("wayfareUser");

        if (existingUser) {

            const user =
                JSON.parse(existingUser);

            if (user.email === email) {

                showMessage(
                    "An account with this email already exists.",
                    "error"
                );

                return;
            }
        }


        /* =========================
           CREATE USER
        ========================= */

        const user = {

            name: name,

            email: email,

            phone: phone,

            password: password
        };


        localStorage.setItem(
            "wayfareUser",
            JSON.stringify(user)
        );


        /* =========================
           SUCCESS
        ========================= */

        showMessage(
            "Account created successfully!",
            "success"
        );


        setTimeout(function() {

            window.location.href = "login.html";

        }, 1500);

    });


/* =========================
   MESSAGE FUNCTION
========================= */

function showMessage(text, type) {

    const message =
        document.getElementById("message");

    message.textContent = text;

    message.className =
        "message " + type;

    message.style.display = "block";
}