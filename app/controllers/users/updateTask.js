const task = require('../../model/task')


const updateTask = async (req, res) => {
    try {
        const id = req.params.id
        if (id == '' || id == undefined) {
            res.status(200).json({
                success: false,
                message: 'Id Missing',
                result: null
            })
        }
        else {
            const findTask = await task.findOne({ _id: id })
            if (findTask) {
                const updateTask = await task.findOneAndUpdate({ _id: id }, { $set: { title: req.body.title } })
                if (updateTask) {
                    res.status(200).json({
                        success: true,
                        message: 'Title Updated Successfully',
                        result: updateTask
                    })
                }
                else {
                    res.status(200).json({
                        success: false,
                        message: 'Something Went Wrong',
                        result: null
                    })
                }
            }
            else {
                res.status(200).json({
                    success: false,
                    message: 'Task Not Found',
                    result: null
                })
            }
        }
    } catch (error) {
        console.log(error, 'err');
    }
}

module.exports = { updateTask }