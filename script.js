document.getElementById("calculateBtn").addEventListener("click", async function () {
  const n = document.getElementById("fibInput").value;
  const resultBox = document.getElementById("result");

  if (n === '' || isNaN(n) || n < 0) {
    resultBox.innerText = "Please enter a valid non-negative number.";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/fibnocci", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ n: parseInt(n) })
    });

    const data = await response.json();

    if (response.ok) {
      resultBox.innerText = `Fibonacci of ${n} is: ${data.message}`;
    } else {
      resultBox.innerText = `Error: ${data.message || 'Something went wrong'}`;
    }
  } catch (error) {
    resultBox.innerText = "Failed to connect to the server.";
  }
});