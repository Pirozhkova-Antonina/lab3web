function deleteTask(taskId) {
  fetch("/delete-task", {
    method: "POST",
    body: JSON.stringify({ taskId: taskId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}


function change() {
    const status = event.target.checked
    fetch('/update-status', {
        method: 'POST',
        body: JSON.stringify({
            "id": event.target.parentElement.dataset.id,
            "status": status
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
    return response.json();
    })
    .then(json => {
        console.log(json)
    })
}