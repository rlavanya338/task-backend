const task = require('../../model/task')

const createTask = async (req, res) => {
    try {
        if (req.body.title == '' || req.body.title == undefined) {
            res.status(201).json({
                success: false,
                message: 'Please Enter Title',
                result: null
            })
        }
        else {
            const payload = {
                title: req.body.title
            }
            const data = await task.create(payload)
            if (data) {
                res.status(200).json({
                    success: true,
                    message: "Task Created Successfully",
                    result: data
                })
            }
            else {
                res.status(201).json({
                    success: false,
                    message: "Something Went Wrong",
                    result: null
                })
            }
        }
    } catch (error) {
        console.log(error, 'err');
    }
}

module.exports = { createTask }


