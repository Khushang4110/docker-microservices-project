fetch('/api')
  .then(response => response.json())
  .then(data => {
      document.getElementById('content').innerText = data.message;
  });
