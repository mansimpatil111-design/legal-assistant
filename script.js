async function getAdvice() {
  const question = document.getElementById("question").value.toLowerCase().trim();
  const answerDiv = document.getElementById("answer");

  if (!question) {
    answerDiv.innerHTML = `
      <h3>⚠️ Please enter a question</h3>
      <p>Try asking: <b>rent</b>, <b>salary</b>,  <b>police</b></p>
    `;
    return;
  }

  answerDiv.innerHTML = `<p class="loading">⏳ Finding legal advice...</p>`;

  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      throw new Error("Failed to load JSON data");
    }

    const legalData = await response.json();
    let matchedTopics = [];

    // Multiple keyword matching
    for (let topic in legalData) {
      const keywords = legalData[topic].keywords;

      for (let keyword of keywords) {
        if (question.includes(keyword.toLowerCase())) {
          matchedTopics.push(topic);
          break;
        }
      }
    }

    // Remove duplicates
    matchedTopics = [...new Set(matchedTopics)];

    if (matchedTopics.length > 0) {
      let resultHTML = `<h3>✅ Legal Advice Found:</h3>`;

      matchedTopics.forEach(topic => {
        resultHTML += `
          <div class="result-item">
            <p><b>📌 Topic:</b> ${capitalizeFirstLetter(topic)}</p>
            <p>${legalData[topic].answer}</p>
            <p>📘 <a href="${legalData[topic].source}" target="_blank">Read Full Source</a></p>
            <hr style="margin: 15px 0; border: 0; border-top: 1px solid #ddd;">
          </div>
        `;
      });

      answerDiv.innerHTML = resultHTML;
    } else {
      answerDiv.innerHTML = `
        <h3>⚠️ No Exact Match Found</h3>
        <p>Sorry, I couldn't find a direct legal topic for your question.</p>
        <div class="suggestions">
          <p><b>Try keywords like:</b> rent , salary , consumer , police , property , marriage , crime </p>
        </div>
        <p style="margin-top: 15px;">📘 <a href="https://www.indiacode.nic.in/" target="_blank">Visit Indian Legal Resources</a></p>
      `;
    }

  } catch (error) {
    console.error("Error loading legal data:", error);

    answerDiv.innerHTML = `
      <h3>⚠️ Error</h3>
      <p>Could not load legal advice data. Please check that:</p>
      <ul style="margin-left: 20px; line-height: 1.8; color: #333;">
        <li>Your file name is exactly <b>data.json</b></li>
        <li>You are running the project with <b>Live Server</b></li>
        <li>Your <b>script.js</b> file is correctly linked</li>
      </ul>
    `;
  }
}

// Fill question from category buttons
function setQuestion(topic) {
  document.getElementById("question").value = topic;
  getAdvice();
}

// Capitalize topic name
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Press Enter to search
document.addEventListener("DOMContentLoaded", () => {
  const questionInput = document.getElementById("question");

  questionInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      getAdvice();
    }
  });
});