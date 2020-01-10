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
        $(".self-experience-bom").css("display","none")
    $(".self-experience-bom").css("display","block")
  })
})