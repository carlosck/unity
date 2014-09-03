/*
This camera smoothes out rotation around the y-axis and height.
Horizontal Distance to the target is always fixed.

There are many different ways to smooth the rotation but doing it this way gives you a lot of control over how the camera behaves.

For every of those smoothed values we calculate the wanted value and the current value.
Then we smooth it using the Lerp function.
Then we apply the smoothed values to the transform's position.
*/

// The target we are following
var target : Transform;
// The distance in the x-z plane to the target
var distance = 79;
var height = 36;

var max_x_left = 0;
var max_x_right = 0;

var max_y_top = 0;
var max_y_bottom = 0;
// the height we want the camera to be above the target

// How much we 
var heightDamping = 2.0;
var rotationDamping = 3.0;

// Place the script in the Camera-Control group in the component menu
@script AddComponentMenu("Camera-Control/Smooth Follow")


function LateUpdate () {
  // Early out if we don't have a target
  if (!target)
    return;
  
  // Calculate the current rotation angles
  
  transform.position.x = target.position.x;
  transform.position.y = height;
  transform.position.z = target.position.z-distance;
  
}