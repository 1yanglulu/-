$(function () {
  let height=$(".self-experience-con").innerHeight()
  console.log("经历高度",height)
  //show更多  hid收起
  if(height>=125){
    $(".self-experience-con").css({
      "height":"125px",
      "overflow":"hidden"
    })
    $(".self-experience-bomhid").css("display","none")
    $(".self-experience-bomshow").css("display","block")
  }
  $(".self-experience-bomshow").click(function () {
    $(".self-experience-con").css({
      "height":"auto",
      "overflow":"visible"
    })
    $(".self-experience-bomshow").css("display","none")
    $(".self-experience-bomhid").css("display","block")
  })
  $(".self-experience-bomhid").click(function () {
    $(".self-experience-con").css({
      "height":"125px",
      "overflow":"hidden"
    })
    $(".self-experience-bomhid").css("display","none")
    $(".self-experience-bomshow").css("display","block")
  })

  //滚动条滚动事件

})