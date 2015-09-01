function withBoxUnlocked(body) {
  var keepLocked = true;
  try {
    if(box.locked){
      box.unlock();
    } else {
      keepLocked = false;
    }
    body();
  } finally {
    if(keepLocked) {
      box.lock();
    }
  }
}