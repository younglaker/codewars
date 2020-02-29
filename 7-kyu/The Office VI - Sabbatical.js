/*
https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript

val=your value to the organisation
happ=her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string 'x'.

If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

 */

function sabb(x, val, happ){
  let sum = (x.match(/[sabticl]/ig )|| []).length;

  if(sum + val + happ > 22) {
  	return 'Sabbatical! Boom!'
  } else {
  	return 'Back to your desk, boy.'
  }

}