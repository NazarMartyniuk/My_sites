	function okeyButton()
	{
		if(document.getElementById('username').value == "" || document.getElementById('password').value == "")
		{
			alert("Some fields is empty!");
		}
		else
		{
			var alertMessage = document.getElementById('username').value;
			alert("Hello " + alertMessage);
		}
	}
	function startTimer()
	{
		var my_timer = document.getElementById("my_timer");
   		var time = my_timer.innerHTML;
    	var arr = time.split(":");
    	var h = arr[0];
    	var m = arr[1];
    	var s = arr[2];
    	if (s == 0) 
    	{
      		if (m == 0) 
      		{
        		if (h == 0) 
        		{
          			alert("The time is ended!");
          			window.location.reload();
         		 	return;
        		}
        		h--;
        		m = 60;
        		if (h < 10) 
        			h = "0" + h;
      		}
     		m--;
      		if (m < 10) 
      			m = "0" + m;
      		s = 59;
    	}
    	else s--;
    	if (s < 10) 
    		s = "0" + s;
    	document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    	setTimeout(startTimer, 1000);
	}
	window.onload = () =>
	{
		var ctx = document.getElementById('figureCount').getContext('2d');
		var chartConfig = 
		{
			type: 'pie',
			data: 
			{
				labels: ["Rook", "Knight", "King", "Pawn", "Queen", "Bishop"],
				datasets: [{
					label: "Figures",
					data: [4, 1, 2, 12, 2, 3],
					backgroundColor:[
						'rgba(216, 27, 96, 0.6)',
                		'rgba(3, 169, 244, 0.6)',
                		'rgba(255, 152, 0, 0.6)',
                		'rgba(29, 233, 182, 0.6)',
                		'rgba(156, 39, 176, 0.6)',
                		'rgba(84, 110, 122, 0.6)'
					],
					borderColor: [
						'rgba(216, 27, 96, 1)',
                		'rgba(3, 169, 244, 1)',
                		'rgba(255, 152, 0, 1)',
                		'rgba(29, 233, 182, 1)',
                		'rgba(156, 39, 176, 1)',
                		'rgba(84, 110, 122, 1)']
				}],
			},
			options:
			{
				title:
				{
					display: true,
					text: 'Figure Count',
				},
			}
		}
		var chart = new Chart(ctx, chartConfig);
	}