let doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';


doorImage1.onclick = () =>{
  doorImage1.src = botDoorPath;
};

doorImage2.onclick = () =>{
  doorImage2.src =  beachDoorPath;  
};

doorImage3.onclick = () =>{
  doorImage3.src = spaceDoorPath;
};

