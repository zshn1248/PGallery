// Replace this with your actual API key if needed in server setup
const API_KEY = "xddl0mfllukp7ga0t6q5vsqcs7f9cbdbj1hbhm169myz0w3ptr8724ndhr98r2jw";  // placeholder, not used in frontend

// Payment amount for unlocking a premium photo
const PREMIUM_PHOTO_AMOUNT = 3;

function loginWithPi() {
        console.log("User authenticated:", auth);
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('userSection').style.display = 'block';
        document.getElementById('userInfo').innerText = "Welcome " + auth.user.username;
    }, function(error) {
        console.error("Login failed:", error);
    });
}

function payWithPi() {
    Pi.createPayment({
        amount: 3,
        amount: PREMIUM_PHOTO_AMOUNT,
        memo: "Unlock premium photo",
        metadata: { purpose: "unlock_photo" }
        onReadyForServerApproval: function(paymentId) {
            console.log("Payment ready for approval:", paymentId);
            document.getElementById("paymentStatus").innerText = "Waiting for server approval... (not implemented)";
        },
        onReadyForServerCompletion: function(paymentId, txid) {
            console.log("Payment complete:", paymentId, txid);
            document.getElementById("paymentStatus").innerText = "Payment complete! You unlocked the photo.";
        },
        onCancel: function(paymentId) {
            console.log("User cancelled:", paymentId);
            document.getElementById("paymentStatus").innerText = "Payment cancelled.";
        },
        onError: function(error, paymentId) {
            console.error("Error:", error);
            document.getElementById("paymentStatus").innerText = "Error during payment.";
        }
    });
}
