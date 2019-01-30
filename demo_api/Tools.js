function getToken(){
    return Math.round(new Date().getTime() / (3*60*1000));
  }
function writeLog(logData){
    console.log(logData)
}
module.exports = {
    getToken
};