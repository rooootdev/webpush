const VAPID_PUBLIC_KEY = "BAwUJxIa7mJZMqu78Tfy2Sb1BWnYiAatFCe1cxpnM-hxNtXjAwaNKz1QKLU8IYYhjUASOFzSvSnMgC00vfsU0IM";
const VAPID_PRIVATE_KEY = "wH3Mire4Nrw7UWiYuD4e76qSezQ-5Nf_9n_HK3vHBSU";

const webpush = require('web-push');

webpush.setVapidDetails(
    'https://yourwebsite.com/', 
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fXbyGY04zHY:APA91bE-EZI...",
    "expirationTime": null,
    "keys": {
        "p256dh": "BHqcQRz0HXwdZXZOT5GkQC_d5P1XFcevTkNPuJqh...",
        "auth": "o3SJkOwZFr7deVnT98..." 
    }
};

let pushData = JSON.stringify({
    "title": "Push title",
    "body": "Additional text with some description",
    "icon": "/images/push_icon.png",
    "image": "/images/push_image.jpg", 
    "data": {
        "url": "/?page=success",
        "message_id": "your_internal_unique_message_id_for_tracking"
    }
});

webpush.sendNotification(pushSubscription, pushData)
    .then(response => {
        console.log('Push notification sent successfully:', response);
    })
    .catch(error => {
        console.error('Error sending push notification:', error);
    });
