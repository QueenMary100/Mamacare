document.getElementById('submitButton').addEventListener('click', function(event) {
    const form = document.getElementById('smsForm');
    event.preventDefault();

    let from1 = document.getElementById('fromMessage').value;
    let to1 = document.getElementById('toMessage').value;
    let message1 = document.getElementById('MessageContent').value;

    let dataload = {
        from: from1,
        to: to1,
        message: message1
    };

    let jsonData = JSON.stringify(dataload);


    const apiUrl = 'https://api.tiaraconnect.io/api/messaging/sendsms';
    const apiKey = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzNjEiLCJvaWQiOjM2MSwidWlkIjoiOTRiNDYxYWQtMTNkZC00ZjgzLWJhYTktMjI3NjkxZGFhMThjIiwiYXBpZCI6Mjc3LCJpYXQiOjE3MTQ5ODk5NzUsImV4cCI6MjA1NDk4OTk3NX0.SmlHq6UvVgSRx7NABT_MGxEdjYVY7nq-xwAzT_1xyv35QekDOcIOdOASSwxiUfzr4j14HamFZ-LxOH_6kbB4TA';

    fetch(apiUrl, {
        method: "POST", 
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${apiKey}`, 
        },
        body: jsonData
    })      
        
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send SMS');
        }
        return response.json();
    })
    .then(response => {
        console.log('SMS Sent:', response);
        alert('SMS Sent Successfully!');
        form.reset(); 
       
    })
    .then(data => console.log(data))
    .catch(error => {
        console.error('Error sending SMS:', error);
        alert('Failed to send SMS. Please try again later.');
    });
});