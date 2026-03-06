
async function ask() {

    let q = document.getElementById("question").value;

    let res = await fetch("https://agtn0m78v0.execute-api.us-east-1.amazonaws.com/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: q
        })
    });

    let data = await res.json();

    document.getElementById("response").innerHTML = data.reply;

}