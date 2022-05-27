document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const CollapsibleButton = document.getElementById("collapsible");
  const SendButton = document.getElementById("sendButton");
  const InputBox = document.getElementById("chat-input-box");

  CollapsibleButton.addEventListener("click", handleCollapsibleClick);
  SendButton.addEventListener("click", handleSend);
  InputBox.addEventListener("keydown", handleInputKeyDown);
}

function handleInputKeyDown(event) {
  console.log(event.key);
  if (event.key === 'Enter') {
    handleSend();
    event.preventDefault();
  }
}

function handleCollapsibleClick() {
  const chatBox = document.getElementById("chat-container");
  if (chatBox.classList.contains("show")) {
    chatBox.classList.remove("show");
  } else {
    chatBox.classList.add("show");
  }
}

function handleSend() {
    const chatInput = document.getElementById("chat-input-box");
    const text = chatInput.value;
    chatInput.value = '';
    chatInput.focus();
    if(!text) {
      chatInput.classList.add('error');
      return;
    }

    chatInput.classList.remove('error');
    addUserBubble(text)
}

function addUserBubble(text) {
  const userBubble = document.createElement("p");
  userBubble.innerHTML = text;
  userBubble.classList.add("chat-bubble-user")

  document.getElementById("chat-content").appendChild(userBubble);

  setTimeout(() => addBotBubble(text), 500); // simulate a delay
}

function addBotBubble(text) {
  const botBubble = document.createElement("p");
  const botText = getResponse(text);
  if (!botText) return;
  botBubble.innerHTML = botText;
  botBubble.classList.add("chat-bubble-bot")

  document.getElementById("chat-content").appendChild(botBubble);
}