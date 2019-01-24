let rover = {
  posX: 0,
  posY: 0,
  dire: '',

  setPos(x, y, direccion) {
    this.posX = x;
    this.posY = y;
    this.dire = direccion;
  },
  
  letsGo(go) {
    switch(this.dire) {
      case 'n':
        if(go === 'f') { this.posY++ }
        else if(go === 'b') { this.posY-- }
        break

      case 'e':
        if(go === 'f') { this.posX++ } 
        else if(go === 'b') { this.posX-- }
        break

      case 's':
        if(go === 'f') { this.posY-- } 
        else if(go === 'b') { this.posY++ }
        break

      case 'w':
        if(go === 'f') { this.posX-- } 
        else if(go === 'b') { this.posX++ }
        break

      default:
        break
    }
  },

  rote(move) {
    switch(this.dire) {
      case 'n':
        if(move === 'r') { this.dire = 'e' } 
        else if(move === 'l') { this.dire = 'w'}
        break
      case 'e':
        if(move === 'r') { this.dire = 's' } 
        else if(move === 'l') { this.dire = 'n'}
        break
      case 's':
        if(move === 'r') { this.dire = 'w' } 
        else if(move === 'l') { this.dire = 'e'}
        break
      case 'w':
        if(move === 'r') { this.dire = 'n' } 
        else if(move === 'l') { this.dire = 's'}
        break
      default:
      break
    }
  },
  
  whereTheFuckIAm() {
    console.log(`X: ${this.posX}, Y: ${this.posY},  POS: ${this.dire}`)
  }
}

rover.setPos(0, 0, 'n')
rover.whereTheFuckIAm()

rover.rote('r')
rover.letsGo('f')
rover.letsGo('f')
rover.whereTheFuckIAm()

rover.rote('r')
rover.rote('l')
rover.letsGo('b')
rover.whereTheFuckIAm()

rover.rote('r')
rover.letsGo('b')
rover.letsGo('f')
rover.letsGo('f')
rover.whereTheFuckIAm()