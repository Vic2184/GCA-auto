ServerEvents.tags('fluid', event => {
  event.add('c:biofuel', 'createdieselgenerators:ethanol')
  //给乙醇超级燃烧
})
ServerEvents.tags('item', event => {
  event.add('minecraft:wooden_slabs','createdieselgenerators:chip_wood_slab')
  //让木屑版能合成木桶
  event.add('create:pulpifiable', 'createdieselgenerators:wood_chip')
  //木屑纸浆
})
