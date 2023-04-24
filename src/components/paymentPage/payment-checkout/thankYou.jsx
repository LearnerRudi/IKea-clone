import "./thankyou.css"
import { Link } from "react-router-dom"
function ThankYOu() {

    return (
        <body>
            <div id="header"></div>

            <div id="top">
                <img
                    id="i"
                    src="./img/imgbin-information-sign-symbol-visitor-center-tourist-white-and-blue-information-logo-DGQCAj7xbe6kTBKiRPYMYt6rA-removebg-preview.png"
                    alt=""
                />
                <p id="p1">
                    Ikea will never contact you to offer products, cash or free prizes,
                    etc. Please do not respond, make payments or share your personal
                    information like CVV, PIN or passwords via a call, WhatsApp or other
                    links
                </p>
            </div>
            <div id="medium">
                <img
                    id="success"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMjQgMEMyNy40OTA1IDAgMzAuNTM3IDEuOT
        g0NSAzMi4wNzYgNC44Nzk1QzMyLjgzOCA0LjY4IDMzLjYyMSA0LjU3OTUKICAgMzQuNDA0IDQuNTc5NUMzNi43OTggNC41NzIgMzkuMDk2IDUuNTE4NSA0MC43ODk1IDcuMjEwNUM0My4xNDE1IDkuNTYxIDQzLjkxMSAKICAgMTIuOTEwNSA0My4xMjA1IDE1LjkyNTVDNDYuMDE1NSAxNy40NjE1IDQ4IDIwL
        jUwOCA0OCAyNEM0OCAyNy40OTIgNDYuMDE3IDMwLjUzNwogICAgNDMuMTIzNSAzMi4wNzZDNDMuOTE0IDM1LjA5MSA0My4xNDE1IDM4LjQzOSA0MC43ODk1IDQwLjc5MUMzOS4wOTYgNDIuNDgzIAogICAgMzYuNzk5NSA0My40Mjk1IDM0LjQwNTUgNDMuNDIyQzMzLjYxOTUgNDMuNDIyIDMyLjgzNjUgNDMuMz
        IgMzIuMDc2IDQzLjEyMDVDMzAuNTM3CiAgICAgNDYuMDE1NSAyNy40OTA1IDQ4IDI0IDQ4QzIwLjUwOTUgNDggMTcuNDYzIDQ2LjAxNTUgMTUuOTI0IDQzLjEyMDVDMTUuMTYyIDQzLjMyCiAgICAgIDE0LjM3OSA0My40MjA1IDEzLjU5NiA0My40MjA1QzExLjIwMiA0My40MjggOC45MDQgNDIuNDgxNSA3LjI
        xMDUgCiAgICAgIDQwLjc4OTVDNC44NTg1IDM4LjQzOSA0LjA4OSAzNS4wODk1IDQuODc5NSAzMi4wNzQ1QzEuOTg0NSAzMC41Mzg1CiAgICAgICAwIDI3LjQ5MiAwIDI0QzAgMjAuNTA4IDEuOTgzIDE3LjQ2MyA0Ljg3NjUgMTUuOTI0QzQuMDg2IDEyLjkwOQogICAgICAgIDQuODU4NSA5LjU2MSA3LjIxMDUgN
        y4yMDlDOC45MDQgNS41MTg1IDExLjIwMDUgNC41NzA1IDEzLjU5MwogICAgICAgIDQuNTc4QzE0LjM3NzUgNC41NzggMTUuMTYyIDQuNjggMTUuOTI0IDQuODc5NUMxNy40NjMKICAgICAgICAxLjk4NDUgMjAuNTA5NSAwIDI0IDBaTTMzLjQ3NyAxNi4zMzVMMjAuNTcxIDI5LjI0MUwxNC41MjMKICAgICAgICA
        gMjMuMTkxNUwxMi45MDYgMjQuODA4NUwyMC41NzEgMzIuNDczNUwzNS4wOTQgMTcuOTUwNUwzMy40NzcgMTYuMzM1WiIgCiAgICAgICAgIGZpbGw9IiMxNDkyNTMiCiAgICAgICAgIC8+Cjwvc3ZnPgo="
                    alt=""
                />

                <h1 id="H1">Order Placed Successfully</h1>
                <br />
                <p id="p2">
                    We are pleased to confirm your order no.
                    <span>#IKEA-132967327-0110985</span>
                </p>
                <br />

                <Link to = "/" id="a1" >Continue Shopping </Link>
            </div>

            <div id="footerdiv"></div>
        </body>
    )
}

export default ThankYOu