// code your solution here
function saturdayFun(activity = "roller-skate") {
  return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`
}
mondayWork();
momndayWork("I will work from home")

function wrapAdjective(style = "*") {
    return function(adjective = "special") {
        return `You are ${style}${adjective}${style}!`
    }

}