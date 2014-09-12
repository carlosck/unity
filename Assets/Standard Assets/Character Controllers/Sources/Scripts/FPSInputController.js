private var motor : CharacterMotor;
var anim : Animator;
var facing_left : boolean = false ;


// Use this for initialization
function Awake () {
	motor = GetComponent(CharacterMotor);
	anim = GameObject.FindGameObjectWithTag("animacion").GetComponent.<Animator>();
}
function GetDirection()
{
	var directionVector = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	return directionVector;
}
// Update is called once per frame
function Update () {
	// Get the input vector from keyboard or analog stick
	var directionVector = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	var vertical = Input.GetAxis("Vertical");
	var horizontal = Input.GetAxis("Horizontal");
	// if (vertical > 0)
	// {
	//     anim.SetInteger("Direction", 8);
	// }
	// else if (vertical < 0)
	// {
	//     anim.SetInteger("Direction", 2);
	// }
	// else if (horizontal > 0)
	// {
	//     anim.SetInteger("Direction", 6);
	//     facing_left = false;
	// }
	// else if (horizontal < 0)
	// {
	//     anim.SetInteger("Direction", 4);
	//     facing_left = true;
	// }
	// if(vertical==0 && horizontal==0)
	// {
	// 	if(facing_left)
	// 		anim.SetInteger("Direction", 5);
	// 	else
	// 		anim.SetInteger("Direction", 1);

	// }

	if (directionVector != Vector3.zero) {
		// Get the length of the directon vector and then normalize it
		// Dividing by the length is cheaper than normalizing when we already have the length anyway
		var directionLength = directionVector.magnitude;
		directionVector = directionVector / directionLength;
		
		// Make sure the length is no bigger than 1
		directionLength = Mathf.Min(1, directionLength);
		
		// Make the input vector more sensitive towards the extremes and less sensitive in the middle
		// This makes it easier to control slow speeds when using analog sticks
		directionLength = directionLength * directionLength;
		
		// Multiply the normalized direction vector by the modified length
		directionVector = directionVector * directionLength;
	}
	
	// Apply the direction to the CharacterMotor
	motor.inputMoveDirection = transform.rotation * directionVector;
	motor.inputJump = Input.GetButton("Jump");
}

// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")
