


// a new variable to store the dynnamically generated HTML 
let notificationsHTML = '';

//loop to generate the html using data from the data.js file
notifications.forEach((notification, index) => {
    notificationsHTML += `
    <div class="notifications unread">
        <img src="${notification.img}" alt="">
        <h1>${notification.name}</h1>
        <p>${notification.action} 
            <span><a href="#" class="toggle-message" data-index="${index}">${notification.post ? notification.post : 'View Message'}</a></span>
            <span class="unread-indicator">&#10122;</span>
        </p>
      
    </div>
    <div class="message-box" style="display: none;">${notification.message}</div>
    `;
});
// Append the generated HTML to the notification bar 
document.querySelector('.notification-bar').innerHTML = notificationsHTML;

// Add event listener to toggle message box
document.querySelectorAll('.toggle-message').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const index = parseInt(this.getAttribute('data-index'));
        const messageBox = document.querySelectorAll('.message-box')[index];
        messageBox.style.display = messageBox.style.display === 'none' ? 'block' : 'none';

        // turn off the unread notification icon after the message has been opened
        const unreadIndicator = this.parentElement.nextElementSibling;
        unreadIndicator.style.display = 'none';
        

       
    });
});

// Mark all as read button
document.getElementById('markAsRead-btn').addEventListener('click', (event)=>{
    event.preventDefault();
    document.getElementById('notifications-no').innerHTML = '0'
})

