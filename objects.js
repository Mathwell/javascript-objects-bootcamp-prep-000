var playlist={'artist':'songTitle'}

function updatePlaylist(playlist,artistName,songTitle){
  playlist=Object.assign({}, playlist,{[artistName]:songTitle})
  return(playlist)
}
