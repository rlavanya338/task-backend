const tasks = require('../../model/task')


const getOneTasks = async (req, res) => {
    try {
        if (req?.params?.id == undefined || req?.params?.id == '') {
            res.status(200).json({
                success: false,
                message: 'Id Missing',
                result: null
            })
        }
        else {
            const data = await tasks.findById({ _id: req.params.id })
            if (data) {
                res.status(200).json({
                    success: true,
                    message: 'Tasks Data Fetched Successfully',
                    result: data
                })
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'No Tasks Found',
                    result: null
                })
            }
        }
    } catch (error) {
        console.log(error, 'err');
    }
}



module.exports = { getOneTasks }