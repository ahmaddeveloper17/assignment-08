//question no :1

// function checkPasswordStrength() {
//     var password = document.getElementById("passwordInput").value;
//     var strengthRatingElement = document.getElementById("strengthRating");
//     var strengthRating = calculatePasswordStrength(password);
//   strengthRatingElement.textContent = "Strength rating: " + strengthRating;
//   }
//   function calculatePasswordStrength(password) {
//     var strength = 0;
//   // Check length
//     if (password.length >= 8) {
//       strength += 1;
//     }
//   // Check if password contains uppercase letters
//     if (/[A-Z]/.test(password)) {
//       strength += 1;
//     }
//   // Check if password contains lowercase letters
//     if (/[a-z]/.test(password)) {
//       strength += 1;
//     }
//   // Check if password contains numbers
//     if (/[0-9]/.test(password)) {
//       strength += 1;
//     }
//   // Check if password contains special characters
//     if (/[^A-Za-z0-9]/.test(password)) {
//       strength += 1;
//     }
//   return strength;
//   }


// question no :3

// var images = [
//     "Screenshot (1).png",
//     "Screenshot (2).png",
//     "Screenshot (3).png"
//   ];
//   var currentIndex = 0;
//   var imageElement = document.getElementById("image");
  
//   function changeImage(n) {
//     currentIndex += n;
//     if (currentIndex < 0) {
//       currentIndex = images.length - 1;
//     } else if (currentIndex >= images.length) {
//       currentIndex = 0;
//     }
//     imageElement.src = images[currentIndex];
//   }
  

  
  