function volume_sphere() {
  // Get the input element with id "radius" and retrieve its value
  const radiusInput = document.getElementById('radius');
  const radius = parseFloat(radiusInput.value);

  // Check if the input is a valid number
  if (isNaN(radius)) {
    alert('Please enter a valid number for the radius.');
    return false;
  }

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Get the output element with id "volume" and set its value to the calculated volume
  const volumeOutput = document.getElementById('volume');
  volumeOutput.value = volume.toFixed(2); // You can adjust the number of decimal places as needed

  // Prevent the form from submitting and refreshing the page
  return false;
}

// This code will be executed when the page is loaded
window.onload = function() {
  // Attach the volume_sphere function to the form's submit event
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
