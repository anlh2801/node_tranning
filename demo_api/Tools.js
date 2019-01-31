function getToken(){
    return Math.round(new Date().getTime() / (3*60*1000));
  }
function sendResOK (obj) {
    res.status(200).send(obj)
}
module.exports = {
    getToken,
    sendResOK
};