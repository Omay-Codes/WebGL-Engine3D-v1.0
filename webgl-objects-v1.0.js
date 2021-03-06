/**
	Arrowhead Co. - WebGL 3D Object Library v1.0

	>>> Allows easy creation of traditional 3D Objects.
**/

	/*OBJECT LIBRARY*/

var CUBOID = function(Engine,				  		//Engine to be used

					  x,  y,  z,  xl, yl, zl, id,   //Position, dimensions, id
					  texture, noRepeat,	  		//Texture and texture parameters
					  vx, vy, vz, 			 		//Velocities
					  
					  ax, ay, az,			  		//Angles			  
					  mx, my, mz,			  		//Angular velocities
					  ){

	//Vertices
	//
	var vertices = [
		-xl / 2,  yl / 2, -zl / 2, 0, 				  0,
		-xl / 2,  yl / 2,  zl / 2, 0, 				  noRepeat ? 1 : zl,
		 xl / 2,  yl / 2,  zl / 2, noRepeat ? 1 : xl, noRepeat ? 1 : zl,
		 xl / 2,  yl / 2, -zl / 2, noRepeat ? 1 : xl, 0,

		-xl / 2,  yl / 2,  zl / 2, noRepeat ? 1 : yl, noRepeat ? 1 : zl,
		-xl / 2, -yl / 2,  zl / 2, 0, 				  noRepeat ? 1 : zl,
		-xl / 2, -yl / 2, -zl / 2, 0, 				  0,
		-xl / 2,  yl / 2, -zl / 2, noRepeat ? 1 : yl, 0,

		 xl / 2,  yl / 2,  zl / 2, noRepeat ? 1 : yl, noRepeat ? 1 : zl,
		 xl / 2, -yl / 2,  zl / 2, 0,				  noRepeat ? 1 : zl,
		 xl / 2, -yl / 2, -zl / 2, 0, 				  0,
		 xl / 2,  yl / 2, -zl / 2, noRepeat ? 1 : yl, 0,

		 xl / 2,  yl / 2,  zl / 2, noRepeat ? 1 : xl, noRepeat ? 1 : yl,
		 xl / 2, -yl / 2,  zl / 2, noRepeat ? 1 : xl, 0,
		-xl / 2, -yl / 2,  zl / 2, 0, 				  0,
		-xl / 2,  yl / 2,  zl / 2, 0,				  noRepeat ? 1 : yl,

		 xl / 2,  yl / 2, -zl / 2, noRepeat ? 1 : xl, noRepeat ? 1 : xl,
		 xl / 2, -yl / 2, -zl / 2, noRepeat ? 1 : xl, 0,
		-xl / 2, -yl / 2, -zl / 2, 0, 				  0,
		-xl / 2,  yl / 2, -zl / 2, 0,				  noRepeat ? 1 : yl,

		-xl / 2, -yl / 2, -zl / 2, 0, 				  0,
		-xl / 2, -yl / 2,  zl / 2, 0,				  noRepeat ? 1 : zl,
		 xl / 2, -yl / 2,  zl / 2, noRepeat ? 1 : xl, noRepeat ? 1 : zl,
		 xl / 2, -yl / 2, -zl / 2, noRepeat ? 1 : xl, 0,
	];

	var indices = [
		 0,  1,  2,
		 0,  2,  3,

		 5,  4,  6,
		 6,  4,  7,

		 8,  9, 10,
		 8, 10, 11,

		13, 12, 14,
		15, 14, 12,

		16, 17, 18,
		16, 18, 19,

		21, 20, 22,
		22, 20, 23,
	];

	Engine.new(vertices,
			  indices,
			  texture,
			  x,  y,  z,
			  xl, yl, zl, id,
			  vx, vy, vz,
			  ax, ay, az,
			  mx, my, mz);

	return true;
};

var CUBE = function(Engine,				//Engine to be used

					x, y, z, s, id,		//Location, size, id
					texture, noRepeat,	//Texture and texture parameters
					vx, vy, vz,			//Velocity

					ax, ay, az,			//Angular orientation
					mx, my, mz			//Angular velocities
					){

	CUBOID(Engine,
		   
		   x, y, z, s, s, s, id,
		   texture, noRepeat,
		   vx, vy, vz,
		   
		   ax, ay, az,
		   mx, my, mz);

	return true;
};