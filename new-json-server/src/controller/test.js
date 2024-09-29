const test = require ('../../data/test')


module.exports = (req , res, next) =>{
    const testData = test()
    testData.desc ='I am selfdefined data'
    res.success('request successfully')


}
