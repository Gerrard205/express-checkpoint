function workingHoursMiddleware(req, res, next){
  const currentDate = new Date();
  const day = currentDate.getDay();
  const hour = currentDate.getHours();

  if(day >= 1 && day <= 5 && hour >= 9 && hour <= 17){
    next()
  }else{
    res.send("Move away from here and come back monday to friday,9am to 5pm")
  }
}
module.exports =workingHoursMiddleware;