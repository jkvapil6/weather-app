///
/// Function returns String of the current time
///
exports.getNowDateFormated = () => {
  const dt = new Date()

  return `${dt
    .getDate().toString().padStart(2, "0")}.${(dt
    .getMonth()+ 1).toString().padStart(2, "0")}.${dt
    .getFullYear().toString().padStart(4, "0")} ${dt
    .getHours().toString().padStart(2, "0")}:${dt
    .getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds().toString().padStart(2, "0")}`
}


///
/// Function returns formated date as DD.MM HH:MM 
///
exports.formatDate_DDMM_HHMM = (dt) => {

  let dtFormated = dt.toLocaleDateString()
  let timeFormated = dt.toLocaleTimeString()          

  console.log(dtFormated)
  console.log(timeFormated)

  return `${dtFormated} ${dt.getHours().toString().padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}`

  // return `${dt
  //   .getDate().toString().padStart(2, "0")}.${(dt
  //   .getMonth()+ 1).toString().padStart(2, "0")}. ${dt
  //   .getHours().toString().padStart(2, "0")}:${dt
  //   .getMinutes().toString().padStart(2, "0")}`
}