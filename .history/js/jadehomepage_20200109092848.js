$(function () {
  let height=$(".self-experience-con").innerHeight()
  console.log("经历高度",height)
  if(height>=125){
    $(".self-experience-con").css("height","125px")
  }
})