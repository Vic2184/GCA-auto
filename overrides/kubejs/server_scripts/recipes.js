ServerEvents.recipes(event => {
//create语法仅在安装kubejs-create后生效，请使用自定义方式
  event.custom({
  type: "create:crushing",
  ingredients: [
    {
      item: "minecraft:flint"
    }
  ],
  processing_time: 50,
  results: [
    {
      id: "minecraft:gunpowder"
    },
  ]
}).id("create:crushing/gunpowder_from_flint")
//添加机械动力火药配方

})