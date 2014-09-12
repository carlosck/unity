#pragma strict

var locacion1 : Transform;
var fadeObj : Transform;
var camera_to_hide : GameObject;
var camera_to_show : GameObject;
var camera_pos_x: int = 0;
var camera_pos_y: int = 0;
var camera_pos_z: int = 0;
var destiny_name: String = "";
//var myOtherScript: ScriptName;
function OnTriggerEnter (pj : Collider)
{
	if(pj.collider.tag == "Player")
	{
		//var myOtherScript = fadeIn.GetComponentInChildren(ScriptName);        
		

		var place_name_text = gameObject.FindWithTag("place_name").GetComponent(typeof(GUIText)) as GUIText;
		
		var animacion : Animator = gameObject.FindWithTag("animacion").GetComponent(typeof(Animator)) as Animator;
		enable_controlls(false);
		animacion.enabled= false;
		

		
		// Time.timeScale = 0.0 ;
		// fade in-out
		Instantiate(fadeObj, Vector3 (0, 0, 0), Quaternion.identity); // The Instantiate command takes a GameObject, a Vector3 for position and a Quaternion for rotation.  
	 
		yield WaitForSeconds (0.8);
		
		
		

		camera_to_show.transform.position.x = camera_pos_x;
		camera_to_show.transform.position.y = camera_pos_y;
		camera_to_show.transform.position.z = camera_pos_z;

		
	 
	 //fade in 
		camera_to_show.SetActive(true);
		camera_to_hide.SetActive(false);
		
		// yield WaitForSeconds (0.4);
		place_name_text.text= destiny_name;

		pj.transform.position = locacion1.position;
		
				          		
		animacion.enabled= true;
		enable_controlls(true);
		animacion.SetInteger("Direction", 4);
		//hide the map text
		yield WaitForSeconds (2);
		place_name_text.text= "";
		
				
	}
}

function enable_controlls(enable: boolean)
{
	
	var motor : CharacterMotor = gameObject.FindWithTag("Player").GetComponent(typeof(CharacterMotor)) as CharacterMotor;
	motor.enabled= enable;
	
	if(!enable)
	{
		motor.SetVelocity( Vector3.zero);
	}
	// objaScript.inputMoveDirection=Vector3.zero;
	// objaScript.canControl=false;
	var objbScript : FPSInputController = gameObject.FindWithTag("Player").GetComponent(typeof(FPSInputController)) as FPSInputController;
	objbScript.enabled= enable;

			
	
}