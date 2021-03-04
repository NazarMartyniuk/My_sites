	function okeyButton()
	{
		if(document.getElementById('username').value == "")
		{
			alert("Field name is empty!");
		}
		else
		{
			var alertMessage = document.getElementById('username').value;
			alert("Hello " + alertMessage);
		}
	}