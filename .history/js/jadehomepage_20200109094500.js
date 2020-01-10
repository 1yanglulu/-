$(function () {
  // let height=$(".self-experience-con").innerHeight()
  // console.log("经历高度",height)
  // if(height>=125){
  //   $(".self-experience-con").css({
  //     "height":"125px",
  //     "overflow":"hidden"
  //   })
  //   $(".self-experience-bom").css("display","none")
  //   $(".self-experience-bom").css("display","block")
  // }
  $(".self-experience-bomshow").click(function () {
    $(".self-experience-con").css("overflow","visible")
    $(".self-experience-bomshow").css("display","none")
    $(".self-experience-bomhid").css("display","block")
  })
  $(".self-experience-bomhid").click(function () {
    $(".self-experience-bomhid").css("display","none")
    $(".self-experience-bomshow").css("display","block")
  })
})