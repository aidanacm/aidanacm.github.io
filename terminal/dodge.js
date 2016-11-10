var game = new Phaser.Game(320,568);
game.state.add("Boot",Boot);
game.state.start("Boot");




class Boot {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
}
