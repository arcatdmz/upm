/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
/*
* Author: Zion Orent <zorent@ics.com>
* Copyright (c) 2015 Intel Corporation.
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var waterlevel_lib = require("jsupm_waterlevel");

// The was tested with the Water Level Sensor
// Instantiate a Water Level Sensor on digital pin D2
var waterlevel_obj = new waterlevel_lib.WaterLevel(2);

var myInterval = setInterval(function()
{
	if (waterlevel_obj.isSubmerged())
		console.log("Sensor is submerged in liquid");
	else
		console.log("Liquid is below water level sensor");
}, 1000);

// When exiting: clear interval, clean up memory, and print message
process.on('SIGINT', function()
{
	clearInterval(myInterval);
	waterlevel_obj = null;
	waterlevel_lib.cleanUp();
	waterlevel_lib = null;
	console.log("Exiting");
	process.exit(0);
});
