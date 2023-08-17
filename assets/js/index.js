const unreadNotifications = document.querySelectorAll('.notification.unread')
const markAllButton = document.querySelector('.markAllButton')
const badge = document.querySelector('.badge')
markAllButton.addEventListener("click", () => {
    unreadNotifications.forEach((unreadNotification) =>{
        unreadNotification.classList.toggle('unread')
    })
    badge.innerHTML == 3 ? badge.innerHTML="0" : badge.innerHTML="3"
})